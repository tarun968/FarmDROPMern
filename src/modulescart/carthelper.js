import { json } from "react-router-dom";

export const removeItemfromCart = (productId) => {
    let cart = []
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        console.log("product id",productId)
        cart.map((product, i) => {
            console.log("here is the prduct to remove", product)
            if (product._id === productId) {
                if (product.Count > 1) {
                    console.log("in the if ",product._id)
                    product.Count -= 1
                }
                else if (product.Count === 1) {
                    console.log("in the else",product._id)
                    cart.splice(i, 1)
                }
            }
        })
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    return cart;
}
export const addItemtoCart = (item, next) => {
    let cart = []
    console.log("item is ", item)
    console.log("next is ")
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
    }
    function upsert(array, element) {
        console.log(element.NameofProduct)
        const i = array.findIndex(_element => _element.NameofProduct === element.NameofProduct);
        console.log("i",i)
        if (i > -1) {
            console.log("count if",element)
            array[i].Count += 1; // (2)
        }
        else {
            console.log("count", element)
            element["Count"] = 1
            array.push(element);
            console.log("count push ", element)
        }
    }
    upsert(cart, item)
    localStorage.setItem("cart", JSON.stringify(cart))
    next();
}

export const CartLoader = () => {
    if (typeof window !== undefined) {

        if (localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart"))
        }
        else{
            return JSON.parse(JSON.stringify([]))
        }
    }
}

export const cartEmpty = next => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("cart")
    }
}