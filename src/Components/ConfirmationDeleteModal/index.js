import React, { useEffect, useState } from 'react';

function ConfirmationDeleteModal(props) {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
            <div style={{ padding: '20px', width: '450px', height: '200px', backgroundColor: '#fff', border: '1px solid #000', borderRadius: '7px' }}>
                <h1 style={{ fontFamily: 'Poppins' }}>Confirmação</h1>
                <p style={{ fontFamily: 'Poppins' }}>Você realmente deseja excluir esse registro?</p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button style={{ width: '200px', height: '35px', border: '3px solid #000', color: '#fff', backgroundColor: '#000', borderRadius: '7px', fontFamily: 'Poppins' }} onClick={props.onDelete}>Sim, tenho certeza</button>
                    <button style={{ width: '200px', height: '35px', border: '1px solid #000', color: '#000', backgroundColor: '#fff', borderRadius: '7px', fontFamily: 'Poppins' }} onClick={props.onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationDeleteModal;
