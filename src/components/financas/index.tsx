import Transacao from "@/logic/core/financas/Transacao";
import { Cabecalho } from "../template/Cabecalho";
import { Conteudo } from "../template/Conteudo";
import { Pagina } from "../template/Pagina";
import { Lista } from "./Lista";
import transacoesFalsas from "@/data/constants/transacoesFalsas";
import { useState } from "react";
import { Formulario } from "./Formulario";

export default function Financas() {
  const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas);
  return (
    <Pagina>
      <Cabecalho />
      <Conteudo>
        <Lista transacoes={transacoes} />
        <Formulario transacao={transacoes[0]} />
      </Conteudo>
    </Pagina>
  );
}
