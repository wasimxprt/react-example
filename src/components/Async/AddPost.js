import React, { Component } from 'react';
import axios from 'axios';

class CreatePost extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        title: '',
        content: ''
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <form id="frm-signup">
                        <h1>Create New</h1>

                        <div className='form-group'>
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} className="form-control" id="title" name="title" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="exampleInputEmail1">Description</label>
                            <textarea className="form-control" rows="5" id="comment" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })}></textarea>
                        </div>

                        <div className="form-group">
                            <button type="button" className="btn btn-primary btn-lg" onClick={this.postDataHandler} > Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePost;