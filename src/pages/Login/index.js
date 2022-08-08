import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import { signInWithGoogle, auth} from '../../firebase';

import './styles.css';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
          }
          if (user) navigate("/chat");
    }, [user, loading]);

    return (
        <>
            <div className="login">
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/><br />

                <label htmlFor="password">Senha</label><br />
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/><br />

                <button onClick={e => signInWithEmailAndPassword(email, password)}>Login</button><br />
                <button onClick={signInWithGoogle}>Login com o Google</button>
                <div>
                    <Link to='/reset'>Esqueci a senha</Link>
                </div>
                <div>
                    Não tem uma conta? <Link to='/registrar'>Crie uma conta agora.</Link>
                </div>
            </div>
        </>
    );
}

export default Login;