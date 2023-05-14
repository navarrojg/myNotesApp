const addBtn = document.querySelector(".add");
const removeAllBtn = document.querySelector(".remove-all");
const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const removeNoteBtns = document.getElementsByClassName(".remove-note");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const errorText = document.querySelector(".error");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");

let cardID = 0;

const openPanel = () => {
	notePanel.style.display = "flex";
};

const closePanel = () => {
	notePanel.style.display = "none";
	errorText.style.visibility = "hidden";
	textArea.value = "";
	category.selectedIndex = 0;
};

const addNote = () => {
	if (textArea.value !== "" && category.value !== "0") {
		errorText.style.visibility = "hidden";
		createNote();
		closePanel();
	} else {
		errorText.style.visibility = "visible";
	}
};

const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute("id", cardID);
	noteArea.append(newNote);
	newNote.innerHTML = `
    <div class="note-header">
    <h3 class="note-title">${category.value}</h2>
        <button class="remove-note" onclick='deleteNote(${cardID})'><i class="fa-solid fa-xmark"></i></button>
</div>

<div class="note-body">
    ${textArea.value}
</div>
    `;

	cardID++;
	checkColor(newNote);
};

const deleteAllNotes = () => {
	noteArea.textContent = "";
};

const checkColor = (note) => {
	switch (category.value) {
		case "Zakupy":
			note.style.backgroundColor = "rgb(72,255,0)";
			break;
		case "Praca":
			note.style.backgroundColor = "rgb(255,243,0)";
			break;
		case "Inne":
			note.style.backgroundColor = "rgb(0,170,255)";
			break;
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
removeAllBtn.addEventListener("click", deleteAllNotes);
removeAllBtn.addEventListener("click", deleteAllNotes);
