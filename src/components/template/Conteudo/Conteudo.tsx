import { ConteudoProps } from "./Conteudo.types";

export function Conteudo(props: ConteudoProps) {
  return <div className={`flex flex-col p-7`}>{props.children}</div>;
}
