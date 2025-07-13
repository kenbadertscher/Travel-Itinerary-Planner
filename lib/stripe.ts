// lib/stripe.ts
// import Stripe from "stripe";

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-05-28.basil",  
//   typescript: true
// });

// Define a mock interface for development
interface MockStripe {
  webhooks: {
    constructEvent: () => unknown;
  };
  checkout: {
    sessions: {
      create: (params: unknown) => Promise<{ url: string; id: string }>;
    };
  };
}

// Temporary mock stripe object for development
export const stripe: MockStripe = {
  webhooks: {
    constructEvent: () => ({}),
  },
  checkout: {
    sessions: {
      create: async () => ({
        url: "http://localhost:3000/mock-checkout-success",
        id: "mock_session_id",
      }),
    },
  },
};
