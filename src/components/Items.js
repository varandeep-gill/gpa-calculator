import React from 'react';
import Item from './Item';

const Items = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Assessment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Weight (out of 1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp; Mark (out of 100)
      </h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteItems}
      >
        Remove All
    </button>
    </div>

    {props.items.length === 0 && <p className="widget__message">Please add an assessment to get started!</p>}
    {
      props.items.map((item, index) => (
        <Item
          key={item}
          itemText={item}
          weightText={props.weights[index]}
          markText={props.marks[index]}
          count={index + 1}
          handleDeleteItem={props.handleDeleteItem}
        />
      ))
    }
  </div>
);

export default Items;
