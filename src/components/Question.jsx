import React, { Component } from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  render() {
    const { id, question, answer } = this.props;
    const { isSelected } = this.state;

    return (
      <div className="flex flex-col py-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={this.handleClick}
        >
          <h2>
            <button
              id={`${id}-button`}
              aria-expanded={isSelected}
              aria-controls={`${id}-panel`}
              className="text-lg text-darkPurple font-semibold hover:text-brightPurple text-left"
            >
              {question}
            </button>
          </h2>
          <img
            src={isSelected ? minusIcon : plusIcon}
            alt={isSelected ? "Collapse icon" : "Expand icon"}
          />
        </div>

        <div id={`${id}-panel`}>
          {isSelected && <p className="text-grayishPurple mt-6">{answer}</p>}
        </div>
      </div>
    );
  }
}

export default Question;
