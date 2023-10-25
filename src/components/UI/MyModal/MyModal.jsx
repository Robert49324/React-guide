import react, { Children } from "react"
import classes from "./MyModal.module.css"

const myModal = () => {
    return(
        <div className={[classes.myModal, classes.active].join(" ")}>
            <div className="classes.myModalContent">
                {Children}
            </div>
        </div>
    )
}

export default myModal