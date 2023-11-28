export function createItem(name, price, description, img){
    let item = document.createElement('div')
    let image = document.createElement('img')
    let divBody = document.createElement('div')
    let h5 = document.createElement('h5')
    let pDescription = document.createElement('p')
    let pPrice = document.createElement('p')

    // item.id = _id
    item.classList.add('card', 'm-3')
    item.style.width = '18rem'
    item.style.float = 'left'

    image.classList.add('card-img-top')
    image.src = img

    divBody.classList.add('card-body')

    h5.classList.add('card-title')
    h5.innerText = name

    pDescription.classList.add('card-text')
    pDescription.innerText = description

    pPrice.innerText = price

    divBody.append(h5, pDescription, pPrice)

    item.append(image, divBody)

    return {item}
}