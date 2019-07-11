import React, { Component } from "react";
import Header from '../components/Header';
import MostDev from './MostDev';

class App extends Component {
    render(){
        return (
            <div>
                <Header />
                <MostDev />
            </div>
        )
    }
}

export default (App);