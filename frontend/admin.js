import { createItem } from './item.js'
import { get, getOne, create, update, deleteUser } from './requests.js'

(function() {
    class Flower {
        constructor(name, description, price, image) {
            this.name = name
            this.description = description
            this.price = price
            this.image = image
        }

        newCar(id, name, description, price, image) {
            this.id = id
            this.name = name
            this.description = description
            this.price = price
            this.image = image
        }

        setID(id) {
            this.id = id
        }
    }

    const list = document.getElementById('list-form')

    async function generateElements() {
        const flowers = await get()
        for(let flower of flowers) {
            let listItem = createItem(flower.name, flower.description, flower.price, flower.image)
            listItem.btnDelete.addEventListener('click', () => {
                if(confirm('Вы уверены что хотите удалить элемент?')) {
                    deleteUser(flower.id)
                    listItem.item.remove()
                }
            })
            listItem.btnUpdate.addEventListener('click', () => {
                let flowerName = document.getElementById('name');
                let flowerPrice = document.getElementById('price');
                let flowerDescription = document.getElementById('desc');
                let flowerImage = document.getElementById('img');

                let editedUnit = new Flower(flowerName.value, flowerPrice.value, flowerDescription.value, flowerImage.value);
                editedUnit.setID(flower.id)

                update(editedUnit);
            })
            list.append(listItem.item)
        }
    }

    document.addEventListener('DOMContentLoaded', (e) => {
        const form = document.getElementById('form')
        generateElements()

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let flowerName = document.getElementById('name')
            let flowerDescription = document.getElementById('desc')
            let flowerPrice = document.getElementById('price')
            let flowerImage = document.getElementById('img')

            let listItem = createItem(flowerName.value, flowerDescription.value, flowerPrice.value, flowerImage.value)
            let flower = new Flower(flowerName.value, flowerDescription.value, flowerPrice.value, flowerImage.value)
            create(flower)

            list.append(listItem.item)
        })

    })
})()