function render() {
  const inputs = document.getElementsByClassName("input-field");
  const inputTitles = document.getElementsByClassName("input-title");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const inputTitle = inputTitles[i];
    input.addEventListener(
      "focus",
      (focus = () => {
        input.style.transform = "scale(105%) translateY(-5px)";
        input.style.borderColor = "rgb(164, 180, 207)";
        input.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.408)";
        inputTitle.style.transform = "scale(105%) translateY(-5px)";
      })
    );
    input.addEventListener(
      "blur",
      (blur = () => {
        input.style.transform = "";
        input.style.borderColor = "rgb(32, 43, 66)";
        input.style.boxShadow = "";
        inputTitle.style.transform = "";
      })
    );
  }
}

render();
