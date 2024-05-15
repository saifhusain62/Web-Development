let Message = document.querySelector("#Message");
let result = document.querySelector("#result");

Message.addEventListener("change",function(){
    result.textContent = this.value;
})