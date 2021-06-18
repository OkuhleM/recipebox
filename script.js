// Selectors
const recipeInput1 = document.querySelector(".recipeName");
const recipeInput2 = document.querySelector(".ingredients");
const recipeInput3 = document.querySelector(".directions");
const recipeButton = document.querySelector(".recipe-btn");
const recipeList   = document.querySelector(".recipe-list");
const buttonEdit   = document.querySelector(".edit-btn");
const buttonRemove = document.querySelector(".remove-btn");
const form = document.getElementById('form')

// Events
form.addEventListener('submit', addRecipe);


// Functions

function addRecipe(event) {
  event.preventDefault();
  const recipeDiv = document.createElement('div');
  const newRecipe = document.createElement('li');
  const editButton = document.createElement('button');
  const removeButton = document.createElement('button');
  
  recipeDiv.classList.add('recipe');
  newRecipe.textContent =`${recipeInput1.value} 
    ${recipeInput2.value}
    ${recipeInput3.value}`
  newRecipe.classList.add('recipe-item');
  recipeDiv.appendChild(newRecipe);
  editButton.innerHTML = '<i class="fas fa-pen">Edit</i>';
  editButton.classList.add("edit-btn");
  recipeDiv.appendChild(editButton);
 
  removeButton.innerHTML = '<i class="fas fa-trash">remove</i>';
  removeButton.classList.add("remove-btn");
  recipeDiv.appendChild(removeButton);
  
  // append to list 
  recipeList.appendChild(recipeDiv)

  // clear recipe input value
  form.value = "";
}


function onDelete(li) {
    if (confirm('This Item will be deleted ?')) {
        form = li.parentElement.parentElement;
        document.getElementById("recipeList").deleteItem(item.itemIndex);
        resetForm();
    }
}


function onEdit(li) { 
  selectedInput = li.parentElement.parentElement;
  document.getElementById("recipeName").value;
  document.getElementById("ingredients").value;
  document.getElementById("directions").value;
  
}




 
