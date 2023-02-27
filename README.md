# github-repositories-challenge

This is a simple web application built with React and Vite. It uses TypeScript for type safety and Tailwind CSS for styling, and it is designed to help users search for GitHub users and view their repositories. The application utilizes the official GitHub API to fetch the data, and it allows the user to filter through the repositories by name using a search bar. It also features responsive design for mobile and desktop screens.

## Technologies Used
The following technologies and libraries were used to build this application:

- [ReactJS](https://es.reactjs.org/): A popular JavaScript library for building user interfaces.
- [ViteJS](https://vitejs.dev/): A build tool that focuses on speed and simplicity.
- TypeScript: A superset of JavaScript that adds optional static typing and other features to the language.
- Tailwind CSS: A utility-first CSS framework that makes it easy to style web applications.
- [@tanstack/react-query](https://tanstack.com/query/latest/docs/react/overview): A library for managing remote data in React. It simplifies fetching, caching, and updating data from APIs.
- [React-router-dom](https://reactrouter.com/en/main): A library for handling client-side routing in React applications.
- [react-icons](https://react-icons.github.io/react-icons): A library of icons for React applications.

## How to Run the Application
To run the application, you will need to have Node.js and npm (or Yarn) installed on your computer. Then, follow these steps:

1. Clone the repository to your local machine: git clone https://github.com/pauciv/github-repositories-challenge.git.
2. Install the dependencies: npm install or yarn install.
3. Start the development server: npm run dev or yarn dev.
4. Open your browser and go to http://localhost:5173/.

## Future Improvements
Here are some possible future improvements that could be made to this application:

- Upgrade the application to use the v4 API (GitHub GraphQL API). This is currently in progress and will provide more precise and flexible queries than the GitHub REST API.
- Add pagination to the repository list to improve performance for users with a large number of repositories.
- Implement error handling for failed API requests.
- Improve the search functionality to allow searching by repository description or language.
- Add the ability to sort repositories by different criteria.

## Feedback
I really enjoyed developing this application and learning more about TypeScript and the benefits it provides for code quality and maintainability. This was my first time using Tailwind CSS and I was impressed with how it simplifies the styling process. I also really enjoyed using react-query and found that it allowed me to write less code and made fetching data from the GitHub API a breeze. Overall, this was a great exercise in building a React application from scratch and integrating various libraries to make it functional and user-friendly.