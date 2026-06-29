import { useSelector, useDispatch } from 'react-redux'
import './User.min.css'
import { useState } from 'react';
import { changeUsername } from '../../../changeUsernameAPI'
import { setUser } from '../../redux';
import { getUserInfo } from '../../../getUserInfoAPI';

export default function User() {

    let userInfo = useSelector((state) => state.userInfo);
    const [formVisible, setFormVisible] = useState(false);
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.userLog.isLogged);

    async function handleSubmit(e) {

        e.preventDefault();
        if (document.getElementById("userName").value != "") {
            let token = window.localStorage.getItem('userToken');
            let newUsername = document.getElementById("userName").value;

            const formOk = await changeUsername({ token, newUsername });
            if (formOk) {
                userInfo = await getUserInfo({ token: window.localStorage.getItem('userToken') });
                dispatch(setUser(userInfo));
                setFormVisible(false);
            }
        }
        else {
            alert("Please choose an username")
        }
    }

    return (
        <>
        {isLogged?
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{`${userInfo.firstName} ${userInfo.lastName} aka ${userInfo.userName}  `}</h1>
                    <button className="edit-button" onClick={() => setFormVisible(!formVisible)}>Edit Name</button>
                </div>
                {formVisible ?
                    <div className="changePopup">
                        <h2>Edit User Info</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='formPart'>
                                <label htmlFor="userName">User Name</label>
                                <input id="userName" name="userName" type="text" placeholder={userInfo.userName}></input>
                            </div>
                            <div className='formPart'>
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" name="firstName" type="text" disabled value={userInfo.firstName}></input>
                            </div>
                            <div className='formPart'>
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" name="lastName" type="text" disabled value={userInfo.lastName}></input>
                            </div>
                            <div className='formPart'>
                                <button className='formBtn' id="submitUsername" name="submitUsername">Save</button>
                                <button className='formBtn' id="cancelUsername" name="cancelUsername"
                                    onClick={() => setFormVisible(!formVisible)}>Cancel</button>
                            </div>
                        </form>
                    </div> : null
                }
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
    :"Utilisateur non connecté"}
        </>
    )
}