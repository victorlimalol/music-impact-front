import React, { useEffect, useState } from 'react';
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';
import HeaderAdminContent from '../../Components/HeaderAdminContent';
import ItemList from '../../Components/ItemList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminAddStudent() {
    const [courses, setCourses] = useState([]);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [endereco, setEndereco] = useState('');
    const [errors, setErrors] = useState({})
    //Buscar os cursos que existem

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://172.215.144.188:5000/course/list')
            .then(response => response.json())
            .then(data => {
                setCourses(data)
                console.log(data)
            })
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    const handleCoursesItemClick = (id) => {
        const updatedItems = courses.map((item) => {
            if (item.id === id) {
                return { ...item, selected: !item.selected };
            }
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

    const handleSubmit = async () => {
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

        axios.post('http://172.215.144.188:5000/students/register', data)
            .then(response => {
                console.log('Resposta:', response.data);
                navigate('/admin/students', { replace: true });
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }

    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='list-all-content'>
                    <HeaderAdminContent
                        title="Novo Aluno"
                        buttonText="Finalizar cadastro"
                        buttonType="submit"
                        buttonOnSubmit={() => handleSubmit()}
                    />

                    <form className='form-content'>
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
        </AdminTemplate>
    );
}

export default AdminAddStudent;
