import React from 'react';
import Header from '../../Components/Header';
import HeaderAdmin from '../../Components/HeaderAdmin';
import { PiStudentThin, PiBookBookmarkThin, PiChalkboardTeacherThin } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';
import HeaderAdminContent from '../../Components/HeaderAdminContent';
import ItemList from '../../Components/ItemList';

function AdminListAllTeachers() {
    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContent
                        title="Professores"
                        buttonText="Adicionar Professor"
                    />

                    <div className='list-all-items'>
                        <ItemList name="Victor Nascimento Lima" cnpj="465.933.968-85" />
                        <ItemList name="Agda Moura dos Santos" cnpj="449.712.618-85" />
                        <ItemList name="Victor Nascimento Lima" cnpj="465.933.968-85" />
                        <ItemList name="Agda Moura dos Santos" cnpj="449.712.618-85" />
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminListAllTeachers;
