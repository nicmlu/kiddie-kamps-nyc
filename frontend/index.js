document.addEventListener("DOMContentLoaded", () => {
  //fetchCamps();
  //add event listener to add camp button when page loads
  //let addCamp = document.querySelector(".btn.btn-primary.btn-lg");
  //addCamp.addEventListener(
  // "click",
  //event => displayCreateCampForm(event),
  //false
  //);
  //add event listener to add order book button when page loads
  //let campOrder = document.querySelector(".btn.btn-secondary.btn-lg");
  //campOrder.addEventListener("click", event => anotherFetch(event), false);
});

const BASE_URL = "http://127.0.0.1:3000";
// read to fetch camp index
function fetchCamps() {
  fetch(`${BASE_URL}/camps`)
    .then(resp => resp.json())
    .then(camps => {
      for (const camp of camps) {
        console.log("rails obj", camp);
        let c = new Camp(camp);
        console.log("js object", c);
      }
    });
}

// read to fetch camp reviews

// create a new camp profile
// create a new camp review
// delete a camp review
