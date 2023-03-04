const button = document.querySelector('#search-container button')

button.addEventListener('click', filter)

const input = document.querySelector('#search-container input') 

function getInputContent() {
    return input.value
}

let results = []
const main = document.querySelector('main')

function filter() {
    results = []

    const search = getInputContent()
    search.toLowerCase()

    if (search != '') {
        for (const product of cartoes){
            let productName = product.descricao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            
            if (productName.includes(search)){
                let index = cartoes.indexOf(product)
                let productFound = cartoes[index]
                results.push(productFound)
            } else {
                main.innerHTML = 'Nenhum Produto Encontrado'
            }
        }

        if (results.length > 0){
            main.innerHTML = ''
            showResults()
        } 
    } 
}

function showResults(){
    for (const result of results){
        html.addProduto(result.imagem, result.descricao, result.preco)
    }
}