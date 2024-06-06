import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function HeaderAdminContent(props) {
    return (
        <div className='main-content-header'>
            <h2>{props.title}</h2>
            {props.buttonType === "submit" && (
                <button className='main-content-button' onClick={props.buttonOnSubmit}>{props.buttonText}</button>
            )}
            {props.buttonType === "navigate" && (
                <Link className='main-content-button' to={props.buttonGoTo}>{props.buttonText}</Link>
            )}
        </div>
    );
}

export default HeaderAdminContent;
