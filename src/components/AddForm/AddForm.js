import React, { Component } from "react";
import PropTypes from "prop-types";
import "./form.scss";

export default class AddForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        title: "",
        description: "",
    };

    onChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    onSubmit = event => {
        event.preventDefault();
        const note = { ...this.state };
        this.props.onSubmit(note);
        this.setState({ title: "", description: "" });
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
                    <span>Add</span>
                </button>
            </form>
        );
    }
}
