import React, { useEffect, useState } from 'react';
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
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course/list')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContent
                        title="Cursos"
                        buttonText="Adicionar Curso"
                        buttonGoTo="/admin/add/course"
                        buttonType="navigate"
                    />

                    <div className='list-all-items'>
                        {courses.map(course => (
                            <ItemList
                                key={course.id}
                                name={course.name}
                                goTo={`/admin/edit/course/${course.id}`}
                                itemId={course.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminListAllCourse;
