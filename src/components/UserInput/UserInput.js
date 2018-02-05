import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-8">
                    <form className="">
                        <div className="form-group">
                            <label className="control-label"></label>

                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={props.change} value={props.username} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default userInput;