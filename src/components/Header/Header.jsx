import './Header.min.css'
import { useSelector, useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
import { setLogged } from '../../redux';

export default function Header() {

    const userInfo = useSelector((state) => state.userInfo);
    const isLogged = useSelector((state) => state.userLog.isLogged);
    const dispatch = useDispatch();

    return (
        <>
            <nav className="main-nav">
                <Link to={`/`} className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                <div className="main-nav-item">
                    {isLogged ? (<>
                        <i className="fa fa-user-circle"></i>
                        <Link to={isLogged ? `/user` : null}>
                            {isLogged ? `${userInfo.userName}` : ""}
                        </Link>
                    </>)
                        : ""}
                    <i className={isLogged ? "fa fa-sign-out" : "fa fa-user-circle"}></i>
                    <Link to={isLogged ? `/home` : `/signin`} onClick={() => {
                        isLogged ? dispatch(setLogged(false)) : null
                        window.localStorage.removeItem('userToken');
                    }}>
                        {isLogged ? "Sign Out" : "Sign in"}
                    </Link>
                </div>
            </nav >
        </>
    )
}