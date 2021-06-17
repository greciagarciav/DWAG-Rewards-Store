import { headers, urlPostRedeem } from "./variables"

async function postRedeem(productId) {

    try {
        const response = await fetch(urlPostRedeem, { method: "POST", headers, body: JSON.stringify({"productId": productId}) })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default postRedeem