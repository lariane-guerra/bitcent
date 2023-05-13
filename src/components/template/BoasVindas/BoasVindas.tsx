import usuarioFalso from "@/data/constants/usuarioFalso";

export function BoasVindas() {
  const usuario = usuarioFalso;
  return (
    <div className={`text-3xl font-black`}>
      Olá{" "}
      <span className="hidden sm:inline">{usuario?.nome?.split(" ")[0]}</span>{" "}
      👋
    </div>
  );
}
