

async function getCategorie(){
    const apiURL ='http://localhost:4000/movies';
    const response = await fetch(`${apiURL}`);
    const data = await response.json();
    createCardAnimated(data);
    createCardAction(data, categoryAction, 'accion');
    createCardComedy(data);
    createCardFeatured(data);
}

 getCategorie()

function createCardAnimated(data){
    const categorieAnimated = document.querySelector('#categorieAnimated');
    data = data.filter(e => e.category == "animada")
    data.forEach(e => {
        const divCard = document.createElement('div');
        divCard.classList= 'col-6 col-sm-6 col-md-4 col-lg-3';
        divCard.innerHTML=`<a href="#"><img class="img-fluid p-3" src="${e.image}" alt="Image ${e.name}">`
        categorieAnimated.append(divCard)
    })
    ;
}
const categoryAction = document.querySelector('#categorieAction');

function createCardAction(data, container,category){
    data = data.filter(e => e.category == category)
    data.forEach(e => {
        const divCard = document.createElement('div');
        divCard.classList= 'col-6 col-sm-6 col-md-4 col-lg-3';
        divCard.innerHTML=`<a href="#"><img class="img-fluid p-3" src="${e.image}" alt="Image ${e.name}">`
        container.append(divCard)
    });
}


function createCardComedy(data){
    const categorieComedy = document.querySelector('#categorieComedy');
    data = data.filter(e => e.category == "comedia")
    data.forEach(e => {
        const divCard = document.createElement('div');
        divCard.classList= 'col-6 col-sm-6 col-md-4 col-lg-3';
        divCard.innerHTML=`<a href="#"><img class="img-fluid p-3" src="${e.image}" alt="Image ${e.name}">`
        categorieComedy.append(divCard)
    });
}

function createCardFeatured(data){
    const categorieFeatured = document.querySelector('#categorieFeatured');
    data = data.filter(e => e.featured == true)
    data.forEach(e => {
        const divCard = document.createElement('div');
        divCard.classList= 'col-6 col-sm-6 col-md-4 col-lg-3';
        divCard.innerHTML=`<a href="#"><img class="img-fluid p-3" src="${e.image}" alt="Image ${e.name}">`
        categorieFeatured.append(divCard)
    });
}

export default getCategorie;