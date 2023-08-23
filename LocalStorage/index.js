document.addEventListener('DOMContentLoaded', () => {
  const userDivOptions = JSON.parse(localStorage.getItem('userDivOptions'));
  if (userDivOptions) {
    const firstName = userDivOptions.firstName;
    const lastName = userDivOptions.lastName;
    const bgColor = userDivOptions.bgColor;
    const fontColor = userDivOptions.fontColor;
    const fontSize = userDivOptions.fontSize;
    renderDiv(firstName, lastName, bgColor, fontColor, fontSize);
  } else {
    renderDiv();
  }
});

const form = document.getElementById('createDivForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  firstName = document.getElementById('inputFirstName').value;
  lastName = document.getElementById('inputLastName').value;
  bgColor = document.getElementById('inputBgColor').value;
  fontColor = document.getElementById('inputFontColor').value;
  fontSize = document.getElementById('inputFontSize').value;
  renderDiv(firstName, lastName, bgColor, fontColor, fontSize);
});

function renderDiv(
  firstName = 'Nombre',
  lastName = 'Apellido',
  bgColor = '#000',
  fontColor = '#fafafa',
  fontSize = 25
) {
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
