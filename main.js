let box = document.querySelector(".box");
let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    console.log(e.target.name, e.target.value);
    let shadowColor = document.querySelector("#bg").value;
    let shadowValue = document.querySelector("#shadow").value;

    if (e.target.name == "box-shadow") {
      console.log("Box");
      box.style.setProperty(
        "box-shadow",
        `0 0 ${shadowValue}px ${shadowColor}`
      );
    } else {
      console.log("Not Box");
      box.style.setProperty(
        e.target.name,
        e.target.value + e.target.dataset.px
      );
      box.style.setProperty(
        "box-shadow",
        `0 0 ${shadowValue}px ${shadowColor}`
      );
    }

    getStyles();
  });
});

function getStyles() {
  let styles = window.getComputedStyle(box);

  let styleCode = `.box {
      <br> background-color: ${styles.backgroundColor};
      <br> color: ${styles.color};
      <br> border-radius: ${styles.borderRadius};
      <br> box-shadow: ${styles.boxShadow};<br>
    }
  `;

  document.querySelector(".css").innerHTML = styleCode;
}
getStyles();

// HTML Code
document.querySelector(".html").textContent = box.outerHTML;

document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.parentElement.parentElement);
    let target =
      e.target.parentElement.parentElement.querySelector(
        ".src-code"
      ).textContent;
    navigator.clipboard.writeText(target);
    e.target.textContent = "copied";
    e.target.style.backgroundColor = "#666";

    setTimeout(() => {
      e.target.textContent = "copy";
      e.target.style.backgroundColor = "#0075ff";
    }, 3000);
  });
});
