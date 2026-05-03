import { db } from "@app/firebase";
import { Button } from "@components/Button";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import type { GrupoConvidado } from "..";

type BuscaFormProps = {
  setGrupos(grupos: GrupoConvidado[]): void;
};

type BuscaFormData = {
  search: string;
};

export function BuscaForm({ setGrupos }: BuscaFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<BuscaFormData>();

  async function onSubmit({ search }: BuscaFormData) {
    try {
      setGrupos([]);

      const normSearch = search
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const q = query(
        collection(db, "grupos"),
        where("searchTerms", "array-contains", normSearch),
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError("search", {
          message: "Não foi encontrado um convite para a busca!",
        });
        return;
      }

      setGrupos(
        querySnapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id }) as GrupoConvidado,
        ),
      );
    } catch (err) {
      console.log(err);
      toast.error("Houve algum problema ao buscar os convidados!");
    }
  }

  return (
    <>
      <p>
        Busque pela etiqueta do convite ou pelo primeiro nome de algum
        convidado:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="my-3">
        <input
          {...register("search")}
          disabled={isSubmitting}
          className="border-midnight mr-3 border-b p-1 font-bold outline-none"
        />
        <Button variant="blue" type="submit" disabled={isSubmitting}>
          {!isSubmitting ? (
            <FaSearch className="py-0.5" />
          ) : (
            <FaSpinner className="animate-spin" />
          )}
        </Button>
        {!!errors.search && (
          <p className="text-sm text-red-500">{errors.search.message}</p>
        )}
      </form>
    </>
  );
}
