import React from 'react';
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';
import HeaderAdminContentItem from '../../Components/HeaderAdminContentItem';

function AdminGetCourse() {
    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContentItem
                        type="Curso"
                        title="Violão"
                    />
                    <div className='list-item-data'>
                        <p><strong>NOME:</strong> VIOLÃO</p>
                        <p><strong>MODALIDADE:</strong> PRESENCIAL</p>
                        <p><strong>CARGA HORARIA:</strong> 200h</p>
                        <p><strong>QUANTIDADE DE ALUNOS INSCRITOS:</strong> 30 alunos</p>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminGetCourse;
