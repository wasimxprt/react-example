import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {

        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        // console.log(response);
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    render() {
        let post = <p>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.loadedPost.title}</h3>
                    </div>
                    <div className="panel-body">
                        {this.state.loadedPost.body}
                    </div>
                </div>


            );
        }
        return post;
    }
}

export default PostDetails;