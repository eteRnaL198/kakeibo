const content = document.getElementById("tableContent");
const inputs = [];
(() => {
  for(let i=0; i<10; i++) {
    const row = document.createElement("div");
    for(let j=0; j<5; j++) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.classList.add("table_input");
      input.value = "1";
      row.insertAdjacentElement("afterbegin", input);
      inputs.push(input);
    }
    content.insertAdjacentElement("afterbegin", row);
  }
})()

const displaySum = () => {
  const elem = document.getElementById("sum");
  const sum = inputs.reduce((acc, elem) => {
    const num = elem.value ? elem.value : 0
    return acc + parseInt(num, 10);
  }, 0);
  elem.innerHTML = sum;
}