import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { sendPasswordResetEmail, getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase';

import './styles.css';

function Reset(props) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <div className="reset">
            <label htmlFor="email">Email</label><br />
            <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/><br />

            <button onClick={() => sendPasswordResetEmail(email)}>Mudar senha</button>
        </div>
    );
}

export default Reset;