import Usuario from "@/logic/core/usuario/Usuario";
import { TextInput } from "@mantine/core";

import { useContext, useEffect } from "react";

import { CardFormulario } from "./CardFormulario";
import { useFormulario } from "@/data/hooks/useFormulario";
import usuarioFalso from "@/data/constants/usuarioFalso";
import Texto from "@/logic/utils/texto";
import Cpf from "@/logic/utils/cpf";
import Telefone from "@/logic/utils/telefone";

export default function Formularios() {
  // const { usuario, atualizarUsuario } = useContext(AutenticacaoContext);
  const usuario = usuarioFalso;
  const { dados, alterarAtributo } = useFormulario<Usuario>(usuario);

  // useEffect(() => {
  //   if (!usuario) return;
  //   alterarDados(usuario);
  // }, [usuario, alterarDados]);

  // async function salvar() {
  //   if (!usuario) return;
  //   await atualizarUsuario(dados);
  // }

  return (
    <div className="flex flex-col gap-5 mt-7">
      <CardFormulario
        titulo="Seu Nome"
        descricao="Como você gostaria de ser chamado?"
        msgRodape="O nome deve possuir entre 3 e 80 caracteres, mais que isso já é um texto!"
        podeSalvar={Texto.entre(dados.nome, 3, 80)} //funcao validando os limites
        salvar={() => {}}
      >
        <TextInput value={dados.nome} onChange={alterarAtributo("nome")} />
      </CardFormulario>
      <CardFormulario
        titulo="CPF"
        descricao="Seu CPF é usado internamente pelo sistema."
        msgRodape="Pode relaxar, daqui ele não sai!"
        podeSalvar={true}
        salvar={() => {}}
      >
        <TextInput
          value={Cpf.formatar(dados.cpf ?? "")}
          onChange={alterarAtributo("cpf", Cpf.desformatar)}
        />
      </CardFormulario>
      <CardFormulario
        titulo="Telefone"
        descricao="Usado para notificações importantes sobre a sua conta."
        msgRodape="Se receber ligação a cobrar, não foi a gente!"
        podeSalvar={true}
        salvar={() => {}}
      >
        <TextInput
          value={Telefone.formatar(dados.telefone ?? "")}
          onChange={alterarAtributo("telefone", Telefone.desformatar)}
        />
      </CardFormulario>
    </div>
  );
}
