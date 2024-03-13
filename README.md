# NumSwitch

## How to Run

This project uses npm for package management. Here are some commands you can use:

- `npm install`: Install the project dependencies.
- `npm dev` : Run the project
- `npm run test`: Run the unit tests using Vitest.
- `npm run storybook`: Start the Storybook.

## Technologies Used

This project uses several technologies:

- [Vitest](https://vitest.dev/): A fast and lightweight test runner for Vite projects.
- [Storybook](https://storybook.js.org/): A tool for developing UI components in isolation.
- [tailwind](https://tailwindcss.com): Used for styling.

## Project Structure and Patterns

The project is structured in a modular way to promote code reusability. Here are some key points:

- `utils` folder: Contains utility functions that are used throughout the project. the functions used factory pattern to create different converters to have less code changes when adding new converter.
- Component-based architecture: The UI is built using a component-based architecture, which makes it easy to reuse UI elements across different parts of the application.

## Useful Links and Resources

Here are some resources that were used during the creation of this project:

- [Vitest Documentation](https://vitest.dev/guide/)
- [Roman numeral structure](https://www.mathsisfun.com/roman-numerals.html)

Please replace the placeholders with the actual details of your project.