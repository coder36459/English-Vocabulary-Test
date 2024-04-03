"use strict";
const terms = [];

let dTerms = [];
const l = "abcdefghijklmnopqrstuvwxyz";
let a = [],j = 0;
a = l.split("");
while (j < terms.length) {
  function decrypter(t, c) {
    let text = t,cipher = c,decrypt = "",d,i;
    d = text.split("");
    i = 0;
    while (i < d.length) {
      if (d[i] == " " || d[i] == "," || d[i] == "(" || d[i] == ")") {
        decrypt += d[i];
      } else
      {
        if (a.indexOf(d[i]) < cipher) {
          decrypt += a[a.length + a.indexOf(d[i]) - cipher];
        } else
        {
          decrypt += a[a.indexOf(d[i]) - cipher];
        }
      }
      i += 1;
    }
    dTerms.push(decrypt);
  }
  decrypter(terms[j], 5);
  j += 1;
}

let randC = [],randR = [],x;
for (x in dTerms) {
  if (x < 48) {
    randR.push(dTerms[x]);
  }
  if (x >= 48) {
    randC.push(dTerms[x]);
  }
}

function randomTerms(arr, qua) {
  let arrayTerms = arr,quantityDef = qua,i = 0,j = 0,k = 0,def = [],term = [],rand = [],r;

  while (i < arrayTerms.length) {
    if (i % 2) {
      def.push(arrayTerms[i]);
    } else
    {
      term.push(arrayTerms[i]);
    }
    i += 1;
  }

  while (j < 10e3) {
    r = Math.floor(Math.random() * def.length);
    if (rand.includes(def[r]) == false) {
      if (rand.length < quantityDef) {
        rand.push(def[r]);
        rand.push([term[r]]);
      }
    }
    j += 1;
  }

  while (k < rand.length) {
    if (k % 2) {
      let u = 0;
      while (u < 10e3) {
        r = Math.floor(Math.random() * term.length);
        if (rand[k].includes(term[r]) == false) {
          if (rand[k].length < 4) {
            rand[k].push(term[r]);
          }
        }
        u += 1;
      }
      rand[k].sort();
    }
    k += 1;
  }
  return rand;
}

const rand1 = randomTerms(dTerms, 39);
const rand2 = randomTerms(randC, 39);
const rand3 = randomTerms(randR, 39);

