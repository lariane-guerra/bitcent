import { Area } from "../comum/area";
import { Logo } from "../comum/logo";
import { Menu } from "./componentes/Menu";

export function Cabecalho() {
  return (
    <Area className={`bg-black fixed z-50`}>
      <div className={`flex h-20 justify-between items-center`}>
        <Logo />
        <Menu />
      </div>
    </Area>
  );
}
