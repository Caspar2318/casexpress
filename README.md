# CasExpress - E-Commerce website with payment feature achieved, with Sanity and Stripe usage.

# Live website at:

#npx create-next-app

#cd app-name

#npm install @babel/core @sanity/client @sanity/image-url @stripe/stripe-js canvas-confetti next-sanity-image react-hot-toast stripe

(windowns - run following two command inside git bash terminal instead of powershell to avoid error)

#npm install -g @sanity/cli

#sanity init --coupon javascriptmastery2022

=> google => sanity_app_name => yes (default dataset) => press enter => choose 'Clean project with no predefined schemas' (for better practice from beginning) => npm

#to run sanity server: cd sanity server folder (sanity_app_name) => npm run dev (sanity start only works for previous v2 version)

Features as:

marquee animation inside product detail page;

changing quantity and adding to cart at product detail page;

buy now directly at product detail page;

modify number at cart page;

payment by stripe implement

#nextJS has provide specific api folder inside pages as a server side file.

#create stripe.js inside /pages/api

stripe doc for Prebuilt Checkout page: https://stripe.com/docs/checkout/quickstart

stripe test mode card info:

4242 4242 4242 4242 04/24 424

import confetti from 'canvas-confetti' => to create instance for confetti animation.
