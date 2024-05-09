import React from 'react';
import './styles.css';

function HeaderAdminContent(props) {
    return (
        <div className='main-content-header'>
            <h2>{props.title}</h2>
            <button>{props.buttonText}</button>
        </div>
    );
}

export default HeaderAdminContent;
