export async function load({ fetch }) {
	try {
		const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_URI}/v1/pals?pagination.pageSize=154`)

		if (response.ok) {
			let data = await response.json()
			return data
		}
		else {
			console.log(response.status,"Error:", "Could not find Pal, please try a different PalName")
			return null
		}
	}
	catch(error) {
		console.log(error)
		return null
	}
}