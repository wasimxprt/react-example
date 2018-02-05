import React, { Component } from 'react';
import Validation from './Validation';
import Char from './Char';
import './Event.css';

class EventHandler extends Component {

    constructor() {
        super();
    }

    state = {
        userInput: '',
        activeClass: []
    }

    nameChangeHandler = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    deleteCharHandler = (index) => {

        const textArr = this.state.userInput.split('');
        textArr.splice(index, 1);
        const updatedText = textArr.join('');
        this.setState({ userInput: updatedText })

    }

    addStylehandler = (event) => {

        const updatedArr = this.state.activeClass;

        if (event.target.checked) {
            updatedArr.push(event.target.value);
        }
        else {
            updatedArr.splice(updatedArr.indexOf(event.target.value), 1)
        }
        this.setState({ activeClass: updatedArr });
    }

    render() {

        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                character={ch}
                key={index}
                delete={() => this.deleteCharHandler(index)}
            />
        })

        return (
            <div>
                <h2>Event Handler</h2>

                <input type="text" onChange={this.nameChangeHandler} value={this.state.userInput} />

                <input type="checkbox" onChange={this.addStylehandler} value="red" />Red
        <input type="checkbox" onChange={this.addStylehandler} value="bold" />Bold
        <input type="checkbox" onChange={this.addStylehandler} value="green" />Green

        <p className="App-intro">
                    {this.state.userInput}
                </p>
                <Validation
                    inputLength={this.state.userInput.length}
                    activeClass={this.state.activeClass}
                />
                {charList}
            </div>
        )
    }
}

export default EventHandler;