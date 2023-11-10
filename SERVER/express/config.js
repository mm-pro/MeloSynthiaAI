require("dotenv").config();

module.exports = {
  dbUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uubfwez.mongodb.net/melosynthia`,

  // flaskUrl: "http://127.0.0.1:8000",
  flaskUrl: "https://melosynthia-ai-flask.onrender.com",

  smtp: {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASSWORD,
    },
  },

  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret_key: process.env.CLOUDINARY_API_SECRET,
  },

  port: 5000,
  jwt_secret: process.env.JWT_SECRET_TOKEN,

  online_domain: "https://melosynthia-ai.onrender.com/",

  // minting related env variables;
  nft: {
    reciever_address: process.env.RECIEVER_ADDRESS,
    api_key: process.env.API_KEY,
    smart_contract_network: process.env.SMART_CONTRACT_NETWORK,
    smart_contract_address: process.env.SMART_CONTRACT_ADDRESS,
    net_url: process.env.NET_URL,
    wallet_imported_on_starton: process.env.WALLET_IMPORTED_ON_STARTON,
  }

};
