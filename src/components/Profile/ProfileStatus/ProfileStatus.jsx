import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    diactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                    </div> :
                    <div>
                        <input autoFocus={true}
                            onBlur={this.diactivateEditMode}
                            value={this.state.status}
                            onChange={this.onStatusChange} />
                    </div>}
                <div>
                    <button>Save</button>
                </div>
            </div>
        )
    }
};

export default ProfileStatus;