import './style.scss';
import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import moment from 'moment-timezone';
moment.tz.setDefault("UTC");
Vue.prototype.$moment = moment;


import {checkFilter, setDay} from "./util/bus";
const bus = new Vue();
Vue.prototype.$bus = bus;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './util/routes';
const router = new VueRouter({ routes });


new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: [],
        day: moment(),
        bus
    },
    created() {
        this.$http.get('/api').then(response => {
            this.movies = response.data;
        });
        this.$bus.$on('check-filter', checkFilter.bind(this))
        this.$bus.$on('set-day', setDay.bind(this));
    },
    router
});
