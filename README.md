# FlavorFind - A Manifest-Powered Food App

Welcome to FlavorFind, a complete food discovery application built entirely with React and Manifest.

This application demonstrates a full-stack solution using Manifest as the sole backend, handling everything from user authentication to data management for restaurants, menu items, and reviews.

## Features

- **User Authentication**: Secure signup and login for diners.
- **Restaurant Listings**: Browse a list of restaurants.
- **Restaurant Management**: Authenticated users can create and manage their own restaurant listings.
- **Dynamic Data**: All data is fetched and managed in real-time using the Manifest SDK.
- **Admin Panel**: A pre-built admin interface for managing all data, accessible at `/admin`.
- **Health Check**: A visual indicator shows the connection status to the Manifest backend.

## Tech Stack

- **Backend**: Manifest (YAML-based schema)
- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **SDK**: `@mnfst/sdk`

## Getting Started

### Prerequisites

- Node.js and npm
- A running Manifest backend instance

### Installation & Setup

1.  **Clone the repository**

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**

    Create a `.env.local` file in the root of your project and add the following variables provided by your Manifest deployment:

    ```
    VITE_BACKEND_URL=your-manifest-backend-url
    VITE_APP_ID=your-manifest-app-id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## Using the App

- **Public Users**: Can visit the landing page.
- **Sign Up**: Create a new 'diner' account using the form on the landing page.
- **Log In**: Access the dashboard to view and add restaurants.
- **Demo User**: Click 'Try Demo' to log in with a pre-configured user (`diner@manifest.build` / `password`).
- **Admin Access**: Navigate to `${BACKEND_URL}/admin` and log in with `admin@manifest.build` / `admin` to manage all application data through the Manifest Admin Panel.
