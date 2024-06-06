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
import axios from 'axios';

function AdminListAllStudents() {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [searchTerm, setSearchTerm] = useState('')
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        fetch('http://172.215.144.188:5000/students')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    useEffect(() => {
        fetch('http://172.215.144.188:5000/course/list')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    const handleFilter = async () => {
        let url = 'http://172.215.144.188:5000/students'

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
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching students:', error));
    }

    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContent
                        title="Alunos"
                        buttonText="Adicionar Aluno"
                        buttonGoTo="/admin/add/student"
                        buttonType="navigate"
                    />

                    <div style={{ display: 'flex', width: '100%', gap: '10px', marginTop: '20px', border: '1px solid #b2bec3', padding: '10px', borderRadius: '4px' }}>
                        <input type='text' placeholder='Pesquise pelo nome do aluno' style={{ width: '300px' }} value={searchTerm}
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

                    <p style={{ width: '100%', color: 'gray', marginBottom: '20px', fontSize: '13px' }}>{students.length} registro(s) encontrado(s)...</p>
                    <div className='list-all-items'>
                        {students.map(student => (
                            <ItemList
                                key={student.id}
                                name={student.name}
                                cnpj={student.cpf}
                                goTo={`/admin/edit/student/${student.id}`}
                                itemId={student.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminListAllStudents;
