function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

const header = document.getElementsByClassName("title")[0];
const hero = document.getElementsByClassName("intro-title")[0];

const heroOptions = { rootMargin: "-50px 0px 0px 0px" };

const sectionHeroObserver = new IntersectionObserver(function (
  entries,
  sectionHeroObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("title-scrolled");
    } else {
      header.classList.remove("title-scrolled");
    }
  });
},
heroOptions);

sectionHeroObserver.observe(hero);

async function render() {
  await delay(100);
  const graphicElements = document.getElementsByClassName(
    "intro-design-element"
  );
  const introElements = document.getElementById("intro-elements");
  introElements.style.opacity = 1;
  introElements.style.transform = "translateY(20px)";
  for (let i = 0; i < graphicElements.length; i++) {
    const element = graphicElements[i];
    element.style.opacity = 1;
    element.style.transform = "translateY(20px)";
  }

  const tiles = document.getElementsByClassName("tile");
  const tileColors = ["#FF5353", "#FFD953", "#54F451", "#8551F4", "#5398FF"];
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    let tileColor = tileColors[i];
    tile.addEventListener(
      "mouseover",
      (mouseOver = () => {
        tile.style.color = tileColor;
        tile.style.borderColor = tileColor;
        tile.getElementsByClassName("tile-icon-fill")[0].style.fill = tileColor;
      })
    );
    tile.addEventListener(
      "mouseout",
      (mouseOut = () => {
        tile.style.color = "#A4B4CF";
        tile.style.borderColor = "rgb(32, 43, 66)";
        tile.getElementsByClassName("tile-icon-fill")[0].style.fill = "#A4B4CF";
      })
    );
  }
}

render();
