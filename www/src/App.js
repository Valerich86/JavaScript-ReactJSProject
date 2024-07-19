import React from 'react';
import Header from './components/Header';
import Image from './components/Image.js';
import logo from './img/logo.png';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            helpText : "Help text",
            userData : "",
        }
        this.inputClick = this.inputClick.bind(this)
    }
    render(){
        return (<div className="some_name">
            <Header title="Header of this site" name=""/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.helpText} 
            onChange={event => this.setState({userData: event.target.value})}
            onClick={this.inputClick} onMouseOver={this.mouseOver}/>
            <p>{this.state.helpText === "Help text" ? "yes" : "no"}</p> 
             <Image image={logo}/>
        </div>)
    } 

    // функции-обработчики событий
    inputClick() {
        this.setState({helpText: "changed"})
        console.log("clicked!")
    }
    mouseOver() {console.log("mouse over!")}
}

export default App