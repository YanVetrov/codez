import Vue from 'vue'
import moment from 'moment';
import VueMoment from 'vue-moment';
// require('moment/locale/ru');
import 'moment/locale/fr'
import 'moment/locale/ru'
import 'moment/locale/en-gb'

Vue.use(VueMoment, {moment: moment});