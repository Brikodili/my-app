import React, { Component } from "react";
import AddForm from "../AddForm/AddForm";
import Note from "../Note";
import UpdateForm from "../UpdateForm";

export default class NotesContainer extends Component {
    state = {
        items: [],
        isEdit: false,
        editedNote: null,
    };

    onAdd = note => {
        this.setState(prevState => ({
            items: [...prevState.items, { ...note }],
        }));
    };

    onDelete = id => {
        let array = [...this.state.items];
        array.splice(id, 1);
        this.setState({ items: array });
    };

    onUpdate = (note, id) => {
        let array = [...this.state.items];
        array[id] = { ...note };
        this.setState({ items: array, isEdit: false, editedNote: null });
    };

    onEdit = id => {
        this.setState({ isEdit: true, editedNote: { id: id, ...this.state.items[id] } });
    };

    render() {
        const { items } = this.state;

        const notes = items.map((item, index) => (
            <Note key={index} data={item} onDelete={this.onDelete} onEdit={this.onEdit} id={index} />
        ));

        return (
            <div>
                {this.state.isEdit ? (
                    <UpdateForm onSubmit={this.onUpdate} editedNote={this.state.editedNote} />
                ) : (
                    <AddForm onSubmit={this.onAdd} />
                )}
                <ul className="notes-list">{notes}</ul>
            </div>
        );
    }
}
