import React from 'react';
import { TbEdit } from "react-icons/tb";
import './styles.css';
import { Link } from 'react-router-dom';

function ItemList(props) {
    return (
        <div className='list-item'>
            <p>{props.name}</p>
            <p>{props.cnpj}</p>
            <div>
                <Link reloadDocument to={props.goTo}><TbEdit size={30} /></Link>
            </div>
        </div>
    );
}

export default ItemList;
