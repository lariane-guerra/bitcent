import "dayjs/locale/pt-br";
import { TextInput } from "@mantine/core";
import { FormularioProps } from "./Formulario.types";
import Dinheiro from "@/logic/utils/dinheiro";
import { DatePickerInput } from "@mantine/dates";

export function Formulario(props: FormularioProps) {
  return (
    <div
      className={`flex flex-col border border-zinc-700
  rounded-xl overflow-hidden`}
    >
      <div className={`bg-black py-3 px-7 text-zinc-400`}>Formulário</div>
      <div className={`flex flex-col gap-4 p-4 sm:p-7`}>
        <TextInput label="Descrição" value={props.transacao.descricao} />
        <TextInput
          label="Valor"
          value={Dinheiro.formatar(props.transacao.valor)}
        />
        <DatePickerInput
          label="Data"
          value={props.transacao?.data}
          locale="pt-BR"
          valueFormat="DD/MM/YYYY"
        />
      </div>
    </div>
  );
}
