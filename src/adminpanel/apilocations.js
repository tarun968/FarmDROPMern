export const AddShop = async (Userid, Token, formData) => {
    console.log(formData)
    try {
        const response = await fetch(`http://localhost:5000/add-shop/${Userid}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
            body: (formData)
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}