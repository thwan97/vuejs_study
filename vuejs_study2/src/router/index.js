import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

//page import
import home from "../pages/home"
import one from "../pages/one"
import tempone from "../pages/tempone"
import temptwo from "../pages/temptwo"
import two from "../pages/two"
import three from "../pages/three"

export default new VueRouter({
    mode : "history",

    routes : [
        {path : "*", redirect : "/"},
        { path : "/", name : "home", component : home },
        { path : "/one", name : "one", component : one },
        { path : "/one/tempone/:one_param", name : "tempone", component : tempone },
        { path : "/two/temptwo", name : "temptwo", component : temptwo},
        { path : "/two", name : "two", component : two},
        { path : "/three", name : "three", component : three}
    ],

    scrollBehavior : (to, from, savedPosition) => {
        if (savedPosition) return savedPosition
        else {
            return {
                x : 0,
                y : 0
            }
        }
    }
})