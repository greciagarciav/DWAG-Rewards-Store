import { headers, urlGetProducts } from "./variables"

async function getProducts() {

    try {
        const response = await fetch(urlGetProducts, { method: "GET", headers })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default getProducts