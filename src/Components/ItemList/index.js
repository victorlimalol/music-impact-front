import React from 'react';
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import './styles.css';

function ItemList(props) {
    return (
        <div className='list-item'>
            <p>{props.name}</p>
            <p>{props.cnpj}</p>
            <div>
                <TbEdit size={30} />
                <AiOutlineDelete size={30} />
            </div>
        </div>
    );
}

export default ItemList;
