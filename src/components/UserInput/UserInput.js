import React from 'react';

const userInput = (props) => {
    return (
        <div className="row">
            <form>
                <div className="form-group col-md-4">

                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={props.change} value={props.username} />
                </div>
            </form>
        </div>
    )
}

export default userInput;