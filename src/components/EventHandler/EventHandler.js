import React, { Component } from 'react';
import Validation from './Validation';
import Char from './Char';
import './Event.css';

class EventHandler extends Component {

    constructor(props) {
        super(props);
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
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-1">
                        <form className="">
                            <h2>Event Handler</h2>

                            <div className="form-group">
                                <label className="control-label"></label>
                                <input type="text" className="form-control" onChange={this.nameChangeHandler} value={this.state.userInput} />
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="checkbox" onChange={this.addStylehandler} value="red" />
                                <label className="form-check-label" for="inlineCheckbox1">&nbsp;&nbsp;&nbsp;Red</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" onChange={this.addStylehandler} value="bold" />
                                <label className="form-check-label" for="inlineCheckbox2">&nbsp;&nbsp;&nbsp;Bold</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" onChange={this.addStylehandler} value="green" />
                                <label className="form-check-label" for="inlineCheckbox3"> &nbsp;&nbsp;&nbsp;Green</label>
                            </div>

                        </form>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xs-8 col-xs-offset-1">
                        <p className="App-intro">
                            {this.state.userInput}
                        </p>
                        <Validation
                            inputLength={this.state.userInput.length}
                            activeClass={this.state.activeClass}
                        />
                        {charList}
                    </div>
                </div>
            </div>

        )
    }
}

export default EventHandler;