import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';
import './styles.css';

const contentDiv = document.getElementById('content');
const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

function switchTab(tabFunction) {
  contentDiv.innerHTML = '';
  contentDiv.append(tabFunction());
}

homeTab.addEventListener('click', () => switchTab(renderHome));
menuTab.addEventListener('click', () => switchTab(renderMenu));
contactTab.addEventListener('click', () => switchTab(renderContact));

switchTab(renderHome);
