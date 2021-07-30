import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    
    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            return setError({
                title: "Invalid input!",
                message: "Please change it!"
            });
        }
        
        if(+enteredAge < 1){
            return setError({
                title: "Invalide input!",
                message: "Please change it (n < 1)!"
            });
        }

        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <Card className={classes.input}>
            {error && <ErrorModal title={error.title} message = {error.message} onChange={errorHandler}></ErrorModal>}
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input 
            id="username" 
            type="text" 
            placeholder="Name" 
            onChange={userNameChangeHandler}
            value={enteredUserName}
            ></input>
            <label htmlFor="age">Age(Years)</label>
            <input 
            htmlFor="age" 
            type="number" 
            placeholder="Age" 
            onChange={userAgeChangeHandler}
            value={enteredAge}
            ></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
};

export default AddUser;