export async function changeUsername({ token, newUsername }) {
    const urlUserProfile = import.meta.env.VITE_PROFILEURL;
    let done = null;
    try {
        const reponse = await fetch(urlUserProfile, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                userName : newUsername
            })
        });
        done = await reponse.json();
        //console.log(userData.body);

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