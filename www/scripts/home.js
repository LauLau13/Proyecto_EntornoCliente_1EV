//Visualizar todas las categorías
let drawDataCategories = (dataCategories) => {
  dataCategories.forEach((category) => {
    let parent = document.getElementById("categoriesList");
    let child = document.createElement("button");
    child.type = "button";
    child.classList = "list-group-item list-group-item-action";
    //child.innerText = JSON.stringify(category) //Esto el JSON entero
    child.innerText = category.name;
    parent.appendChild(child);
  })
};

fetch("http://localhost:3000/categories")
  .then((response) => response.json())
  .then((dataCategories) => drawDataCategories(dataCategories));


//Visualizar todos los sites
let drawDataSites = (dataSites) => {
  dataSites.forEach((site) => {
    let parent = document.getElementById("sitesTable");
    //Crea la la fila del site
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
