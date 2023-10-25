const axios = require('axios');
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET, HOST_FRONT, HOST_BACK } = require('../config');

const createOrder = async (req, res) => {
    const {price} = req.body;
    
    try {
    const order = {
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    currency_code: 'USD',
                    value: `${price}`
                },
                description: "Donación por asesoría"
            }
        ],
        application_context: {
            brand_name: 'uvi.lat',
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: `${HOST_BACK}/capture-order`,
            cancel_url: `${HOST_BACK}/cancel-order`
        }
    }

        // configuro el body
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
    
        // se genera un access token
        const {data : {access_token}} = await axios.post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            auth: {
              username: PAYPAL_API_CLIENT,
              password: PAYPAL_API_SECRET,
            },
          }
        );
    
        
        // se hace el pedido a la api de paypal
        const response = await axios.post(
            `${PAYPAL_API}/v2/checkout/orders`,
            order,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
            );
        return res.json(response.data);
        
    } catch (error) {
      console.log(error);
      return res.status(500).json("Something goes wrong");
    }
}
      


const captureOrder = async (req, res) => {
    const {token} = req.query;
    // console.log(token);

    const order = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
        }
    })
    res.redirect(`${HOST_FRONT}/thanks`);
}

const cancelOrder = (req, res) => {
    res.redirect(`${HOST_FRONT}`);
}

module.exports = {
    createOrder,
    captureOrder,
    cancelOrder
}