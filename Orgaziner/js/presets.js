const toolButtons = document.getElementsByClassName("tool-icon");
const bottomButtons = document.getElementsByClassName("bottom-button");
const toolColors = ["#FF5353", "#FFD953", "#54F451", "#8551F4", "#5398FF"];

const sidebar = document.getElementsByClassName("sidebar")[0];
const iconText = document.getElementsByClassName("icon-text");
const expandButton = document.getElementsByClassName("expand-button")[0];
const expandButtonBackground = document.getElementById(
  "expand-button-background"
);
const blackout = document.getElementsByClassName("blackout")[0];
const logo = document.getElementById("logo-icon");
const logoText = document.getElementById("logo-with-text");

for (i = 0; i < toolButtons.length; i++) {
  const toolButton = toolButtons[i];
  const toolColor = toolColors[i];
  const tooltip = toolButton.parentElement.getElementsByClassName("tooltip")[0];
  const iconText =
    toolButton.parentElement.getElementsByClassName("icon-text")[0];
  toolButton.addEventListener(
    "mouseover",
    (mouseOver = () => {
      toolButton.getElementsByClassName("tool-icon-fill")[0].style.fill =
        toolColor;
      if (expandButton.dataset.sidebarExpanded == "false") {
        tooltip.style.color = toolColor;
        tooltip.style.opacity = 1;
        tooltip.style.visibility = "visible";
        tooltip.style.transform = "translateX(60px) scale(105%)";
      } else {
        iconText.style.color = toolColor;
      }
    })
  );
  toolButton.addEventListener(
    "mouseout",
    (mouseOut = () => {
      toolButton.getElementsByClassName("tool-icon-fill")[0].style.fill = "";
      tooltip.style.opacity = 0;
      tooltip.style.visibility = "";
      tooltip.style.transform = "";
      iconText.style.color = "";
    })
  );
}

for (i = 0; i < bottomButtons.length; i++) {
  const bottomButton = bottomButtons[i];
  const tooltip =
    bottomButton.parentElement.getElementsByClassName("tooltip")[0];
  const iconText =
    bottomButton.parentElement.getElementsByClassName("icon-text")[0];
  bottomButton.addEventListener(
    "mouseover",
    (mouseOver = () => {
      bottomButton.getElementsByClassName("bottom-button-fill")[0].style.fill =
        "#FFFFFF";
      if (expandButton.dataset.sidebarExpanded == "false") {
        tooltip.style.opacity = 1;
        tooltip.style.visibility = "visible";
        tooltip.style.transform = "translateX(60px) scale(105%)";
      } else {
        iconText.style.color = "#FFFFFF";
      }
    })
  );
  bottomButton.addEventListener(
    "mouseout",
    (mouseOut = () => {
      bottomButton.getElementsByClassName("bottom-button-fill")[0].style.fill =
        "";
      tooltip.style.opacity = 0;
      tooltip.style.visibility = "";
      tooltip.style.transform = "";
      iconText.style.color = "";
    })
  );
}

function toggleSidebar() {
  if (expandButton.dataset.sidebarExpanded == "false") {
    sidebar.style.width = "200px";
    sidebar.style.overflow = "hidden";
    expandButtonBackground.style.transform =
      "rotate(180deg) translateX(-120px)";
    blackout.style.opacity = "0.15";
    blackout.style.visibility = "visible";
    expandButton.dataset.sidebarExpanded = "true";
    logo.style.visibility = "hidden";
    logoText.style.visibility = "visible";
    for (let i = 0; i < iconText.length; i++) {
      iconText[i].style.visibility = "visible";
    }
  } else {
    collapseSidebar();
  }
}

function collapseSidebar() {
  sidebar.style.width = "";
  sidebar.style.overflow = "";
  expandButtonBackground.style.transform = "";
  blackout.style.visibility = "";
  blackout.style.opacity = "";
  logo.style.visibility = "visible";
  logoText.style.visibility = "hidden";
  expandButton.dataset.sidebarExpanded = "false";
  for (let i = 0; i < iconText.length; i++) {
    iconText[i].style.visibility = "hidden";
  }
}
