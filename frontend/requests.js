export async function create(user) {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: user.name,
            description: user.description,
            price: user.price,
            image: user.image
        })
    })
    const result = await response.json()
    return result
}

export async function get() {
    const response = await fetch('/api/user', {
        method: 'GET'
    })
    const result = await response.json()
    return result
}

export async function getOne(id) {
    const response = await fetch('/api/user/' + id, {
        method: 'GET'
    })
    const result = await response.json()
    return result
}

export async function update(user) {
    await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: user.id,
            name: user.name,
            description: user.description,
            price: user.price,
            image: user.image
        })
    })
}

export async function deleteUser(id) {
    await fetch('/api/user/' + id, {
        method: 'DELETE'
    })
}