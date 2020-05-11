export const addItemToCart = (cartItems, cartItemToAdd) => {
    let isExist = false,
        newCartItems = cartItems.map(item => {
            if (item.id === cartItemToAdd.id) {
                isExist = true;
                return {...item, quantity: item.quantity + 1}
            }
            return item;
        });

    if (!isExist) {
        newCartItems.push({...cartItemToAdd, quantity: 1});
    }

    return newCartItems
}