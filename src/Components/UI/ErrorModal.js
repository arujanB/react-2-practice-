import React from 'react';
import Button from './Button';
import Card from './Card';
import styled from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return <div className={styled.backdrop} onClick={props.onChange}>
         <Card className = {styled.modal}>
        <header className = {styled.header}>
            <h2>{props.title}</h2>
        </header>
        <div className = {styled.content}>
            <p>{props.message}</p>
        </div>
        <footer className = {styled.actions}>
            <Button onClick={props.onChange}>Okay</Button>
        </footer>
    </Card>
    </div>;
};

export default ErrorModal;