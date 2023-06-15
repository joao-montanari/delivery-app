import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";

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
            mensagem = "Erro desconhecido!";
    }
    return mensagem;
}

export async function Cadastrar(email, password) {
    const result = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            return "sucesso";
        })
        .catch((error) => {
            console.log(error);
            return ErrorFireBase(error);
        });
    return result;
}

export async function Logar(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(userCredential)
            return "sucesso";
        })
        .catch((error) => {
            //console.log(error);
            //return ErrorFireBase(error);
            return "Erro";
        });
    return result;
}