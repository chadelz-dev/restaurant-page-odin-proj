import homeImage from './images/home-image.jpg';

export function renderHome() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Caveman Cafe';

  const heroImage = document.createElement('img');
  heroImage.src = homeImage;
  heroImage.classList.add('hero-image');
  heroImage.alt = 'Caveman Cafe exterior';

  const description = document.createElement('p');
  description.textContent =
    'Experience primal dining with fresh, hearty ingredients. Join us for a meal that fuels your inner fire.';

  homeContainer.append(headline, heroImage, description);
  return homeContainer;
}
