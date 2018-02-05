import React, { Component } from 'react';

import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';

class PropsExample extends Component {

    state = {
        username: "Wasim Sayyed"
    }

    changehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }


    render() {
        const textStyle = {
            padding: "0",
            height: " 30px",
            position: "relative",
            left: "0",
            outline: "none",
            border: "1px solid #cdcdcd",
            borderColor: "rgba(0,0,0,.15)",
            backgroundColor: "white",
            fontsize: "16px",
        }

        return (
            <div>
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-1">
                        <h1>Props Example</h1>
                        <UserInput change={this.changehandler} username={this.state.username} />
                        <UserOutput username={this.state.username} />
                    </div>
                </div>
            </div>
        );
    }
};

export default PropsExample;