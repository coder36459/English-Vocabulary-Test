"use strict";
document.body.innerHTML = "<div id=\"root\"></div>";

"use strict";
const Test = () => {
  const Title = () => {return (
      React.createElement("h1", { class: "p-3 mb-3 mt-2 text-uppercase", id: "title" }, "english vocabulary test"));
  };
  const CatBtn = () => {return (
      React.createElement("nav", null, 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize me-2", id: "first-nav" }, "relationships"), 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize me-2", id: "second-nav" }, "cinema"), 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize", id: "third-nav" }, "random")));

  };
  const Footer = () => {return (
      React.createElement("div", { class: "m-3 text-center", id: "footer" }, "Made by ", React.createElement("a", { href: "https://www.linkedin.com/in/maciej-browarski", target: "_blank" }, "Maciej Browarski")));
  };

  return (
    React.createElement("main", null, 
    React.createElement("div", { class: "row" }, 
    React.createElement("div", { class: "col-3" }), 
    React.createElement("div", { class: "col-md-6 text-center" }, 
    React.createElement(Title, null), 
    React.createElement(CatBtn, null), 
    React.createElement("div", { class: "row mt-4 m-3" }, 
    React.createElement("div", { class: "col-6 text-start", id: "category" }, "Category: Cinema"), 
    React.createElement("div", { class: "col-6 text-end", id: "number" }, "Definition 1 of 20")), 

    React.createElement("h2", { class: "text-bg-info p-4 m-3", id: "definition" }, "definition"), 
    React.createElement("p", { class: "text-center mt-4", id: "choose-term" }, "Choose matching term:"), 
    React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-one" }, "term one"), 
    React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-two" }, "term two"), 
    React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-three" }, "term three"), 
    React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-four" }, "term four"), 
    React.createElement("div", { class: "row mt-4 m-3" }, 
    React.createElement("div", { class: "col-6 text-start", id: "time-duration" }, "Test duration: 5:23"), 
    React.createElement("div", { class: "col-6 text-end", id: "your-score" }, "Your score: 20/20 (100%)"))), 


    React.createElement("div", { class: "col-3" })), 

    React.createElement(Footer, null)));


};

ReactDOM.createRoot(document.getElementById("root")).render( React.createElement(Test, null));
