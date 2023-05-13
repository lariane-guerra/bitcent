import Image from "next/image";
import { CardDepoimentoProps } from "./CardDepoimento.types";

export function CardDepoimento(props: CardDepoimentoProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-3 bg-zinc-800 p-7 rounded-xl w-[350px] ${
        props.destaque ? "h-[300px] xl:h-[350px]" : "h-[300px]"
      }`}
    >
      <Image
        src={props.imagem}
        alt="avatar"
        width={80}
        height={80}
        className={`mx-w-[80px] max-h-[80px] object-cover rounded-tl-xl rounded-b-xl`}
      />
      <div className="flex flex-col items-center">
        <span className={`text-xl text-white font-black`}>{props.nome}</span>
        <span className={` text-sm text-zinc-400 font-thin`}>
          {props.cargo}
        </span>
      </div>
      <p className="text-center text-zinc-400">{props.depoimento}</p>
    </div>
  );
}
