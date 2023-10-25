const { config } = require("dotenv");

config()

const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
const PAYPAL_API = process.env.PAYPAL_API;
const PORT = process.env.PORT;
const HOST_FRONT = process.env.HOST_FRONT;
const HOST_BACK = process.env.HOST_BACK;

module.exports = {
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET,
    PAYPAL_API,
    PORT,
    HOST_FRONT,
    HOST_BACK
}