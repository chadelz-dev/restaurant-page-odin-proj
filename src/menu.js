import menuImageOne from './images/menu-item-image-one.jpg';
import menuImageTwo from './images/menu-item-image-two.jpg';
import menuImageThree from './images/menu-item-image-three.jpg';
import menuImageFour from './images/menu-item-image-four.jpg';
import menuImageFive from './images/menu-item-image-five.jpg';
import menuImageSix from './images/menu-item-image-six.jpg';
import menuImageSeven from './images/menu-item-image-seven.jpg';
import menuImageEight from './images/menu-item-image-eight.jpg';

export function renderMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  const menuItems = [
    { name: 'Roast Chicken', price: '22 pebbles', image: menuImageOne },
    { name: 'Steak', price: '28 pebbles', image: menuImageTwo },
    { name: 'Grilled Fish', price: '24 pebbles', image: menuImageThree },
    { name: 'Spit Suckling Pig', price: '60 pebbles', image: menuImageFour },
    { name: 'Grilled Crab', price: '26 pebbles', image: menuImageFive },
    { name: 'Spit Lamb', price: '90 pebbles', image: menuImageSix },
    { name: 'Raw Milk', price: '8 pebbles', image: menuImageSeven },
    { name: 'Spring Water', price: 'free', image: menuImageEight },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.name;

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;

    menuItem.append(itemImage, itemName, itemPrice);
    menuGrid.append(menuItem);
  });

  menuContainer.append(headline, menuGrid);
  return menuContainer;
}
