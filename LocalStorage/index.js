document.addEventListener('DOMContentLoaded', () => {
  const userDivOptions = JSON.parse(localStorage.getItem('userDivOptions'));
  const firstName = userDivOptions.firstName;
  const lastName = userDivOptions.lastName;
  const bgColor = userDivOptions.bgColor;
  const fontColor = userDivOptions.fontColor;
  const fontSize = userDivOptions.fontSize;
  if (userDivOptions) {
    renderDiv(firstName, lastName, bgColor, fontColor, fontSize);
  }
});

const form = document.getElementById('createDivForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  renderDiv();
});

function renderDiv(firstName, lastName, bgColor, fontColor, fontSize) {
  firstName = firstName || document.getElementById('inputFirstName').value;
  lastName = lastName || document.getElementById('inputLastName').value;
  bgColor = bgColor || document.getElementById('inputBgColor').value;
  fontColor = fontColor || document.getElementById('inputFontColor').value;
  fontSize = fontSize || document.getElementById('inputFontSize').value;

  const options = {
    firstName,
    lastName,
    bgColor,
    fontColor,
    fontSize,
  };

  localStorage.setItem('userDivOptions', JSON.stringify(options));

  const div = document.createElement('div');
  div.style = `
    height: 500px;
    weight: 500px;
    background-color: ${bgColor};
    color: ${fontColor};
    font-size: ${fontSize}px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  div.innerHTML = `
    <p style="margin-right: 5%"> ${firstName} </p>
    <p> ${lastName} </p>
  `;
  const section = document.querySelector('#renderDiv');
  section.innerHTML = '';
  section.appendChild(div);
}
