import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/Page/Home';

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/HelloWorld',

        },
        {
            path: '/helloworld',
            name: 'HelloWorld',
            component: HelloWorld,
            children: [{

                    path: '',
                    component: Home,
                },
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                }
            ]

        }
    ]
})