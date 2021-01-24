window.addEventListener("load", function(e){

//Champs de saisie
var input = document.querySelector("#input_task");
//liste ul qui stockera les tasches(li) done
var completedList = document.getElementById("completed_list");
//titre des taches accomplies
var completedTitle = document.getElementById("completed_title");
// ul liste de tache
var taskList = document.getElementById("task_list");
//on cache les titres des elements effectues
completedTitle.style.display = "none";

// Au click du bouton ajouter(bleu)
document.getElementById("add_button").addEventListener("click", checkInput);
//on verifie si le champs est vide et on crée une nouvelle tache
function checkInput() {
	if (input.value != "") {
		newTask();
	}else{
		alert("Inserer une tache");
	}
}

// Ajouter une tache
function newTask() {
	//ul des taches crées
	var list = document.getElementById("task_list");
	//1 tache crée
	var li = document.createElement("li"); 
	//on crée un input..
	var checkbox = document.createElement("input");
		// de type checkbox
		checkbox.setAttribute("type", "checkbox");
		// Le bouton checkBok n'est pas selectionné par défaut
		checkbox.checked = false;

	//on crée une span
	var span = document.createElement("span");
		// class="input"
		span.setAttribute("class", "input");
	//on crée un button pour editer une  tache
	var edit = document.createElement("button");
		edit.setAttribute("type", "button");
		edit.setAttribute("class", "edit_task_button");
	//on crée un button pour supprimer une  tache
	var del = document.createElement("button");
		del.setAttribute("type", "button");
		del.setAttribute("class", "delete");
	
	//on fait remonter en haut de liste le li à sa création
	list.prepend(li);
	//on ajoute à la suite les elements pour chaque li
	li.appendChild(checkbox);
	li.appendChild(span);
	li.appendChild(edit);
	li.appendChild(del);

	//on insere la valeur input(nouvelle tache) dans le li
	span.innerHTML = input.value ;
	// on assigne une icone aux 2 bouton edit et delete
	edit.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
	del.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
	//on reset la valeur de l'input
	input.value = "";

	// au checked de la checkbox on appel completeTask
	checkbox.addEventListener("click", completeTask);
	// au click de edit -> editTask
	edit.addEventListener("click", editTask);
	// au click de delete -> deleteTask
	del.addEventListener("click", deleteTask);
};

// on place un ecouteur sur chaque bouton edit
document.querySelectorAll(".edit_task_button").forEach(editBtn => editBtn.addEventListener("click", editTask));

//au click
function editTask() {
	//on affiche la span pour le focus
	this.previousElementSibling.setAttribute('class', 'span_editable');
	//on rend le contenu editable
	this.previousElementSibling.setAttribute('contenteditable', '');
	//on affiche l'icon valider et BG vert
	this.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
	this.style.backgroundColor = "mediumseagreen";
	//on change de fonction à l'ecoute du bouton
	this.removeEventListener("click", editTask);
	this.addEventListener("click", validateEditTask);
}

// Validate changes
function validateEditTask() {
	this.parentNode.children[0].disabled = false;
	//on supprime le focus
	this.previousElementSibling.removeAttribute('class', 'span_editable'); 
	//on rend le contenu non editable
	this.previousElementSibling.removeAttribute('contenteditable', '');
	//on réaffiche l'icone editer
	this.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
	//BG color gris
	this.style.backgroundColor = "grey";
	//on change de fonction à l'ecoute du bouton
	this.removeEventListener("click", validateEditTask);
	this.addEventListener("click", editTask);
}

// Marquer comme fait
document.querySelectorAll("input[type=checkbox]").forEach((box) => box.addEventListener("click", completeTask));
function completeTask() {
	this.checked = true;
	//on met la class complete au span
	this.nextElementSibling.classList.toggle("complete");
	//on cache le le bouton edit
	this.nextElementSibling.nextElementSibling.style.visibility = "hidden";
	//on change de fonction à l'ecoute du bouton
	this.removeEventListener("click", completeTask);
	this.addEventListener("click", uncompleteTask);
	//on crée un li dans la ul complete task
	//on le fait remonter en tete de liste
	completedList.prepend(this.parentNode);
};

// Uncheck a task
function uncompleteTask() {
	this.checked = false;
	this.nextElementSibling.classList.toggle("complete");
	//on réaffiche le le bouton edit
	this.nextElementSibling.nextElementSibling.style.visibility = "visible";
	//on change de fonction à l'ecoute du bouton
	this.removeEventListener("click", uncompleteTask);
	this.addEventListener("click", completeTask);
	//on crée un li dans la ul task list
	//on le fait remonter en tete de liste
	taskList.prepend(this.parentNode);
	completedList.prepend(this.parentNode);
}

// Delete a task
document.querySelectorAll(".delete").forEach(delBtn => delBtn.addEventListener("click", deleteTask));
function deleteTask() {
	//on supprime le li de la liste 
	this.parentNode.parentNode.removeChild(this.parentNode);
};

// Edit title list
document.querySelector(".edit_title_button").addEventListener("click", editTitleList);
function editTitleList() {
	//on change la classe de la span
	this.previousElementSibling.setAttribute('class', 'title_editable input_title');
	//on rend le contenu editable
	this.previousElementSibling.setAttribute('contenteditable', '');
	//on modifie le bouton : icone check + BG vert
	this.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
	this.style.backgroundColor = "mediumseagreen";
	//on change de fonction à l'ecoute du bouton
	this.removeEventListener("click", editTitleList);
	this.addEventListener("click", validateEditTitleList);
}

// Validate title changes
function validateEditTitleList(){
	this.parentNode.children[0].disabled = false;
	//on change la classe de la span
	this.previousElementSibling.removeAttribute('class', 'title_editable');
	this.previousElementSibling.setAttribute('class', 'input_title');
	//on rend le contenu non editable
	this.previousElementSibling.removeAttribute('contenteditable', '');
	//on modifie le bouton : edit + BG gris
	this.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
	this.style.backgroundColor = "grey";
	//on change de fonction à l'ecoute du bouton
	this.removeEventListener("click", validateEditTitleList);
	this.addEventListener("click", editTitleList);
}
});