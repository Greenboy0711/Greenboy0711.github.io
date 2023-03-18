<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Put your description here.">
  <title>Utilities | Orgaziner</title>
  <link rel="icon" type="image/x-icon" href="/images/pngs/orgaziner-logo.png" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="/styles/presets/presets.css" />
  <link rel="stylesheet" href="/styles/presets/animations.css" />
  <link rel="stylesheet" href="/styles/orgaziner-tools/utilities-tool/utilities.css" />
  <link rel="stylesheet" href="/styles/orgaziner-tools/utilities-tool/calculator.css" />
</head>

<body>
  <div class="title" id="title-modified">
    <div class="title-websites"></div>
  </div>
  <?php
  include '/Orgaziner/html/presets/sidebar.php';
  ?>
  <div class="page" id="home-page">
    <div class="top-title">
      <div class="title-accent1"></div>
      <svg class="top-title-icon" width="100%" height="100%" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="tool-icon-fill utlities-icon-fill" id="utilities-icon-fill">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90ZM45 88C68.7482 88 88 68.7482 88 45C88 21.2518 68.7482 2 45 2C21.2518 2 2 21.2518 2 45C2 68.7482 21.2518 88 45 88Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45 87C68.196 87 87 68.196 87 45C87 21.804 68.196 3 45 3C21.804 3 3 21.804 3 45C3 68.196 21.804 87 45 87ZM10.8284 41.9411C9.26633 43.5032 9.26633 46.0359 10.8284 47.598L41.9411 78.7107C43.5032 80.2728 46.0359 80.2728 47.598 78.7107L78.7107 47.598C80.2728 46.0359 80.2728 43.5032 78.7107 41.9411L47.598 10.8284C46.0359 9.26631 43.5032 9.26631 41.9411 10.8284L10.8284 41.9411Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1213 42.6985C13.9497 43.8701 13.9497 45.7696 15.1213 46.9411L42.6985 74.5183C43.8701 75.6899 45.7696 75.6899 46.9411 74.5183L74.5183 46.9411C75.6899 45.7696 75.6899 43.8701 74.5183 42.6985L46.9411 15.1213C45.7696 13.9498 43.8701 13.9498 42.6985 15.1213L15.1213 42.6985ZM40.7071 22.2426C40.3166 22.6331 40.3166 23.2663 40.7071 23.6568L44.2426 27.1923C44.6332 27.5829 45.2663 27.5829 45.6569 27.1923L49.1924 23.6568C49.5829 23.2663 49.5829 22.6331 49.1924 22.2426L45.6569 18.7071C45.2663 18.3165 44.6332 18.3165 44.2426 18.7071L40.7071 22.2426ZM40.7071 67.6568C40.3166 67.2663 40.3166 66.6331 40.7071 66.2426L44.2426 62.7071C44.6332 62.3165 45.2663 62.3165 45.6569 62.7071L49.1924 66.2426C49.5829 66.6331 49.5829 67.2663 49.1924 67.6568L45.6569 71.1923C45.2663 71.5829 44.6332 71.5829 44.2426 71.1923L40.7071 67.6568ZM18.7071 44.2426C18.3166 44.6331 18.3166 45.2663 18.7071 45.6568L22.2426 49.1923C22.6332 49.5829 23.2663 49.5829 23.6569 49.1923L27.1924 45.6568C27.5829 45.2663 27.5829 44.6331 27.1924 44.2426L23.6569 40.7071C23.2663 40.3165 22.6332 40.3165 22.2426 40.7071L18.7071 44.2426ZM62.7071 45.6568C62.3166 45.2663 62.3166 44.6331 62.7071 44.2426L66.2426 40.7071C66.6332 40.3165 67.2663 40.3165 67.6569 40.7071L71.1924 44.2426C71.5829 44.6331 71.5829 45.2663 71.1924 45.6568L67.6569 49.1923C67.2663 49.5829 66.6332 49.5829 66.2426 49.1923L62.7071 45.6568ZM31.4142 43.4349C30.6332 44.216 30.6332 45.4823 31.4142 46.2633L43.435 58.2841C44.2161 59.0652 45.4824 59.0652 46.2635 58.2841L58.2843 46.2633C59.0653 45.4823 59.0653 44.216 58.2843 43.4349L46.2635 31.4141C45.4824 30.633 44.2161 30.633 43.435 31.4141L31.4142 43.4349Z" />
        </g>
      </svg>
      <h1 class="top-title-text">Utilities</h1>
      <div class="title-accent2"></div>
    </div>
    <div class="utility-buttons">
      <button class="utility-button" onclick="toggleUtility(`calculator-page`)">
        <img class="utility-button-graphic" src="/images/utilities-graphics/calculator-graphic.svg" alt="Calculator">
        <h2 class="utility-button-title">Calculator</h2>
        <p class="utility-button-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente natus sequi veritatis incidunt facere, dolor corporis sunt fugit tempore itaque deleniti, reiciendis dolore quod eligendi recusandae! Rem maxime explicabo nihil!</p>
      </button>
      <button class="utility-button" onclick="toggleUtility(`converter-page`)">
        <img class="utility-button-graphic" src="/images/utilities-graphics/calculator-graphic.svg" alt="Calculator">
        <h2 class="utility-button-title">Converter</h2>
        <p class="utility-button-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente natus sequi veritatis incidunt facere, dolor corporis sunt fugit tempore itaque deleniti, reiciendis dolore quod eligendi recusandae! Rem maxime explicabo nihil!</p>
      </button>
      <button class="utility-button" onclick="toggleUtility(`notes-page`)">
        <img class="utility-button-graphic" src="/images/utilities-graphics/notes-graphic.svg" alt="Notes">
        <h2 class="utility-button-title">Notes</h2>
        <p class="utility-button-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente natus sequi veritatis incidunt facere, dolor corporis sunt fugit tempore itaque deleniti, reiciendis dolore quod eligendi recusandae! Rem maxime explicabo nihil!</p>
      </button>
    </div>
  </div>
  <div class="page" id="calculator-page" data-hidden="true">
    <button class="back-button material-icons" onclick="toggleUtility(`calculator-page`)">&#xe5c4</button>
    <div class="calculator">
      <div class="top-display">
        <button id="history-button"><i class="material-icons" id="history-icon">&#xe8ba</i></button>
        <p id="equation-display">0+0=0</p>
        <p id="answer-display">0</p>
      </div>
      <div class="calculator-keys">
        <button class="calculator-key1" onclick="keyClick()">2nd</button>
        <button class="calculator-key3" onclick="keyClick(`Pi`)">&#960</button>
        <button class="calculator-key3" onclick="keyClick(`E`)">e</button>
        <button class="calculator-key3" onclick="keyClick()">1/x</button>
        <div id="clear-keys">
          <button class="calculator-key1 clear-key" id="Delete" onclick="keyClick(`Delete`)">C</button>
          <button class="calculator-key1 clear-key" id="Backspace" onclick="keyClick(`Backspace`)"><i class="material-icons">&#xe14a</i></button>
        </div>
        <button class="calculator-key3" id="4" onclick="keyClick()">x&sup2</button>
        <button class="calculator-key3" id="&#40" onclick="keyClick(`&#40`)">&#40</button>
        <button class="calculator-key3" id="&#41" onclick="keyClick(`&#41`)">&#41</button>
        <button class="calculator-key3" id="4" onclick="keyClick()">abs</button>
        <button class="calculator-key3" id="&#33" onclick="keyModify(`&#33`)">&#33</button>
        <button class="calculator-key3" id="4" onclick="keyClick()">&#8730</button>
        <button class="calculator-key3" id="4" onclick="keyClick()">sin</button>
        <button class="calculator-key3" id="4" onclick="keyClick()">cos</button>
        <button class="calculator-key3" id="4" onclick="keyClick()">tan</button>
        <button class="calculator-key2" id="/" onclick="keyOperation(`/`)">&divide</button>
        <button class="calculator-key3" id="&#94" onclick="keyOperation(`&#94`)">x<sup>y</sup></button>
        <button class="calculator-key1" id="1" onclick="keyClick(`1`)">1</button>
        <button class="calculator-key1" id="2" onclick="keyClick(`2`)">2</button>
        <button class="calculator-key1" id="3" onclick="keyClick(`3`)">3</button>
        <button class="calculator-key2" id="*" onclick="keyOperation(`*`)">&times</button>
        <button class="calculator-key3" id="1" onclick="keyClick()">10<sup>x</sup></button>
        <button class="calculator-key1" id="4" onclick="keyClick(`4`)">4</button>
        <button class="calculator-key1" id="5" onclick="keyClick(`5`)">5</button>
        <button class="calculator-key1" id="6" onclick="keyClick(`6`)">6</button>
        <button class="calculator-key2" id="-" onclick="keyOperation(`-`)">&#45</button>
        <button class="calculator-key3" id="1" onclick="keyClick()">log</button>
        <button class="calculator-key1" id="7" onclick="keyClick(`7`)">7</button>
        <button class="calculator-key1" id="8" onclick="keyClick(`8`)">8</button>
        <button class="calculator-key1" id="9" onclick="keyClick(`9`)">9</button>
        <button class="calculator-key2" id="+" onclick="keyOperation(`+`)">&#43</button>
        <button class="calculator-key3" id="1" onclick="keyClick()">ln</button>
        <button class="calculator-key1" id="" onclick="keyClick(`Switch`)">+/-</button>
        <button class="calculator-key1" id="0" onclick="keyClick(`0`)">0</button>
        <button class="calculator-key1" id="." onclick="keyClick(`.`)">&#46</button>
        <button class="calculator-key2" id="Enter" onclick="enterEquation()">=</button>
      </div>
    </div>
  </div>
  <div class="page" id="converter-page" data-hidden="true">
  </div>
  <div class="page" id="notes-page" data-hidden="true">
  </div>
  <script src="/js/presets.js"></script>
  <script src="/js/orgaziner-tools/utlities-tool/utilities.js"></script>
  <script src="/js/orgaziner-tools/utlities-tool/calculator.js"></script>
</body>

</html>