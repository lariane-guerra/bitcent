export interface CardFormularioProps {
  titulo: string;
  descricao: string;
  msgRodape: string;
  podeSalvar?: boolean;
  salvar: () => void;
  children: any;
}
