import { Area } from "../comum/area";
import { ImagemResponsiva } from "../comum/imagem";
import { Slogan } from "./Slogan";
import princial from "../../../../public/principal.jpg";
export function Destaque() {
  return (
    <Area id="inicio" className="pt-20">
      <div className={`flex items-center h-[500px] justify-around`}>
        <Slogan />
        <ImagemResponsiva
          imagem={princial}
          className="rotate-3 hidden md:inline"
        />
      </div>
    </Area>
  );
}
