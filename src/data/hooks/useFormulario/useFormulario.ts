import Transacao from "@/logic/core/financas/Transacao";
import Usuario from "@/logic/core/usuario/Usuario";
import { useState } from "react";

export function useFormulario<T>(dadosIniciais: T) {
  const [dados, setDados] = useState<T>(dadosIniciais);

  function alterarAtributo(atributo: string, fn?: Function) {
    return (valor: any) => {
      const v = valor?.target?.value ?? valor;
      setDados({ ...dados, [atributo]: fn?.(v) ?? v });
    };
  }
  return {
    dados,
    alterarAtributo,
    setDados,
  };
}
