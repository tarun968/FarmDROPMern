export const AllShops = async () => {
    return fetch(`http://localhost:5000/shopsbycountry`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
        },
    }).then(response => {
        // console.log(response)
        return response.json()
    }
    ).catch(err => console.log("err", err))
}

export const getAllImagesofUser = async (Token, UserId) => {
    console.log(Token, UserId)
    try {
        const response = await fetch(`http://localhost:5000/all-images/${UserId}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}