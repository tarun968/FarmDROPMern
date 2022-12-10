export const GetuserDetails = async (Userid, Token) => {
    return fetch(`http://localhost:5000/user/${Userid}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`
        },
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}