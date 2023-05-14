export default interface Usuario {
  id: string;
  nome: string;
  email: string;
  cpf?: string;
  telefone?: string;
  imagemUrl: string | null;
}
