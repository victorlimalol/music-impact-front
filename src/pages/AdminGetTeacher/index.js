import React from 'react';
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';
import CoursesCardList from '../../Components/CoursesCardList';
import HeaderAdminContentItem from '../../Components/HeaderAdminContentItem';

function AdminGetTeacher() {
    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContentItem
                        type="Professor"
                        title="Agda Moura dos Santos"
                    />
                    <div className='list-item-data'>
                        <p><strong>CPF:</strong> 465.933.968-85</p>
                        <p><strong>IDADE:</strong> 20</p>
                        <p><strong>ENDEREÇO:</strong> Rua Vilela, 475 - Tatuapé</p>
                        <p><strong>TELEFONE:</strong> 75 991468783</p>
                        <p><strong>EMAIL:</strong> victormamed2016@gmail.com</p>

                        <div className='courses-associate'>
                            <h3>CURSOS QUE MINISTRA</h3>
                            <div className='courses-list'>
                                <CoursesCardList
                                    courseName='Violão'
                                />
                                <CoursesCardList
                                    courseName='Guitarra'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminGetTeacher;
