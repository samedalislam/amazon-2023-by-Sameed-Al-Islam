export const initialState = {
    basket: [
        {
            id: "567890",
            image: "https://m.media-amazon.com/images/I/61i9QBMhA3L._AC_SX679_.jpg",
            price: 5137,
            rating: 5,
            title: "LG 32BP95E-B 32\" OLED Monitor with Hood, 3840 X 2160, 16:9 OLED, HDMI, Display Port"
        },
        {
            id: "567890",
            image: "https://m.media-amazon.com/images/I/61i9QBMhA3L._AC_SX679_.jpg",
            price: 5137,
            rating: 5,
            title: "LG 32BP95E-B 32\" OLED Monitor with Hood, 3840 X 2160, 16:9 OLED, HDMI, Display Port"
        }
    ],
    user: null,
}

export const getBasketTotal = (basket) =>(
    basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding product in Basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // Here are the logic to remove product
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0){
                // item exits in basket, remove it...
                newBasket.splice(index, 1)
            } else{
                console.warn(
                    `Can't remove product (id : ${action.id}) as its now!`
                )
            }

            return {...state, basket: newBasket}

        default:
            return state
    }
}

export default reducer