import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';

export default class LoadMoreSentinel extends Component {
    handleChange = ({ isIntersecting }) => {
        const { getChunk, page } = this.props;
        if (isIntersecting) getChunk(page);
    };

    render() {
        const options = {
            onChange: this.handleChange,
            rootMargin: '50%',
            threshold: [0, 1.0],
        };

        return (
            <Observer {...options}>
                <div />
            </Observer>
        );
    }
}
