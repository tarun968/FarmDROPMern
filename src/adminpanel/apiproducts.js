
export const AddProducts = (Userid, Token, formData) => {
    // console.log("backend",BACKEND)
    console.log("user data ",Userid)
    console.log("user data ",Token)
    console.log("user data ",(formData))
    return fetch(`http://localhost:5000/add-product/${Userid}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
            Authorization:`Bearer ${Token}`

        },
        body: (formData)
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}