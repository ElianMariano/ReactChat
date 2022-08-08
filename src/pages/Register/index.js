import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {registerWithEmailAndPassword, signInWithGoogle, auth} from '../../firebase';

import './styles.css';

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    const register = () => {
        if (!name) alert("Por favor, informe seu nome");
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/chat");
    }, [user, loading]);

    return (
        <div className="register">
            <label htmlFor="name">Nome</label><br />
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/><br/>

            <label htmlFor="email">Email</label><br />
            <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/><br/>

            <label htmlFor="password">Senha</label><br />
            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/><br/>

            <button onClick={register}>Criar conta</button><br />
            <button onClick={signInWithGoogle}>Entrar com o Google</button>

            <div>
                Já tem uma conta? <Link to="/">Entre</Link> agora.
            </div>
            
        </div>
    );
}

export default Register;