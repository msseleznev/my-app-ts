import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/rating";
import AppTitle from "./components/AppTitle/appTitle";

function App() {
    console.log("App //////")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}


export default App;
