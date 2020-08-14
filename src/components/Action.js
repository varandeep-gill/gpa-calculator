import React from 'react';

export default class Action extends React.Component {
  state = {
    error: 'Welcome!'
  };
  handleCalculateFinal = (e) => {
    e.preventDefault();
    const wantedMark = e.target.elements.gpa.value.trim();
    if (wantedMark == parseInt(wantedMark, 10) || wantedMark == parseFloat(wantedMark, 10)) {
      const error = this.props.getFinalMark(wantedMark);
      this.setState(() => ({ error }));
      if (!error) {
        e.target.elements.gpa.value= '';
      }
    } else {
      const error = "Error: Desired GPA is not a valid number.";
      this.setState(() => ({ error }));
    }
  };

  handleCalculateGPA = (e) => {
    e.preventDefault();
    const error = this.props.calculateGPA();
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.gpa.value= '';
    }
  };

  render() {
    return (
      <div>
        <center>
        <form className="add-item" onSubmit={this.handleCalculateFinal} >
          <input className="add-item__gpa" type="text" name="gpa" placeholder="Enter Desired GPA..." />
          <button
            className="big-button"
          >
            Calculate Needed Exam Mark
          </button>
        </form>
        <form className="add-item" onSubmit={this.handleCalculateGPA}>
          <button
          className="big-button"
        >
          Calculate GPA
          </button>
        </form>
        <div className="action-div">
          {this.state.error && <p className="action-title">{this.state.error}</p>}
        </div>
        </center>
        </div>
    );
  }
};

