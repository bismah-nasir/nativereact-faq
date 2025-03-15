import React, { Component } from "react";
import Question from "./Question";
// import { QUESTIONS } from "../data";
import {QUESTIONS} from "../data/index.js";  

class Questions extends Component {
  render() {
    return (
      <ul className="mt-4 divide-y-2 divide-slate-100">
        {QUESTIONS.map((question) => (
          <li key={question.id}>
            <Question {...question} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Questions;
