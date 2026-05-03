/* eslint-disable react-hooks/exhaustive-deps */
import { db } from "@app/firebase";
import { Button } from "@components/Button";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { GrupoConvidado } from "..";

type ConfirmacaoFormProps = {
  grupos: GrupoConvidado[];
};

type ConfirmacaoFormData = {
  convidadosConfirmados: string[];
  fimTelefone: string;
};

export function ConfirmacaoForm({ grupos }: ConfirmacaoFormProps) {
  const [selectedGrupoId, setSelectedGrupoId] = useState<string>("");
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ConfirmacaoFormData>();

  const selectedGrupo = useMemo(
    () => grupos.find((grupo) => grupo.id === selectedGrupoId),
    [selectedGrupoId],
  );

  async function onSubmit(data: ConfirmacaoFormData) {
    try {
      const q = query(
        collection(db, "telefones"),
        where("fimTelefone", "==", data.fimTelefone),
        where("idGrupo", "==", selectedGrupoId),
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError("fimTelefone", {
          message: "O telefone está incorreto!",
        });
        return;
      }

      const newGrupo = {
        tagConvite: selectedGrupo?.tagConvite,
        inicioTelefone: selectedGrupo?.inicioTelefone,
        escrito: true,
        searchTerms: selectedGrupo?.searchTerms,
        convidados: selectedGrupo?.convidados.map((convidado) => ({
          nome: convidado.nome,
          confirmado: data.convidadosConfirmados.includes(convidado.nome),
        })),
      };

      await setDoc(doc(db, "grupos", selectedGrupoId), newGrupo);
      toast.success("Presença confirmada com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Houve algum problema ao confirmar a presença!");
    }
  }

  useEffect(() => {
    if (selectedGrupoId) {
      const confirmados = selectedGrupo?.convidados
        .map((convidado) => {
          if (convidado.confirmado) return convidado.nome;
        })
        .filter((nome) => nome !== undefined);

      if (confirmados) setValue("convidadosConfirmados", confirmados);
    }
    return () => reset();
  }, [selectedGrupoId]);

  return (
    <>
      <p>Escolha um grupo:</p>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
        {grupos.map((grupo) => (
          <Button
            key={grupo.id}
            variant={grupo.id === selectedGrupoId ? "solid" : "outline"}
            onClick={() => setSelectedGrupoId(grupo.id)}
          >
            {grupo.tagConvite}
          </Button>
        ))}
      </div>
      {!!selectedGrupo && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="mx-auto mt-4 block w-60">
            <legend>Selecione os convidados que irão:</legend>
            <div className="my-3 flex flex-col items-start">
              {selectedGrupo?.convidados.map((convidado) => (
                <label
                  key={`${convidado.nome}-${selectedGrupo.id}`}
                  className="hover:text-blush flex cursor-pointer items-center justify-center gap-2 accent-green-600 transition-all select-none"
                >
                  <input
                    {...register("convidadosConfirmados")}
                    value={convidado.nome}
                    type="checkbox"
                    className="size-4 cursor-pointer"
                  />
                  {convidado.nome}
                </label>
              ))}
            </div>
          </fieldset>
          <p>Complete o número de telefone para confirmar sua identidade:</p>
          <div className="mb-3">
            <span>{selectedGrupo.inicioTelefone}-</span>
            <input
              {...register("fimTelefone", {
                required: "A confirmação do telefone é necessária!",
                minLength: {
                  value: 4,
                  message: "Digite exatamente 4 números!",
                },
                onChange: (e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setValue("fimTelefone", value);
                },
              })}
              type="text"
              maxLength={4}
              inputMode="numeric"
              className="border-midnigh w-16 border-b outline-none"
            />
            {!!errors.fimTelefone && (
              <p className="text-sm text-red-500">
                {errors.fimTelefone.message}
              </p>
            )}
          </div>
          <Button
            variant="blue"
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            Confirmar presença
          </Button>
        </form>
      )}
    </>
  );
}
