import React, { useEffect, useState } from 'react';
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';
import CoursesCardList from '../../Components/CoursesCardList';
import HeaderAdminContentItem from '../../Components/HeaderAdminContentItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AdminGetStudent(props) {
    const [user, setUser] = useState({ courses: [] });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // const userId = id ? id : null;
        // if (!userId) navigate('/admin/students');

        fetchStudentData();
    }, [id]);

    const fetchStudentData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/students/${id}`);
            setUser(response.data);
            console.log(response)
        } catch (error) {
            console.error("Error fetching student data:", error);
            window.location.replace('/admin/students')
        }
    }

    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContentItem
                        type="Aluno"
                        title={user.name}
                        goTo="/admin/edit/student"
                        user={user}
                    />
                    <div className='list-item-data'>
                        <p><strong>CPF:</strong> {user.cpf}</p>
                        <p><strong>DATA DE NASCIMENTO:</strong> {user.date_of_birth}</p>
                        <p><strong>ENDEREÇO:</strong> {user.address}</p>
                        <p><strong>TELEFONE:</strong> {user.phone_number}</p>
                        <p><strong>EMAIL:</strong> {user.email}</p>

                        <div className='courses-associate'>
                            <h3>CURSOS ASSOCIADOS</h3>
                            <div className='courses-list'>
                                {user.courses.length > 0 ? (
                                    user.courses.map((course) => (
                                        <CoursesCardList
                                            key={course.id}
                                            courseName={course.name}
                                        />
                                    ))
                                ) : (
                                    <p>No courses associated</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminGetStudent;