const Test = () => {
  const [cat, setCat] = React.useState("Random");
  const [count, setCount] = React.useState(0);
  const [def, setDef] = React.useState(1);
  const [percent, setPercent] = React.useState(0);
  const [timerMinutes, setTimerMinutes] = React.useState(0);
  const [timerSeconds, setTimerSeconds] = React.useState(0);
  const [cRand, setCRand] = React.useState(0);
  const [cTRand, setCTRand] = React.useState(1);
  const [score, setScore] = React.useState(0);

  const Title = () => {
    return (
      React.createElement("h1", { class: "p-3 mb-3 mt-2 text-uppercase", id: "title" }, "english vocabulary test"));

  };

  const CatBtn = () => {
    return (
      React.createElement("nav", null, 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize me-2", id: "first-nav", onClick: rel }, "relationships"), 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize me-2", id: "second-nav", onClick: cin }, "cinema"), 
      React.createElement("button", { type: "button", class: "btn btn-secondary text-capitalize", id: "third-nav", onClick: ran }, "random")));


  };

  let defT, termOne, termTwo, termThree, termFour;

  const DefTerm = () => {
    if (cat == "Relationships") {
      defT = rand3[cRand];
      termOne = rand3[cTRand][0];
      termTwo = rand3[cTRand][1];
      termThree = rand3[cTRand][2];
      termFour = rand3[cTRand][3];
      return (
        React.createElement("section", null, 
        React.createElement("h2", { class: "text-bg-info p-4 m-3", id: "definition" }, defT.substring(0, 32)), 
        React.createElement("p", { class: "text-center mt-4", id: "choose-term" }, "Choose matching term:"), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-one", onClick: countDefOne }, termOne), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-two", onClick: countDefTwo }, termTwo), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-three", onClick: countDefThree }, termThree), 
        React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-four", onClick: countDefFour }, termFour)));


    }
    if (cat == "Cinema") {
      defT = rand2[cRand];
      termOne = rand2[cTRand][0];
      termTwo = rand2[cTRand][1];
      termThree = rand2[cTRand][2];
      termFour = rand2[cTRand][3];
      return (
        React.createElement("section", null, 
        React.createElement("h2", { class: "text-bg-info p-4 m-3", id: "definition" }, defT.substring(0, 32)), 
        React.createElement("p", { class: "text-center mt-4", id: "choose-term" }, "Choose matching term:"), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-one", onClick: countDefOne }, termOne), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-two", onClick: countDefTwo }, termTwo), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-three", onClick: countDefThree }, termThree), 
        React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-four", onClick: countDefFour }, termFour)));


    }
    if (cat == "Random") {
      defT = rand1[cRand];
      termOne = rand1[cTRand][0];
      termTwo = rand1[cTRand][1];
      termThree = rand1[cTRand][2];
      termFour = rand1[cTRand][3];
      return (
        React.createElement("section", null, 
        React.createElement("h2", { class: "text-bg-info p-4 m-3", id: "definition" }, defT.substring(0, 32)), 
        React.createElement("p", { class: "text-center mt-4", id: "choose-term" }, "Choose matching term:"), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-one", onClick: countDefOne }, termOne), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-two", onClick: countDefTwo }, termTwo), 
        React.createElement("button", { type: "button", class: "btn btn-dark me-1", id: "choose-three", onClick: countDefThree }, termThree), 
        React.createElement("button", { type: "button", class: "btn btn-dark", id: "choose-four", onClick: countDefFour }, termFour)));


    }
  };

  const Footer = () => {
    return (
      React.createElement("div", { class: "m-3 text-center", id: "footer" }, "Made by ", React.createElement("a", { href: "https://www.linkedin.com/in/maciej-browarski", target: "_blank" }, "Maciej Browarski")));

  };

  const countDefOne = () => {
    if (count < 20) {
      setCount(count + 1);
      if (cTRand < 39) {
        setCRand(cRand + 2);
        setCTRand(cTRand + 2);
      }
      if (dTerms.indexOf(termOne) == dTerms.indexOf(defT) - 1) {
        setPercent(0);
        setScore(score + 1);
        setPercent(Math.floor((score + 1) / 20 * 100));
      }
      if (def < 20) {
        setDef(def + 1);
      }
    }
  };

  const countDefTwo = () => {
    if (count < 20) {
      setCount(count + 1);
      if (cTRand < 39) {
        setCRand(cRand + 2);
        setCTRand(cTRand + 2);
      }
      if (dTerms.indexOf(termTwo) == dTerms.indexOf(defT) - 1) {
        setPercent(0);
        setScore(score + 1);
        setPercent(Math.floor((score + 1) / 20 * 100));
      }
      if (def < 20) {
        setDef(def + 1);
      }
    }
  };

  const countDefThree = () => {
    if (count < 20) {
      setCount(count + 1);
      if (cTRand < 39) {
        setCRand(cRand + 2);
        setCTRand(cTRand + 2);
      }
      if (dTerms.indexOf(termThree) == dTerms.indexOf(defT) - 1) {
        setPercent(0);
        setScore(score + 1);
        setPercent(Math.floor((score + 1) / 20 * 100));
      }
      if (def < 20) {
        setDef(def + 1);
      }
    }
  };

  const countDefFour = () => {
    if (count < 20) {
      setCount(count + 1);
      if (cTRand < 39) {
        setCRand(cRand + 2);
        setCTRand(cTRand + 2);
      }
      if (dTerms.indexOf(termFour) == dTerms.indexOf(defT) - 1) {
        setPercent(0);
        setScore(score + 1);
        setPercent(Math.floor((score + 1) / 20 * 100));
      }
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
    setCRand(0);
    setCTRand(1);
    setScore(0);
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

    React.createElement(DefTerm, null), 
    React.createElement("div", { class: "row mt-4 m-3" }, 
    React.createElement("div", { class: "col-6 text-start", id: "time-duration" }, "Test duration: ", timeDuration()), 
    React.createElement("div", { class: "col-6 text-end", id: "your-score" }, "Your score: ", score, "/20 (", percent, "%)"))), 


    React.createElement("div", { class: "col-3" })), 

    React.createElement(Footer, null)));


};

ReactDOM.createRoot(document.getElementById("root")).render( React.createElement(Test, null));
