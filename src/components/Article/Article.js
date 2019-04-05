import React from 'react';
import toLocaleString from '../../utils/toLocaleString';
import './article.scss';

const Article = (props) => {
    const { data } = props;

    const {
        id,
        name,
        thumbnail: { image_url: url },
        created_at: createdAt,
        tagline,
        description
    } = data;

    return (
        <div id={id} className="article">
            <div className="article__thumbnail">
                <img className="article__image" alt={name} src={url} />
            </div>
            <div className="article__caption">
                <time>{toLocaleString(createdAt)}</time>
                <h3 className="article__title">{name}</h3>
                <span className="article__tag">{tagline}</span>
                <p className="article__description">{description}</p>
            </div>
        </div>
    );
};

export default Article;
