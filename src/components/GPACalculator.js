import React from 'react';
import AddItem from './AddItem';
import Action from './Action';
import Title from './Title';
import Items from './Items';

export default class GPACalculator extends React.Component {
  state = {
    items: [], 
    weights: [],
    marks: [],
  };

  handleDeleteItems = () => {
    this.setState(() => ({ items: [], weights: [], marks: [] }));
  };
 
  handleDeleteItem = (itemToRemove, weightToRemove, markToRemove) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => itemToRemove !== item),
      weights: prevState.weights.filter((weight) => weightToRemove !== weight),
      marks: prevState.marks.filter((mark) => markToRemove !== mark)
    }));
  };

  handleAddItem = (item, weight, mark) => {
    if (!item) {
      return 'Enter valid name to add item';
    } else if (this.state.items.indexOf(item) > -1) {
      return 'This assessment already exists'; 
    }
    else if (!(weight == parseInt(weight, 10) || weight == parseFloat(weight, 10)
    && mark == parseInt(mark, 10) || mark == parseFloat(mark, 10)
    )) {
      return 'Enter in valid numbers for assesment weight and grade'
    }
    this.setState((prevState) => ({
      items: prevState.items.concat(item),
      weights: prevState.weights.concat(weight),
      marks: prevState.marks.concat(mark),
    }));
  };

  calculateGPA = () => { 
    console.log("hello")
    var i;
    var sumOfWeights = 0;
    
    for (i = 0; i < this.state.marks.length; i++) {
      sumOfWeights += parseFloat(this.state.weights[i], 10);
    }

    if (sumOfWeights == 1) {
      console.log(sumOfWeights);
      var totalGrade = 0;
      for (i = 0; i < this.state.marks.length; i++) {
        totalGrade += (parseFloat(this.state.weights[i],10)*100)*(parseFloat(this.state.marks[i],10)/100);
      }
      console.log(totalGrade);
      return "Total GPA is " + totalGrade;
    }
    else {
      return "Error: Total weights do not add up to 1";
    }
  };

  getFinalMark = (wantedMark) => {
    var sumOfWeights = 0;
    var i;
    for (i = 0; i < this.state.marks.length; i++) {
      sumOfWeights += parseFloat(this.state.weights[i], 10);
    }
    console.log(sumOfWeights);
    var finalWeight = 1 - parseFloat(sumOfWeights,10);
    var currentGrade = 0;
    for (i = 0; i < this.state.marks.length; i++) {
      currentGrade += (parseFloat(this.state.weights[i],10)*100)*(parseFloat(this.state.marks[i],10)/100);
    }
    var neededGrade = parseFloat(wantedMark,10) - parseFloat(currentGrade,10);
    console.log(neededGrade)
    //if statement checking if neededGrade is negative or if neededGrade is bigger than finalWeight
    if (neededGrade > finalWeight*100) {
      return "It is impossible to obtain the wanted GPA";
    }
    if (neededGrade <= 0) {
      return "You already have the needed GPA!";
    }
  
    var examGrade = neededGrade/finalWeight; //exam mark student needs
    return "Mark needed on exam is " + examGrade + "%";
  };


  componentDidMount() {
    try { 
      const jsonItems = localStorage.getItem('items');
      const jsonWeights = localStorage.getItem('weights');
      const jsonMarks = localStorage.getItem('marks');
      const items = JSON.parse(jsonItems);
      const weights = JSON.parse(jsonWeights);
      const marks = JSON.parse(jsonMarks);

      if (items) {
        this.setState(() => ({ items , weights, marks}));
      }
    } catch (e) {
      // blank
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      const jsonItems = JSON.stringify(this.state.items);
      const jsonWeights = JSON.stringify(this.state.weights);
      const jsonMarks = JSON.stringify(this.state.marks);
      localStorage.setItem('items', jsonItems);
      localStorage.setItem('weights', jsonWeights);
      localStorage.setItem('marks', jsonMarks);
    }
  }
  

  render() {
    return (
      <div>
        <Title title='GPA Calculator' />
        <br /> <br />
        <div className="container">       
          <div className="widget">
            <Items
              items={this.state.items}
              weights={this.state.weights}
              marks={this.state.marks}
              handleDeleteItems={this.handleDeleteItems}
              handleDeleteItem={this.handleDeleteItem}
            />
            <AddItem
              handleAddItem={this.handleAddItem}
            />
          </div>
          <Action
            calculateGPA={this.calculateGPA}
            getFinalMark={this.getFinalMark}
          />
        </div>
      </div>
    );
  }
}


