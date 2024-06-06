import React, { useState } from 'react';
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';
import HeaderAdminContent from '../../Components/HeaderAdminContent';
import axios from 'axios';

function AdminAddCourse() {
    const [courseName, setCourseName] = useState('');
    const [modality, setModality] = useState('');
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {};
        if (!courseName) newErrors.courseName = 'Nome é obrigatório';
        if (!description) newErrors.description = 'Descrição é obrigatória';
        if (!modality) newErrors.modality = 'Uma modalidade é obrigatória';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async () => {
        if (!validate()) return;

        const data = {
            name: courseName,
            modality,
            description
        };

        axios.post('http://localhost:5000/course/create', data)
            .then(response => {
                console.log('Resposta:', response.data);
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
                        title="Novo Curso"
                        buttonText="Finalizar cadastro"
                        buttonType="submit"
                        buttonOnSubmit={() => handleSubmit()}
                    />

                    <form className='form-content'>
                        <div className='input-item'>
                            <label>Nome:</label>
                            <input type='text' placeholder='José Souza de Oliveira' value={courseName}
                                onChange={(e) => setCourseName(e.target.value)} />
                            {errors.courseName && <span className='error'>{errors.courseName}</span>}
                        </div>
                        <div className='input-item'>
                            <label>Modalidade:</label>
                            <input type='text' placeholder='Presencial / Remoto / Hibrido' value={modality}
                                onChange={(e) => setModality(e.target.value)} />
                            {errors.modality && <span className='error'>{errors.modality}</span>}
                        </div>
                        <div className='input-item'>
                            <label>Descrição:</label>
                            <input type='text' placeholder='O curso aborda...' value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                            {errors.description && <span className='error'>{errors.description}</span>}
                        </div>
                    </form>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminAddCourse;
