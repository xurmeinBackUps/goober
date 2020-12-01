import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/database';
import { rtdbPlugin } from 'vuefire';


Vue.use(rtdbPlugin);

const firebaseConfig = {
  apiKey: 'AIzaSyCjLa1mDCm29g2XMHIOYMM2spgS07d9Hsc',
  authDomain: 'goober-rt-db.firebaseapp.com',
  databaseURL: 'https://goober-rt-db.firebaseio.com',
  projectId: 'goober-rt-db',
  storageBucket: 'goober-rt-db.appspot.com',
  messagingSenderId: '1048970415455',
  appId: '1:1048970415455:web:8f881c63458229897e7aea',
  measurementId: 'G-XH8DFS1JYR',
};

const db = firebase.initializeApp({
  databaseURL: firebaseConfig.databaseURL
}).database();

export default db;
