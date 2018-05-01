import React, { Component } from 'react';
import Header from '../src/components/Header';
import DetailListContainer from '../src/components/DetailListContainer';
import Search from '../src/components/Search';
import List from '../src/components/List'
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props){super(props);
    var config = {
    apiKey: "AIzaSyAdNphtu-NlLb7czBDR5XwtUuB_4OguPtA",
    authDomain: "hotline-e8448.firebaseapp.com",
    databaseURL: "https://hotline-e8448.firebaseio.com",
    projectId: "hotline-e8448",
    storageBucket: "hotline-e8448.appspot.com",
    messagingSenderId: "530332589266"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
        <Header title="HOTLINE สายด่วน ทั่วไทย"/>
        <br/>
        <DetailListContainer db={firebase}/>
      </div>
    );
  }
}

export default App;