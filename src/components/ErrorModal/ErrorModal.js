import React from "react";
import './ErrorModal.css'

const ErrorModal = (props)=>{

    return (
        <div className={`overlay ${props.visibility}`} onClick={props.onOkay}>
            <div className="card">
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <button onClick={props.onOkay}>Okay</button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorModal;