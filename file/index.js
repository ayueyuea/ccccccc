
		window.onload = () => {
			console.log("object :>> ");
			let body = document.getElementsByTagName("body")[0];
			console.log(body);
			let btn = document.getElementById("button");
			btn.onclick = aaa;
			btn.addEventListener("mousemove", () => {
				console.log("addEventListener :>> ");
			});
			let div = document.querySelector("div");
			div.onmouseover = () => {
				console.log("我是div");
				div.style.background = "yellow";
			};
			div.onmouseout = () => {
				console.log("我是div");
				div.style.background = "red";
			};
			createDiv(body);
		};
		function aaa() {
			removeDiv(document.getElementsByTagName("body")[0]);
		}

		let createDiv = (body) => {
			for (let i = 0; i <= 10; i++) {
				let div = document.createElement("div");
				div.innerHTML = "<em>span文本</em>" + i;
				body.appendChild(div);
			}
		};
		let removeDiv = (body) => {
			let timer = setInterval(() => {
				let div = document.querySelector("div");
				if (div === null) {
					clearInterval(timer);
					return;
				}
				console.log(div);
				body.removeChild(div);
			}, 1000);
		};
		function awaitFunc() {
			return new Promise((res, rej) => {
				setTimeout(() => {
					console.log("awaitFunc");
					res();
				}, 1000);
			});
		}
		async function timeOut() {
			console.log(111);
			await awaitFunc();
			console.log(222);
			await awaitFunc();
			console.log(333);
			await awaitFunc();
			console.log(444);
		}
	