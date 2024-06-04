import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExpiredTokenModal({onClose}) {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
        onClose()
    };

    return (
        <div className="modal">
        <div className="modal-content">
            <p>Время токена истекло</p>
            <div className="modal-buttons">
            <button onClick={handleLogin}>Войти</button>
            <button onClick={onClose}>Остаться</button>
            </div>
        </div>
        </div>
    );
};

export default ExpiredTokenModal;