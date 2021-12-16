//adding menu
const home = JSON.parse(
    "[" +
    '{ "type":"box", "temp":"370 Union Ave Brooklyn, New York 11211"},' +
    '{ "type":"box", "temp":"(347) 916-0356"}]'

);
const menicure = JSON.parse(
    "[" +
    '{ "type":"service", "name":"Manicure",  "price":"11" },' +
    '{ "type":"service", "name":"French Manicure",  "price":"16" },' +
    '{ "type":"service", "name":"Buffin Manicure",  "price":"16" },' +
    '{ "type":"service", "name":"Polish Change",  "price":"7" },' +
    '{ "type":"service", "name":"Color Gel",  "price":"30" },' +
    '{ "type":"service", "name":"French Gel",  "price":"38" },' +
    '{ "type":"service", "name":"Chrome Top Gel",  "price":"45" },' +
    '{ "type":"service", "name":"Nail Design",  "price":"5/8" },' +
    '{ "type":"service", "name":"Soak Off gel",  "price":"5" },' +
    '{ "type":"service", "name":"Soak Off Acrylic",  "price":"10" },' +
    '{ "type":"service", "name":"Soak Off UV Gel",  "price":"10" },' +
    '{ "type":"service", "name":"Glass Tips Extension",  "price":"40" },' +
    '{ "type":"service", "name":"Acrylic Tip Set",  "price":"45" },' +
    '{ "type":"service", "name":"Acrylic Set With White Tip",  "price":"50" },' +
    '{ "type":"service", "name":"Acrylic Fill In",  "price":"35" },' +
    '{ "type":"service", "name":"Acrylic Poly Gel Set",  "price":"55" },' +
    '{ "type":"service", "name":"Acrylic Poly Gel Fill In",  "price":"35" },' +
    '{ "type":"service", "name":"UV Gel Set",  "price":"60/65" },' +
    '{ "type":"service", "name":"UV Gel Fill In",  "price":"45" },' +
    '{ "type":"service", "name":"Gel Powder With Tip",  "price":"55" },' +
    '{ "type":"service", "name":"Gel powder With French Tip",  "price":"70" },' +
    '{ "type":"service", "name":"Gel Powder Ombre With Tip",  "price":"70" }]'
);
const pedicure = JSON.parse(
    "[" +
    '{ "type":"service", "name":"Pedicure",  "price":"23" },' +
    '{ "type":"service", "name":"French Pedicure",  "price":"28" },' +
    '{ "type":"service", "name":"Polish Change",  "price":"11" },' +
    '{ "type":"service", "name":"Callus Remover Treatment",  "price":"10" },' +
    '{ "type":"service", "name":"Green Tea/Lavender",  "price":"47" },' +
    '{ "type":"service", "name":"Jasmine Coconut/Honey & Milk",  "price":"58" } ]'
);
const booking = JSON.parse(
    "[" +
    '{ "type":"box", "temp":"you can make appointments with us at:" },' +
    '{ "type":"box", "temp":"snailz.com, classpass.com or call us" }]'

);

let x = 0;

//actions when you click each buttons
let homebtn = document.getElementById("homebtn");
let menicurebtn = document.getElementById("menicurebtn");
let pedicurebtn = document.getElementById("pedicurebtn");
let bookingbtn = document.getElementById("bookingbtn");

let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");

homebtn.addEventListener("click", (e) => {
    setIndicator(0);
    func(home);
});
menicurebtn.addEventListener("click", (e) => {
    setIndicator(1);
    func(menicure);
});
pedicurebtn.addEventListener("click", (e) => {
    setIndicator(2);
    func(pedicure);
});
bookingbtn.addEventListener("click", (e) => {
    setIndicator(3);
    func(booking);
});

//function for adding menu item
function func(items) {
    let menu = document.querySelector(".menu");
    menu.innerHTML = "";
    for (i = 0; i < items.length; i++) {
        if (items[i].type === "box") {
            let menuitem = document.createElement("div");
            menuitem.setAttribute("class", "box");
            menuitem.innerHTML = items[i].temp;
            menu.appendChild(menuitem);
        }
        if (items[i].type === "service") {
            let menuitem = document.createElement("div");
            let menuitemname = document.createElement("div");
            let menuitemprice = document.createElement("div");
            menuitem.setAttribute("class", "serv");
            menuitemname.setAttribute("class", "serv-name");
            menuitemprice.setAttribute("class", "serv-price");

            menuitemname.innerHTML = items[i].name;
            menuitemprice.innerHTML = items[i].price;

            menuitem.appendChild(menuitemname);
            menuitem.appendChild(menuitemprice);
            menu.appendChild(menuitem);
        }
    }
}
//actions for indicator bar under the button when you click different button
function setIndicator(sec) {
    x = sec;
    let vp = "";
    if (window.innerWidth < 800) {
        vp = "60px";
    } else {
        vp = "85%";
    }
    let elems = [n1, n2, n3, n4];
    for (i = 0; i < elems.length; i++) {
        if (i === sec) {
            elems[i].style.width = vp;
            elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
        } else {
            elems[i].style.width = "0";
            elems[i].style.boxShadow = "none";
        }
    }
}

window.addEventListener("resize", (e) => {
    setIndicator(x);
});
//default
setIndicator(x);
func(home);