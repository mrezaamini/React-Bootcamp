# Snapchat Clone Project

This repository contains a Snapchat clone project implemented using React. The project includes key functionalities of Snapchat, allowing users to send and receive self-destructing photos and videos. It leverages various libraries and technologies, including React Router, Material UI, Redux, React UUID, React Time Ago, React Webcam, Firebase Firestore, Firebase Storage, and Google Authentication.

![Preview](https://github.com/mrezaamini/React-Bootcamp/blob/main/snapchat-project/preview.png)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Features

- **React Router**: The project utilizes React Router for handling navigation, enabling a smooth multi-page application experience.
- **Material UI**: Material UI, a popular UI component library, is used to create an attractive and responsive user interface.
- **Redux**: Redux is implemented to manage the application's global state, making it easier to handle data and user interactions.
- **React UUID**: React UUID is used to generate unique identifiers for photos and videos, ensuring proper organization and retrieval of media files.
- **React Time Ago**: React Time Ago is integrated to display timestamps in a user-friendly and human-readable format.
- **React Webcam**: React Webcam is utilized to capture live photos and videos directly from the user's device camera.
- **Firebase Firestore**: Firebase Firestore is used to store and manage user data, including sent and received photos and videos.
- **Firebase Storage**: Firebase Storage is used to securely store media files, ensuring efficient retrieval and access.
- **Google Authentication**: Google Authentication is implemented to provide users with a secure and convenient login method.

## Getting Started

To get started with the Snapchat clone project, follow the steps below:

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Navigate to the project directory:

```bash
cd snapchat-project
```

2. Install the project dependencies:

```bash
npm install
```

3. Configure Firebase Firestore, Firebase Storage, and Google Authentication:

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Retrieve your Firebase configuration information (API keys, etc.) and replace the placeholders in `src/firebase.js` with your own.
   - Enable the Firestore, Storage, and Google Authentication services in your Firebase project.

4. Start the development server:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000` to see the Snapchat clone project in action.

## Project Structure

The project follows a standard React project structure, with the main files and directories organized as follows:

- `public/`: Contains the static assets and HTML template for the project.
- `src/`: Contains reusable components used throughout the project.
- `src/features/`: Contains Redux reducers and actions for managing application state and data.
- `src/App.js`: The entry point of the application.
- `src/index.js`: Responsible for rendering the root component and initializing the React application.

## Contributing

Contributions to the Snapchat clone project are welcome! If you find any bugs, issues, or have suggestions for improvement, please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this code as per the terms of the license.

## Acknowledgments

- The Snapchat clone project was inspired by the popular social media app, Snapchat.
- Thanks to the open-source community for providing the amazing libraries and tools used in this project.

## Contact

If you have any questions or inquiries about the Snapchat clone project, please feel free to contact me.
