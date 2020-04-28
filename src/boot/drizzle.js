import Vue from "vue"
import store from "../store"

import drizzleVuePlugin from "@drizzle/vue-plugin"
import drizzleOptions from "../drizzleOptions"

Vue.config.productionTip = false

Vue.use(drizzleVuePlugin, { store, drizzleOptions })
