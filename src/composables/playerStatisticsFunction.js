import {ref} from 'vue'

const playerStatisticsFunction = () => {
    const playerStatistics = ref([])
    const error = ref(null)
    const loading = ref(false)

    const getPlayersStatistics = async (playerId) => {
        try {
            playerStatistics.value = []
            loading.value = true

            const requestOptions = {
                method: 'GET',
                headers: new Headers({
                    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY
                })
            }

            let playersStatsData = await fetch(`https://api-football-v1.p.rapidapi.com/v3/players?id=${playerId}&season=2021`, requestOptions)
            if (!playersStatsData.ok) {
                throw Error('No data available.')
            }
            playerStatistics.value = await playersStatsData.json()
            loading.value = false
        } catch (err) {
            error.value = err.message;
            console.error(err.message)
        }

    }

    console.log(error)

    return {playerStatistics, error, loading, getPlayersStatistics}
}

export default playerStatisticsFunction