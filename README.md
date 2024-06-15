## App Functionality:

The telemedicine application provides the following core features:

**For Patients:**

- **Virtual Consultations:** Schedule and conduct secure video consultations with healthcare providers from the comfort of their homes.
- **Appointment Management:** Easily view, schedule, reschedule, or cancel appointments. **(not yet)**
- **Health Records:** Access and manage personal health records, including medical history, medications, allergies, and lab results.
- **Prescription Refills:** Request prescription refills online and track their status.
- **Secure Messaging:** Communicate securely with healthcare providers through in-app messaging. **(not yet)**

**For Doctors:**

- **Patient Management:** View patient lists, access their health records, and schedule appointments.
- **Virtual Consultations:** Conduct video consultations with patients.
- **Health Record Updates:** Create, update, and view patient health records.
- **Prescription Management:** Issue and manage prescriptions electronically.
- **Secure Messaging:** Communicate securely with patients through in-app messaging. **(not yet)**

**Additional Features:**

- **User Authentication:** Secure login and signup for both patients and doctors.
- **Dashboard:** Personalized dashboards for both patients and doctors, providing an overview of upcoming appointments, health summaries, and relevant information.
- **Notifications:** Receive reminders for appointments, medication refills, and messages from healthcare providers. **(not yet)**
- **Payment Integration:** (Optional) Integrate with payment gateways for online consultations and services. **(not yet)**
- **Admin Panel:** (Optional) Implement an admin panel for managing doctors, patients, and overall system settings. **(not yet)**

**Future Development:**

- **Specialty Services:** Add support for specialized consultations (e.g., dermatology, mental health).
- **Insurance Integration:** Integrate with insurance providers for seamless claims processing.
- **Wearable Device Integration:** Allow patients to connect wearable devices to track health data.
- **Community Forum:** Create a forum for patients to interact, share experiences, and ask questions.

**Telemedicine App Style Guide Implementation**

This project implements a global style guide for a telemedicine application built with Next.js, React, and TypeScript. The style guide aims to create a consistent and visually appealing user interface, ensuring a cohesive and professional brand identity.

**Key Features of the Style Guide:**

- **Themed Components:** All major components (header, footer, forms, cards, etc.) have been styled to align with the defined color palette, typography, and spacing rules.
- **Responsive Design:** The layout adapts gracefully to different screen sizes, providing an optimal experience on mobile devices, tablets, and desktops.
- **Light/Dark Mode:** The application supports both light and dark themes, with smooth transitions between them.
- **CSS Variables:** CSS variables (e.g., `--primary-color`, `--text-color`) are used extensively for color, typography, and spacing, making it easy to maintain and update styles across the project.
- **CSS Modules:** CSS Modules are used to encapsulate component styles, preventing conflicts and ensuring maintainability.

**How to Use the Style Guide:**

1. **Global Styles (`globals.css`):** This file defines the core style rules, including:

   - Color palette (primary, secondary, accent, neutral colors)
   - Typography (font families, sizes, line heights, weights)
   - Spacing (margins, padding, gaps)
   - Base styles for body, buttons, input fields, etc.

2. **Component Styles (`*.module.css`):** Each component has its own CSS module file (e.g., `Header.module.css`, `LoginForm.module.css`) that defines styles specific to that component. These files reference variables from `globals.css` for consistency.

3. **Theming:**
   - The application automatically detects the user's preferred color scheme and applies the appropriate theme (light or dark).
   - You can add a custom theme switcher if you want to allow users to toggle manually.

**Key Changes Implemented:**

- **Components:** The following components have been styled according to the style guide:

  - `Header`
  - `Footer`
  - `MainLayout`
  - `HomePageContent`
  - `LoginForm`
  - `SignupForm`
  - `DoctorProfile`
  - `DoctorDashboard`
  - `UserDashboard`
  - `Contact`
  - `Services`

- **Layouts:**
  - CSS Grid and Flexbox are used to create flexible and responsive layouts.
  - Specific breakpoints are defined for different screen sizes (e.g., 768px for tablet layouts).

**Future Enhancements:**

- **More Components:** Style additional components as your application grows.
- **Customizable Theme:** Add the ability for users to personalize the theme further (e.g., choosing from a set of predefined color palettes).
- **UI Library:** Consider using a UI component library (e.g., Material-UI, Ant Design) to speed up development and ensure consistency with pre-designed components.

**Additional Notes:**

- **Accessibility:** Pay close attention to accessibility guidelines (WCAG) to ensure your application is usable for everyone.

# Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# NML-frontend
