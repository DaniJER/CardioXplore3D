import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../stores/use-auth-store';
import './profile.css';

const Profile = () => {
    const { userLogged, logout } = useAuthStore();
    const navigate = useNavigate();

    return (
        <div className="profile-container">
            <div className="profile-card">
                <button className="back-button" onClick={() => navigate('/')}>
                    ←
                </button>
                <img
                    src={userLogged.photoURL}
                    alt="Foto de perfil"
                    className="profile-picture"
                />
                <h3>{userLogged.displayName}</h3>
                <p>{userLogged.email}</p>
                <button onClick={logout}>Cerrar sesión</button>
            </div>
        </div>
    );
};

export default Profile;
