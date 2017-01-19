import {readFile} from "fs";
export const l = function(){
	return console.log(...arguments);
};
const readFileAsync = path => new Promise((resolve, reject) => {
	readFile(path, "utf-8", (err, file) => {
		err && reject(err);
		resolve(file);
	});
});
export const createHTML = async ({title, styles, scripts, path}) => 
`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		${styles.map(item => `<link rel="stylesheet" href="${item}" />`).join("\n\t\t")}
		<title>${title}</title>
	</head>
	<body>
		${await readFileAsync(path)}
		${scripts.map(item => `<script src="${item}"></script>`).join("\n\t\t")}
	</body>
</html>`;