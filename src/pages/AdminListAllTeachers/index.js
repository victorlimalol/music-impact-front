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

function AdminListAllTeachers() {
    const [teachers, setTeachers] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/teacher/list')
            .then(response => response.json())
            .then(data => setTeachers(data))
            .catch(error => console.error('Error fetching teachers:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/course/list')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    const handleFilter = async () => {
        let url = 'http://localhost:5000/teacher/list'

        const params = [];
        if (selectedOption && selectedOption !== "Todos os cursos") {
            params.push(`course=${selectedOption}`);
        }
        if (searchTerm) {
            params.push(`term=${searchTerm}`);
        }
        if (params.length > 0) {
            url += `?${params.join('&')}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => setTeachers(data))
            .catch(error => console.error('Error fetching students:', error));
    }

    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContent
                        title="Professores"
                        buttonText="Adicionar Professor"
                        buttonType="navigate"
                        buttonGoTo="/admin/add/teacher"
                    />

                    <div style={{ display: 'flex', width: '100%', gap: '10px', marginTop: '20px', border: '1px solid #b2bec3', padding: '10px', borderRadius: '4px' }}>
                        <input type='text' placeholder='Pesquise pelo nome do professor' style={{ width: '300px' }} value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <select className='custom-select' value={selectedOption} onChange={handleChange}>
                            <option key={undefined} value={undefined}>Todos os cursos</option>
                            {courses.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                        <button
                            onClick={handleFilter}
                            style={{ width: '150px', height: '40px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Filtrar</button>
                    </div>

                    <p style={{ width: '100%', color: 'gray', marginBottom: '20px', fontSize: '13px' }}>{teachers.length} registro(s) encontrado(s)...</p>

                    <div className='list-all-items'>
                        {teachers.map(teacher => (
                            <ItemList
                                key={teacher.id}
                                name={teacher.name}
                                cnpj={teacher.cpf}
                                goTo={`/admin/edit/teacher/${teacher.id}`}
                                itemId={teacher.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminListAllTeachers;
