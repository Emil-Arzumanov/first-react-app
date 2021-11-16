import React,{useState} from "react";

const ProfileStatusHook = (props) => {
    let [editMode,setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    };
    let [status,editStatus] = useState(props.status);
    const changeStatus = (e) => {
        editStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}>Status:{props.status || "--------"}</span>
            </div>
            }
            {editMode &&
            <div>
                Status:<input autoFocus={true}
                              value={status}
                              onBlur={deactivateEditMode}
                              onChange={changeStatus}
            />
            </div>
            }
        </div>
    );
};

export default ProfileStatusHook;