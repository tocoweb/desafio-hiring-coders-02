var url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

/* var link = document.createElement('link');        
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'styles.css';  
document.getElementsByTagName('HEAD')[0].appendChild(link); */

function Get(url) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}


function catalog() {
    var json_obj = JSON.parse(Get(url));


    var destaques = document.getElementsByClassName("destaques")[0];

    for (var i = 0; i < json_obj.length; i++) {
        var card = document.createElement("div");
        card.setAttribute("class", "card");
        destaques.appendChild(card);
        var img = document.createElement("img");
        img.setAttribute("src", json_obj[i].photo);
        card.appendChild(img);
        var card_body = document.createElement("div");
        card_body.setAttribute("class", "card-body");
        card.appendChild(card_body);
        var h3 = document.createElement("h3");
        var h3_desc = document.createTextNode(json_obj[i].property_type);
        h3.appendChild(h3_desc);
        card_body.appendChild(h3);
        var p_desc = document.createElement("p");
        var desc = document.createTextNode(json_obj[i].name);
        p_desc.appendChild(desc);
        card_body.appendChild(p_desc);
        var p_val = document.createElement("p");
        p_val.setAttribute("class", "cifrao");
        var val = document.createTextNode("R$ " + json_obj[i].price + ",00");
        p_val.appendChild(val);
        card_body.appendChild(p_val);
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        var a_text = document.createTextNode("Acessar");
        a.appendChild(a_text);
        card_body.appendChild(a);
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}






