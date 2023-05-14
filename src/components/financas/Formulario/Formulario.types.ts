import Transacao from "@/logic/core/financas/Transacao";

export interface FormularioProps {
  transacao: Transacao;
  cancelar?: () => void;
  salvar?: (transacao: Transacao) => void;
  excluir?(transacao: Transacao): void;
}
