import React from 'react';

export default class AddItem extends React.Component {
  state = {
    error: undefined
  };
  handleAddItem = (e) => {
    console.log("add")
    e.preventDefault();
    const item = e.target.elements.assessment.value.trim();
    const weight = e.target.elements.weight.value.trim();
    const mark = e.target.elements.mark.value.trim(); 
    const error = this.props.handleAddItem(item, weight, mark);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.assessment.value = '';
      e.target.elements.weight.value = '';
      e.target.elements.mark.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-item-error">{this.state.error}</p>}
        <form className="add-item" onSubmit={this.handleAddItem}>
          <input className="add-item__input" type="text" name="assessment" placeholder="Enter Assesssment..." />
          <input className="add-item__input" type="text" name="weight" placeholder="Enter Weight..."/>
          <input className="add-item__input" type="text" name="mark" placeholder="Enter Mark..."/>
          <button className="button">Add Assessment</button>
        </form>
      </div>
    );
  }
}
