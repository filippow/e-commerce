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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = [];

    cartItems.forEach(item => {
        if (item.id === cartItemToRemove.id) {
            // items with quantity === 1 will be ignore and filter by next if-statement
            if (item.quantity > 1) {
                newCartItems.push({...item, quantity: item.quantity -1});
            }
        } else {
            newCartItems.push(item);
        }
    });

    return newCartItems;
}