const cartoes = [
    {
        imagem: "./assets/products/1.png",
        descricao: "Bota Masculina Azul",
        preco: "R$ 99,99",
    },

    {
        imagem: "./assets/products/2.png",
        descricao: "Bota Militar Laranja",
        preco: "R$ 99,99",
    },

    {
        imagem: "./assets/products/3.png",
        descricao: "Bota de Couro Preta",
        preco: "R$ 189,99",
    },

    {
        imagem: "./assets/products/4.png",
        descricao: "Tênis Escolar Laranja com Marrom",
        preco: "R$ 69,99",
    },

    {
        imagem: "./assets/products/5.png",
        descricao: "Sapatênis de Camursa Azul",
        preco: "R$ 199,99",
    },

    {
        imagem: "./assets/products/6.png",
        descricao: "Tênis de Corrida Laranja",
        preco: "R$ 79,99",
    },

    {
        imagem: "./assets/products/7.png",
        descricao: "Bota Militar Marrom",
        preco: "R$ 159,99",
    },

    {
        imagem: "./assets/products/8.png",
        descricao: "Tênis Casual Cinza Escuro",
        preco: "R$ 69,99",
    }

]

const html = {

    mainConteiner: document.querySelector('main'),

    addProduto(imagem, descricao, preco) {
        const div = document.createElement('div')

        div.innerHTML = this.gerarHTML(imagem, descricao, preco)
        this.mainConteiner.appendChild(div)
    },

    gerarHTML(imagem, descricao, preco) {
        const html = `
            <img src="${imagem}" alt="calçado 1" class="product-img">

            <div class="descricao-do-produto">
                <p>${descricao}</p>

                <h3>${preco}</h3>  
            </div>
        `
        return html
    }
}

// const input = document.querySelector('#search-container input')
// const main = document.querySelectorAll('main')

// function filtro() {
//     if(input.value != "") {
//         for (let cartao of main) {
//                 let titulo = cartao.querySelector('div .descricao-do-produto p')

//                 titulo = titulo.textContent.toLowerCase()

//                 let textoFiltrado = input.value.toLowerCase()

//             if (titulo.includes(textoFiltrado) === false) {
//                 cartao.style.display = "none"
//             } else {
//                 cartao.style.display = "block"
//             }
//         }
//     } else {
        
//     }
// }

// input.addEventListener('input', filtro)



for (const cartao of cartoes) {
    html.addProduto(cartao.imagem, cartao.descricao, cartao.preco)
}

