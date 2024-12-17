import { useState } from "react";
import { CloseButton } from "react-bootstrap";

const Collapsible = ({children, contentDescription}) => {
    const [isHidden, setIsHidden] = useState(false)
    const toggleIsHidden = () => {
        setIsHidden(!isHidden)
    }
    return (
        <div>
            <CloseButton id="close-button" aria-label="Hide" onClick={toggleIsHidden}>{`${
                isHidden ? "Show" : "Hide"
            } ${contentDescription}`}</CloseButton>
            {isHidden ? null : children}
        </div>
    ) 
}

export default Collapsible