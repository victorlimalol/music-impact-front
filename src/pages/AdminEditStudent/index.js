import React, { useEffect, useState } from 'react';
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';
import HeaderAdminContent from '../../Components/HeaderAdminContent';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ConfirmationDeleteModal from '../../Components/ConfirmationDeleteModal';

function AdminEditStudent() {
    const [courses, setCourses] = useState([]);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [endereco, setEndereco] = useState('');
    const [errors, setErrors] = useState({})

    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchStudentData()
    }, []);

    const fetchCourses = async (userCourses) => {
        fetch('http://172.215.144.188:5000/course/list')
            .then(response => response.json())
            .then(data => {
                const updatedCourses = data.map(course => ({
                    ...course,
                    selected: userCourses.some(userCourse => userCourse.id === course.id)
                }));
                console.log(updatedCourses)
                setCourses(updatedCourses);
            })
            .catch(error => console.error('Error fetching courses:', error));
    }

    const fetchStudentData = async () => {
        try {
            const response = await axios.get(`http://172.215.144.188:5000/students/${id}`);
            setNome(response.data.name || '');
            setCpf(response.data.cpf || '');
            setTelefone(response.data.phone_number || '');
            setEmail(response.data.email || '');
            setDateOfBirth(response.data.date_of_birth ? response.data.date_of_birth.substring(0, 10) : '');
            setEndereco(response.data.address || '');

            await fetchCourses(response.data.courses)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCoursesItemClick = (id) => {
        const updatedItems = courses.map((item) => {
            if (item.id === id) return { ...item, selected: !item.selected };
            return item;
        });

        setCourses(updatedItems);
    }

    const validate = () => {
        const newErrors = {};
        if (!nome) newErrors.nome = 'Nome é obrigatório';
        if (!cpf) newErrors.cpf = 'CPF é obrigatório';
        if (!/^\d{11}$/.test(cpf)) newErrors.cpf = 'CPF deve conter 11 dígitos';
        if (!telefone) newErrors.telefone = 'Telefone é obrigatório';
        if (!/^\d+$/.test(telefone)) newErrors.telefone = 'Telefone deve conter apenas números';
        if (!email) newErrors.email = 'Email é obrigatório';
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email inválido';
        if (!dateOfBirth) newErrors.dateOfBirth = 'Data de Nascimento é obrigatória';
        if (!endereco) newErrors.endereco = 'Endereço é obrigatório';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://172.215.144.188:5000/students/${id}`)
            navigate('/admin/students', { replace: true });
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) return;

        const coursesList = courses;
        const coursesIdSelected = coursesList
            .filter((item) => item.selected === true)
            .map((item) => item.id);

        const data = {
            name: nome,
            cpf,
            date_of_birth: dateOfBirth,
            address: endereco,
            phone_number: telefone,
            email: email,
            courses: coursesIdSelected
        };

        try {
            await axios.put(`http://172.215.144.188:5000/students/${id}`, data);
            navigate('/admin/students', { replace: true });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <div className='heaader-content'>
                        <HeaderAdminContent
                            title="Editar Aluno"
                            buttonText="Finalizar alteração"
                            buttonType="submit"
                            buttonOnSubmit={(event) => handleSubmit(event)}
                        />
                        <button onClick={() => setOpenModal(true)} style={{ width: '200px', height: '35px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '7px' }}>Deletar</button>
                    </div>

                    <form className='form-content' onSubmit={(event) => handleSubmit(event)}>
                        <div className='input-item'>
                            <label>Nome:</label>
                            <input type='text' placeholder='José Souza de Oliveira' value={nome}
                                onChange={(e) => setNome(e.target.value)} />
                            {errors.nome && <span className='error'>{errors.nome}</span>}
                        </div>
                        <div className='input-item'>
                            <label>CPF (Somente números):</label>
                            <input type='text' placeholder='xxxxxxxxxxx'
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)} />
                            {errors.cpf && <span className='error'>{errors.cpf}</span>}
                        </div>
                        <div className='input-item'>
                            <label>Data de Nascimento:</label>
                            <input type='date'
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)} />
                            {errors.dateOfBirth && <span className='error'>{errors.dateOfBirth}</span>}
                        </div>
                        <div className='input-item'>
                            <label>Email:</label>
                            <input type='text' placeholder='josesouza@email.com' value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>
                        <div className='input-item'>
                            <label>Endereço:</label>
                            <input type='text' placeholder='Rua das antas, 13' value={endereco}
                                onChange={(e) => setEndereco(e.target.value)} />
                            {errors.endereco && <span className='error'>{errors.endereco}</span>}
                        </div>
                        <div className='input-item'>
                            <label>Telefone:</label>
                            <input type='number' placeholder='(99) 9999-9999' value={telefone}
                                onChange={(e) => setTelefone(e.target.value)} />
                            {errors.telefone && <span className='error'>{errors.telefone}</span>}
                        </div>
                    </form>

                    <div className='big-label-area'>
                        <p>Selecione cursos que o
                            aluno participa</p>
                    </div>

                    <div className='courses-area'>
                        {courses && courses.map(item => (
                            <div key={item.id} className='course-item' onClick={() => handleCoursesItemClick(item.id)} style={{ 'backgroundColor': item.selected ? '#2d3436' : '#fff' }}>
                                <p style={{ 'color': item.selected ? '#fff' : '#000' }}>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {openModal && (
                <ConfirmationDeleteModal onDelete={handleDelete} onCancel={() => setOpenModal(false)} />
            )}
        </AdminTemplate>
    );
}

export default AdminEditStudent;
