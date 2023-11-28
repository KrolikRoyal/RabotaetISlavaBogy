import { createItem } from './itemNone.js'
import { get } from './requests.js'

(function() {
    class User {
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
    }

    const list = document.getElementById('list-form')

    async function generateElements() {
        const users = await get()
        for(let user of users) {
            let listItem = createItem(user.name, user.description, user.price, user.image)

            list.append(listItem.item)
        }
    }

    document.addEventListener('DOMContentLoaded', (e) => {
        generateElements()
    })
})()