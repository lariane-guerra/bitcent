import { initializeApp, FirebaseApp } from "firebase/app";

//TRÊS VARIAVEIS DE AMBIENTE, NAO TRAZER AS CHAVES POIS É UMA FALHA DE SEGURANÇA, ESSE CARA VAI IR PARA O REPOSITORIO.

const app: FirebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

export { app };
