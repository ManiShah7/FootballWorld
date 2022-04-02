import {ref} from "vue";

const topScorersFunction = () => {
    const topScorersArray = ref([])
    const error = ref(null)
    const loading = ref(false)

    const getTopScorers = async (event) => {
        try {
            const options = {
                method: 'GET',
                headers: new Headers({
                    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY
                })
            }
            loading.value = true
            topScorersArray.value = []
            let topScorersData = await fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${event.target.value}&season=2021`, options)
            if (!topScorersData.ok) {
                throw Error('No data available.')
            }
            topScorersArray.value = await topScorersData.json()
            loading.value = false
        } catch (err) {
            error.value = err.message;
            console.error(err.message)
        }
    }

    return {loading, error, topScorersArray , getTopScorers}
}

export default topScorersFunction