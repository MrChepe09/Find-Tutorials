import React, { useEffect, useState } from "react";
import "./styles.css";

const tutorials = {
  Python: {
    "Python Tutorial for Beginners - Telusko":
      "https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
    "Learn Python - Full Course for Beginners [Tutorial]":
      "https://www.youtube.com/watch?v=rfscVS0vtbw",
    "Python Tutorial For Beginners In Hindi (With Notes)":
      "https://www.youtube.com/watch?v=gfDE2a7MKjA"
  },
  CPP: {
    "C++ Tutorial for Beginners - Full Course":
      "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
    "C++ Tutorial From Basic to Advance":
      "https://www.youtube.com/watch?v=mUQZ1qmKlLY",
    "C++ Tutorial For Beginners: Learn C Plus Plus In Hindi":
      "https://www.youtube.com/watch?v=yGB9jhsEsr8"
  },
  JavaScript: {
    "JavaScript in the browser!": "https://www.youtube.com/watch?v=yLZazznWoAs",
    "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]":
      "https://www.youtube.com/watch?v=W6NZfCO5SIk"
  },
  Java: {
    "Intro to Java Programming - Course for Absolute Beginners":
      "https://www.youtube.com/watch?v=GoXwIVyNvX0",
    "Java Programming":
      "https://www.youtube.com/watch?v=VHbSopMyc4M&list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5"
  }
};

const languages = Object.keys(tutorials);

export default function App() {
  const selectLang = (event) => {
    // console.log(selected);
    const lang = event.target.value;
    setSelected(lang);

    const courseList = tutorials[lang];
    const clist = Object.keys(courseList);
    setCourses(courseList);
    setList(clist);
    // console.log(selected);
  };

  const [selected, setSelected] = useState("Python");
  const [courses, setCourses] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    const courseList = tutorials["Python"];
    const clist = Object.keys(courseList);
    setCourses(courseList);
    setList(clist);
  }, []);

  return (
    <div className="App">
      <h1>Find Programming Tutorials</h1>
      <div>
        {languages.map(function (lang) {
          return (
            <button onClick={selectLang} key={lang} value={lang}>
              {lang}
            </button>
          );
        })}
        ;
      </div>
      <hr />
      <h2 st>
        Tutorials for{" "}
        <span style={{ color: "red", fontWeight: "bolder" }}>{selected}</span>
      </h2>
      <div className="main-content">
        {list.map(function (ele) {
          return (
            <div key={ele} className="courses">
              <h2>{ele}</h2>
              <a target="_blank" href={courses[ele]}>
                COURSE LINK
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
