import * as firebase from "firebase";


// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyCIKKC1qXDqzEtUQawm3tevHdlTrzchlws",
    authDomain: "atsstudios-cfffb.firebaseapp.com",
    databaseURL: "https://atsstudios-cfffb.firebaseio.com",
    projectId: "atsstudios-cfffb",
    storageBucket: "atsstudios-cfffb.appspot.com",
    messagingSenderId: "228782340815"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
const dbmails = firestore.collection("mails");
const dbdata = firestore.collection("data");

class FirebaseHelper {


    getData() {
        console.log("Reached firestore");
        return new Promise((resolve, reject) => {

            dbdata.doc('datas').get()
                .then(doc => {
                    if (!doc.exists) {
                        console.log('No such document!');
                    } else {
                        console.log('Document data:', doc.data());
                        resolve(doc.data())
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                    reject(false);
                });
        });

    }


    getMail() {
        console.log("Reached firestore");
        return new Promise((resolve, reject) => {

            let dataArray = [];


            dbmails.get().then(snapshot => {
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    dataArray.push(doc.data())
                });
                resolve(dataArray)

            })
                .catch(err => {
                    console.log('Error getting documents', err);
                    reject(false);
                });

        });

    }


    updateData(data) {
        console.log("Reached firestore")
        console.log(data);

        dbdata.doc('datas').update(data)
            .then(function () {
                console.log("data added");
            })
            .catch(function (err) {
                console.log(err);
            })
    }


    addMail(data) {
        var d = new Date();
        console.log("Reached firestore")
        console.log(data);
        var formdetails =
            {
                name: data.data.name,
                email: data.data.email,
                message: data.data.message,
                date: d

            };
        dbmails.doc().set(formdetails)
            .then(function () {
                console.log("form added");
            })
            .catch(function (err) {
                console.log(err);
            })
    }


}

export default new

FirebaseHelper();