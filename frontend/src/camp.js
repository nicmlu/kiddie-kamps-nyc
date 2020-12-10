class Camp {
  constructor(camp) {
    this.id = camp.id;
    this.name = camp.name;
    this.description = camp.description;
    this.website = camp.website;
    this.borough = camp.borough;
    this.zip = camp.zip;
    this.phone = camp.phone;
    this.img_src = camp.img_src;
  }

  // instance method that is going to render the camp object to the DOM
  //render() {
  // grab container for camps
  //let camps_area = document.querySelector(".row");

  // create camp card area
  //let camp_div = document.createElement("div");
  //camp_div.setAttribute("data-id", this.id);
  //camp_div.classList.add("col-lg-3");
  //camp_div.classList.add("col-md-6");
  //camp_div.classList.add("mb-4");

  // create camp card
  //let camp_card_div = document.createElement("div");
  //camp_card_div.classList.add("card");

  // create image element for camp
  //let card_img = document.createElement("img");
  //card_img.classList.add("card-img-top");

  //add camp image to card
  //let camp_img = `./src/${this.img_src}`;
  //camp_img.src = camp_img;

  // add card body
  //let card_body = document.createElement("div");
  //card_body.classList.add("card-body");

  // add card title
  //let card_title = document.createElement("h4");
  //card_title.className = "card-title";

  // add camp name to card
  //card_title.innerHTML += `${this.name}`;

  //Order camps alphabetically camps.sort()
  //function orderCamps() {
  //let camp_name = this.name;
  //camp_name.sort();
  //}

  // add card text area for reviews
  //let camp_reviews = document.createElement("p");
  //camp_reviews.className = "card-text";

  // add reviews
  //this.reviews.forEach(review => {
  //camp_reviews.innerHTML += `<br> ${review.rating} Stars: ${review.comment} - ${review.name}<br>`;
  //});

  // add card footer
  //let card_footer = document.createElement("div");
  //card_footer.classList.add("card-footer");

  // add footer button
  //let review_button = document.createElement("button");

  //review_button.classList.add("btn");
  //review_button.classList.add("btn-primary");
  //review_button.innerHTML = "Add Review";

  // display review form from button
  //review_button.addEventListener(
  //"click",
  //event => displayCreateReviewForm(event),
  //false
  //);

  // Add newly created elements to the DOM
  //camps_area.appendChild(camp_div);

  //camp_div.appendChild(camp_card_div);

  //camp_card_div.appendChild(camp_img);

  //camp_card_div.appendChild(card_body);

  //card_body.appendChild(card_title);

  //card_body.appendChild(camp_reviews);

  //camp_card_div.appendChild(card_footer);

  //card_footer.appendChild(review_button);
  //}

  //renderNewBook() {
  //document.querySelector("#camp-form").remove();

  //let camp_area = document.querySelector(".jumbotron");

  //camp_area.innerHTML += `<a href="#" data-id="${this.id}">${this.name}</a>
  //- ${this.borough} ${this.img_src}`;
  //}
}
