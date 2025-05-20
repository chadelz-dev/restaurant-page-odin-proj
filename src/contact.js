export function renderContact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Us';

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');

  const details = [
    'Email: info@cavemancafe.com',
    'Phone: (+27) 123-4567',
    'Address: 123 Stone Age Lane, Primal City',
  ];

  details.forEach((detail) => {
    const contactItem = document.createElement('div');
    contactItem.classList.add('contact-item');
    contactItem.textContent = detail;
    contactInfo.append(contactItem);
  });

  contactContainer.append(headline, contactInfo);
  return contactContainer;
}
