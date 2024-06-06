import React, { useEffect, useState } from 'react';
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';
import HeaderAdminContent from '../../Components/HeaderAdminContent';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmationDeleteModal from '../../Components/ConfirmationDeleteModal';

function AdminEditCourse() {
    const [courseName, setCourseName] = useState('');
    const [modality, setModality] = useState('');
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})

    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchCourseData()
    }, []);

    const fetchCourseData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/course/${id}`);
            setCourseName(response.data.name || '');
            setModality(response.data.modality || '');
            setDescription(response.data.description || '');

        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/course/${id}`)
            navigate('/admin/courses', { replace: true });
        } catch (error) {
            console.error(error);
        }
    }

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

        try {
            await axios.put(`http://localhost:5000/course/${id}`, data);
            navigate('/admin/courses', { replace: true });
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
            {openModal && (
                <ConfirmationDeleteModal onDelete={handleDelete} onCancel={() => setOpenModal(false)} />
            )}
        </AdminTemplate>
    );
}

export default AdminEditCourse;
