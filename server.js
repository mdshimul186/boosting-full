const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
const mailer = require('./mailer');
const mongoose = require("mongoose");
const cors = require("cors");
const dev = process.env.NODE_ENV !== 'production';
//cloudinary config
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// mongodb connection

mongoose
    .connect(`${"mongodb+srv://shimul186:shimul186@cluster0.ho1yg.mongodb.net/boostingbd"}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Database connected");
    });

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();



//routes
const authRoutes = require("./server/routes/auth");
const productRoutes = require("./server/routes/product");
const orderRoutes = require("./server/routes/order");
const articleRoutes = require("./server/routes/article");
const settingRoutes = require("./server/routes/setting");
const portfolioRoutes = require("./server/routes/portfolio");
const freelancerRoutes = require("./server/routes/freelancer");

app.prepare().then(() => {
    const server = express();
    // Static files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use(bodyParser.json());
    server.use(cors());
    


    server.use("/api/user", authRoutes);
    server.use("/api/product", productRoutes);
    server.use("/api/order", orderRoutes);
    server.use("/api/article", articleRoutes);
    server.use("/api/setting", settingRoutes);
    server.use("/api/portfolio", portfolioRoutes);
    server.use("/api/freelancer", freelancerRoutes);
    server.get('*', (req, res) => {
        return handle(req, res)
    });
    server.post('/api/contact', (req, res) => {
        const { name, email, phone, subject, text } = req.body;
        mailer({ name, email, phone, subject, text }).then(() => {
            res.send('success')
        }).catch(error => {
            res.status(422).send(error)
        });
    });

    server.post('/api/stripe/checkout', async (req, res) => {
        await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'StartP Next Landing Page Templates',
            source: req.body.token.id
        });
        res.send({})
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });
})