import React, {useState, useRef} from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    //ref
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    //state
    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    
    const [error, setError] = useState();
    
    const addUserHandler = (event) => {
        event.preventDefault();

        //ref
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            return setError({
                title: "Invalid input!",
                message: "Please change it!"
            });
        }
        
        if(+enteredUserAge < 1){
            return setError({
                title: "Invalide input!",
                message: "Please change it (n < 1)!"
            });
        }

        //state
        // if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
        //     return setError({
        //         title: "Invalid input!",
        //         message: "Please change it!"
        //     });
        // }
        
        // if(+enteredAge < 1){
        //     return setError({
        //         title: "Invalide input!",
        //         message: "Please change it (n < 1)!"
        //     });
        // }

        //Ref
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

        //state
        // props.onAddUser(enteredUserName, enteredAge);
        // setEnteredUserName('');
        // setEnteredAge('');
    };

    //state
    // const userNameChangeHandler = (event) => {
    //     setEnteredUserName(event.target.value);
    // };

    // const userAgeChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message = {error.message} onChange={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input 
                    id="username" 
                    type="text" 
                    placeholder="Name" 
                    //state
                    // onChange={userNameChangeHandler}
                    // value={enteredUserName}

                    //Ref
                    ref={nameInputRef}
                    ></input>
                    <label htmlFor="age">Age(Years)</label>
                    <input 
                    htmlFor="age" 
                    type="number" 
                    placeholder="Age" 
                    //state
                    // onChange={userAgeChangeHandler}
                    // value={enteredAge}

                    //Ref
                    ref={ageInputRef}
                    ></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;