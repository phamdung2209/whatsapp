import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyDmaquEBqKRDEOCbyMTnlgW3h0bPk93SeE',
    authDomain: 'snappy-storm-408917.firebaseapp.com',
    projectId: 'snappy-storm-408917',
    storageBucket: 'snappy-storm-408917.appspot.com',
    messagingSenderId: '125018363989',
    appId: '1:125018363989:web:53a84ae7a9a59fdf099cdc',
    measurementId: 'G-XK4030RP1P',
}

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
