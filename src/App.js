import './App.css';
import MenuItem from './components/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const MenuHeader = ({logoImage, slogan, description}) => {
  return (
    <div class="container">
      <div class="row logo">
        <div class="col">
          <img class="logo" src={'images/' + logoImage} alt="A Campus Cafe Logo."/>
        </div>
      </div>

      <div class="row" id="title">
        <div class="col top-content">
          <h2 class="slogan">{slogan}</h2>
          <h1 class="main-desc">{description}</h1>
        </div>
      </div>

    </div>    
  )
}

function App() {

  const [counts, setCounts] = useState(new Array (menuItems.length).fill(0))

  const handleIncrement = (index) => {
    const newCounts = counts.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounts (newCounts);
  }

  const handleDecrement = (index) => {
    const newCounts = counts.map((c, i) => {
      if (i === index && counts[i] > 0) {
        return c - 1;
      } else {
        return c;
      }
    });
    setCounts (newCounts);
  }

  const getSubtotal = () => {
    let subtotal = 0;
    for (let index in counts) {
      subtotal += (counts[index] || 0) * (menuItems[index].price);
    }
    return subtotal.toFixed(2);
  }

  const handleClearAll = () => {
    const newCounts = counts.map((c, i) => {
      return 0;
    });
    setCounts (newCounts);
  }

  const handleOrder = () => {
    let message = "Order Placed! \n\n";

    if (getSubtotal() === 0)
    {
      alert("No items in cart!");
    } else {
      for (let index in counts) {
        if (counts[index] > 0)
        {
          message += (counts[index] + " " + menuItems[index].title + "\n");
        }
      }
      alert (message);
    }
  }

  return (
    <div>
      <MenuHeader logoImage={'logo.png'} slogan={'Delicious, From-Scratch Recipes Close at Hand'} description={'The Fresh Choice of UT!'}/>
      <div className="menu">
        {menuItems.map ((item) => (
          <MenuItem 
            id={item.id}
            title={item.title} 
            description={item.description} 
            imageName={item.imageName} 
            price={item.price} 
            count={counts[item.id - 1]}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}/>
        ))}

        <div className="row menu-bottom">
          <div class="col">
            <p>Subtotal: ${getSubtotal()}</p>
          </div>
          <div class="col-3">
            <button class="order-button" onClick={() => handleOrder()}> Order </button>
          </div>
          <div class="col-4">
            <button class="clear-button" onClick={() => handleClearAll()}>Clear All</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
