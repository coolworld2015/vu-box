import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Box from '@/components/box/box'
import BoxShow from '@/components/box/edit'

export default new Router({
    routes: [
        {path: '/', component: Box},
        {path: '*', component: Box},

        {path: '/box', component: Box},
        {path: '/box-show', component: BoxShow}
    ]
})
