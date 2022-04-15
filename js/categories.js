function createCategories() {
  async function getCategorie() {
    try {
      const apiURL = "http://localhost:4000/movies";
      const response = await fetch(`${apiURL}`);
      const data = await response.json();
      createCards(data, categorieAnimated, "Animada");
      createCards(data, categoryAction, "Accion");
      createCards(data, categorieComedy, "Comedia");
      createCardsFeatured(data, categorieFeatured);
    } catch (error) {
      console.log(error);
    }
  }

  getCategorie();

  const categorieAnimated = document.querySelector("#categorieAnimated");
  const categoryAction = document.querySelector("#categorieAction");
  const categorieComedy = document.querySelector("#categorieComedy");
  const categorieFeatured = document.querySelector("#categorieFeatured");

  function createCards(data, container, category) {
    data = data.filter((e) => e.category === category);
    createCard(data, container);
  }

  function createCardsFeatured(data, container) {
    data = data.filter((e) => e.featured == true);
    createCard(data, container);
  }

  function createCard(data, container) {
    data.forEach((e) => {
      const anclaImg = document.createElement("a");
      anclaImg.href = `./profile.html#${e.id}`;
      anclaImg.innerHTML = `<img class="card_group_img p-3" src="${e.image}" alt="Image ${e.name}">`;
      container.append(anclaImg);
    });
  }
}
 createCategories();
