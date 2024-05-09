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

function AdminListAllCourse() {
    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContent
                        title="Cursos"
                        buttonText="Adicionar Curso"
                    />

                    <div className='list-all-items'>
                        <ItemList name="Curso de Violão" />
                        <ItemList name="Curso de Bateria" />
                        <ItemList name="Curso de Contra-baixo" />
                        <ItemList name="Curso de Guitarra" />
                        <ItemList name="Curso de Voz" />
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminListAllCourse;
