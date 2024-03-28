class AsideObject {

    constructor (name, img) {

        this.name = name;
        this.img = img;
    }

    addToDom () {

        const aside_article = document.querySelector(".aside__article");
        const fragment = document.createDocumentFragment();
        const a = document.createElement("A");
        const img = document.createElement("IMG");
        const b = document.createElement("B");

        a.href = "";
        img.setAttribute("src", this.img);
        b.innerHTML = this.name;

        a.appendChild(img);
        a.appendChild(b);
        fragment.appendChild(a);
        aside_article.appendChild(fragment);
    }
}

const objects = [
    ["filia", "assets/img/filia.jpg"],
    ["fukua", "assets/img/fukua.jpg"],
    ["eliza", "assets/img/eliza.jpg"],
    ["double", "assets/img/double.jpg"],
    ["cerebella", "assets/img/cerebella.jpg"],
    ["big band", "assets/img/big band.jpg"],
    ["beowulf", "assets/img/beowulf.jpg"],
    ["ms.fortune", "assets/img/ms.fortune.jpg"],
    ["painwheel", "assets/img/painwheel.jpg"],
    ["parasoul", "assets/img/parasoul.jpg"],
    ["peacock", "assets/img/peacock.jpg"],
    ["robo fortune", "assets/img/robo fortune.jpg"],
    ["valentine", "assets/img/valentine.jpg"],
    ["annie", "assets/img/annie.jpg"],
    ["black dadhlia", "assets/img/black dahlia.jpg"],
    ["umbrella", "assets/img/umbrella.jpg"],
    ["marie", "assets/img/marie.jpg"]
];

for(let i = 0; i < 9; i++) {

    let randomCharacter =  Math.round(Math.random() * (objects.length - 1));

    let objectToShow = new AsideObject(objects[randomCharacter][0], objects[randomCharacter][1]);
    objectToShow.addToDom();
    objects.splice(randomCharacter, 1);
}