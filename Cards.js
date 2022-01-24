const producto = [
    {
        id: 1,
        title: "Remera",
        price: 2000,
        image: "../images/430.jpg",
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 2,
        title: "Pantalon",
        price: 2000,
        image: '../images/pantalon.jpg',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 3,
        title: "Zapatilla",
        price: 2000,
        image: '../images/zapatillas.jpg',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 4,
        title: "Medias",
        price: 2000,
        image: '../images/medias.jpg',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 5,
        title: "Camisa",
        price: 2000,
        image: '../images/camisa.jpg',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 6,
        title: "Ojotas",
        price: 2000,
        image: '../images/ojotas.jpg',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }
]

const styleCard = {
    section: `
        border: solid 2px #eee;
        width: 31%;
        justify-content: center;
        margin: 10px 5px;  
    `,
    div: `
        padding: 10px 15px
    `,
    header: `
        display: flex;
        justify-content: space-between;
        align-items: center 
    `,
    price: `
        font-weight: 600;
        font-size: 25px  
    `
}
let div = document.createElement('div')
div.style.display = 'flex';
div.style.flexWrap = 'wrap'
div.style.justifyContent = 'center'

producto.forEach(x =>
    div.innerHTML += `<section style = "${styleCard.section}">
            <img src="${x.image}" alt="" width=430 height=287/>
            <div style = "${styleCard.div}">
                <div style = "${styleCard.header}">
                    <h3>${x.title}</h3>
                    <span style = "${styleCard.price}">$ ${x.price}</span>
                </div>
                <p>${x.description}</p>
            </div>
        </section>`,
)

app.appendChild(div)
