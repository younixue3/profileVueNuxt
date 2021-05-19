import Vue from 'vue'
import Vuesax from 'vuesax'
var VueScrollTo = require('vue-scrollto');

import 'boxicons/css/boxicons.min.css'

Vue.use(Vuesax, VueScrollTo, {
    container: "body",
    duration: 100,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
