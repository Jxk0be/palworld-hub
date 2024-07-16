export async function load({ params, fetch }) {
	try {
		const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_URI}/v1/pals/${params.palName}`)

		if (response.ok) {
			let data = await response.json()

			/* Ensuring that there's at least 1 index */
			if (data?.pals?.length < 1) {
				console.log("No pals")
				return null
			}
			else if (data?.pals.length === 2) data = data?.pals[1]
			else data = data?.pals[0]

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