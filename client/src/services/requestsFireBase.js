import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";

function ErrorFireBase(error) {
    let mensagem = '';
    switch(error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
            mensagem = "Esse email já tem um cadastro de usuário.";
            break;
        case AuthErrorCodes.INVALID_EMAIL:
            mensagem = "O email informado é invalido";
            break;
        case AuthErrorCodes.WEAK_PASSWORD:
            mensagem =  "A senha precisa de no mínino 6 caracteres";
            break;
        default:
            mensagem = "Erro desconhecido";
    }
    return mensagem;
}

export default async function Cadastrar(email, password) {
    const result = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(userCredential)
            return "sucesso";
        })
        .catch((error) => {
            console.log(error);
            return ErrorFireBase(error);
        });
    return result;
}