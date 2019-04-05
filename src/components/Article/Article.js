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
                <h2 className="article__title">{name}</h2>
                <time className="article__date">{toLocaleString(createdAt)}</time>
                <p className="article__tag">{tagline}</p>
                <p className="article__description">{description}</p>
            </div>
        </div>
    );
};

export default Article;
