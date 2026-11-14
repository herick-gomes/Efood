# Connecting the Efood API

This branch connects the React client to https://github.com/herick-gomes/efood-api. It is not intended to replace the published demo until the backend is deployed and the full browser flow is checked.

1. Start the API and run its `seed_demo` command, choosing a local password.
2. Copy `.env.example` to `.env.local` in this frontend repository.
3. Install with `npm ci` and run `npm start`.
4. Browse the fictional catalog, add items from one restaurant and enter a fictional delivery address.
5. At checkout, create a customer account or sign in as `demo_customer` with your locally chosen password.
6. Submit the simulated order. No card details are requested or sent. The confirmed total comes from the server.

JWTs are kept in memory, not localStorage. Reloading requires signing in again. The refresh token rotates before checkout; logout revokes it. Access tokens remain valid until their short expiry. Reusing the same checkout intent retains its idempotency key across retries while the component remains mounted; it does not survive a page reload.

The current cart represents one unit per product and the backend requires a single restaurant per order. Mixed-restaurant carts receive an explicit API error. Prices displayed before submission are estimates. This is a simulation, not a real payment flow.

The demo catalog has no real reviews: legacy `avaliacao` is zero. Missing food photos use a neutral local illustration. No copied restaurant reviews or fabricated customer ratings are seeded.

For deployment, set `REACT_APP_EFOOD_API_URL` to the HTTPS API origin plus `/api/v1`, and add the exact frontend origin to the backend `CORS_ALLOWED_ORIGINS`. Never put secrets into `REACT_APP_*` variables. Validate registration, login, checkout, retry behavior and mobile layout before merging this branch.
