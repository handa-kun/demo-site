import React from "react";
import { useState, useEffect } from 'react';

const ProfileStatusHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    };

    let diactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode &&
                <div>
                    <b onDoubleClick={activateEditMode}>Status:</b><p>{props.status || '-------'}</p>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={diactivateEditMode} value={status} onChange={onStatusChange} />
                </div>
            }
        </div>
    )
};

export default ProfileStatusHook;