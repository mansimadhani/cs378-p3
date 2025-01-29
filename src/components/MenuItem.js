import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {

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
            <div class="col-8 price">{'$' + price}</div>
            <div class="col-4">
              <button class="add-button">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
    
};

export default MenuItem;
