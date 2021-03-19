const express = require('express');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const router = express.Router();
const PORT = process.env.PORT || 8080;
const YOUR_DOMAIN = 'https://twilight-redesign.herokuapp.com/';

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({

        payment_method_types: ['card'],

        line_items: [

            {

                price_data: {

                    currency: 'cad',

                    product_data: {

                        name: 'Movie Tickets',

                        images: ['https://source.unsplash.com/PvAAYZx-yf8'],

                    },

                    unit_amount: 3000,

                },

                quantity: 1,

            },

        ],

        mode: 'payment',

        success_url: YOUR_DOMAIN,

        cancel_url: YOUR_DOMAIN,

    });

    res.json({ id: session.id });
});

module.exports = router;
