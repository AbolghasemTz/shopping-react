export const checkInCart  =(cart,id) => {
    return cart.find(c => c.id === id)
}