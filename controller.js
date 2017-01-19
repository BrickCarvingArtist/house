import {Router} from "express";
import {SERVER_CONFIG} from "./config";
const {
	host,
	port
} = SERVER_CONFIG;
const router = Router();
router
	.route("/api/get_banner/:type")
	.get(({params, query}, res) => {
		let data = [];
		switch(params.type){
			case "home":
				data = [
					{
						url: "/images/banner/1.png",
						href: "/activity/1"
					},
					{
						url: "/images/banner/2.png",
						href: "/activity/2"
					},
					{
						url: "/images/banner/3.png",
						href: "/activity/3"
					},
					{
						url: "/images/banner/4.png",
						href: "/activity/4"
					}
				];
				break;
			case "me":
				data = [
					{
						url: "/images/banner/1.png",
						href: "/activity/1"
					},
					{
						url: "/images/banner/2.png",
						href: "/activity/2"
					}
				];
		}
		if(query.type === "jsonp"){
			return res.end(`jsonpCallback_${query.id}(${JSON.stringify(data)})`);
		}
		res.set({
			"Access-control-allow-origin": "*"
		}).json({
			code: 0,
			data,
			message: "ok"
		});
	});
router
	.route("/api/house/get")
	.get((req, res) => {
		res.json({
			code: 0,
			data: [
				{
					id: "1234124",
					href: "#",
					title: "东方金融中心1",
					url: "/images/house/1.png",
					price: "7",
					commission: "1"
				},
				{
					id: "1234128",
					href: "#",
					title: "东方金融中心2",
					url: "/images/house/1.png",
					price: "3",
					commission: "5"
				},
				{
					id: "1234129",
					href: "#",
					title: "东方金融中心3",
					url: "/images/house/1.png",
					price: "5",
					commission: "2"
				}
			],
			message: "ok"
		});
	});
router
	.route("/api/favorite/add")
	.get(({query}, res) => {
		res.json({
			code: [0, 1][+!query.id],
			message: "ok"
		});
	});
router
	.route("/api/favorite/remove")
	.get(({query}, res) => {
		res.json({
			code: [0, 1][+!query.id],
			message: "ok"
		});
	});
export default router;