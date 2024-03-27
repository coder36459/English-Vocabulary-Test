"use strict";
document.body.innerHTML = "<div id=\"root\"></div>";

const Test = () => {
  const Title = () => {return React.createElement("h1", { class: "p-3 mb-3 mt-2 text-uppercase", id: "title" }, "english vocabulary test");};

  return (
    React.createElement(React.Fragment, null, 
    React.createElement("div", { class: "row" }, 
    React.createElement("div", { class: "col-3" }), 
    React.createElement("div", { class: "col-md-6 text-center" }, 
    React.createElement(Title, null), 
    React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize", id: "first-nav" }), 
    React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize", id: "second-nav" }), 
    React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize", id: "third-nav" }), 
    React.createElement("div", { class: "row mt-4 m-3" }, 
    React.createElement("div", { class: "col-6 text-start", id: "category" }), 
    React.createElement("div", { class: "col-6 text-end", id: "number" })), 

    React.createElement("h2", { class: "text-bg-info p-4 m-3", id: "definition" }), 
    React.createElement("p", { class: "text-center mt-4", id: "choose-term" }), 
    React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-one" }), 
    React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-two" }), 
    React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-three" }), 
    React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-four" }), 
    React.createElement("div", { class: "row mt-4 m-3" }, 
    React.createElement("div", { class: "col-6 text-start", id: "time-duration" }), 
    React.createElement("div", { class: "col-6 text-end", id: "your-score" }))), 


    React.createElement("div", { class: "col-3" })), 

    React.createElement("div", { class: "m-3 text-center", id: "footer" })));


};

ReactDOM.createRoot(document.getElementById("root")).render( React.createElement(Test, null));
