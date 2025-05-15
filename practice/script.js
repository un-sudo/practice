const btn = document.getElementById("btn");
const text = document.getElementById("text");
btn.addEventListener("click",() => {
    const str = text.textContent;
    let newHTML = "";
    for (let char of str ){
        newHTML += '<span>${char}</span>';
     }
     text.innerHTML = newHTML;
     text.classList.add("brick-text");
  console.log(text);
});