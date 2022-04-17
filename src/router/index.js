import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StandingsView from '../views/StandingsView.vue'
// import FixturesView from '../views/FixturesView.vue'
import TopScorersView from '../views/TopScorersView.vue'
import PlayerView from "../views/PlayerView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/standings',
            name: 'standings',
            component: StandingsView
        },
        // {
        //     path: '/fixtures',
        //     name: 'fixtures',
        //     component: FixturesView
        // },
        {
            path: '/top-scorers',
            name: 'top-scorers',
            component: TopScorersView
        },
        {
            path: '/player/:id',
            name: 'player',
            component: PlayerView,
            props: true
        }
    ]
})

export default router
