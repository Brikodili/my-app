import React, { Component } from "react";
import PropTypes from "prop-types";
import "../AddForm/form.scss";

export default class UpdateForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        editedNote: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            description: PropTypes.string,
        }).isRequired,
    };

    state = {
        id: null,
        title: "",
        description: "",
    };

    componentDidMount() {
        this.setState({ ...this.props.editedNote });
    }

    onChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    onSubmit = event => {
        event.preventDefault();
        const { id, ...rest } = this.state;
        const note = { ...rest };
        this.props.onSubmit(note, id);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                <input
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                    placeholder="Title"
                    className="form__title"
                />
                <textarea
                    value={this.state.description}
                    name="description"
                    placeholder="Take a note..."
                    onChange={this.onChange}
                    className="form__description"
                    rows={4}
                />
                <button className="form__btn">
                    <span>Update</span>
                </button>
            </form>
        );
    }
}
