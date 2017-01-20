import Vue from "vue";
import Router from "vue-router";
import App from "./App";
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
			component: resolve => require(["./pages/Home/Index"], resolve)
		},
		{
			path: "/order",
			component: resolve => require(["./pages/Order/Index"], resolve)
		},
		{
			path: "/info",
			component: resolve => require(["./pages/Info/Index"], resolve),
			redirect: "/info/message",
			children: [
				{
					path: "message",
					component: resolve => require(["./pages/Info/Message"], resolve),
					meta: {
						name: "消息"
					}
				},
				{
					path: "notice",
					component: resolve => require(["./pages/Info/Notice"], resolve),
					meta: {
						name: "提示"
					}
				},
				{
					path: "requirement",
					component: resolve => require(["./pages/Info/Requirement"], resolve),
					meta: {
						name: "需求"
					}
				}
			]
		},
		{
			path: "/me",
			component: resolve => require(["./pages/Me/Index"], resolve)
		},
		{
			path: "/upload",
			component: resolve => require(["./pages/Me/Upload"], resolve)
		},
		{
			path: "/sign_up",
			component: resolve => require(["./pages/Sign/SignUp"], resolve)
		},
		{
			path: "/sign_in",
			component: resolve => require(["./pages/Sign/SignIn"], resolve)
		}
	]
});
new Vue({
	el: "#app",
	router,
	render: h => h(App)
});