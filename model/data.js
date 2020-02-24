import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "<API-KEY>",
    databaseURL: "https://ucla-dining-plus.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.database();
dbh.goOnline();

export function getDatabase() {
    return dbh;
}