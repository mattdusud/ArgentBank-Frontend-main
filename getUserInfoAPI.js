export async function getUserInfo({ token }) {
    const urlUserProfile = import.meta.env.VITE_PROFILEURL;
    let userData = null;

    try {
        const reponse = await fetch(urlUserProfile, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });
        userData = await reponse.json();
        //console.log(userData.body);

        if (!reponse.ok) {
            throw new Error(`Response status: ${reponse.status}`);
        }
        else {
            return (userData.body);
        }
    } catch (error) {
        console.error(error.message);
    }
}