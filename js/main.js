function addComponent(component) {
  console.log(`Adding component: ${component}`);

  document.addEventListener("DOMContentLoaded", () => {
    fetch(`components/${component}.html`)
      .then((response) => response.text())
      .then((data) => {
        const placeholder = document.getElementById(`${component}-placeholder`);
        if (placeholder) {
          placeholder.innerHTML = data;
        } else {
          console.error(
            `Element with ID '${component}-placeholder' not found.`
          );
        }
      });
  });
}

addComponent("navbar");
