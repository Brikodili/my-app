import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import Chunk from '../Chunk';
import LoadMoreSentinel from '../LoadMoreSentinel';

export default class Feed extends Component {
    state = {
        listOfPosts: [],
        loadedPage: 0,
    };

    componentDidMount() {
        const { loadedPage } = this.state;
        this.getChunk(loadedPage + 1);
    }

    getChunk = async (page) => {
        const { loadedPage } = this.state;

        if (page > loadedPage) {

            const res = await api.get('/posts/all', { params: { page, per_page: 20 } });
            const { posts } = await res.data;

            this.setState(prevState => ({
                listOfPosts: [
                    ...prevState.listOfPosts,
                    { page: prevState.loadedPage + 1, posts: [...posts] },
                ],
                loadedPage: prevState.loadedPage + 1,
            }));
        }
    };

    render() {
        const { listOfPosts } = this.state;

        const chunks = listOfPosts.map(chunk => (
            <Fragment key={chunk.page + 1}>
                <Chunk data={chunk.posts} />
                <LoadMoreSentinel getChunk={this.getChunk} page={chunk.page + 1} />
            </Fragment>
        ));

        return chunks;
    }
}
