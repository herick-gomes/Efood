# efood — Food Delivery E-commerce

A modern food delivery web application built with React and TypeScript.

efood allows users to explore restaurants, browse menus, view dish details, manage a persistent shopping cart and complete a multi-step checkout experience.

## Live Demo

https://efood-kappa-three.vercel.app/

## About the Project

efood is a front-end e-commerce application focused on the complete food ordering journey.

The application consumes restaurant data from a REST API and provides an interactive experience from restaurant discovery to order confirmation.

The project was originally developed as part of my front-end studies and later redesigned and expanded as a portfolio project, with improvements to UI, responsiveness, state management, error handling and overall user experience.

## Features

- Restaurant discovery
- Restaurant detail pages
- Dynamic restaurant and menu data from REST API
- Dish detail modal
- Shopping cart with Redux Toolkit
- Cart persistence using localStorage
- Multi-step checkout flow
- Delivery address form
- Payment form
- Form validation with Formik and Yup
- Input masks for payment and address fields
- Order submission through API
- Loading states
- API error states
- Checkout error feedback
- Responsive layout for desktop, tablet and mobile
- Keyboard support for closing modals and cart
- English presentation layer for portfolio use

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

## User Flow

1. Browse available restaurants
2. Select a restaurant
3. Explore its menu
4. Open a dish to view more information
5. Add dishes to the cart
6. Review the order
7. Enter delivery information
8. Enter payment information
9. Submit the order
10. Receive an order confirmation

## State Management

Redux Toolkit is used to manage the shopping cart.

Cart items are persisted in the browser using `localStorage`, allowing the cart to remain available after refreshing or reopening the application.

## API Integration

Restaurant and menu information is loaded from the efood REST API.

The application handles:

- asynchronous data fetching
- loading states
- unsuccessful requests
- individual restaurant requests
- checkout submission

The API provides the original restaurant data in Portuguese. A presentation layer was added on the front end to provide an English user experience while preserving the original API data structure.

## Form Validation

The checkout flow uses Formik and Yup to validate delivery and payment information.

Validation includes fields such as:

- recipient name
- address
- city
- postal code
- cardholder name
- card number
- CVV
- expiration month
- expiration year

Input masks are also used to improve data entry.

## Responsive Design

The interface was designed to adapt across different screen sizes.

Layouts are optimized for:

- desktop
- tablet
- mobile

Restaurant grids, menu cards, product modals, navigation and the shopping cart adjust depending on the available screen width.

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
