import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Info from "./pages/Info";
import Me from "./pages/Me";
import "./utils/iconfont";
Vue.use(Router);
const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home",
			component: Home
		},
		{
			path: "/order",
			component: Order
		},
		{
			path: "/info",
			component: Info
		},
		{
			path: "/me",
			component: Me
		}
	]
});
new Vue({
	el: "#app",
	router,
	render: h => h(App)
});