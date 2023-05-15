import Usuario from "@/logic/core/usuario/Usuario";
import {
  Auth,
  GoogleAuthProvider,
  User,
  getAuth,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../config/app";

export type MonitorarUsuario = (usuario: Usuario | null) => void;
export type CancelarMonitoramento = () => void;

export default class Autenticacao {
  private _auth: Auth;

  constructor() {
    this._auth = getAuth(app);
  }

  //1 parametros, sempre apontar para a autenticacao e o 2 vai ser um provider,
  async loginGoogle(): Promise<Usuario | null> {
    const resp = await signInWithPopup(this._auth, new GoogleAuthProvider());
    return this.converterParaUsuario(resp.user);

    //vou querer converter para o usuario da nossa aplicacao. o que vem é o user do firebase
  }

  //vai avisar para a aplicacao, precisa de sair para saber se o estado da autenticacao foi mudada
  //o evento seria: a mudanca do estado de autenticacao
  monitorar(notificar: MonitorarUsuario): CancelarMonitoramento {
    return onIdTokenChanged(this._auth, async (usuarioFirebase) => {
      //sempre que mudar o id, ele vai muda o usuario e converter para gente e notificar
      const usuario = this.converterParaUsuario(usuarioFirebase);
      notificar(usuario);
    });
  }

  private converterParaUsuario(usuarioFirebase: User | null): Usuario | null {
    if (!usuarioFirebase?.email) return null;
    const nomeAlternativo = usuarioFirebase.email!.split("@")[0];
    //pega a primeira parte do email para servir como nome alternativo
    //lariane@gmail.com vai ser lariane

    return {
      id: usuarioFirebase.uid,
      nome: usuarioFirebase.displayName ?? nomeAlternativo,
      email: usuarioFirebase.email,
      imagemUrl: usuarioFirebase.photoURL,
    };
  }

  logout(): Promise<void> {
    return signOut(this._auth);
  }
}
