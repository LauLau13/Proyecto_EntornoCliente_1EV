/* const saveButton = document.getElementById('btSave');
const cancelButton = document.getElementById('btCancel');
const exampleModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')
//No funciona
exampleModal.addEventListener('shown.bs.modal',  function () {
  myInput.focus()
})

// Save button opens a modal dialog
saveButton.addEventListener('click', function() {
  exampleModal.showModal();
});

// Cancel button closes the dialog box
cancelButton.addEventListener('click', function() {
  exampleModal.close();
}); */

if(document.getElementById("buttonModal")){
  const modal = document.getElementById("myModal");
  const button = document.getElementById("buttonModal");

  modal.addEventListener('click', ()=>{
    button.focus;
  })

  button.onclick = function(){
    modal.style.display = "block";
  
  }
}