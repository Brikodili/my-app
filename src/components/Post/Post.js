import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import setImgCrop from '../../utils/setImgCrop';
import toLocaleString from '../../utils/toLocaleString';

const Post = (props) => {
    const { data } = props;

    const {
        id,
        name,
        thumbnail: { image_url: url },
        created_at: createdAt,
        tagline,
    } = data;

    const href = `/post/${id}`;
    return (
        <li id={id} className="chunk__item">
            <Link to={href} className="post">
                <div className="post__thumbnail">
                    <img className="post__image" alt={name} src={setImgCrop(url)} />
                </div>
                <div className="post__caption">
                    <time>{toLocaleString(createdAt)}</time>
                    <h3 className="post__title">{name}</h3>
                    <div className="post__tag">{tagline}</div>
                </div>
            </Link>
        </li>
    );
};

Post.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object]),
};

Post.defaultProps = {
    data: {},
};

export default Post;
