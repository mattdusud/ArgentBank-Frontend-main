export async function Connect({ email, password }) {
    window.localStorage.removeItem('userToken');
    let userToken = null;
    const urlUserLogin = import.meta.env.VITE_LOGINURL;

    const userCredentials = {
        email: email,
        password: password
    };
    const jCredentials = JSON.stringify(userCredentials);
    try {
        const reponse = await fetch(urlUserLogin, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: jCredentials
        });
        userToken = await reponse.json();
        userToken = userToken.body ? userToken.body.token : 'undefined';
        window.localStorage.setItem('userToken', userToken);

        if (!reponse.ok) {
            throw new Error(`Response status: ${reponse.status}`);
        }
        else {
            return (true);
        }
    } catch (error) {
        console.error(error.message);
    }
}