import React, {useState} from "react";
import './UserInput.css';
import ErrorModal from "../../ErrorModal/ErrorModal";

const UserInput = (props)=>{
    const [enteredName,setName] = useState('');
    const [enteredAge,setAge] = useState('');
    const [errorVisibility,setErrorVisibility] = useState('');
    const [message,setMessage] = useState('');
    let title = 'Invalid Input';

    const nameChangeHandler = (e)=>{
        setName(e.target.value);
    }

    const ageChangeHandler = (e)=>{
        setAge(e.target.value);
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        if (enteredName.trim().length===0 || enteredAge.trim().length===0){
            if (enteredAge<1){
                setMessage('Age must be >0')
            }
            else if (enteredName.trim().length===0){
                setMessage('Enter a valid name');
            }
            setErrorVisibility('visible')
            return
        }
        props.onAddUser(enteredName,enteredAge);
        setAge('')
        setName('')
    }

    const errorHandler = ()=>{
        setErrorVisibility('')
    }

    return (
        <div>
            <ErrorModal title={title} message={message} visibility={errorVisibility} onOkay={errorHandler}/>
            <form onSubmit={formSubmitHandler} className="user-input">
                <label>User Name</label>
                <input type="text" value={enteredName} onChange={nameChangeHandler}/>
                <label>Age (Years)</label>
                <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <button type="Submit">Add User</button>
            </form>
        </div>
    )
}

export default UserInput;