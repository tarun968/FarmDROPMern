export const NewsGet = async (ID) => {
    console.log(ID)
    return fetch(`http://localhost:5000/News/${ID}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
        },
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}
export const NewsComment = (Token,formData,UserId,ID) => {
    // console.log(Token,commentdesc,UserId,ID)
    // console.log("backend",BACKEND)
    return fetch(`http://localhost:5000/comment/${UserId}/${ID}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${Token}`
            // Mode: 'cors',
            
        },
        body:formData
    }).then(response => {
        // console.log(response())
        return response.json()
    }
    ).catch(err => console.log("err", err))
}
// app.post("/comment/:adder/:news", isSignedIn, isAuthenticated, getUserByEmail, NewsComment)