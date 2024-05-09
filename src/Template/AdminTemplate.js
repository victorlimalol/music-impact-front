import React from 'react';
import Header from '../Components/Header';
import { PiStudentThin, PiBookBookmarkThin, PiChalkboardTeacherThin } from "react-icons/pi";
import './styles.css';
import HeaderAdmin from '../Components/HeaderAdmin';
import { Link } from 'react-router-dom';

function AdminTemplate({ children }) {
    return (
        <div className="admin-homepage-container">
            <HeaderAdmin />
            <div className="admin-content-container">
                <div className="sidebar-container">
                    <Link to="/admin/students" className="sidebar-button" style={{ 'margin-top': '30px' }}>
                        <p>Alunos</p>
                        <PiStudentThin size={30} />
                    </Link>
                    <Link to="/admin/teachers" className="sidebar-button">
                        <p>Professores</p>
                        <PiChalkboardTeacherThin size={30} />
                    </Link>
                    <Link to="/admin/courses" className="sidebar-button">
                        <p>Cursos</p>
                        <PiBookBookmarkThin size={30} />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}

export default AdminTemplate;
