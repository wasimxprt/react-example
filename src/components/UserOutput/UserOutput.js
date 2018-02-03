import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="row">
            <form>
                <div className="form-group col-md-4">
                    <p>Username is {props.username}</p>
                </div>
            </form>

        </div>
    )
}

export default userOutput;