const db = require('../db.js')

class MagazineControllers {
    async createMagazine(req, res) {
        const { name, description, price, image } = req.body
        const newMagazine = await db.query(`INSERT INTO magazine (name, description, price, image) values ($1, $2, $3, $4) RETURNING *`, [name, description, price, image])
        res.json(newMagazine.rows[0])
    }

    async getMagazine(req, res) {
        const getMagazines = await db.query(`SELECT * FROM magazine`)
        res.json(getMagazines.rows)
    }

    async getOneMagazine(req, res) {
        const id = req.params.id
        const getMagazines = await db.query(`SELECT * FROM magazine WHERE id=$1`, [id])
        res.json(getMagazines.rows)
    }
    
    async updateMagazine(req, res) {
        const { id, name, description, price, image } = req.body 
        const updateMagazines = db.query(`UPDATE magazine SET name=$1, description=$2, price=$3, image=$4 WHERE id=$5 RETURNING *`, [name, description, price, image, id])
        res.json(updateMagazines.rows)
    }

    async deleteMagazine(req, res) {
        const id = req.params.id
        const deleteMagazines = await db.query(`DELETE FROM magazine WHERE id=$1`, [id])
        res.json(deleteMagazines.rows)
    }
}

module.exports = new MagazineControllers()