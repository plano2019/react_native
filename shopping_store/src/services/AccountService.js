import { firebaseApp } from './FirebaseConfig';

export const AccountService =  {

    authenticate: function(username, password){
        return firebaseApp
            .auth()
            .signInWithEmailAndPassword(username, password)
    },

    createAccount: function(username, password){
        return firebaseApp
            .auth()
            .createUserWithEmailAndPassword(username, password)
    },

    logOut: function(){
        firebaseApp
            .auth()
            .signOut()
    }
}
