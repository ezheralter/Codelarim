function elmYap(tip, html, hedef = document.body) {
    let elm = document.createElement(tip);
    elm.innerHTML = html;
    hedef.append(elm);

    return elm;
}

let hello = elmYap("div", "Merhaba");

hello.style.color = "blue";
hello.style.backgroundColor = "cyan";

elmYap("div", "Ahmet", hello);