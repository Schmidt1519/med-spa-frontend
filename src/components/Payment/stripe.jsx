import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = await loadStripe('pk_test_51JJVo1LbC0X6EBVPG44wJbBpN1Y7RdThoYhk0VeP6GORVX4jreI7CCoFAUZFVo5RgBu7Vd1sZSfl2eVrA3XEPBCZ000T4zeLcF');

const elements = stripe.elements();

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
};