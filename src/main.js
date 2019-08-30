import Vue from 'vue';

Vue.config.productionTip = false;

import VueResource from 'vue-resource';

Vue.use(VueResource);

import App from './App';
import router from './router';

import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/font-awesome-4.7.0/css/font-awesome.min.css';

const appConfig = new Vue();

appConfig.getSearchText = () => {
    appConfig.searchText = localStorage.getItem('search_text');
    if (!appConfig.searchText) appConfig.searchText = 'marvel'
};

appConfig.setSearchText = (searchText) => {
    localStorage.setItem('search_text', searchText);
    appConfig.searchText = searchText;
};

appConfig.notifications = {items: []};
export default appConfig;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
