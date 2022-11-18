export const addItemtoCart = (item, next) =>{
    let cart = []
    console.log("item is ",item)
    console.log("next is ")
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        cart.push({
            ...item
        })
        localStorage.setItem("cart",JSON.stringify(cart))
        next();
    }
}

export const CartLoader = () => {
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"))
        }
    }
}