import { PaginaProps } from "./Pagina.types";

export function Pagina(props: PaginaProps) {
  return (
    <div
      className={`flex flex-col min-h-screen
      bg-gradient-to-r from-zinc-900 via-black to-zinc-000 
      ${props.className ?? ""}
      `}
    >
      {props.children}
    </div>
  );
}
