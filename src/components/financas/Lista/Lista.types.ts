import Transacao from "@/logic/core/financas/Transacao";

export interface ListaPros {
  transacoes: Transacao[];
  selecionarTransacao?: (transacao: Transacao) => void;
}
