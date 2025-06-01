# Material Goals

A modern goal tracking application built with Next.js, Material UI, and Firebase. Material Goals helps users track and manage their tasks and goals with a beautiful, intuitive interface powered by Material Design 3.

## Features

- 🎯 Goal and task management
- 📱 Responsive design for all devices
- 🌓 Dark/Light mode support
- 🔐 User authentication
- 📊 Progress tracking and analytics
- 🔄 Real-time updates
- 📅 Calendar integration
- 👥 Collaboration features

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI Framework**: Material UI (MUI) with Material Design 3
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Backend**: Firebase (Authentication, Firestore)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Firebase account (for backend services)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/material-goals.git
   cd material-goals
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
material-goals/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable React components
│   ├── lib/             # Utility functions and configurations
│   ├── hooks/           # Custom React hooks
│   ├── store/           # Zustand store
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── .env.local          # Environment variables (not in git)
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material Design 3 for the design system
- Next.js team for the amazing framework
- Vercel for the deployment platform
- All contributors who help improve this project