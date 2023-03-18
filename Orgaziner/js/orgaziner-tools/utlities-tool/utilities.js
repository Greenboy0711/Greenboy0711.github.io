function toggleUtility(utility) {
  const utilityPage = document.getElementById(utility);
  const homePage = document.getElementById("home-page");
  if (utilityPage.dataset.hidden === "true") {
    homePage.style.opacity = "0";
    homePage.style.visibility = "hidden";
    utilityPage.style.opacity = "1";
    utilityPage.style.visibility = "visible";
    utilityPage.dataset.hidden = "false";
  } else {
    homePage.style.opacity = "1";
    homePage.style.visibility = "visible";
    utilityPage.style.opacity = "0";
    utilityPage.style.visibility = "hidden";
    utilityPage.dataset.hidden = "true";
  }
}
