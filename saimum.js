let lang = document.querySelector("#lang");
let btnadd = document.querySelector("#btnadd");
let List = document.querySelector("#List");
let btnremove = document.querySelector("#btnremove");

btnadd.onclick = (e) => {
    e.preventDefault();

    if (lang.value == "") {
        console.log("Please add a Name");
        return; // Ensure early return if input is empty
    }

    const option = new Option(lang.value);
    List.add(option);
    lang.value = "";
}

btnremove.onclick = (e) => {
    e.preventDefault();

    let index = List.options.length;
    while (index--) {
        if (List.options[index].selected) {
            List.remove(index);
        }
    }
}

