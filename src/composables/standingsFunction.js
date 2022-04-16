import {ref} from "vue";

const standingsFunction = () => {
    const standingsArray = ref([])
    const error = ref(null)
    const loading = ref(false)

    const getStandings = async (event) => {
        try {
            const options = {
                method: 'GET',
                headers: new Headers({
                    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY
                })
            }
            loading.value = true
            standingsArray.value = []
            let standingsData = await fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=${event.target.value}`, options)
            if (!standingsData.ok) {
                throw Error('No data available.')
            }

            console.log(standingsArray)
            standingsArray.value = await standingsData.json()
            loading.value = false
        } catch (err) {
            error.value = err.message;
            console.error(err.message)
        }
    }

    return {standingsArray, error, loading, getStandings}
}

export default standingsFunction