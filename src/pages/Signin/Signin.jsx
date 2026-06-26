import './Signin.min.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Connect } from '../../../connectAPI';
import { getUserInfo } from '../../../getUserInfoAPI';
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setLogged, store } from '../../redux';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const isLogged = useSelector((state) => state.userLog.isLogged);
    const dispatch = useDispatch();

    async function handleSubmit(e) {

        e.preventDefault();

        const connectOk = await Connect({ email, password });
        if (connectOk) {
            dispatch(setLogged(true));
            const userInfo = await getUserInfo({ token: window.localStorage.getItem('userToken') });

            dispatch(setUser(userInfo));
            navigate("/user");
        }
        else {
            window.localStorage.setItem('userToken', null);
            let champEmail = document.getElementById("username");
            champEmail.classList.add("wrong");
            let champPassword = document.getElementById("password");
            champPassword.classList.add("wrong");
            let bouton = document.getElementById("signinBtn");
            if (!document.getElementById("errorMsg")) {
                let msg = bouton.insertAdjacentHTML('afterend', "<p id=\"errorMsg\">Wrong User or password</p>")
            }
        }
    }
    return (
        <>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" id="signinBtn">Sign In</button>
                    </form>
                </section>
            </main>
        </>
    )
}