import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_fjfNkvdQy7doJxiGQ5fpHYcw00vJitNEKU';

    const onToken = token => {
        console.log(token);
        alert('Payments Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Market Payment'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is ${price}$`}
            amount={priceForStripe}
            panelLAbel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;