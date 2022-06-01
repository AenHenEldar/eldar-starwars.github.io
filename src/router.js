import { createRouter, createWebHashHistory } from 'vue-router'
import Ships from '@/views/Ships'
import Ship from '@/views/Ship'

const User = {
    template: '<div>User {{ $route.params.id }}</div>',
}

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Ships,
        },
        {
            path: '/:id',
            component: Ship
        },
    ],
})
