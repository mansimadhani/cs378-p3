import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({id, title, description, imageName, price, count, handleIncrement, handleDecrement}) => {

    return (
        <div class="row menu-item">
        <div class="col-5 menu-img-col">
          <img class="menu-img" src={'images/' + imageName} alt={title}/>
        </div>

        <div class="col-7">
          <div class="row">

            <div class="col">
              <h3 class="item-name">{title}</h3>
              <p class="item-desc">{description}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-9"></div>
            <div class="col-3 price">{'$' + price}</div>
          </div>
          <div class="row">
            <div class="col"></div>
            <div class="col-2">
              <button class="item-button" onClick={() => handleDecrement(id - 1)}>-</button>
            </div>
            <div class="col-1">
              {count}
            </div>
            <div class="col-2">
              <button class="item-button" onClick={() => handleIncrement(id - 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
    
};

export default MenuItem;
