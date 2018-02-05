import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post';
import PostDetails from './PostDetails'

class Async extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                //const posts = response.data.slice(0, 4);
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    }
                });
                this.setState({ posts: updatedPosts });
                this.setState({ selectedPostId: updatedPosts[0].id });
            });
    }


    handleChange = (event) => {
        this.setState({ selectedPostId: event.target.value });
    }

    render() {
        const options = this.state.posts.map(post => {
            return <option key={post.id} value={post.id}>{post.title}</option>
        });


        return (
            <div>
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-1">
                        <form className="">
                            <h1>Blog details</h1>
                            <div className="form-group">
                                <label className="control-label"></label>
                                <select
                                    name="posts"
                                    className="form-control"
                                    onChange={this.handleChange}
                                >

                                    <option value="" disabled>Chosse post</option>
                                    {options}
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-1">
                        <PostDetails id={this.state.selectedPostId} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Async;