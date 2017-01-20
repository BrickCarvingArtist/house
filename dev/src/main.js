import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import Home from "./pages/Home/Index";
import Order from "./pages/Order/Index";
import Info from "./pages/Info/Index";
import Message from "./pages/Info/Message";
import Notice from "./pages/Info/Notice";
import Requirement from "./pages/Info/Requirement";
import Me from "./pages/Me/Index";
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
			component: Info,
			redirect: "/info/message",
			children: [
				{
					path: "message",
					component: Message,
					meta: {
						name: "消息"
					}
				},
				{
					path: "notice",
					component: Notice,
					meta: {
						name: "提示"
					}
				},
				{
					path: "requirement",
					component: Requirement,
					meta: {
						name: "需求"
					}
				}
			]
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