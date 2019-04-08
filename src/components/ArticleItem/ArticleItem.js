import React, { Component } from 'react';
import api from "../../services/api";
import Article from "../Article";

class ArticleItem extends Component {

    state = {};

    componentDidMount() {
        this.getArticle();
    }

    getArticle = async () => {
        const { match: { params } } = this.props;
        const res = await api.get(`/posts/${params.id}`);
        const { post } = await res.data;
        this.setState({
            post: post
        });
    };

    render() {
        const { post } = this.state;

        if (post) {
            return (
                <article>
                    <Article data={post} />
                </article>
            );
        }
        return null;
    }
}


export default ArticleItem;
