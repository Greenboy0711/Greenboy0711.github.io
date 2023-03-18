<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To Dos List</title>
    <link rel="stylesheet" href="/styles/todos.css" />
    <link rel="stylesheet" href="/styles/presets.css" />
  </head>
  <body>
    <div class="title">
      <p class="title-text">To Dos List</p>
      <div class="title-websites">
        <div class="todo-button">Todos</div>
        <div class="calendar-button">
          <a href="calendar.html">Calendar</a>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="to-do-title">
        To Dos
        <div class="todo-counter" id="todo-counter">0/0</div>
        <button class="sort-by-selector" onclick="sortBySelector()">All</button>
        <div class="sort-selection" id="sort-selection">
          <button class="sort-button">All</button>
          <button class="sort-button">Date</button>
        </div>
      </div>
      <div class="tag-title">Tags</div>

      <div class="break"></div>

      <div class="topbar">
        <input
          class="textbox"
          id="todo-title"
          type="text"
          placeholder="Todo Title"
        />
        <input class="date-picker" id="date-picker" type="date" />
        <button class="add-button" onclick="addTodo()">New Todo</button>
      </div>

      <div class="tagbar">
        <input
          class="textbox"
          id="tag-title"
          type="text"
          placeholder="Tag Title"
        />
        <input class="color-picker" id="color-picker" type="color" />
        <button class="add-button" onclick="addTag()">New Tag</button>
      </div>

      <div class="break"></div>

      <div class="todo-list" id="todo-list"></div>
      <div class="tag-list" id="tag-list"></div>
    </div>

    <script src="/js/todos.js"></script>
  </body>
</html>
