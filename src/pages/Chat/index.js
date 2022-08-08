import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { signOut} from 'firebase/auth';
import {collection, addDoc, getDocs, setDoc, doc, getDoc} from 'firebase/firestore';
import {auth, db} from '../../firebase';

import './styles.css';

function Chat(props) {
    const navigate = useNavigate();
    const [chat, setChat] = useState('');
    const [messages, setMessages] = useState([]);
    const user = auth.currentUser == null ? '' : auth.currentUser.uid; //displayName

    useEffect(() => {
        getDocs(collection(db, 'chat')).then(res => {
            let data = res.docs.map(doc => { 
            //   console.log(doc.data());
                return doc.data();
            })
            setMessages(data);
        })
        .catch(e => {
            navigate('/');
        })
    }, [messages]);

    function Logout(){
        signOut(auth).then(res => {
            navigate('/');
        })
    }

    function submit(){
        if (user === null) {
            navigate('/');
            return;
        }
        
        if (chat !== ''){
            setChat('');
            setDoc(doc(collection(db, 'chat')), {user, chat}).then(res => {
                setMessages([...messages, {user, chat}]);
            })
            .catch(e => {
                console.error(e);
            })
        }
    }

    return (
        <div className="chat-container">
            <div className="top">
                <button onClick={e => Logout()}>Sair</button>

                <p>{auth.currentUser === null ? '' : auth.currentUser.displayName}</p>
            </div>

            <div className="chat-box">

                {
                    messages.map((message, i) => {
                        if (message.user === user){
                            return <p className="right" key={i}>
                                {message.chat}
                            </p>
                        }
                        else {
                            return <p className="left" key={i}>
                                {message.chat}
                            </p>
                        }
                    })
                }
            </div>

            <div className="message">
                <input type="text" value={chat} onChange={e => setChat(e.target.value)}/>

                <button onClick={submit}>Enviar</button>
            </div>
        </div>
    );
}

export default Chat;