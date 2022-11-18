
export const AddProducts = async (Userid, Token, formData) => {
    // console.log("backend",BACKEND)
    console.log("user data ", Userid)
    console.log("user data ", Token)
    console.log("user data ", (formData))
    try {
        const response = await fetch(`http://localhost:5000/add-product/${Userid}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                // "Content-Type": "application/json",
                Authorization: `Bearer ${Token}`
            },
            body: (formData)
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}


export const AllProducts = async (Userid, Token) => {
    return fetch(`http://localhost:5000/All-Products/${Userid}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${Token}`

        },
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}
export const UpdateProduct = async (product,Userid, Token, formData) => {
    console.log("",product,Userid, Token, formData)
    return fetch(`http://localhost:5000/update-product/${product}/item/${Userid}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${Token}`

        },
        body:(formData)
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))

}
export const DeleteAProduct = async (product, adder, token) => {
    console.log(product, adder, token)
    return fetch(`http://localhost:5000/product/${product}/${adder}`, {
        method: 'DELETE',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`

        },
        // body:product
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}