import dialogElemsCSS from "./DialogElements.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            {
                props.dialogsData.map((data) => {
                    return (
                        <div className={dialogElemsCSS.dialog}>
                            <NavLink to={"/Messages/" + data.messageID}
                                     className={dialogElemsCSS.a}>{data.name}
                            </NavLink>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default DialogItem;