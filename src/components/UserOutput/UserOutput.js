import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-8">
                    <form className="">
                        <div className="form-group">
                            <p>Username is {props.username}</p>
                        </div>
                    </form>
                </div></div>
        </div>
    )
}

export default userOutput;