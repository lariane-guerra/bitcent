import { Area } from "../comum/area";
import { CardVantagem } from "./CardVantagem";
import vantagemPorquinho from "../../../../public/vantagem-1.jpg";
import vantagemCalendario from "../../../../public/vantagem-2.jpg";
import vantagemCasa from "../../../../public/vantagem-3.jpg";

export function Vantagens() {
  return (
    <Area id="vantagens" className="bg-black py-16 sm:py-36">
      <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
        <CardVantagem
          imagem={vantagemPorquinho}
          titulo="Gerenciador financeiro completo e simples de usar"
          subTitulo="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
        />
        <CardVantagem
          imagem={vantagemCalendario}
          titulo="Organizado para você nunca mais esquecer uma conta"
          subTitulo="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
          inverter
        />
        <CardVantagem
          imagem={vantagemCasa}
          titulo="Ideal para planejamento financeiro"
          subTitulo="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
        />
      </div>
    </Area>
  );
}
