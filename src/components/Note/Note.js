import React from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import "./note.scss";

const Note = props => {
    const { data, id, onDelete, onEdit } = props;

    return (
        <li className="note">
            <h3 className="note__title">{data.title}</h3>
            <p className="note__description">{data.description}</p>
            <DeleteIcon onClick={onDelete.bind(this, id)} />
            <EditIcon onClick={onEdit.bind(this, id)} />
        </li>
    );
};

export default Note;
