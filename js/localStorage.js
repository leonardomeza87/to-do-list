const d = document,
  storage = window.localStorage;

export function loadStorage(templateHTML, $spacer) {
  // const data = storage;
  // console.log(data);

  let data = {};

  for (let i = 0; i < storage.length; i++) {
    let key = storage.key(i);
    let value = storage.getItem(key);

    data[key] = value;
  }
  console.log(data);
  storage.clear();
  console.log(window.localStorage);

  //data
  let i = 0;

  for (let key in data) {
    let value = data[key];
    console.log(key, value);

    let parsedValue = JSON.parse(value);

    const $template = d.createElement("li");
    $template.classList.add("task");
    $template.setAttribute("id", i);
    $template.insertAdjacentHTML("beforeend", templateHTML);

    const $textarea = $template.querySelector("textarea");
    $textarea.value = parsedValue[0];
    $textarea.style.height = parsedValue[2];
    $textarea.classList.add("disabled");
    $textarea.readOnly = "true";

    if (parsedValue[1]) {
      $template.classList.add("completed");
      $template.querySelector(".checker").classList.add("check");
    }

    $spacer.insertAdjacentElement("beforebegin", $template);

    setInStorage(i, value);
    i++;
  }
  console.log(window.localStorage);
  return i;
}

export function setInStorage(key, value) {
  storage.setItem(key, value);
}

export function modifyInStorage(key, value) {
  let keyValue = JSON.parse(storage.getItem(key));
  let newValue = JSON.stringify([keyValue[0], value, keyValue[2]]);
  setInStorage(key, newValue);
}

export function deleteFromStorage(key) {
  storage.removeItem(key);
}