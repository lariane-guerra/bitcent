import { Button } from "@mantine/core";
import { CardFormularioProps } from "./CardFormulario.types";

export function CardFormulario(props: CardFormularioProps) {
  return (
    <div
      className={`
            flex flex-col overflow-hidden
            border border-zinc-800 rounded-lg
        `}
    >
      <div className="flex flex-col p-7">
        <div className="text-3xl font-black">{props.titulo}</div>
        <div className="mt-4 text-zinc-400">{props.descricao}</div>
        <div className="mt-3">{props.children}</div>
      </div>
      <div
        className={`
                flex justify-end md:justify-between items-center
                bg-black px-7 py-5
            `}
      >
        <span className="hidden md:inline text-zinc-400">
          {props.msgRodape}
        </span>
        <Button
          color={props.podeSalvar ? "green" : "gray"}
          className={props.podeSalvar ? "bg-green-500" : "bg-gray-800"}
          onClick={() => (props.podeSalvar ? props.salvar() : null)}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
}
