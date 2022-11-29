//Visualizar todas las categorías
let drawDataCategories = (dataCategories) => {
  dataCategories.forEach((category) => {
    let parent = document.getElementById("categoriesTable");
    //Crea la fila de la categoria
    let childRow = document.createElement("tr");
    childRow.type = "tr";
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
    childColumn1.appendChild(childC1BtnCategory);
    
    //Crea la 2aColumna para el botón de borrar de la categoria
    let childColumn2 = document.createElement("td");
    childColumn2.type = "td";
    childRow.appendChild(childColumn2);
    //Crea el botón de eliminar la categoria en la 2aColumna
    let childC2BtnDeleteC = document.createElement("button");
    childC2BtnDeleteC.type = "button";
    childC1BtnCategory.classList = "btn-outline-light";
    childColumn2.appendChild(childC2BtnDeleteC);
    //Crea un svg del botón
    let BtnDeleteCSvg = document.createElement("svg");
    BtnDeleteCSvg.type = "svg";
    /* BtnDeleteCSvg.classList = ""width="24px"; height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">"; */
    childC2BtnDeleteC.appendChild(BtnDeleteCSvg);
    //Asocia un path al svg
    let BtnDeleteCPath = document.createElement("path");
    BtnDeleteCPath.type = "path";
    /* BtnDeleteCSvg.classList = ""<path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>"" */
    BtnDeleteCSvg.appendChild(BtnDeleteCPath);


  })
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
    childColumn1.innerText = site.name;
    childRow.appendChild(childColumn1);
    //Crea la 2aColumna con el user del site
    let childColumn2 = document.createElement("td");
    childColumn2.type = "td";
    childColumn2.innerText = site.user;
    childRow.appendChild(childColumn2);
    //Crea la 3aColumna con la fecha del site //To-Do
    let childColumn3 = document.createElement("td");
    childColumn3.type = "td";
    //Variable que almacena la fecha completa
    let completeDate = site.createdAt;
    let normalDate = completeDate.slice(0,10);
    childColumn3.innerText = normalDate;
    childRow.appendChild(childColumn3);
    //Crea la columna de botones de opciones del site
    let childColumn4 = document.createElement("td");
    childRow.appendChild(childColumn4)
    let childC4BtnOpen = document.createElement("button");
    childC4BtnOpen.type = "button";
    childC4BtnOpen.classList = "p-1";
    childC4BtnOpen.innerText = "Open";
    childColumn4.appendChild(childC4BtnOpen);
    let childC4BtnClose = document.createElement("button");
    childC4BtnClose.type = "button";
    childC4BtnClose.classList = "p-1";
    childC4BtnClose.innerText = "Close";
    childColumn4.appendChild(childC4BtnClose);
    let childC4BtnAdd = document.createElement("button");
    childC4BtnAdd.type = "button";
    childC4BtnAdd.classList = "p-1";
    childC4BtnAdd.innerText = "Add";
    childColumn4.appendChild(childC4BtnAdd);

  })
};
  
fetch("http://localhost:3000/sites")
  .then((res) => res.json())
  .then((dataSites) => drawDataSites(dataSites));




//Función que visualiza los sites de una categoría
function VisualizeCategorySites()
{
  let categoryName = document.getElementById("categoriesList.button");
  
}



//Función que añade una categoría
function AddCategory() 
{
  //Crear modalCategoria
  document.getElementById("modalCategoria").style.display = block;
  /*
   *Comprobar que el nombre de la categoria introducido en el
   *input text no esté repetido en los ya creados.
   *Show mensaje de error de que no hay 2 nombres de categorías iguales.
   *Ok añadir datos y cerrar el modal.
   *Cancel cerrar el modal.
   */
}

function DeleteCategory() 
{
  //Onclick botón X categoría
}

/* const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
}) */
