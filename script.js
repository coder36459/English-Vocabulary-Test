"use strict";
document.body.innerHTML = "<div id=\"root\"></div>";

"use strict";
const Test = () => {
  const [cat, setCat] = React.useState("Random");
  const [count, setCount] = React.useState(0);
  const [def, setDef] = React.useState(1);
  const [percent, setPercent] = React.useState(0);
  const [timerMinutes, setTimerMinutes] = React.useState(0);
  const [timerSeconds, setTimerSeconds] = React.useState(0);

  const Title = () => {return (
      React.createElement("h1", { class: "p-3 mb-3 mt-2 text-uppercase", id: "title" }, "english vocabulary test"));
  };

  const CatBtn = () => {return (
      React.createElement("nav", null, 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize me-2", id: "first-nav", onClick: rel }, "relationships"), 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize me-2", id: "second-nav", onClick: cin }, "cinema"), 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize", id: "third-nav", onClick: ran }, "random")));

  };

  const Footer = () => {return (
      React.createElement("div", { class: "m-3 text-center", id: "footer" }, "Made by ", React.createElement("a", { href: "https://www.linkedin.com/in/maciej-browarski", target: "_blank" }, "Maciej Browarski")));
  };

  const countDef = () => {
    if (count < 20) {
      setCount(count + 1);
      setPercent((count + 1) * 5);
      if (def < 20) {
        setDef(def + 1);
      }
    }
  };

  const reset = () => {
    setCount(0);
    setDef(1);
    setPercent(0);
    setTimerMinutes(0);
    setTimerSeconds(0);
  };

  const rel = () => {
    setCat("Relationships");
    if (count > 0) {
      reset();
    }
  };

  const cin = () => {
    setCat("Cinema");
    if (count > 0) {
      reset();
    }
  };

  const ran = () => {
    setCat("Random");
    if (count > 0) {
      reset();
    }
  };

  const timeDuration = () => {
    let fS = timerSeconds;
    if (fS < 10) {
      fS = "0" + timerSeconds;
    }
    return timerMinutes + ":" + fS;
  };

  React.useEffect(() => {
    if (count > 0 && count < 20) {
      const interval = setInterval(() => {
        setTimerSeconds(timerSeconds + 1);
        if (timerSeconds == 59) {
          setTimerSeconds(0);
          setTimerMinutes(timerMinutes + 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [count, timerSeconds, timerMinutes]);

  return (
    React.createElement("main", null, 
    React.createElement("div", { class: "row" }, 
    React.createElement("div", { class: "col-3" }), 
    React.createElement("div", { class: "col-md-6 text-center" }, 
    React.createElement(Title, null), 
    React.createElement(CatBtn, null), 
    React.createElement("div", { class: "row mt-4 m-3" }, 
    React.createElement("div", { class: "col-6 text-start", id: "category" }, "Category: ", cat), 
    React.createElement("div", { class: "col-6 text-end", id: "number" }, "Definition ", def, " of 20")), 

    React.createElement("h2", { class: "text-bg-info p-4 m-3", id: "definition" }, "definition"), 
    React.createElement("p", { class: "text-center mt-4", id: "choose-term" }, "Choose matching term:"), 
    React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-one", onClick: countDef }, "term one"), 
    React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-two", onClick: countDef }, "term two"), 
    React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-three", onClick: countDef }, "term three"), 
    React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-four", onClick: countDef }, "term four"), 
    React.createElement("div", { class: "row mt-4 m-3" }, 
    React.createElement("div", { class: "col-6 text-start", id: "time-duration" }, "Test duration: ", timeDuration()), 
    React.createElement("div", { class: "col-6 text-end", id: "your-score" }, "Your score: ", count, "/20 (", percent, "%)"))), 


    React.createElement("div", { class: "col-3" })), 

    React.createElement(Footer, null)));


};

ReactDOM.createRoot(document.getElementById("root")).render( React.createElement(Test, null));
