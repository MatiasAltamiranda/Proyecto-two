function createCategories(){

async function getCategorie(){
    try{
        const apiURL ='http://localhost:4000/movies';
        const response = await fetch(`${apiURL}`);
        const data = await response.json();
        createCards(data,categorieAnimated, 'animada');
        createCards(data, categoryAction, 'accion');
        createCards(data, categorieComedy,'comedia');
        createCardsFeatured(data, categorieFeatured);
    } 
    catch(error){
        console.log(error)
    }
}

getCategorie()

const categorieAnimated = document.querySelector('#categorieAnimated');
const categoryAction = document.querySelector('#categorieAction');
const categorieComedy = document.querySelector('#categorieComedy');
const categorieFeatured = document.querySelector('#categorieFeatured');

function createCards(data, container,category){
    data = data.filter(e => e.category === category)
    createCard(data,container);
}

function createCardsFeatured(data,container){
    data = data.filter(e => e.featured == true)
    createCard(data,container);
}

function createCard(data,container){
    data.forEach(e => {
        const divCard = document.createElement('div');
        divCard.classList= 'col-6 col-sm-6 col-md-4 col-lg-3';
        divCard.innerHTML=`<a href="../pages/profile.html#${e.id}"><img class="img-fluid p-3" src="${e.image}" alt="Image ${e.name}"></a>`
        container.append(divCard)
    });
}

}

export default createCategories;