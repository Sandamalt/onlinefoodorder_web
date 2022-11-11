import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product"

export default async function ProxyHandler(req, res) {
    const { method } = req

    dbConnect()

    if (method === 'POST') {
        try {
            const product = await Product.create(req.body)
            res.status(200).json({ response: product })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    if (method === 'GET') {
        try {
            const Products = await Product.find({})
            res.status(200).json({ response: Products })
        } catch (error) {
            res.status(500).json({ error })
        } 
    }
}