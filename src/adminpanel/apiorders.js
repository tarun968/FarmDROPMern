export const OrdersToAdmin = async (Userid, Token) => {
    console.log(Userid)
    try {
        const response = await fetch(`http://localhost:5000/Orders/admin/${Userid._id}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}




export const UsersToAdmin = async (Userid, Token) => {
    console.log(Userid)
    try {
        const response = await fetch(`http://localhost:5000/users/${Userid._id}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}