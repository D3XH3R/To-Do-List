let button = document.querySelector(" .body button");
let lists = document.querySelector(".container .body .list ol");

let title = document.querySelector(".body .title");
let desc = document.querySelector(".body .desc");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
  if (title.value != "") {
    handle();
    title.value = "";
  } else {
    body.classList.toggle("vibrate");
  }
});

function handle() {
  let li = document.createElement("li");
  li.textContent = `${title.value}`;
  lists.appendChild(li);

  let div = document.createElement("div");
  li.appendChild(div);

  let del = document.createElement("span");
  del.textContent = "🗑️";
  div.appendChild(del);

  del.addEventListener("click", () => {
    li.remove();
  });

  let finish = document.createElement("span");
  finish.textContent = "✅";
  div.appendChild(finish);

  finish.addEventListener("click", () => {
    li.classList.toggle("done");
  });
}
