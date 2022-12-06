//Constantes de los botones
const btnOpen =
  '<svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 3h-6m6 0l-9 9m9-9v6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path></svg>';
const btnDelete =
  '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
const btnAdd =
  '<svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 12V5.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0016.252 2H4.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6H11M8 10h8M8 6h4m-4 8h3M17.954 16.94l1-1a1.121 1.121 0 011.586 0v0a1.121 1.121 0 010 1.585l-1 1m-1.586-1.586l-2.991 2.991a1 1 0 00-.28.553l-.244 1.557 1.557-.243a1 1 0 00.553-.28l2.99-2.992m-1.585-1.586l1.586 1.586" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2v3.4a.6.6 0 00.6.6H20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

window.onload = () => {
  fetch("http://localhost:3000/categories")
    .then((response) => response.json())
    .then((dataCategories) => drawDataCategories(dataCategories));

  fetch("http://localhost:3000/sites")
    .then((res) => res.json())
    .then((dataSites) => drawDataSites(dataSites));
};
//Visualizar todas las categorías
let drawDataCategories = (dataCategories) => {
  dataCategories.forEach((category) => {
    let parent = document.getElementById("categoriesTable");
    //Crea la fila de la categoria
    let childRow = document.createElement("tr");
    childRow.type = "tr";
    childRow.classList = "d-flex container-fluid justify-content-between";
    parent.appendChild(childRow);
    //Crea la 1aColumna para el nombre de la categoria
    let childColumn1 = document.createElement("td");
    childColumn1.type = "td";
    childRow.appendChild(childColumn1);
    //Crea el botón del nombre de la categoria en la 1aColumna
    let childC1BtnCategory = document.createElement("button");
    childC1BtnCategory.type = "button";
    childC1BtnCategory.classList = "list-group-item list-group-item-action";
    childC1BtnCategory.innerText = category.name;
    childC1BtnCategory.onclick = () => {
      visualizeCategorySites(category.id);
    };
    childColumn1.appendChild(childC1BtnCategory);

    //Crea la 2aColumna para el botón de borrar de la categoria
    let childColumn2 = document.createElement("td");
    childColumn2.type = "td";
    childRow.appendChild(childColumn2);
    //Crea el botón de eliminar la categoria en la 2aColumna
    let childC2BtnDeleteC = document.createElement("button");
    childC2BtnDeleteC.type = "button";
    childC2BtnDeleteC.classList = "btn-outline-light border-0 bg-white";
    childC2BtnDeleteC.innerHTML = btnDelete;
    childC2BtnDeleteC.setAttribute('data-bs-toggle', 'modal')
    childC2BtnDeleteC.setAttribute('data-bs-target', '#DeleteCategoryModal')
    childC2BtnDeleteC.onclick = () => localStorage.setItem("idC",category.id); //Almacena el Id de la category al clickarlo
    childColumn2.appendChild(childC2BtnDeleteC);
  });
};

fetch("http://localhost:3000/categories")
  .then((response) => response.json())
  .then((dataCategories) => drawDataCategories(dataCategories));

//Visualizar todos los sites
let drawDataSites = (dataSites) => {
  dataSites.forEach((site) => {
    let parent = document.getElementById("sitesTable");
    //Crea la fila del site
    let childRow = document.createElement("tr");
    childRow.type = "tr";
    parent.appendChild(childRow);
    //Crea la 1aColumna con el nombre del site
    let childColumn1 = document.createElement("td");
    childColumn1.type = "td";
    childColumn1.classList = "align-middle";
    childColumn1.innerText = site.name;
    childRow.appendChild(childColumn1);
    //Crea la 2aColumna con el user del site
    let childColumn2 = document.createElement("td");
    childColumn2.type = "td";
    childColumn2.classList = "align-middle";
    childColumn2.innerText = site.user;
    childRow.appendChild(childColumn2);
    //Crea la 3aColumna con la fecha del site //To-Do
    let childColumn3 = document.createElement("td");
    childColumn3.type = "td";
    childColumn3.classList = "align-middle";
    //Variable que almacena la fecha completa
    let completeDate = site.createdAt;
    let normalDate = completeDate.slice(0, 10);
    childColumn3.innerText = normalDate;
    childRow.appendChild(childColumn3);
    //Crea la columna de botones de opciones del site
    let childColumn4 = document.createElement("td");
    childRow.appendChild(childColumn4);
    let childC4BtnOpen = document.createElement("button");
    childC4BtnOpen.type = "button";
    childC4BtnOpen.classList = "btn-outline-light border-0 bg-white";
    childC4BtnOpen.innerHTML = btnOpen;
    childColumn4.appendChild(childC4BtnOpen);
    let childC4BtnClose = document.createElement("button");
    childC4BtnClose.type = "button";
    childC4BtnClose.classList = "btn-outline-light border-0 bg-white";
    childC4BtnClose.innerHTML = btnDelete;
    childC4BtnClose.setAttribute('data-bs-toggle', 'modal');
    childC4BtnClose.setAttribute('data-bs-target', '#DeleteSiteModal');
    childC4BtnClose.onclick = () => localStorage.setItem("idS",site.id) //Almacena el Id del site al clickarlo
    childColumn4.appendChild(childC4BtnClose);
    let childC4BtnAdd = document.createElement("button");
    childC4BtnAdd.type = "button";
    childC4BtnAdd.classList = "btn-outline-light border-0 bg-white";
    childC4BtnAdd.innerHTML = btnAdd;
    childColumn4.appendChild(childC4BtnAdd);
  });
};

//Función que visualiza los sites de una categoría
function visualizeCategorySites(categoryId) {
  let parent = document.getElementById("sitesTable");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  fetch(`http://localhost:3000/categories/${categoryId}`)
    .then((response) => response.json())
    .then((response) => drawDataSites(response))
    .catch((err) => console.error(err));
}  

function DeleteSite(){
  //1- Recoger el Id del site
  let id = localStorage.getItem("idS")

  //2- Llamada a la API para eliminar el site
   const options = {method: 'DELETE'};

   fetch(`http://localhost:3000/sites/${id}`, options)
     .then(response => response.json())
     .then(response => console.log(response))
     .catch(err => console.error(err));
  
  //Visualizar los sites actualizados
  location.reload();
}

function DeleteCategory() {
  //1- Recoger el Id del site
  let id = localStorage.getItem("idC")

  //2- Borrar los sites de la category
  const option1 = {method: 'GET'};

  fetch(`http://localhost:3000/categories/${id}`, option1)
    .then((response) => response.json())
    .then((response) => (response).forEach((site) => {
      StorageSiteId(site.id);
      DeleteSite();
      })
    )
    .catch(err => console.error(err));
    

  //3- Llamada a la API para eliminar la categoría
  const option2 = {method: 'DELETE'};

  fetch(`http://localhost:3000/categories/${id}`, option2)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
  //Visualizar los sites actualizados
  location.reload();
}