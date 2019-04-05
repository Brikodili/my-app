import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';

export default BaseComponent => class VisibilitySentinel extends Component {
    state = {
        isVisible: true,
    };

    handleChange = ({ isIntersecting }) => {
        this.setState({ isVisible: isIntersecting });
    };

    render() {
        const { isVisible } = this.state;

        const options = {
            onChange: this.handleChange,
            rootMargin: '100%',
        };

        return (
            <Observer {...options}>
                <BaseComponent {...this.props} isVisible={isVisible} />
            </Observer>
        );
    }
};
