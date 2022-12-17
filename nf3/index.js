console.log('hi');

let url = "https://lada66766.github.io/info.json";

let txt = '[{"number":1, "quest":"Какой формы земля", "answers": [ "Клуглая",  "Квадратная",  "элипсоид"], "right": ["элипсоид"]},' + 
    '{"number":2, "quest":"Какой формы земля", "answers": [ "Клуглая",  "Квадратная",  "элипсоид2"], "right": ["элипсоид2"]}' +
']'

async function load() {
    let response  = await fetch(url);
    if (response.ok) { 
        let text = await response.text();
        console.log(text);
    
        let json = JSON.parse(txt);
        fill(json)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

load();
function fill(input){

let one = document.getElementById("is_1");

one.innerHTML = allHtml(input);

}

function allHtml(array) {
    let str = ''
    array.forEach(element => {
        console.log("str add ", element)
        str += questHtml(element);
    }); 
    return str;
}

function questHtml(obj) {
    let str = ` <div class="card m-2">
    <div class="card-body">
      <div class="m-2">`+ obj.number +` `+ obj.quest +`</div>`;

      obj.answers.forEach(element => {
        console.log("str add ", element)
        str += answerHtml("ans", element)
    }); 
    str += 
    `</div>
  </div>`
    return str;

}

function answerHtml(id, name) {
    return `
    <div class="input-group m-2">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" name="` + id + `">
        </div>
        <input type="text" class="form-control" disabled aria-label="Text input with checkbox" value="` + name + `">
    </div>
    `
}