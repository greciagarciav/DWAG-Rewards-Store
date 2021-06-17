import { headers, urlGetUser } from "./variables"

async function getUser() {

    try {
        const response = await fetch(urlGetUser, { method: "GET", headers })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default getUser