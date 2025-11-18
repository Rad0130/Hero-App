**📱 Hero-App**

Overview

This project is a fully responsive App Store platform built with React, designed to showcase applications in a clean and interactive UI. Users can browse, search, filter, and install apps. Installed apps are saved in localStorage, allowing users to manage their apps in a “My Installation” page.

The platform includes a Home page, All Apps page, App Details page with charts, and a custom Error page for invalid routes. It also features animations for page navigation and search operations.

Screenshots
<img width="1850" height="960" alt="Screenshot from 2025-11-19 04-46-45" src="https://github.com/user-attachments/assets/bd322b04-9e09-4516-a2d6-26e9e4ee659b" />
<img width="1850" height="960" alt="Screenshot from 2025-11-19 04-46-56" src="https://github.com/user-attachments/assets/0475507a-6b39-418b-8120-5f24f29bd612" />
<img width="1850" height="960" alt="Screenshot from 2025-11-19 04-47-07" src="https://github.com/user-attachments/assets/030d561f-8983-4123-9143-c69ddedfd4b2" />
<img width="1850" height="960" alt="Screenshot from 2025-11-19 04-47-16" src="https://github.com/user-attachments/assets/6737f13a-9dda-4481-83b3-5d18e4984bbf" />





**🛠 Main Technologies Used**

Frontend: React.js, HTML, CSS

State Management: React Hooks (useState, useEffect, useContext)

Charts: Recharts (for App Review visualization)

Routing: React Router DOM

Deployment: Vercel / Netlify / Cloudflare

**🔑 Key Features
Header & Footer:

Logo linking to Home page

Navigation bar with active route indication

Contribution button linking to GitHub

Home Page:

Banner with App Store and Play Store buttons

Three state cards for statistics

Top apps section with 8 app cards (title, image, downloads, rating)

“Show All” button to navigate to All Apps page

All Apps Page:

Live search functionality (case-insensitive)

Display total app count

Responsive grid layout of all apps

“No App Found” message if search yields no results

App Details Page:

App image and information (title, rating, downloads, reviews)

Install button with disabled state and toast notification

Responsive chart using Recharts to visualize reviews

App description section

My Installation Page:

Display all installed apps from localStorage

Uninstall button with toast notification

Sorting apps by downloads (High-Low / Low-High)

Error & Loading States:

Custom 404 page for invalid routes

Loading animations during page navigation and search

⚙️ **Dependencies**

React (react, react-dom)

React Router (react-router-dom)

Recharts (recharts)

Toast Notifications (react-toastify)

CSS Framework (optional, e.g., Tailwind CSS or custom CSS)

**🚀 How to Run Locally**

Clone the repository

git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>


Install dependencies

npm install


Run the project

npm start


Open in browser
Navigate to http://localhost:3000

**🌐 Live Demo**

http://hero-apps.surge.sh/

**🔗 Relevant Links**

GitHub Repository: https://github.com/Rad0130/Hero-App.git
