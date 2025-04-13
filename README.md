

# Medicine Search Application (Vue.js SPA)

This is a Vue.js-based Single Page Application (SPA) designed to help users search for medicines across multiple pharmacies. The project allows users to find available medicines in nearby pharmacies, provides an administrative interface for pharmacy owners to manage their inventory, and includes a user registration and login system.

## Features

- **Search for Medicines**: Users can search for medicines in different pharmacies using a simple interface.
- **Pharmacy Admin Panel**: Pharmacy admins can manage their inventory, including adding, updating, or removing medicines.
- **User Authentication**: The app supports user registration, login, and session management.
- **Contact Page**: A simple contact form for user inquiries.

## Project Structure

### Components

- **Admin Components**

  - `Admin.vue`: The main component for admin functionalities.
  - `pharmacyBox.vue`: Displays the list of pharmacies managed by the admin.

- **Pharmacy Admin Components**

  - `EditInfo.vue`: Allows the pharmacy admin to edit pharmacy information.
  - `EditMedicines.vue`: Component for managing the list of medicines (add/edit/delete).
  - `MedicineBox.vue`: Displays individual medicine information.
  - `Menu.vue`: Navigation menu for the pharmacy admin interface.

- **Authentication Components**

  - `Login.vue`: User login form.
  - `SignUp.vue`: User registration form.
  - `checkLogin.js`: Helper for checking if the user is authenticated.

- **Search and Navigation Components**

  - `Navbar.vue`: Navigation bar for logged-in users.
  - `NavbarSearch.vue`: Search bar embedded in the navbar for easy access to search functionality.
  - `Search.vue`: Main search page where users can search for medicines.
  - `SearchResult.vue`: Displays the search results for the requested medicine.
  - `ResultBox.vue`: Displays individual search results (e.g., pharmacy and medicine availability).

- **User Interface Components**

  - `Home.vue`: The homepage of the application, showing an overview of the app's purpose.
  - `Landing.vue`: The landing page when a user first visits the site.
  - `Main.vue`: Main dashboard page for logged-in users.
  - `ContactUS.vue`: Contact form for users to reach out to the pharmacy or site admin.

- **Other Components**
  - `regestrationBox.vue`: Component handling the registration logic.

### Router

- **index.js**: Defines the routes for navigating between different pages and components in the SPA.

### Main Application

- `App.vue`: The root component of the Vue.js application.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/medicine-search-app.git
   cd medicine-search-app
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Run the development server:**

   Start the development server by running:

   ```bash
   npm run serve
   ```

   This will start the application at `http://localhost:8080`.

## Usage

- **Admin Access**: Pharmacy owners can log in via the `/login` route to manage their medicines and pharmacy information.
- **Search for Medicines**: Users can search for available medicines by typing the name into the search bar on the `/search` route.
- **Registration**: New users can sign up through the `/signup` route to create an account and access additional features.
- **Contact**: Users can contact the pharmacy or site admin via the `/contact-us` route.

## Project Setup

### Prerequisites

- **Node.js** and **npm**: Make sure you have Node.js and npm installed to manage dependencies.

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```
