import { BoasVindas } from "../BoasVindas";
import { MenuUsuario } from "../MenuUsuario";

export function Cabecalho() {
  return (
    <div
      className={`flex flex-row justify-between items-center p-7 border-b border-zinc-900`}
    >
      <BoasVindas />
      <MenuUsuario />
    </div>
  );
}
