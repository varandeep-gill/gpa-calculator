import React from 'react';

const Item = (props) => (
  <div className="item">
    <p className="item__text">{props.count}. {props.itemText}</p>
    <p className="item__text">{props.weightText}</p>
    <p className="item__text">{props.markText}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteItem(props.itemText, props.weightText, props.markText);
      }}
    >
      Remove
      </button>
  </div>
);

export default Item;
