import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const Stripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51MUR8mSCCWTqFklHaTX94ON4adLv3YmkGtIolaj6QKb2Pbfc1cYoeVGG9Te7wZvVUqrBu45qqkINfTXHlWyOK9e600kByafUVu');
  }
  return stripePromise;
};

export default Stripe;