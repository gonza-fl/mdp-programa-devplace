let characters = null;

const getCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((json) => json);
  characters = response.results;
};

const createCard = (character, template) => {
  template.querySelector('.card-title').textContent = character.name;
  template.querySelector('.card-img-top').src = character.image;
  template.querySelector('.card-img-top').alt = `${character.name} image`;
  template.getElementById('status').textContent = character.status;
  template.getElementById('species').textContent = character.species;
  template.getElementById('gender').textContent = character.gender;
  template.getElementById('origin').textContent = character.origin.name;
  template.getElementById('location').textContent = character.location.name;
  const card = template.cloneNode(true);
  return card;
};

const renderGalery = () => {
  const galery = document.getElementById('galery');

  const cardCharTemplate = document.getElementById('cardCharTemplate').content;

  const fragment = document.createDocumentFragment();

  characters.forEach((char) => {
    const createdCard = createCard(char, cardCharTemplate);
    fragment.appendChild(createdCard);
  });

  galery.appendChild(fragment);
};

async function main() {
  await getCharacters();
  renderGalery();
}

main();
