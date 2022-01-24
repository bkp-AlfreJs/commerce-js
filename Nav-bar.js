const style = {
    nav: `
        padding: 15px;
        background-color: #eee
    `,
    ul: `
        font-size: 20px;
        color: #a7a7d7;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items : center;  
    `,
    li: `
       margin: 0px 20px;

    `,
    title: `
        font-size: 30px
    `,
}

const NavBar = `<nav style='${style.nav}'>
                    <ul style='${style.ul}'>
                        <li  id="title" style="${style.title}">Clothing Store</li>
                        <li style="${style.li}">Home</li>
                        <li style="${style.li}">About us</li>
                        <li style="${style.li}">Contact</li>
                        <li style="${style.li}"><img src="../images/carrito-de-compras.png" alt="carrito" width=35px /></li>
                    </ul > 
                </nav>`;


const app = document.getElementById('app');

app.innerHTML = NavBar;
