# Twiggy Food Rescue

A React + Vite student project demo for rescuing surplus food through discounted flash deals and coordinated food donation listings.

## Features

- Customer signup and login using browser Local Storage
- Demo admin login and protected admin panel
- Browse food deals, search and filter by Veg / Non-Veg
- Discount percentage calculation
- Place a rescue order; available quantity decreases
- My Orders page for the signed-in customer
- Admin can add/delete flash food deals
- Admin can add donation listings
- Responsive layout for mobile and desktop
- Seed demo food listings on first launch

## Run locally

1. Install Node.js (LTS).
2. Extract the project ZIP.
3. Open the extracted `twiggy-food-rescue` folder in VS Code.
4. Open Terminal in that folder and run:

```bash
npm install
npm run dev
```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Demo admin credentials

- Email: `admin@twiggy.com`
- Password: `admin123`

Customers can create their own account using Sign up.

## Build for deployment

```bash
npm run build
```

Vite outputs the production site to the `dist` folder.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Framework preset: **Vite** (usually detected automatically).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

No environment variables are needed for this demo.

## Important limitations

This is a frontend-only academic demonstration. Local Storage is browser/device-specific and can be edited or cleared by the user. It is not secure authentication and does not synchronize accounts between devices. The demo stores customer passwords in Local Storage for illustrating the requested login flow; never use this approach for a real public service. A production system needs a backend, database, secure password hashing, server-side authorization, and validated food-safety / donation workflows.

The admin demo credentials are visible in the frontend source code. Do not treat this as real security. Replace the demo authentication with a secure backend before public use.

Food donation listings are informational demo records. Actual donation handover must be coordinated with a verified partner and comply with applicable food-safety requirements.


## Dark orange dashboard update
The UI now follows the supplied dark black-and-orange food delivery dashboard reference while retaining the Food Rescue demo features.


## Login-first experience
Every fresh visit starts on a full-page Twiggy welcome/login screen. New users can create an account; successful signup logs them in and opens the food dashboard. Existing users must enter the same email and password to continue. Demo account records are stored in browser Local Storage.

## Project Review 2 demo features
- Login and signup with browser Local Storage (demo only).
- Food listing, search, categories, rescue offers and add-to-cart.
- Cart quantity controls, remove item, automatic subtotal, delivery fee, tax, discount and total.
- Browser GPS permission request and manual delivery-address entry.
- Checkout with Cash on Delivery / simulated UPI / simulated card choices.
- Demo order confirmation, receipt and order history.
- Admin demo dashboard showing users, orders, food listings and demo order totals.

## Important academic-demo limitations
This is a frontend-only student demonstration. Local Storage data stays in the same browser profile/device and is not shared between customers or devices. GPS coordinates are obtained only after browser permission and are not reverse-geocoded into a street address. Payment options are simulations; no money is charged or transferred. Real authentication, secure password handling, shared admin/customer data, inventory synchronization, live order tracking and real payment processing require a backend API, database and payment gateway integration. Do not use the demo admin credentials or Local Storage authentication in production.

Demo admin login: `admin@twiggy.com` / `admin123`.
