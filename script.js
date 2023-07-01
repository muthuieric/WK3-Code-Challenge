const firstDetails = document.querySelector("#firstMovie");

document.addEventListener("DOMContentLoaded", (e) => {
  //   const menu = document.querySelector("#movieMenu");

  //function to renter the first movie's details
  function renderFirstMovieDetails(data) {
    let availableTickets = data.capacity - data.tickets_sold;


    //posting each film's image
    document.querySelector("#firstMovie").style.backgroundImage = `url(${data.poster})`;

    firstDetails.innerHTML = `
    
    <div id="firstMovieDetails">
    <h3 style="margin-bottom: 20px;">${data.title}</h3>
    <p style="font-size: 12px; margin-bottom: 8px;">${data.description}</p>
    <p style="font-size: 12px; margin-bottom: 8px;">Runtime: ${data.runtime}</p>
    <p style="font-size: 12px; margin-bottom: 8px;">Showtime: ${data.showtime}</p>
    <p id="availableTickets" style="font-size: 12px; margin-bottom: 8px;">Available Tickets: ${availableTickets}</p>
    <button class = "sellingTicket">Book Ticket</button>
    </div>
    `;

    let but = document.querySelector(".sellingTicket");
    but.addEventListener("click", () => {
      availableTickets = availableTickets - 1;

      if (availableTickets > 0) {
        document.querySelector("#availableTickets").innerHTML = `Available Tickets: ${availableTickets}`;
      } else {
        document.querySelector("#availableTickets").innerHTML = `Available Tickets: 0`;
        but.textContent = "Sold Out";
      }
    });

    // firstDetails.appendChild(but);
  }

  //function to render one film
  function renderOneFilm(film) {
    //list all movies in the menu
    const list = document.querySelector("#films");
    const LI = document.createElement("li");
    LI.textContent = film.title;
    LI.classList.add("filmItem");
    LI.addEventListener("click", () => renderFirstMovieDetails(film));

    list.appendChild(LI);
  }

  //get request function
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((data) => {
      //populating movie list
      data.forEach((film) => {
        renderOneFilm(film);
      });
      //populating first movie details
      renderFirstMovieDetails(data[0]);
      //populating each movie details
      //   renderMovieDetails(film);
    });
});