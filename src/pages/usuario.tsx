import { Cabecalho } from "@/components/template/Cabecalho";
import { Conteudo } from "@/components/template/Conteudo";
import { Pagina } from "@/components/template/Pagina";
import { TituloPagina } from "@/components/template/TituloPagina";
import Formularios from "@/components/usuario/Formularios";
import usuarioFalso from "@/data/constants/usuarioFalso";
import Id from "@/logic/core/comum/Id";
import { IconForms } from "@tabler/icons-react";

export default function CadastroUsuario() {
  const usuario = usuarioFalso;
  return (
    <Pagina>
      <Cabecalho />
      <Conteudo>
        <TituloPagina
          icone={<IconForms />}
          principal="Dados Cadastrais"
          secundario={`Informações de ${usuario.email}`}
        />
        <Formularios />
      </Conteudo>
    </Pagina>
  );
}
