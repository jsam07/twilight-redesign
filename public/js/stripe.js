const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

$(() => {
    $('.checkout-button').on('click', () => {
        fetch('/checkout/create-checkout-session', {
            method: 'POST',
        })
            .then((response) => response.json())
            .then((session) => stripe.redirectToCheckout({ sessionId: session.id }))
            .then((result) => {
                if (result.error) {
                    alert(result.error.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});
