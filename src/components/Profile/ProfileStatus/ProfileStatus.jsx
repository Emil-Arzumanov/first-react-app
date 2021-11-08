import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    editModeOn = () => {
        this.setState({
            editMode: true
        })
    }
    editModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    updateStatusLS = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.editModeOn}>Status:{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    Status:<input autoFocus={true}
                                  value={this.state.status}
                                  onBlur={this.editModeOff}
                                  onChange={this.updateStatusLS}
                />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;