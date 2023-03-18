// Model
let todos;
const savedTodos = JSON.parse(localStorage.getItem("todos"));

if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    {
      title: "Get groceries",
      dueDate: "2021-10-04",
      tags: [],
      isDone: false,
      id: "id1",
    },
    {
      title: "Wash car",
      dueDate: "2021-02-03",
      tags: [],
      isDone: false,
      id: "id2",
    },
    {
      title: "Make dinner",
      dueDate: "2021-03-04",
      tags: [],
      isDone: false,
      id: "id3",
    },
  ];
}

// Creates/deletes todo
const createTodo = (title, dueDate) => {
  const id = "" + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    tags: [],
    isDone: false,
    isEditing: false,
    id: id,
  });

  saveTodos();
};

const setUpdate = (idToUpdate, title, dueDate) => {
  todos.forEach((todo) => {
    if (todo.id === idToUpdate) {
      todo.title = title;
      todo.dueDate = dueDate;
      todo.isDone = false;
      todo.isEditing = !todo.isEditing;
    }
  });
  saveTodos();
};

const removeTodo = (idToDelete) => {
  todos = todos.filter((todo) => {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  saveTodos();
};

const changeDone = (idToChange) => {
  todos.forEach((todo) => {
    if (todo.id === idToChange) {
      todo.isDone = !todo.isDone;
    }
  });

  saveTodos();
};

const setEdit = (idToEdit) => {
  todos.forEach((todo) => {
    if (todo.id === idToEdit) {
      todo.isEditing = !todo.isEditing;
      return;
    }
  });

  tags.forEach((tag) => {
    if (tag.id === idToEdit) {
      tag.isEditing = !tag.isEditing;
      return;
    }
  });
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

let tags;
const savedTags = JSON.parse(localStorage.getItem("tags"));

if (Array.isArray(savedTags)) {
  tags = savedTags;
} else {
  tags = [
    {
      title: "Example",
      color: "rgb(255, 255, 255)",
      taggedTodos: [],
      isEditing: false,
      id: "id1",
    },
  ];
}

const createTag = (title, color) => {
  const id = "" + new Date().getTime();

  tags.push({
    title: title,
    color: color,
    taggedTodos: [],
    isEditing: false,
    id: id,
  });

  saveTags();
};

const addTagToToDo = (todoId, tagId) => {
  todos.forEach((todo) => {
    if (todo.id === todoId) {
      todo.tags.push(tagId);
    }
  });

  tags.forEach((tag) => {
    if (tag.id === tagId) {
      tag.taggedTodos.push(todoId);
    }
  });

  saveTodos();
  saveTags();
};

const removeTagFromTodo = (todoId, idToDelete) => {
  todos.forEach((todo) => {
    if (todo.id === todoId) {
      todo.tags = todo.tags.filter((tagId) => {
        if (tagId === idToDelete) {
          return false;
        } else {
          return true;
        }
      });
    }

    console.log(todo.tags);
  });

  tags.forEach((tag) => {
    if (tag.id == idToDelete) {
      tag.taggedTodos = tag.taggedTodos.filter((todoIdTag) => {
        if (todoId == todoIdTag) {
          return false;
        } else {
          return true;
        }
      });
    }
  });

  saveTodos();
  saveTags();
};

const removeTag = (idToDelete) => {
  todos.forEach((todo) => {
    todo.tags = todo.tags.filter((tagId) => {
      if (tagId == idToDelete) {
        return false;
      } else {
        return true;
      }
    });
  });

  tags = tags.filter((tag) => {
    if (tag.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  saveTags();
};

const setUpdateTag = (idToUpdate, title, color) => {
  tags.forEach((tag) => {
    if (tag.id === idToUpdate) {
      tag.title = title;
      tag.color = color;
      tag.isEditing = !tag.isEditing;
    }
  });
  saveTags();
};

const saveTags = () => {
  localStorage.setItem("tags", JSON.stringify(tags));
};

// Controller
const addTodo = () => {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  createTodo(title, dueDate);

  render();
};

const deleteTodo = (event) => {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);

  render();
};

const completeTodo = (event) => {
  const checkbox = event.target;
  const idToChange = checkbox.dataset.id;

  changeDone(idToChange);

  render();
};

const editTodo = (event) => {
  const editButton = event.target;
  const idToEdit = editButton.dataset.id;

  setEdit(idToEdit);

  render();
};

const updateTodo = (event) => {
  const updateButton = event.target;
  const idToUpdate = updateButton.dataset.id;

  const title = document.getElementById("edit-title-" + idToUpdate).value;
  const dueDate = document.getElementById("edit-date-" + idToUpdate).value;

  setUpdate(idToUpdate, title, dueDate);

  render();
};

const addTag = () => {
  const textbox = document.getElementById("tag-title");
  const title = textbox.value;

  const colorPicker = document.getElementById("color-picker");
  const color = colorPicker.value;

  createTag(title, color);

  render();
};

const openTagSelection = (event) => {
  const openTagSelectionButton = event.target;
  const selectionId = openTagSelectionButton.dataset.id;

  const tagSelection = document.getElementById("tag-selection-" + selectionId);

  if (tagSelection.style.visibility == "visible") {
    openTagSelectionButton.innerText = "+";
    tagSelection.style.opacity = 0;
    tagSelection.style.visibility = "hidden";
  } else {
    openTagSelectionButton.innerText = "X";
    tagSelection.style.visibility = "visible";
    tagSelection.style.opacity = 1;
  }
};

const tagButtonClick = (event) => {
  const tagButton = event.target;
  const todoId = tagButton.dataset.todoId;
  const tagId = tagButton.dataset.tagId;

  addTagToToDo(todoId, tagId);

  render();
};

const removeTagButtonClick = (event) => {
  const removeTagButton = event.target;
  const todoId = removeTagButton.dataset.todoId;
  const tagId = removeTagButton.dataset.tagId;

  removeTagFromTodo(todoId, tagId);

  render();
};

const deleteTag = (event) => {
  const deleteButton = event.target;
  const idToDelete = deleteButton.dataset.id;

  removeTag(idToDelete);

  render();
};

const editTag = (event) => {
  const editButton = event.target;
  const idToEdit = editButton.dataset.id;

  setEdit(idToEdit);

  render();
};

const updateTag = (event) => {
  const updateButton = event.target;
  const idToUpdate = updateButton.dataset.id;

  const title = document.getElementById("edit-title-" + idToUpdate).value;
  const color = document.getElementById("edit-color-" + idToUpdate).value;

  setUpdateTag(idToUpdate, title, color);

  render();
};

let visibleSortSelector = false;
const sortBySelector = () => {
  const height = 200;
  const dropDown = document.getElementById("sort-selection");
  if (visibleSortSelector === false) {
    dropDown.style.visibility = "visible";
    dropDown.style.opacity = 1;
    for (i = 0; i < height; i++) {
      dropDown.style.maxHeight = i + "px";
    }
  } else {
    for (i = 0; i < height; i++) {
      dropDown.style.maxHeight = height - i + "px";
    }
    dropDown.style.opacity = 0;
    dropDown.style.visibility = "hidden";
  }
  visibleSortSelector = !visibleSortSelector;
};

// View
function render() {
  // reset list
  document.getElementById("todo-list").innerHTML = "";
  document.getElementById("tag-list").innerHTML = "";
  // render list
  let todoAmount = 0;
  let doneTodoAmount = 0;

  let dateToday = new Date();
  var dd = String(dateToday.getDate()).padStart(2, "0");
  var mm = String(dateToday.getMonth() + 1).padStart(2, "0");
  var yyyy = dateToday.getFullYear();
  dateToday = mm + "/" + dd + "/" + yyyy;

  todos.forEach((todo) => {
    todoAmount += 1;

    const element = document.createElement("div");
    element.className = "todo";
    // If editing
    if (todo.isEditing === true) {
      const textbox = document.createElement("input");
      textbox.className = "textbox";
      textbox.placeholder = "Todo Title";
      textbox.id = "edit-title-" + todo.id;
      element.appendChild(textbox);

      const dateSelect = document.createElement("input");
      dateSelect.className = "date-picker-edit";
      dateSelect.type = "date";
      dateSelect.id = "edit-date-" + todo.id;
      element.appendChild(dateSelect);

      const updateButton = document.createElement("button");
      updateButton.className = "update-button";
      updateButton.innerText = "Update";
      updateButton.onclick = updateTodo;
      updateButton.dataset.id = todo.id;
      element.appendChild(updateButton);
    } else {
      element.innerText = todo.title + " " + todo.dueDate;

      const dateDisplay = document.createElement("div");
      dateDisplay.className = "date-display";

      element.appendChild(dateDisplay);

      const checkbox = document.createElement("input");
      checkbox.className = "checkbox";
      checkbox.type = "checkbox";
      checkbox.onchange = completeTodo;
      checkbox.dataset.id = todo.id;
      if (todo.isDone === true) {
        doneTodoAmount += 1;
        checkbox.checked = true;
        element.style.opacity = 0.65;
      } else {
        checkbox.checked = false;
      }
      element.prepend(checkbox);

      const tagSection = document.createElement("div");
      tagSection.className = "tag-section";
      element.appendChild(tagSection);

      const addTagButton = document.createElement("button");
      addTagButton.className = "add-tag-button";
      addTagButton.dataset.id = todo.id;
      addTagButton.onclick = openTagSelection;
      addTagButton.innerText = "+";
      addTagButton.style.visibility = "hidden";
      element.addEventListener(
        "mouseover",
        (mouseOver = () => {
          addTagButton.style.visibility = "visible";
        })
      );
      element.addEventListener(
        "mouseout",
        (mouseOut = () => {
          addTagButton.style.visibility = "hidden";
        })
      );
      tagSection.appendChild(addTagButton);

      const tagSelection = document.createElement("div");
      tagSelection.className = "tag-selection";
      tagSelection.id = "tag-selection-" + todo.id;
      tagSelection.style.visibility = "hidden";
      tagSelection.style.opacity = 0;

      element.appendChild(tagSelection);

      tags.forEach((tag) => {
        let tagged = false;
        todo.tags.forEach((tagId) => {
          if (tag.id == tagId) {
            tagged = true;
            const removeTagButton = document.createElement("button");
            removeTagButton.className = "remove-tag-button";
            removeTagButton.dataset.todoId = todo.id;
            removeTagButton.dataset.tagId = tagId;
            removeTagButton.onclick = removeTagButtonClick;
            removeTagButton.innerText = "#" + tag.title + " X";
            removeTagButton.style.backgroundColor = tag.color;
            removeTagButton.addEventListener(
              "mouseover",
              (mouseOver = () => {
                removeTagButton.style.backgroundColor = "rgb(23, 35, 54)";
                removeTagButton.style.borderColor = tag.color;
                removeTagButton.style.color = tag.color;
              })
            );
            removeTagButton.addEventListener(
              "mouseout",
              (mouseOut = () => {
                removeTagButton.style.backgroundColor = tag.color;
                removeTagButton.style.borderColor = "rgb(23, 35, 54)";
                removeTagButton.style.color = "rgb(55, 55, 55)";
              })
            );
            tagSection.prepend(removeTagButton);
          }
        });

        if (tagged === false) {
          const tagButton = document.createElement("button");
          tagButton.className = "tag-button";
          tagButton.dataset.todoId = todo.id;
          tagButton.dataset.tagId = tag.id;
          tagButton.onclick = tagButtonClick;
          tagButton.innerText = "#" + tag.title + " +";
          tagButton.style.backgroundColor = tag.color;
          tagButton.addEventListener(
            "mouseover",
            (mouseOver = () => {
              tagButton.style.backgroundColor = "rgb(23, 35, 54)";
              tagButton.style.borderColor = tag.color;
              tagButton.style.color = tag.color;
            })
          );
          tagButton.addEventListener(
            "mouseout",
            (mouseOut = () => {
              tagButton.style.backgroundColor = tag.color;
              tagButton.style.borderColor = "rgb(23, 35, 54)";
              tagButton.style.color = "rgb(55, 55, 55)";
            })
          );
          tagSelection.appendChild(tagButton);
        }
      });

      const editButton = document.createElement("button");
      editButton.className = "edit-button";
      editButton.innerText = "Edit";
      editButton.onclick = editTodo;
      editButton.dataset.id = todo.id;
      element.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.innerText = "Delete";
      deleteButton.onclick = deleteTodo;
      deleteButton.id = todo.id;
      element.appendChild(deleteButton);
    }

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });

  tags.forEach((tag) => {
    const element = document.createElement("div");
    element.className = "tag";
    element.style.backgroundColor = tag.color;

    if (tag.isEditing == true) {
      const textbox = document.createElement("input");
      textbox.className = "textbox";
      textbox.placeholder = "Tag Title";
      textbox.id = "edit-title-" + tag.id;
      element.appendChild(textbox);

      const colorSelect = document.createElement("input");
      colorSelect.className = "color-picker-edit";
      colorSelect.type = "color";
      colorSelect.id = "edit-color-" + tag.id;
      element.appendChild(colorSelect);

      const updateButton = document.createElement("button");
      updateButton.className = "update-button";
      updateButton.innerText = "Update";
      updateButton.onclick = updateTag;
      updateButton.dataset.id = tag.id;
      element.appendChild(updateButton);
    } else {
      let amountTodo = 0;
      let amountFinished = 0;

      element.innerText = "#" + tag.title;

      const taggedTodosCounter = document.createElement("div");
      taggedTodosCounter.className = "tagged-counter";
      taggedTodosCounter.style.color = tag.color;

      todos.forEach((todo) => {
        todo.tags.forEach((tagId) => {
          if (tagId === tag.id) {
            amountTodo += 1;
            if (todo.isDone === true) {
              amountFinished += 1;
            }
          }
        });
      });

      if (amountTodo === 0) {
        taggedTodosCounter.innerText = `0`;
      } else {
        taggedTodosCounter.innerText = `${amountFinished}/${amountTodo}`;
      }
      element.appendChild(taggedTodosCounter);

      const editButton = document.createElement("button");
      editButton.className = "tag-edit-button";
      editButton.innerText = "Edit";
      editButton.onclick = editTag;
      editButton.dataset.id = tag.id;
      element.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.className = "tag-delete-button";
      deleteButton.innerText = "Delete";
      deleteButton.onclick = deleteTag;
      deleteButton.dataset.id = tag.id;
      element.appendChild(deleteButton);
    }

    const tagList = document.getElementById("tag-list");
    tagList.appendChild(element);
  });

  const todoCounter = document.getElementById("todo-counter");
  if (todoAmount === 0) {
    todoCounter.innerText = `0`;
  } else {
    todoCounter.innerText = `${doneTodoAmount}/${todoAmount}`;
  }
}

render();
