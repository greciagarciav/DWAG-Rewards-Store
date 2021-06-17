import { headers, urlPostCoins } from "./variables"

async function postCoins(coins) {

    try {
        const response = await fetch(urlPostCoins, { method: "POST", headers, body: JSON.stringify({"amount": coins}) })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default postCoins