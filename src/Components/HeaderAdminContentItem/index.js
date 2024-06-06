import React from 'react';
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import './styles.css';
import { Link } from 'react-router-dom';

function HeaderAdminContentItem(props) {
    return (
        <div className='header-admin-item-content'>
            <div className='info'>
                <p> {props.type}</p>
                <h2>{props.title}</h2>
            </div>
            <div className='action'>
                <Link
                    to={props.goTo}
                    state={{ user: props.user }}
                >
                    <TbEdit size={30} />
                </Link>

                <MdDelete size={30} />
            </div>
        </div>
    );
}

export default HeaderAdminContentItem;
