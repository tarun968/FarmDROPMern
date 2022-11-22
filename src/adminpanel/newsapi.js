export const NewsAdder = async (Userid, Token, formData) =>  {
    console.log("",Userid, Token, formData)
    try {
        const response = await fetch(`http://localhost:5000/add-news/${Userid}`, {
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


export const getNews = async () =>  {
    // console.log("",Userid, Token, formData)
    try {
        const response = await fetch(`http://localhost:5000/all-news`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type":"application/json"
            },
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}