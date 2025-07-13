// lib/stripe.ts
// import Stripe from "stripe";

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-05-28.basil",  
//   typescript: true
// });

// Temporary mock stripe object for development
export const stripe = {
  webhooks: {
    constructEvent: () => ({}),
  },
} as unknown;
