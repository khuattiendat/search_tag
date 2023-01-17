var content = document.querySelector(".content");
var input = document.querySelector(".input");
var removeAll = document.querySelector(".remmove-all");
var tags = ["Nodejs", "Reactjs"];
function render() {
  var htmls = tags.map(function (tag, index) {
    return `
        <li>
        ${tag}
        <i class="fa-solid fa-xmark" onclick="removeTag(${index})"></i>
      </li>
        `;
  });
  content.innerHTML = htmls.join("\n");
  input.focus();
}
render();
function removeTag(index) {
    tags.splice(index, 1);
    render();
}
input.addEventListener("keydown", function(event){
    if(event.key == "Enter") {
        let tag = input.value.trim();
        if(tag != '' && !tags.includes(tag)){
            tags.push(tag);
            input.value = '';
            render();
        }
        else{
            input.value = '';
        }
    }
});
removeAll.addEventListener('click', function() {
    tags = [];
    render();
})