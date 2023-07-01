# Flatdango

Flatdango is a web application that allows users to purchase movie tickets from Flatiron Movie Theater. Users can view movie details, such as the poster, title, runtime, showtime, and available tickets, and buy tickets for available shows.

## Table of Contents
- [Project Description](#project-description)
- [Project Setup](#Project Setup)
- [Usage](#usage)
- [Author & License](#Author & License)

## Project Description

Flatdango is a mini web application built using JavaScript that interacts with a local server running JSON DB server. It fetches data from the server to display movie details and allows users to purchase tickets.

- Display the details of the first movie, including its poster, title, runtime, showtime, and available tickets, on page load.
- Show a menu of all movies on the left side of the page.
- Allow users to buy tickets for a movie, with the number of available tickets decreasing on the frontend.
- Allow users to click on a movie in the menu to replace the currently displayed movie's details with the selected movie's details.
- Indicate when a movie is sold out by changing the button text to "Sold Out" and adding a "sold-out" class to the film item in the menu.

## Project Setup

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd flatdango`
3. Install the dependencies: `npm install`
4. Start the local development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to access the Flatdango application.

## Usage

1. When the Flatdango application is loaded, you will see the details of the first movie, including its poster, title, runtime, showtime, and available tickets.
2. On the left side of the page, you will find a menu listing all the movies available at Flatiron Movie Theater.
3. Click on a movie in the menu to view its details in the main section of the page.
4. To purchase a ticket for a movie, click the "Book Ticket" button. The number of available tickets will decrease, and if all tickets are sold, the button will change to "Sold Out".

## Author & License
Author: Eric Muthui.
This project is licensed under the MIT License.