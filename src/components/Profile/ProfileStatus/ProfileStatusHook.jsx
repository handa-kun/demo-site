import React from "react";
import { useState } from 'react';

const ProfileStatusHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

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
                    <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
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