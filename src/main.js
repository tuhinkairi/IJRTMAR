import Vue from 'vue'
import {
    BootstrapVue,
    IconsPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import App from './App.vue'
import router from './router'

import api from './util/backend-api';

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
    faPhoneAlt,
    faEnvelope,
    faStar,
    faSearch,
    faChevronUp,
    faLongArrowAltRight,
    faLongArrowAltLeft,
    faPlayCircle,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faWindowClose,
    faBars,
    faTimes
}
from '@fortawesome/free-solid-svg-icons'

import {
    faFacebook,
    faFacebookF,
    faTwitter,
    faYoutube,
    faInstagram,
    faSnapchat,
    faBehance,
    faGooglePlusG
}
from '@fortawesome/free-brands-svg-icons'

library.add(faPhoneAlt, faEnvelope, faFacebook, faFacebookF,
    faTwitter, faYoutube, faInstagram, faSnapchat, faStar, faSearch,
    faChevronUp, faLongArrowAltRight, faLongArrowAltLeft, faPlayCircle, faBehance,
    faGooglePlusG, faArrowAltCircleLeft, faArrowAltCircleRight, faWindowClose, faBars, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.prototype.api = api

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
