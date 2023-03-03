# CasExpress - E-Commerce website with payment feature achieved, with Sanity and Stripe usage.

# Live website at: https://casexpress.vercel.app

#npx create-next-app

#cd app-name

#npm install @babel/core @sanity/client @sanity/image-url @stripe/stripe-js canvas-confetti next-sanity-image react-hot-toast stripe

(windowns - run following two command inside git bash terminal instead of powershell to avoid error)

#npm install -g @sanity/cli

#sanity init --coupon javascriptmastery2022

=> google => sanity_app_name => yes (default dataset) => press enter => choose 'Clean project with no predefined schemas' (for better practice from beginning) => npm

#to run sanity server: cd sanity server folder (sanity_app_name) => npm run dev (sanity start only works for previous v2 version)

Features as:

1.marquee animation inside product detail page; /  
2.changing quantity and adding to cart at product detail page; /  
3.buy now directly at product detail page; /  
4.modify number at cart page; /  
5.remove products at cart page; /  
6.payment by stripe implement; /  
7.successful payment page and back to home button; /

#nextJS has provide specific api folder inside pages as a server side file.

#create stripe.js inside /pages/api

stripe doc for Prebuilt Checkout page: https://stripe.com/docs/checkout/quickstart

stripe test mode card info:

4242 4242 4242 4242 04/24 424

import confetti from 'canvas-confetti' => to create instance for confetti animation.

#something can be improved in the future:
1.adding different shipping method and fees /
2.reviews /
3.cancel payment keep cart data /
