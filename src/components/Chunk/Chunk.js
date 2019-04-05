import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';
import VisibilitySentinel from '../VisibilitySentinel';
import './chunk.scss';

class Chunk extends React.Component {
    static propTypes = {
        data: PropTypes.oneOfType([PropTypes.array]).isRequired,
        isVisible: PropTypes.bool.isRequired,
    };

    render() {
        const { data, isVisible } = this.props;
        const postsChunk = data.map(item => <Post key={item.id} data={item} />);

        return <ul className="feed__chunk chunk">{isVisible ? postsChunk : null}</ul>;
    }
}

export default VisibilitySentinel(Chunk);
