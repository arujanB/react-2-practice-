import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button';
import Card from './Card';
import styled from './ErrorModal.module.css';

const Backdrop = (props) => {
    return (<div className={styled.backdrop} onClick={props.onChange} />); //onChange
};

const ModelOverlap = (props) => {
    return (
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
    );
};

const ErrorModal = (props) => {
    return (
    <React.Fragment>
        {ReactDom.createPortal(<Backdrop onChange={props.onChange}/>, document.getElementById('backdrop-root'))}
        {ReactDom.createPortal(<ModelOverlap title = {props.title} message={props.message} onChange = {props.onChange}/>, document.getElementById('overlay-root'))}
    </React.Fragment>);
};

export default ErrorModal;