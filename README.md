# efood — Food Delivery E-commerce

A modern food delivery web application built with React and TypeScript.

efood allows users to explore restaurants, browse menus, view dish details, manage a persistent shopping cart and complete a multi-step checkout experience.

## Live Demo

**[Explore efood](https://efood-kappa-three.vercel.app/)**

---

## About the Project

efood is a front-end e-commerce application focused on the complete food ordering journey.

The application consumes restaurant and menu data from a REST API and provides an interactive experience from restaurant discovery to order confirmation.

The project was originally developed as part of my front-end studies and later redesigned and expanded as a portfolio project, with improvements to user interface, responsiveness, state management, validation, persistence, error handling and overall user experience.

---

## Features

- Restaurant discovery
- Restaurant detail pages
- Dynamic restaurant and menu data from a REST API
- Dish detail modal
- Shopping cart powered by Redux Toolkit
- Cart persistence using `localStorage`
- Multi-step checkout flow
- Delivery address form
- Payment form
- Form validation with Formik and Yup
- Input masks for checkout fields
- Order submission through API
- Loading states
- API error states
- Checkout error feedback
- Responsive layout for desktop, tablet and mobile
- Keyboard support for modal and cart interactions
- English presentation layer for portfolio use

---

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Redux
- React Router
- Styled Components
- Formik
- Yup
- React Input Mask
- REST API
- localStorage

---

## User Flow

The application covers the main stages of a food-delivery purchase journey:

```text
Browse Restaurants
        ↓
Select Restaurant
        ↓
Explore Menu
        ↓
View Dish Details
        ↓
Add Items to Cart
        ↓
Review Order
        ↓
Delivery Information
        ↓
Payment Information
        ↓
Submit Order
        ↓
Order Confirmation
```

---

## Restaurant Experience

The home page displays restaurants dynamically using data received from the API.

Each restaurant card presents information that helps the user explore the available options before navigating to the restaurant profile.

Inside a restaurant, users can:

- View restaurant details
- Browse available dishes
- Open individual dishes
- Review descriptions and prices
- Add dishes to the shopping cart

---

## Shopping Cart

Redux Toolkit is used to manage the cart state across the application.

Users can:

- Add dishes to the cart
- Remove dishes
- Review selected items
- View the total order value
- Continue to checkout

Cart items are persisted in the browser using `localStorage`, allowing the cart to remain available after refreshing or reopening the application.

---

## Checkout Experience

The checkout process is divided into multiple stages to keep the ordering flow clear and organized.

### Delivery

The first stage collects delivery information such as:

- Recipient name
- Address
- City
- Postal code

### Payment

The payment stage collects information such as:

- Cardholder name
- Card number
- CVV
- Expiration month
- Expiration year

### Confirmation

After a successful API request, the user receives an order confirmation containing the order information returned by the service.

---

## Form Validation

The checkout flow uses Formik and Yup to validate delivery and payment information.

Validation helps prevent incomplete or incorrectly formatted information from being submitted.

Input masks are also used where appropriate to improve the data-entry experience.

---

## State Management

Redux Toolkit provides centralized state management for the shopping cart.

This keeps cart behavior independent from individual components and allows the same order state to be accessed throughout the checkout flow.

The application combines Redux state with browser persistence through `localStorage`.

---

## API Integration

Restaurant and menu information is loaded from the efood REST API.

The application handles:

- Asynchronous data fetching
- Loading states
- Unsuccessful requests
- Individual restaurant requests
- Checkout submission
- Order confirmation responses

The API provides the original restaurant data in Portuguese.

A presentation layer was added on the front end to provide an English portfolio experience while preserving the original API data structure.

---

## Responsive Design

The interface was designed to adapt across different screen sizes.

Layouts are optimized for:

```text
Desktop
Tablet
Mobile
```

Restaurant grids, menu cards, product modals, navigation elements and the shopping cart adjust according to the available viewport width.

---

## Accessibility & User Experience

The portfolio version includes several improvements focused on usability.

These include:

- Keyboard support for closing interactive overlays
- Clear loading feedback
- Error states for failed requests
- Form validation feedback
- Responsive interactive elements
- Semantic navigation structure
- Persistent shopping-cart state

---

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Cart/
│   ├── Confirmation/
│   ├── Delivery/
│   ├── DishCard/
│   ├── DishList/
│   ├── Footer/
│   ├── Header/
│   ├── Payment/
│   ├── ProductModal/
│   ├── ProfileHeader/
│   ├── RestaurantCard/
│   ├── RestaurantHero/
│   ├── RestaurantList/
│   └── StatusState/
├── models/
├── pages/
│   ├── Home/
│   └── Profile/
├── store/
│   └── reducers/
├── utils/
├── App.tsx
├── routes.tsx
└── styles.ts
```

The application is organized around reusable components, page-level views, models, centralized state and shared utilities.

---

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/herick-gomes/Efood.git
```

Enter the project directory:

```bash
cd Efood
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm start
```

Runs the application in development mode.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Tests

```bash
npm test
```

Runs the React testing environment.

---

## Project Evolution

The project began as an educational React e-commerce exercise.

For the portfolio version, the application was expanded and refined with improvements including:

- More polished visual presentation
- Responsive layouts
- Improved shopping-cart behavior
- Cart persistence
- Better checkout feedback
- Input validation
- Loading states
- Error handling
- Improved interaction behavior
- English portfolio presentation

The objective was to transform the original exercise into a project that demonstrates a more complete front-end product flow.

---

## What This Project Demonstrates

efood demonstrates practical experience with:

- Component-based React architecture
- TypeScript
- Global state management
- REST API integration
- Form handling and validation
- Persistent client-side data
- Routing
- Responsive interfaces
- Styled Components
- Multi-step e-commerce flows
- Front-end error handling

---

## Portfolio Context

efood is a portfolio project created to demonstrate front-end development skills through a realistic food-delivery e-commerce experience.

The checkout interface is intended for demonstration purposes and does not process real payments.

---

## Author

**Herick Gomes**

Front-End Developer focused on building responsive and interactive web experiences with React, TypeScript and JavaScript.

GitHub:

```text
https://github.com/herick-gomes
```