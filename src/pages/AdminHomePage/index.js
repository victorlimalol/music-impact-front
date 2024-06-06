import React from 'react';
import './styles.css';
import AdminTemplate from '../../Template/AdminTemplate';

function AdminHomePage() {
    return (
        <AdminTemplate>
            <div className="main-content">
                <div className='home-content'>
                    <h1>Seja bem-vindo ao Portal do Professor</h1>
                    <p>Bem-vindo ao portal da Escola de Música Harmonia, onde você terá acesso a todas as ferramentas necessárias para facilitar sua prática como professor. Desde a criação de planos de aula até o acompanhamento dos alunos e a gestão de eventos, nosso portal foi projetado para simplificar seu trabalho educacional. Explore e descubra como podemos ajudá-lo a alcançar seus objetivos de ensino. Seja bem-vindo à nossa comunidade!</p>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default AdminHomePage;
