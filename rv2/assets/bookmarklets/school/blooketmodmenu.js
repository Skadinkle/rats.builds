javascript: /* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */
(async() => {
	var t, d, p, u, m, h, g, b = document.createElement("iframe");
	if (document.body.append(b), window.confirm = b.contentWindow.confirm.bind(window), window.console.log = b.contentWindow.console.log.bind(window), b.style.display = "none", await Object.values(webpackJsonp.push([[], {
		"": (e, t, a) => {
			t.cache = a.c;
		}
	}, [[""]]]).cache).find(e => e.exports?.a ?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(e => parseInt("0" + e.data.questions.find(e => "../cheats/gui.js" == e.question) ? .answers ? .[0])) < 1680558739991 || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
		function f(e, t = {}, ...a) {
			var o = document.createElement(e);
			if ("object" == typeof t.style) {
				let e = "";
				for (const n in t.style) e += `${n.replace(/[A-Z]/g, e=>"-" + e.toLowerCase())}: ${t.style[n]};`;
				t.style = e;
			}
			for (const i in t) o[i] = t[i];
			for (const r of a) o.append(r);
			return o;
		}
console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c\tgui.js", "color: #0bc2cf; font-size: 1rem"), console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats", "color: #ffd000; font-size: 1rem", "");
const j = {
	data: null, setItem(e, n) {
		return e.split(".").reduce((e, t, a, o) => (++a == o.length && (e[t] = n), e[t]), this.data), localStorage.setItem("JODGUISettings", JSON.stringify(this.data)), this.data;
	}, deleteItem(e) {
		return e.split(".").reduce((e, t, a, o) => (++a == o.length && delete e[t], e[t]), this.data), localStorage.setItem("JODGUISettings", JSON.stringify(this.data)), this.data
	}, setData(e) {
		this.data = e, localStorage.setItem("JODGUISettings", JSON.stringify(this.data));
	}
};
try {
	j.data = JSON.parse(localStorage.getItem("JODGUISettings") || "{}");
	for (const N of["backgroundColor", "cheatList", "contentBackground", "defaultButton", "disabledButton", "enabledButton", "infoColor", "inputColor", "textColor"]) j.data[N] && (j.setItem("theme." + N, j.data[N]), j.deleteItem(N))
}
catch {
	j.setData({});
}
let a, o, i, l, n, e, r, v, s;
const M = f("div", {
	id: "JODGUI", style: {
		top: Math.max(10, window.innerHeight - 600) / 2 + "px", left: Math.max(10, window.innerWidth - 1e3) / 2 + "px", transform: `scale(${j.data.scale})`, position: "fixed", height: "80%", width: "80%", maxHeight: "600px", maxWidth: "1000px", zIndex: "999", display: "block"
	}
}, a = f("style", {
	id: "variables", innerHTML: `:root {--backgroundColor: ${
		j.data?.theme?.backgroundColor||"rgb(11, 194, 207)"
	};--infoColor: ${
		j.data?.theme?.infoColor||"#9a49aa"
	};--cheatList: ${
		j.data?.theme?.cheatList||"#9a49aa"};--defaultButton: ${j.data?.theme?.defaultButton||"#9a49aa"};--disabledButton: ${j.data?.theme?.disabledButton||"#A02626"};--enabledButton: ${j.data?.theme?.enabledButton||"#47A547"};--textColor: ${j.data?.theme?.textColor||"white"};--inputColor: ${j.data?.theme?.inputColor||"#7a039d"};--contentBackground: ${j.data?.theme?.contentBackground||"rgb(64, 17, 95)"};}`
}), f("style", {
innerHTML: '.alertList::-webkit-scrollbar{display:none;}.alertList{-ms-overflow-style: none;scrollbar-width: none;}.contentWrapper::-webkit-scrollbar{display:none;}.contentWrapper{-ms-overflow-style: none;scrollbar-width: none;}.cheatButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}.cheatInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:var(--textColor)}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.cheatList::-webkit-scrollbar{width:10px}.cheatList::-webkit-scrollbar-track{background:var(--cheatList)}.cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow: inset -10px 0 rgb(0 0 0 / 20%)}.cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList); box-shadow: inset -10px 0 rgb(0 0 0 / 30%); }.scriptButton:hover{filter:brightness(120%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}.scriptButton{align-items: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; margin: 10px; padding: 5px 5px 11px; position: relative; width: 250px; font-family: Nunito, sans-serif; font-weight: 400; color: var(--textColor); box-shadow: inset 0 -6px rgb(0 0 0 / 20%); border-radius: 7px; cursor: pointer; transition: filter .25s;}.tooltip::after {content: "";position: absolute;width: 10px;height: 10px;background-color: inherit;top: -5px;left: 50%;margin-left: -6px;transform: rotate(135deg)}'
}), o = f("div", {
style: {
width: "100%"
, height: "100%"
, position: "relative"
, outline: "3px solid #3a3a3a"
, borderRadius: "15px"
, overflow: "hidden"
}
}, f("div", {
id: "background"
, style: {
display: "block"
, top: "0"
, left: "0"
, height: "100%"
, overflowY: "hidden"
, overflowX: "hidden"
, position: "absolute"
, width: "100%"
, background: "var(--backgroundColor)"
, visibility: "visible"
}
}, f("div", {
id: "backgroundImage"
, style: {
backgroundImage: "url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)"
, display: "block"
, height: "200%"
, position: "absolute"
, width: "200%"
, top: "50%"
, left: "50%"
, backgroundPositionX: "-100px"
, backgroundPositionY: "-100px"
, backgroundSize: "550px"
, visibility: "visible"
, transform: "translate(-50%,-50%) rotate(15deg)"
, appearance: "none"
, opacity: "0.175"
}
})), l = f("div", {
id: "controls"
, style: {
display: "flex"
, alignItems: "center"
, justifyContent: "center"
, paddingBottom: "8px"
, paddingInline: "15px"
, position: "absolute"
, left: "220px"
, top: "0"
, visibility: "visible"
, zIndex: "5"
, height: "52px"
, width: "max-content"
, background: "var(--infoColor)"
, boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)"
, borderBottomRightRadius: "10px"
, color: "var(--textColor)"
, fontFamily: "Nunito, sans-serif"
, fontWeight: "700"
, userSelect: "text"
}
, innerText: ([{
ctrl: b
, shift: t
, alt: d
, key: p
}, {
ctrl: u
, shift: m
, alt: h
, key: g
}] = [j.data.hide || {
ctrl: !0
, key: "e"
}, j.data.close || {
ctrl: !0
, key: "x"
}], `${[b&&"Ctrl",t&&"Shift",d&&"Alt",p&&p.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[u&&"Ctrl",m&&"Shift",h&&"Alt",g&&g.toUpperCase()].filter(Boolean).join(" + ")} for quick disable\nClick and drag here`)
, update: ({
ctrl: e
, shift: t
, alt: a
, key: o
} = {
ctrl: !0
, key: "e"
}, {
ctrl: n
, shift: i
, alt: r
, key: s
} = {
ctrl: !0
, key: "x"
}) => l.innerText = `${[e&&"Ctrl",t&&"Shift",a&&"Alt",o&&o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[n&&"Ctrl",i&&"Shift",r&&"Alt",s&&s.toUpperCase()].filter(Boolean).join(" + ")} for quick disable\nClick and drag here`
}), f("div", {
id: "credits"
, style: {
display: "flex"
, alignItems: "center"
, justifyContent: "center"
, paddingBottom: "8px"
, position: "absolute"
, right: "0"
, top: "0"
, visibility: "visible"
, zIndex: "5"
, height: "47px"
, width: "280px"
, background: "var(--infoColor)"
, boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)"
, borderBottomLeftRadius: "10px"
, color: "var(--textColor)"
, fontFamily: "Nunito, sans-serif"
, fontWeight: "700"
, userSelect: "text"
}
, innerHTML: "Created by OneMinesraft2#5394"
}), n = f("div", {
id: "controlButtons"
, style: {
display: "flex"
, alignItems: "center"
, justifyContent: "center"
, position: "absolute"
, right: "0"
, bottom: "0"
, visibility: "visible"
, zIndex: "5"
, height: "55px"
, width: "165px"
, background: "#none"
, borderLeft: "3px solid black"
, borderTop: "3px solid black"
, borderTopLeftRadius: "10px"
, color: "white"
, fontFamily: "Nunito, sans-serif"
, fontWeight: "700"
, userSelect: "text"
, overflow: "hidden"
, pointerEvents: "all"
}
}, e = f("button", {
style: {
height: "55px"
, width: "55px"
, fontFamily: "Nunito"
, color: "white"
, backgroundColor: "#00a0ff"
, border: "none"
, fontSize: "2rem"
, cursor: "move"
}
, innerHTML: "✥"
}), f("button", {
style: {
height: "55px"
, width: "55px"
, fontFamily: "Nunito"
, color: "white"
, backgroundColor: "grey"
, border: "none"
, fontSize: "2rem"
, fontWeight: "bolder"
, cursor: "pointer"
}
, innerHTML: "-"
, onclick: function () {
let t = !1;
return () => {
for (var e of[...o.children]) e != n && (t ? e.style.display = e.style._display : (e.style._display = e.style.display, e.style.display = "none"));
o.style.height = t ? "100%" : "55px", o.style.width = t ? "100%" : "165px", M.style.top = parseInt(M.style.top) + (M.offsetHeight - 55) * (t ? -1 : 1) + "px", M.style.left = parseInt(M.style.left) + (M.offsetWidth - 165) * (t ? -1 : 1) + "px", M.style.pointerEvents = t ? "unset" : "none", t = !t
}
}()
}), f("button", {
style: {
height: "55px"
, width: "55px"
, fontFamily: "Nunito"
, color: "white"
, backgroundColor: "red"
, border: "none"
, fontSize: "2rem"
, fontWeight: "bolder"
, cursor: "pointer"
}
, innerHTML: "X"
, onclick: x
})), i = f("div", {
className: "cheatList"
, style: {
overflowY: "scroll"
, background: "var(--cheatList)"
, boxShadow: "inset -10px 0 rgb(0 0 0 / 20%)"
, zIndex: "5"
, width: "220px"
, position: "absolute"
, top: "0"
, left: "0"
, height: "100%"
, fontFamily: "Titan One"
, color: "var(--textColor)"
, fontSize: "40px"
, textAlign: "center"
, paddingTop: "20px"
, userSelect: "none"
, padding: "20px 10px 20px 0"
, boxSizing: "border-box"
, display: "flex"
, flexDirection: "column"
}
, innerHTML: '<span style="text-shadow: 1px 1px rgb(0 0 0 / 40%)">Cheats</span>'
}, f("a", {
className: "bigButton"
, style: {
cursor: "pointer"
, display: "block"
, fontFamily: "Titan One"
, margin: "20px auto 10px"
, position: "relative"
, transition: ".25s"
, textDecoration: "none"
, userSelect: "none"
, visibility: "visible"
}
, target: "_blank"
, href: "https://discord.gg/QznzysxvX4"
, innerHTML: `<div style="background: rgba(0,0,0,.25); border-radius: 5px; display: block; width: 100%; height: 100%; left: 0; top: 0; position: absolute; transform: translateY(2px); width: 100%; transition: transform .6s cubic-bezier(.3,.7,.4,1)"></div>\n<div style="background-color: rgb(11, 194, 207); filter: brightness(.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px;"></div>\n<div style="font-weight: 400; background-color: rgb(11, 194, 207); color: white; display: flex; flex-direction: row; align-items: center; justify-content: center; text-align: center; padding: 5px; border-radius: 5px; transform: translateY(-4px); transition: transform .6s cubic-bezier(.3,.7,.4,1)">\n<div style="font-family: Titan One, sans-serif; color: white; font-size: 26px; text-shadow: 2px 2px rgb(0 0 0 / 20%); height: 40px; padding: 0 15px; display: flex; flex-direction: row; align-items: center; justify-content: center">\n<svg style="filter: drop-shadow(2px 2px 0 rgb(0 0 0 / 20%))" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 -1 21 16">\n<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>\n</svg>\nDiscord\n</div>\n</div>`
})), f("div", {
className: "contentWrapper"
, style: {
position: "absolute"
, left: "220px"
, top: "70px"
, overflowY: "scroll"
, width: "calc(100% - 220px)"
, height: "calc(100% - 70px)"
, borderRadius: "7px"
}
}, f("div", {
id: "content"
, style: {
position: "absolute"
, inset: "27px 50px 50px 50px"
}
}, r = f("div", {
className: "tooltip"
, style: {
position: "absolute"
, top: "0"
, left: "0"
, backgroundColor: "black"
, height: "fit-content"
, maxWidth: "300px"
, zIndex: "5"
, borderRadius: "7.5px"
, color: "white"
, display: "flex"
, justifyContent: "center"
, alignItems: "center"
, padding: "5px"
, paddingInline: "15px"
, pointerEvents: "none"
, opacity: "0"
, textAlign: "center"
}
, innerText: "description"
}), v = f("div", {
style: {
alignItems: "center"
, boxSizing: "border-box"
, display: "flex"
, flexDirection: "row"
, flexWrap: "wrap"
, justifyContent: "space-evenly"
, padding: "20px 5px 20px"
, position: "relative"
, width: "100%"
, fontFamily: "Nunito, sans-serif"
, fontWeight: "400"
, color: "var(--textColor)"
, background: "var(--contentBackground)"
, boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)"
, borderRadius: "7px"
}
}, s = f("div", {
className: "headerText"
, style: {
boxSizing: "border-box"
, display: "block"
, height: "45px"
, left: "-10px"
, padding: "4px 4px 8px"
, position: "absolute"
, top: "-28px"
, backgroundColor: "#ef7426"
, boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)"
, borderRadius: "7px"
}
}, f("div", {
style: {
alignItems: "center"
, boxSizing: "border-box"
, display: "flex"
, height: "100%"
, justifyContent: "center"
, padding: "0 15px"
, width: "100%"
, fontFamily: "Titan One, sans-serif"
, fontSize: "26px"
, fontWeight: "400"
, textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464"
, color: "white"
, background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)"
, borderRadius: "5px"
}
})))))));
for (const T of document.querySelectorAll("#JODGUI")) T.remove();

function y(e, t, a, o) {
const n = f("div", {
className: "cheatButton"
, innerHTML: ("string" == typeof t ? `<img style="height: 30px; margin-right: 5px" src="${t}">` : t || "") + e
, onclick: () => w(n.innerText, a, o)
});
return i.appendChild(n), n.onclick
}
async function w(e, l, t) {
v.innerHTML = "", s.firstChild.innerText = e + (t ? "" : " Cheats"), v.append(s);
for (let s = 0; s < l.length; s++) {
let {
name: e
, description: t
, type: a
, inputs: o
, enabled: n
, run: i
, element: r
} = l[s];
if (!r) {
const g = f("div", {
className: "scriptButton"
, style: {
background: "toggle" == a ? n ? "var(--enabledButton)" : "var(--disabledButton)" : "var(--defaultButton)"
}
}, f("div", {
className: "cheatName"
, innerHTML: e
}));
if (g.dataset.description = t, o ? .length)
for (let t = 0; t < o.length; t++) {
var {
name: c
, type: d
, options: p
, min: u
, max: m
, value: h
} = o[t];
let e;
try {
e = await ("function" == typeof p ? p ? .() : p)
} catch {
e = []
}
if ("options" == d && e ? .length) {
const b = document.createElement("select");
e.forEach(e => {
var t = document.createElement("option");
t.value = JSON.stringify(e ? .value || e), t.innerHTML = e ? .name || e, b.appendChild(t)
}), g.appendChild(b)
} else if ("function" == d) {
const y = document.createElement("input");
y.classList.add("cheatInput"), y.placeholder = c, y.style.textAlign = "center";
let e = !(y.readOnly = !0);
y.onclick = async() => {
e || (y.value = "Waiting for input...", e = !0, y.data = await o[t].function(e => y.value = e + "..."), e = !1, y.value = y.value.slice(0, -3))
}, g.appendChild(y)
} else {
p = document.createElement("input");
p.classList.add("cheatInput"), "number" == d && (p.type = "number", p.min = u, p.max = m, p.value = h || (null != u ? u : 0)), p.placeholder = c, p.style.textAlign = "center", g.appendChild(p)
}
}
g.onclick = function ({
target: e
}) {
e != g && !e.classList.contains("cheatName") || (e = [...g.children].slice(1), i.apply(this, e.map(e => "number" == e.type ? parseInt("0" + e.value) : "SELECT" == e.nodeName ? JSON.parse(e.value) : e.data || e.value)), "toggle" == a && (g.style.background = this.enabled ? "var(--enabledButton)" : "var(--disabledButton)"), O.alerts ? .[0].addLog(`${"toggle"==a?this.enabled?"Enabled":"Disabled":"Ran"} <strong>${this.name}</strong>` + (o ? .length ? ` with inputs: (${e.map(e=>"SELECT"==e.nodeName?e.selectedOptions[0].innerText:e.value).join(", ")})` : ""), "toggle" == a ? this.enabled ? "var(--enabledButton)" : "var(--disabledButton)" : null))
}.bind(l[s]), l[s].element = g
}
v.appendChild(l[s].element)
}
}
document.body.appendChild(M);
const O = {
global: [{
name: "Auto Answer (Toggle)"
, description: "Toggles auto answer on"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
var {
state: {
question: e
, stage: t
, feedback: a
}
, props: {
client: {
question: o
}
}
} = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
const n = e || o;
try {
"typing" != n.qType ? ("feedback" === t || a ? document.querySelector('[class*="feedback"]') ? .firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][n.answers.map((e, t) => n.correctAnswers.includes(e) ? t : null)
.filter(e => null != e)[0]]) ? .click ? .() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(n.answers[0])
} catch {}
}, 50))
}
}, {
name: "Highlight Answers (Toggle)"
, description: "Toggles highlight answers on"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
const {
state: a
, props: o
} = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
[...document.querySelectorAll('[class*="answerContainer"]')].forEach((e, t) => {
(a.question || o.client.question)
.correctAnswers.includes((a.question || o.client.question)
.answers[t]) ? e.style.backgroundColor = "rgb(0, 207, 119)" : e.style.backgroundColor = "rgb(189, 15, 38)"
})
}, 50))
}
}, {
name: "Auto Sell Dupes On Open"
, description: "Sells the blook you unlock when you open a pack if you already have one (Doesn't sell Legendaries or rarer)"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, XMLHttpRequest.prototype.open = this.data) : (this.enabled = !0, this.data = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype._original_open || = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function () {
this.addEventListener("load", async function () {
try {
var e, t, a, o, n;
"https://dashboard.blooket.com/api/users/unlockblook" === this.responseURL && (e = Object.values(webpackJsonp.push([[], {
"": (e, t, a) => {
t.cache = a.c
}
}, [[""]]])
.cache)
.find(e => e.exports ? .a ? .get)
.exports.a, t = webpackJsonp.push([[], {
rarity: (e, t, a) => {
t.rarity = e => a("MDrD")
.a[e].rarity
}
}, [["rarity"]]])["rarity"], a = JSON.parse(this.response)["unlockedBlook"], {
name: o
, unlocks: n
} = (await e.get("https://dashboard.blooket.com/api/users"))["data"], n[a] && !["Legendary", "Chroma", "Mystical"].includes(t(a))) && (await e.put("https://dashboard.blooket.com/api/users/sellblook", {
name: o
, blook: a
, numSold: 1
}), console.log("Sold duplicate " + a))
} catch {}
}), XMLHttpRequest.prototype._original_open.apply(this, arguments)
})
}
}, {
name: "Auto Answer"
, description: "Click the correct answer for you"
, run: function () {
const {
state: {
question: a
, stage: e
, feedback: t
}
, props: {
client: {
question: o
}
}
} = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
try {
"typing" != a.qType ? ("feedback" === e || t ? document.querySelector('[class*="feedback"]') ? .firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(a || o)
.answers.map((e, t) => (a || o)
.correctAnswers.includes(e) ? t : null)
.filter(e => null != e)[0]]) ? .click ? .() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(a.answers[0])
} catch {}
}
}, {
name: "Spam Buy Blooks"
, description: "Opens a box an amount of times"
, inputs: [{
name: "Box"
, type: "options"
, options: () => new Promise(e => {
e(Object.keys(Object.values(webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])
.webpack.c)
.find(e => e ? .exports ? .a ? .Safari) ? .exports.a || {}))
})
}, {
name: "Amount"
, type: "number"
}]
, run: function (o, n) {
var e = document.createElement("iframe")
, i = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.prompt = e.contentWindow.prompt.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), Object.values(webpackJsonp.push([[], {
"": (e, t, a) => {
t.cache = a.c
}
}, [[""]]])
.cache))
, c = i.find(e => e.exports ? .a ? .get)
.exports.a;
o = o.split(" ")
.map(e => e.charAt(0)
.toUpperCase() + e.slice(1)
.toLowerCase())
.join(" "), c.get("https://dashboard.blooket.com/api/users")
.then(async({
data: {
name: e
, tokens: t
}
}) => {
var a = i.find(e => e ? .exports ? .a ? .Safari) ? .exports ? .a || {
Medieval: 15
, Breakfast: 15
, Wonderland: 15
, Space: 20
, Bot: 20
, Aquatic: 20
, Safari: 20
, Dino: 25
, "Ice Monster": 25
};
let l = Math.min(Math.floor(t / a[o]), n);
if (0 == l) 0 < n && alert("You do not have enough tokens!");
else {
let i = confirm("Would you like to alert blooks upon unlocking?")
, r = {}
, s = Date.now()
, t = !1;
for (let n = 0; n < l && (await c.put("https://dashboard.blooket.com/api/users/unlockblook", {
name: e
, box: o
})
.then(({
data: {
unlockedBlook: e
, tokens: t
, isNewBlook: a
}
}) => {
r[e] || = 0, r[e]++;
var o = Date.now();
i && alert(`${e} (${n+1}/${l}) ${a?"NEW! ":""}${t} tokens left`), s += Date.now() - o
})
.catch(e => t = !0), !t); n++);
alert(`(${Date.now()-s}ms) Results:\n` + Object.entries(r)
.map(([e, t]) => `${e} ` + t)
.join(`\n`))
}
})
.catch(() => alert("There was an error user data!"))
}
}, {
name: "Flood Game"
, description: "Floods a game with a number of fake accounts"
, inputs: [{
name: "Game ID"
, type: "string"
}, {
name: "Name"
, type: "string"
}, {
name: "Amount"
, type: "number"
}, {
name: "Blook"
, type: "options"
, options: async() => {
var e = webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])["webpack"];
return Object.keys(Object.values(e.c)
.find(e => e.exports.a ? .Chick && e.exports.a ? .Elephant)
.exports.a)
}
}, {
name: "Banner"
, type: "options"
, options: Object.entries({
Starter: "starter"
, Chalkboard: "chalkboard"
, Slime: "slime"
, Bookshelf: "bookshelf"
, "Toaster Pastry": "toasterPastry"
, Theater: "theater"
, Sushi: "sushi"
, Workbench: "workbench"
, Spooky: "spooky"
, Spiders: "spiders"
, Coffin: "coffin"
, Pumpkins: "pumpkins"
, "Falling Blocks": "fallingBlocks"
, Racetrack: "racetrack"
, Harvest: "harvest"
, Leaves: "leaves"
, "Fall Picnic": "fallPicnic"
, "Winter Drive": "winterDrive"
, "Winter Train": "winterTrain"
, Ice: "ice"
, Gifts: "gifts"
, "Christmas Tree": "christmasTree"
, "Soccer Field": "soccerField"
, "Winter Landscape": "winterLandscape"
, "Football Field": "footballField"
, "Outer Space": "outerSpace"
, "Hockey Rink": "hockeyRink"
, "Music Class": "musicClass"
, "Ice Cream Sandwich": "iceCreamSandwich"
, "Science Class": "scienceClass"
, "Fish Tank": "fishTank"
, "Art Class": "artClass"
, Clockwork: "clockwork"
, "Love Letter": "loveLetter"
, Farm: "farm"
, Chocolate: "chocolate"
, "Tech Chip": "techChip"
, Fire: "fire"
, "Orange Ice Pop": "orangeIcePop"
})
.map(([e, t]) => ({
name: e
, value: t
}))
}]
, run: async function (n, i, e, r, s) {
var t = webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])["webpack"];
const l = Object.values(t.c)
.find(e => e.exports ? .a ? .get)
.exports.a
, c = Object.values(t.c)
.find(e => e.exports ? .a ? .initializeApp)
.exports.a;
for (let o = 1; o <= e; o++)(async() => {
var {
success: e
, fbToken: t
, fbShardURL: a
} = (await l.put("https://fb.blooket.com/c/firebase/join", {
id: n
, name: "" + i + o
}))["data"];
e && (e = c.initializeApp({
apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU"
, authDomain: "blooket-2020.firebaseapp.com"
, projectId: "blooket-2020"
, storageBucket: "blooket-2020.appspot.com"
, messagingSenderId: "741533559105"
, appId: "1:741533559105:web:b8cbb10e6123f2913519c0"
, measurementId: "G-S3H5NGN10Z"
, databaseURL: a
}, "" + i + o), await (a = c.auth(e))
.setPersistence(c.auth.Auth.Persistence.NONE)
.catch(console.error), await a.signInWithCustomToken(t)
.catch(console.error), await e.database()
.ref(n + "/c/" + i + o)
.set({
b: r
, bg: s
}), e.delete())
})(), await new Promise(e => setTimeout(e, 100))
}
}, {
name: "Get Daily Rewards"
, description: "Gets max daily tokens and xp"
, run: function () {
var a, e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), location.href.includes("play.blooket.com") ? (a = Object.values(webpackJsonp.push([[], {
"": (e, t, a) => {
t.cache = a.c
}
}, [[""]]])
.cache)
.find(e => e.exports ? .a ? .get)
.exports.a)
.post("https://play.blooket.com/api/playersessions/solo", {
gameMode: "Factory"
})
.then(({
data: {
t
}
}) => {
a.get("https://play.blooket.com/api/users/me")
.then(({
data: {
name: e
}
}) => {
a.put("https://play.blooket.com/api/users/add-rewards", {
t: t
, name: e
, addedTokens: 500
, addedXp: 300
})
.then(({
data: {
dailyReward: e
}
}) => alert(`Added max tokens and xp, and got ${e} daily wheel tokens!`))
.catch(() => alert("There was an error when adding rewards."))
})
.catch(() => alert("There was an error user data."))
}) : (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"))
}
}, {
name: "Use Any Blook"
, description: "Allows you to play as any blook"
, run: function () {
const a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
var e = webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])
.webpack("MDrD")
.a;
"/blooks" == location.pathname ? a.setState({
blookData: Object.keys(e)
.reduce((e, t) => (e[t] = a.state.blookData[t] || 1, e), {})
, allSets: Object.values(e)
.reduce((e, t) => e.includes(t.set) ? e : e.concat(t.set), [])
}) : Array.isArray(a.state.unlocks) ? a.setState({
unlocks: Object.keys(e)
}) : a.setState({
unlocks: e
})
}
}, {
name: "Every Answer Correct"
, description: "Sets every answer to be correct"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.freeQuestions = e.questions = e.props.client.questions.map(e => ({...e
, correctAnswers: e.answers
}))
}
}, {
name: "Highlight Answers"
, description: "Colors answers to be red or green highlighting the correct ones"
, run: function () {
const {
state: a
, props: o
} = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
[...document.querySelectorAll('[class*="answerContainer"]')].forEach((e, t) => {
(a.question || o.client.question)
.correctAnswers.includes((a.question || o.client.question)
.answers[t]) ? e.style.backgroundColor = "rgb(0, 207, 119)" : e.style.backgroundColor = "rgb(189, 15, 38)"
})
}
}, {
name: "Remove Name Limit"
, description: "Sets the name limit to 120, which is the actual max name length limit"
, run: function () {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), document.querySelector('input[class*="nameInput"]')
.maxLength = 120, alert("Removed name length limit")
}
}, {
name: "Remove Random Name"
, description: "Allows you to put a custom name"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
isRandom: !1
, client: {
name: ""
}
}), document.querySelector('[class*="nameInput"]') ? .focus ? .()
}
}, {
name: "Sell Cheap Duplicates"
, description: "Sells all of your uncommon to epic dupes (not legendaries+)"
, run: function () {
var e = document.createElement("iframe")
, i = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), Object.values(webpackJsonp.push([[], {
"": (e, t, a) => {
t.cache = a.c
}
}, [[""]]])
.cache)
.find(e => e.exports ? .a ? .get)
.exports.a);
i.get("https://dashboard.blooket.com/api/users")
.then(async({
data: {
name: e
, unlocks: t
}
}) => {
t = Object.entries(t)
.filter(([e, t]) => 1 < t && !["Legendary", "Chroma", "Mystical"].includes(webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])
.webpack("MDrD")
.a[e].rarity));
if (confirm("Are you sure you want to sell your uncommon to epic dupes?")) {
var a, o, n = Date.now();
for ([a, o] of t) await i.put("https://dashboard.blooket.com/api/users/sellblook", {
name: e
, blook: a
, numSold: o - 1
});
alert(`(${Date.now()-n}ms) Results:\n` + t.map(([e, t]) => `${e} ` + (t - 1))
.join(`\n`))
}
})
.catch(() => alert("There was an error user data!"))
}
}, {
name: "Sell Duplicate Blooks"
, description: "Sell all duplicate blooks leaving you with 1 each"
, run: function () {
var e = document.createElement("iframe")
, i = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), Object.values(webpackJsonp.push([[], {
"": (e, t, a) => {
t.cache = a.c
}
}, [[""]]])
.cache)
.find(e => e.exports ? .a ? .get)
.exports.a);
i.get("https://dashboard.blooket.com/api/users")
.then(async({
data: {
name: e
, unlocks: t
}
}) => {
t = Object.entries(t)
.filter(e => 1 < e[1]);
if (confirm("Are you sure you want to sell your dupes?")) {
var a, o, n = Date.now();
for ([a, o] of t) await i.put("https://dashboard.blooket.com/api/users/sellblook", {
name: e
, blook: a
, numSold: o - 1
});
alert(`(${Date.now()-n}ms) Results:\n` + t.map(([e, t]) => `${e} ` + (t - 1))
.join(`\n`))
}
})
.catch(() => alert("There was an error user data!"))
}
}, {
name: "Simulate Pack"
, description: "Simulate opening a pack"
, inputs: [{
name: "Pack"
, type: "options"
, options: async() => Array.from(document.querySelectorAll('[class*="packShadow"]'))
.map(e => e.alt)
}]
, run: function () {
let m = webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])["webpack"]
, o = Object.values(m.c)
.find(e => e.exports ? .Class)
.exports
, h = {};
class n extends o.Scene {
constructor(e) {
super(), this.rarity = e.toLowerCase()
}
preload() {
switch (this.rarity) {
case "uncommon":
this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", {
width: 25
, height: 25
}), this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", {
width: 25
, height: 25
}), this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", {
width: 25
, height: 25
}), this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", {
width: 30
, height: 30
}), this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", {
width: 30
, height: 30
}), this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", {
width: 30
, height: 30
}), this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", {
width: 30
, height: 30
});
break;
case "rare":
this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", {
width: 25
, height: 25
}), this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", {
width: 25
, height: 25
}), this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", {
width: 30
, height: 30
}), this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", {
width: 30
, height: 30
}), this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", {
width: 30
, height: 30
}), this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", {
width: 30
, height: 30
}), this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", {
width: 25
, height: 25
});
break;
case "epic":
this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", {
width: 25
, height: 25
}), this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", {
width: 25
, height: 25
}), this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", {
width: 30
, height: 30
}), this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", {
width: 30
, height: 30
}), this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", {
width: 30
, height: 30
}), this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", {
width: 30
, height: 30
}), this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", {
width: 25
, height: 25
});
break;
case "legendary":
this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", {
width: 25
, height: 25
}), this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", {
width: 25
, height: 25
}), this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", {
width: 25
, height: 25
}), this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", {
width: 30
, height: 30
}), this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", {
width: 30
, height: 30
}), this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", {
width: 25
, height: 25
}), this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", {
width: 30
, height: 30
});
break;
case "chroma":
this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", {
width: 25
, height: 25
}), this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", {
width: 25
, height: 25
}), this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", {
width: 30
, height: 30
}), this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", {
width: 30
, height: 30
}), this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", {
width: 30
, height: 30
}), this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", {
width: 30
, height: 30
}), this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", {
width: 25
, height: 25
})
}
}
create() {
h.scene = this, h.rarity = "", h.particles = this.physics.add.group({
classType: new o.Class({
Extends: o.GameObjects.Image
, initialize: function () {
o.GameObjects.Image.call(this, h.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0
}
, spawn: function (e, t, a, o, n, i, r, s, l) {
this.setTexture(l), this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.setScale(a), this.targets = [], h.scene.physics.velocityFromAngle(o, n, this.body.velocity), this.body.setGravityY(i), this.body.setAngularVelocity(r), this.lifespan = s
}
, update: function (e, t) {
this.lifespan -= t, 0 < this.lifespan || (this.setActive(!1), this.setVisible(!1))
}
})
, runChildUpdate: !0
}), this.nextParticle = 0, this.numExplosions = 0, this.game.events.on("start-particles", e => {
h.rarity = e, this.numExplosions = "Uncommon" === e ? 75 : "Rare" === e ? 100 : -1
})
}
update(e, t) {
const a = m("74sb");

function o(e) {
switch (e) {
case "center":
var t = Object(a.l)(-115, -65);
return {
x: h.scene.cameras.main.worldView.width / 2
, y: h.scene.cameras.main.worldView.height / 2
, scale: Object(a.l)(.7, 1)
, angle: t
, velocity: Object(a.l)(600, 750)
, gravity: 700
, angVelocity: (-90 < t ? 1 : -1) * Object(a.l)(125, 175)
, lifespan: 2500
};
case "right-bottom":
return {
x: h.scene.cameras.main.worldView.width
, y: h.scene.cameras.main.worldView.height
, scale: Object(a.l)(.7, 1)
, angle: Object(a.l)(-160, -110)
, velocity: Object(a.l)(600, 750)
, gravity: 500
, angVelocity: Object(a.l)(-175, -125)
, lifespan: 2500
};
case "left-bottom":
return {
x: 0
, y: h.scene.cameras.main.worldView.height
, scale: Object(a.l)(.7, 1)
, angle: Object(a.l)(-70, -20)
, velocity: Object(a.l)(600, 750)
, gravity: 500
, angVelocity: Object(a.l)(125, 175)
, lifespan: 2500
};
case "top":
return {
x: Object(a.l)(0, h.scene.cameras.main.worldView.width)
, y: -50
, scale: Object(a.l)(.7, 1)
, angle: 90
, velocity: Object(a.l)(0, 50)
, gravity: 700
, angVelocity: Object(a.l)(-150, 150)
, lifespan: 2500
};
case "right-shower":
return {
x: h.scene.cameras.main.worldView.width
, y: Object(a.l)(0, h.scene.cameras.main.worldView.height)
, scale: Object(a.l)(.7, 1)
, angle: Object(a.l)(-180, -130)
, velocity: Object(a.l)(600, 750)
, gravity: 500
, angVelocity: Object(a.l)(-175, -125)
, lifespan: 2500
};
case "left-shower":
return {
x: 0
, y: Object(a.l)(0, h.scene.cameras.main.worldView.height)
, scale: Object(a.l)(.7, 1)
, angle: Object(a.l)(-50, 0)
, velocity: Object(a.l)(600, 750)
, gravity: 500
, angVelocity: Object(a.l)(125, 175)
, lifespan: 2500
};
case "right-diamond":
t = Object(a.l)(0, h.scene.cameras.main.worldView.height);
return {
x: h.scene.cameras.main.worldView.width
, y: t
, scale: Object(a.l)(.7, 1)
, angle: t > h.scene.cameras.main.worldView.height / 2 ? -150 : -210
, velocity: Object(a.l)(600, 750)
, gravity: 0
, angVelocity: Object(a.l)(-175, -125)
, lifespan: 2500
};
case "left-diamond":
t = Object(a.l)(0, h.scene.cameras.main.worldView.height);
return {
x: 0
, y: t
, scale: Object(a.l)(.7, 1)
, angle: t > h.scene.cameras.main.worldView.height / 2 ? -30 : 30
, velocity: Object(a.l)(600, 750)
, gravity: 0
, angVelocity: Object(a.l)(125, 175)
, lifespan: 2500
};
default:
return {}
}
}
if (h.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
switch (h.rarity) {
case "Uncommon":
for (let e = 0; e < 2; e++) {
var n = h.particles.get();
n && n.spawn.apply(n, Object.values(o("center"))
.concat("uncommon-" + Object(a.m)(1, 8)))
}
break;
case "Rare":
for (var i = 0; i < 2; i++) {
var r = h.particles.get();
r && r.spawn.apply(r, Object.values(o(i % 2 == 0 ? "left-bottom" : "right-bottom"))
.concat("rare-" + Object(a.m)(1, 8)))
}
break;
case "Epic":
for (var s = 0; s < 2; s++) {
var l = h.particles.get();
l && l.spawn.apply(l, Object.values(o(s % 2 == 0 ? "left-shower" : "right-shower"))
.concat("epic-" + Object(a.m)(1, 8)))
}
break;
case "Legendary":
for (var c = 0; c < 3; c++) {
var d = h.particles.get();
d && d.spawn.apply(d, Object.values(o("top"))
.concat("legendary-" + Object(a.m)(1, 8)))
}
break;
case "Chroma":
for (var p = 0; p < 3; p++) {
var u = h.particles.get();
u && u.spawn.apply(u, Object.values(o(p % 2 == 0 ? "left-diamond" : "right-diamond"))
.concat("chroma-" + Object(a.m)(1, 8)))
}
}
this.nextParticle = 20, 0 < this.numExplosions && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
}
}
}
return function (e) {
if ("/market" !== window.location.pathname) return alert("This must be ran on the market page");
var t, a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
let i = m("fGzD");
(i = Object.keys(i.a)
.reduce((e, t) => (e.packs.includes(t) && (e.data[t] = Object.fromEntries(i.b(t))), e), {
packs: Array.from(document.querySelectorAll('[class*="packShadow"]'))
.map(e => e.alt)
, data: {}
})
.data)[e] ? (e = function (e) {
var t = []
, a = Object.keys(i[e]);
for (const n of a) t.push(i[e][n] + (t[a.indexOf(n) - 1] || 0));
const o = t[t.length - 1] * Math.random();
return a[t.findIndex(e => e >= o)]
}(e), t = Object.values(m.c)
.find(e => e.exports ? .a ? .Elephant)
.exports.a, a.setState({
loadingPack: !1
, openPack: !0
, unlockedBlook: e
, tokens: a.state.tokens
, newUnlock: !0
, game: {
type: o.WEBGL
, parent: "phaser-market"
, width: "100%"
, height: "100%"
, scale: {
mode: o.Scale.NONE
, autoCenter: o.Scale.CENTER_BOTH
}
, transparent: !0
, physics: {
default: "arcade"
}
, scene: new n(t[e].rarity)
}
, canOpen: !0
})) : alert("I couldn't find that box!")
}
}()
}, {
name: "Simulate Unlock"
, description: "Simulate unlocking most of the blooks"
, inputs: [{
name: "Blook"
, type: "options"
, options: async() => {
let a = webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])["webpack"];
return Object.keys(Object.entries(Object.values(a.c)
.find(e => Object.values(e.exports ? .a || {})[0] ? .set)
.exports.a)
.reduce((e, t) => (Object.values(a.c)
.find(e => 15 == e.exports.a ? .Breakfast)
.exports.a[t[1].realSet || t[1].set] && (e[t[0]] = t[1]), e), {}))
}
}]
, run: function () {
let m = webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])["webpack"]
, a = Object.values(m.c)
.find(e => e.exports ? .Class)
.exports
, h = {};
class o extends a.Scene {
constructor(e) {
super(), this.rarity = e.toLowerCase()
}
preload() {
switch (this.rarity) {
case "uncommon":
this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", {
width: 25
, height: 25
}), this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", {
width: 25
, height: 25
}), this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", {
width: 25
, height: 25
}), this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", {
width: 30
, height: 30
}), this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", {
width: 30
, height: 30
}), this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", {
width: 30
, height: 30
}), this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", {
width: 30
, height: 30
});
break;
case "rare":
this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", {
width: 25
, height: 25
}), this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", {
width: 25
, height: 25
}), this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", {
width: 30
, height: 30
}), this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", {
width: 30
, height: 30
}), this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", {
width: 30
, height: 30
}), this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", {
width: 30
, height: 30
}), this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", {
width: 25
, height: 25
});
break;
case "epic":
this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", {
width: 25
, height: 25
}), this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", {
width: 25
, height: 25
}), this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", {
width: 30
, height: 30
}), this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", {
width: 30
, height: 30
}), this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", {
width: 30
, height: 30
}), this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", {
width: 30
, height: 30
}), this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", {
width: 25
, height: 25
});
break;
case "legendary":
this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", {
width: 25
, height: 25
}), this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", {
width: 25
, height: 25
}), this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", {
width: 25
, height: 25
}), this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", {
width: 30
, height: 30
}), this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", {
width: 30
, height: 30
}), this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", {
width: 25
, height: 25
}), this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", {
width: 30
, height: 30
});
break;
case "chroma":
this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", {
width: 25
, height: 25
}), this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", {
width: 25
, height: 25
}), this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", {
width: 30
, height: 30
}), this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", {
width: 30
, height: 30
}), this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", {
width: 30
, height: 30
}), this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", {
width: 30
, height: 30
}), this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", {
width: 25
, height: 25
})
}
}
create() {
h.scene = this, h.rarity = "", h.particles = this.physics.add.group({
classType: new a.Class({
Extends: a.GameObjects.Image
, initialize: function () {
a.GameObjects.Image.call(this, h.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0
}
, spawn: function (e, t, a, o, n, i, r, s, l) {
this.setTexture(l), this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.setScale(a), this.targets = [], h.scene.physics.velocityFromAngle(o, n, this.body.velocity), this.body.setGravityY(i), this.body.setAngularVelocity(r), this.lifespan = s
}
, update: function (e, t) {
this.lifespan -= t, 0 < this.lifespan || (this.setActive(!1), this.setVisible(!1))
}
})
, runChildUpdate: !0
}), this.nextParticle = 0, this.numExplosions = 0, this.game.events.on("start-particles", e => {
h.rarity = e, this.numExplosions = "Uncommon" === e ? 75 : "Rare" === e ? 100 : -1
})
}
update(e, t) {
const a = m("74sb");

function o(e) {
switch (e) {
case "center":
var t = Object(a.l)(-115, -65);
return {
x: h.scene.cameras.main.worldView.width / 2
, y: h.scene.cameras.main.worldView.height / 2
, scale: Object(a.l)(.7, 1)
, angle: t
, velocity: Object(a.l)(600, 750)
, gravity: 700
, angVelocity: (-90 < t ? 1 : -1) * Object(a.l)(125, 175)
, lifespan: 2500
};
case "right-bottom":
return {
x: h.scene.cameras.main.worldView.width
, y: h.scene.cameras.main.worldView.height
, scale: Object(a.l)(.7, 1)
, angle: Object(a.l)(-160, -110)
, velocity: Object(a.l)(600, 750)
, gravity: 500
, angVelocity: Object(a.l)(-175, -125)
, lifespan: 2500
};
case "left-bottom":
return {
x: 0
, y: h.scene.cameras.main.worldView.height
, scale: Object(a.l)(.7, 1)
, angle: Object(a.l)(-70, -20)
, velocity: Object(a.l)(600, 750)
, gravity: 500
, angVelocity: Object(a.l)(125, 175)
, lifespan: 2500
};
case "top":
return {
x: Object(a.l)(0, h.scene.cameras.main.worldView.width)
, y: -50
, scale: Object(a.l)(.7, 1)
, angle: 90
, velocity: Object(a.l)(0, 50)
, gravity: 700
, angVelocity: Object(a.l)(-150, 150)
, lifespan: 2500
};
case "right-shower":
return {
x: h.scene.cameras.main.worldView.width
, y: Object(a.l)(0, h.scene.cameras.main.worldView.height)
, scale: Object(a.l)(.7, 1)
, angle: Object(a.l)(-180, -130)
, velocity: Object(a.l)(600, 750)
, gravity: 500
, angVelocity: Object(a.l)(-175, -125)
, lifespan: 2500
};
case "left-shower":
return {
x: 0
, y: Object(a.l)(0, h.scene.cameras.main.worldView.height)
, scale: Object(a.l)(.7, 1)
, angle: Object(a.l)(-50, 0)
, velocity: Object(a.l)(600, 750)
, gravity: 500
, angVelocity: Object(a.l)(125, 175)
, lifespan: 2500
};
case "right-diamond":
t = Object(a.l)(0, h.scene.cameras.main.worldView.height);
return {
x: h.scene.cameras.main.worldView.width
, y: t
, scale: Object(a.l)(.7, 1)
, angle: t > h.scene.cameras.main.worldView.height / 2 ? -150 : -210
, velocity: Object(a.l)(600, 750)
, gravity: 0
, angVelocity: Object(a.l)(-175, -125)
, lifespan: 2500
};
case "left-diamond":
t = Object(a.l)(0, h.scene.cameras.main.worldView.height);
return {
x: 0
, y: t
, scale: Object(a.l)(.7, 1)
, angle: t > h.scene.cameras.main.worldView.height / 2 ? -30 : 30
, velocity: Object(a.l)(600, 750)
, gravity: 0
, angVelocity: Object(a.l)(125, 175)
, lifespan: 2500
};
default:
return {}
}
}
if (h.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
switch (h.rarity) {
case "Uncommon":
for (let e = 0; e < 2; e++) {
var n = h.particles.get();
n && n.spawn.apply(n, Object.values(o("center"))
.concat("uncommon-" + Object(a.m)(1, 8)))
}
break;
case "Rare":
for (var i = 0; i < 2; i++) {
var r = h.particles.get();
r && r.spawn.apply(r, Object.values(o(i % 2 == 0 ? "left-bottom" : "right-bottom"))
.concat("rare-" + Object(a.m)(1, 8)))
}
break;
case "Epic":
for (var s = 0; s < 2; s++) {
var l = h.particles.get();
l && l.spawn.apply(l, Object.values(o(s % 2 == 0 ? "left-shower" : "right-shower"))
.concat("epic-" + Object(a.m)(1, 8)))
}
break;
case "Legendary":
for (var c = 0; c < 3; c++) {
var d = h.particles.get();
d && d.spawn.apply(d, Object.values(o("top"))
.concat("legendary-" + Object(a.m)(1, 8)))
}
break;
case "Chroma":
for (var p = 0; p < 3; p++) {
var u = h.particles.get();
u && u.spawn.apply(u, Object.values(o(p % 2 == 0 ? "left-diamond" : "right-diamond"))
.concat("chroma-" + Object(a.m)(1, 8)))
}
}
this.nextParticle = 20, 0 < this.numExplosions && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
}
}
}
return function (e) {
var t = document.createElement("iframe");
document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/market" == window.location.pathname ? (t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], t.setState({
loadingPack: !1
, openPack: !0
, unlockedBlook: e
, tokens: t.state.tokens
, newUnlock: !0
, game: {
type: a.WEBGL
, parent: "phaser-market"
, width: "100%"
, height: "100%"
, scale: {
mode: a.Scale.NONE
, autoCenter: a.Scale.CENTER_BOTH
}
, transparent: !0
, physics: {
default: "arcade"
}
, scene: new o(Object.entries(Object.values(m.c)
.find(e => Object.values(e.exports ? .a || {})[0] ? .set)
.exports.a)
.reduce((e, t) => (Object.values(m.c)
.find(e => 15 == e.exports.a ? .Breakfast)
.exports.a[t[1].set] && (e[t[0]] = t[1]), e), {})[e].rarity)
}
, canOpen: !0
})) : alert("This can only be ran on the market page!")
}
}()
}, {
name: "Unlock Plus Gamemodes"
, description: "Allows you to play any gamemode that is plus only"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState(e => (e.gameModes.forEach(e => e.plusOnly = !1), e))
}
}]
, brawl: [{
name: "Double Enemy XP"
, description: "Doubles enemy XP drop value"
, run: function () {
for (const a of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e => e.callbackContext ? .toString()
.includes("invulnerableTime"))) {
var t = a.object2;
let e = t.classType.prototype.start;
t.classType.prototype.start = function () {
e.apply(this, arguments), this.val *= 2
}, t.children.entries.forEach(e => e.val *= 2)
}
}
}, {
name: "Half Enemy Speed"
, description: "Makes enemies move 2x slower"
, run: function () {
for (const a of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e => e.callbackContext ? .toString()
.includes("invulnerableTime"))) {
var t = a.object2;
let e = t.classType.prototype.start;
t.classType.prototype.start = function () {
e.apply(this, arguments), this.speed *= .5
}, t.children.entries.forEach(e => e.speed *= .5)
}
}
}, {
name: "Instant Kill"
, description: "Sets all enemies health to 1"
, run: function () {
for (const a of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e => e.callbackContext ? .toString()
.includes("invulnerableTime"))) {
var t = a.object2;
let e = t.classType.prototype.start;
t.classType.prototype.start = function () {
e.apply(this, arguments), this.hp = 1
}, t.children.entries.forEach(e => e.hp = 1)
}
}
}, {
name: "Invincibility"
, description: "Makes you invincible"
, run: function () {
for (const e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e => e.callbackContext ? .toString()
.includes("invulnerableTime"))) e.collideCallback = () => {}
}
}, {
name: "Magnet"
, description: "Pulls all xp towards you"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.find(e => e.collideCallback ? .toString()
.includes("magnetTime"))
.collideCallback({
active: !0
}, {
active: !0
, setActive() {}
, setVisible() {}
})
}
}, {
name: "Max Current Abilities"
, description: "Maxes out all your current abilities"
, run: function () {
const a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
for (var [t, o] of Object.entries(a.state.abilities))
for (let e = 0; e < 10 - o; e++) a.state.game.scene.game.events.emit("level up", t, a.state.abilities[t]++);
a.setState({
level: a.state.game.scene.level = [1, 3, 5, 10, 15, 25, 35].sort((e, t) => Math.abs(e - a.state.level) - Math.abs(t - a.state.level))[0] - 1
})
}
}, {
name: "Next Level"
, description: "Skips to the next level"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"]
, {
object1: t
, object2: a
} = e.state.game.scene.physics.world.colliders._active.find(e => e.collideCallback ? .toString()
.includes('emit("xp"'));
a.get()
.spawn(t.x, t.y, (1 === (a = e.state.level) ? 1 : a < 5 ? 5 : a < 10 ? 10 : a < 20 ? 20 : a < 30 ? 30 : a < 40 ? 40 : a < 50 ? 50 : 100) - e.xp)
}
}, {
name: "Remove Obstacles"
, description: "Removes all rocks and obstacles"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(e => {
try {
e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
} catch {}
})
}
}, {
name: "Kill Enemies"
, description: "Kills all current enemies"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(e => e ? .gameObject ? .receiveDamage ? .(e.gameObject.hp, 1))
}
}, {
name: "Reset Health"
, description: "Resets health and gives invincibility for 3 seconds"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.game.events._events.respawn.fn()
}
}]
, cafe: [{
name: "Max Items"
, description: "Maxes out items in the shop (Only usable in the shop)"
, run: function () {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], e.setState({
items: Object.fromEntries(Object.entries(e.state.items)
.map(e => [e[0], 5]))
}))
}
}, {
name: "Remove Customers"
, description: "Skips the current customers (Not usable in the shop)"
, run: function () {
const a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
a.state.customers.forEach((e, t) => Object.keys(e)
.length && a.removeCustomer(t, !0))
}
}, {
name: "Reset Abilities"
, description: "Resets used abilities in shop (Only usable in the shop)"
, run: function () {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], e.setState({
abilities: Object.fromEntries(Object.entries(e.state.abilities)
.map(e => [e[0], 5]))
}))
}
}, {
name: "Set Cash"
, description: "Sets cafe cash"
, inputs: [{
name: "Amount"
, type: "number"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
cafeCash: e
}), t.props.liveGameController.setVal({
path: "c/" + t.props.client.name
, val: {
b: t.props.client.blook
, ca: e
}
})
}
}, {
name: "Stock Food"
, description: "Stocks all food to 99 (Not usable in the shop)"
, run: function () {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], e.setState({
foods: e.state.foods.map(e => ({...e
, stock: 99
, level: 5
}))
}))
}
}]
, crypto: [{
name: "Choice ESP"
, description: "Shows what each choice will give you"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
var e, t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"]
, t = t.state.choices[0]["text"]
, a = document.querySelector("[class^=styles__feedbackContainer___]");
a.children.length <= 4 && ((e = document.createElement("div"))
.style.color = "white", e.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif", e.style.fontSize = "2em", e.style.display = "flex", e.style.justifyContent = "center", e.style.marginTop = "675px", e.innerText = t, a.append(e))
}, 50))
}
}, {
name: "Password ESP"
, description: "Highlights the correct password"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
let t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode["state"];
"hack" == t.stage && [...document.querySelector("div[class^=styles__buttonContainer]")
.children].forEach(e => {
e.innerText != t.correctPassword && (e.style.outlineColor = "rgba(255, 64, 64, 0.8)", e.style.backgroundColor = "rgba(255, 64, 64, 0.8)", e.style.textShadow = "0 0 1px #f33")
})
}, 50))
}
}, {
name: "Always Triple"
, description: "Always get triple crypto"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
choices: [{
type: "mult"
, val: 3
, rate: .075
, blook: "Brainy Bot"
, text: "Triple Crypto"
}]
}), 50))
}
}, {
name: "Auto Guess"
, description: "Automatically guess the correct password"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode["state"];
if ("hack" == e.stage)
for (const t of document.querySelector("div[class^=styles__buttonContainer]")
.children) t.innerText == e.correctPassword && t.click()
}, 50))
}
}, {
name: "Remove Hack"
, description: "Removes an attacking hack"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
hack: ""
})
}
}, {
name: "Set Crypto"
, description: "Sets crypto"
, inputs: [{
name: "Amount"
, type: "number"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
crypto: e
, crypto2: e
}), t.props.liveGameController.setVal({
path: "c/".concat(t.props.client.name)
, val: {
b: t.props.client.blook
, p: t.state.password
, cr: e
}
})
}
}, {
name: "Set Password"
, description: "Sets hacking password"
, inputs: [{
name: "Custom Password"
, type: "string"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
password: e
}), t.props.liveGameController.setVal({
path: "c/".concat(t.props.client.name)
, val: {
b: t.props.client.blook
, p: e
, cr: t.state.crypto
}
})
}
}, {
name: "Steal Player's Crypto"
, description: "Steals all of someone's crypto"
, inputs: [{
name: "Player"
, type: "options"
, options: () => {
let e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}]
, run: function (a) {
let o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
o.props.liveGameController.getDatabaseVal("c", e => {
var t;
e && Object.keys(e)
.map(e => e.toLowerCase())
.includes(a.toLowerCase()) && ([e, {
cr: t
}] = Object.entries(e)
.find(([e]) => e.toLowerCase() == a.toLowerCase()), o.setState({
crypto: o.state.crypto + t
, crypto2: o.state.crypto + t
}), o.props.liveGameController.setVal({
path: "c/".concat(o.props.client.name)
, val: {
b: o.props.client.blook
, p: o.state.password
, cr: o.state.crypto + t
, tat: e + ":" + t
}
}))
})
}
}]
, defense: [{
name: "Earthquake"
, description: "Shuffles around towers"
, run: function () {
let o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"]
, n = (o.setState({
eventName: "Earthquake"
, event: {
short: "e"
, color: "#805500"
, icon: "fas fa-mountain"
, desc: "All of your towers get mixed up"
, rate: .02
}
, buyTowerName: ""
, buyTower: {}
}, () => o.eventTimeout = setTimeout(() => o.setState({
event: {}
, eventName: ""
}), 6e3)), o.tiles.forEach(a => a.forEach((e, t) => 3 === e && (a[t] = 0))), o.tiles.flatMap((e, a) => e.map((e, t) => 0 === e && {
x: t
, y: a
}))
.filter(Boolean)
.sort(() => .5 - Math.random()));
o.towers.forEach(e => {
var {
x: t
, y: a
} = n.shift();
e.move(t, a, o.tileSize), o.tiles[a][t] = 3
})
}
}, {
name: "Max Tower Stats"
, description: "Makes all placed towers overpowered"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.towers.forEach(e => {
e.range = 100, e.fullCd = e.cd = 0, e.damage = 1e6
})
}
}, {
name: "Remove Ducks"
, description: "Removes ducks"
, run: function () {
let {
ducks: e
, tiles: t
} = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.forEach(e => {
t[e.y][e.x] = 0
}), e.length = 0
}
}, {
name: "Remove Enemies"
, description: "Removes all the enemies"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.enemies = e.futureEnemies = []
}
}, {
name: "Remove Obstacles"
, description: "Lets you place towers anywhere"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.tiles = e.tiles.map(e => e.fill(0))
}
}, {
name: "Set Damage"
, description: "Sets damage"
, inputs: [{
name: "Damage"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.dmg = e
}
}, {
name: "Set Round"
, description: "Sets the current round"
, inputs: [{
name: "Round"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
round: e
})
}
}, {
name: "Set Tokens"
, description: "Sets the amount of tokens you have"
, inputs: [{
name: "Tokens"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
tokens: e
})
}
}]
, defense2: [{
name: "Max Tower Stats"
, description: "Makes all placed towers overpowered"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.towers.forEach(e => {
if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles && = 100, e.stats.range = 100, e.stats.auraBuffs)
for (const t in e.stats.auraBuffs) e.stats.auraBuffs[t] *= 100
})
}
}, {
name: "Kill Enemies"
, description: "Kills all the enemies"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.state.game.scene.enemyQueue.length = 0, e.state.game.scene.physics.world.bodies.entries.forEach(e => e ? .gameObject ? .receiveDamage ? .(e.gameObject.hp, 1))
}
}, {
name: "Set Coins"
, description: "Sets coins"
, inputs: [{
name: "Coins"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
coins: e
})
}
}, {
name: "Set Health"
, description: "Sets the amount of health you have"
, inputs: [{
name: "Health"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
health: e
})
}
}, {
name: "Set Round"
, description: "Sets the current round"
, inputs: [{
name: "Round"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
round: e
})
}
}]
, dinos: [{
name: "Auto Choose"
, description: "Automatically choose the best fossil when excavating"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
const t = webpackJsonp.push([[], {
[1234]: (e, t, a) => {
t.webpack = a
}
}, [["1234"]]])["webpack"];
var e = (() => {
const e = Object.values(t("74sb"))
.find(e => e.toString()
.includes("rate"));
return () => e([{
type: "fossil"
, val: 10
, rate: .1
, blook: "Amber"
}, {
type: "fossil"
, val: 25
, rate: .1
, blook: "Dino Egg"
}, {
type: "fossil"
, val: 50
, rate: .175
, blook: "Dino Fossil"
}, {
type: "fossil"
, val: 75
, rate: .175
, blook: "Stegosaurus"
}, {
type: "fossil"
, val: 100
, rate: .15
, blook: "Velociraptor"
}, {
type: "fossil"
, val: 125
, rate: .125
, blook: "Brontosaurus"
}, {
type: "fossil"
, val: 250
, rate: .075
, blook: "Triceratops"
}, {
type: "fossil"
, val: 500
, rate: .025
, blook: "Tyrannosaurus Rex"
}, {
type: "mult"
, val: 1.5
, rate: .05
}, {
type: "mult"
, val: 2
, rate: .025
}], 3)
})();
try {
var o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
if ("excavate" === o.state.stage) {
o.state.choices.length || (o.state.choices = e());
let t = 0
, a = -1;
for (let e = 0; e < o.state.choices.length; e++) {
var {
type: n
, val: i
} = o.state.choices[e], r = ("fossil" == n ? o.state.fossils + i * o.state.fossilMult : o.state.fossils * i) || 0;
r <= t && "mult" != n || (t = r, a = e + 1)
}
document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + a + ")")
.click()
}
} catch {}
}, 50))
}
}, {
name: "Rock ESP"
, description: "Shows what is under the rocks"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
let o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
const e = [...document.querySelector('[class*="rockButton"]')
.parentElement.children];
e.every(e => e.querySelector("div")) || o.setState({
choices: [{
type: "fossil"
, val: 10
, rate: .1
, blook: "Amber"
}, {
type: "fossil"
, val: 25
, rate: .1
, blook: "Dino Egg"
}, {
type: "fossil"
, val: 50
, rate: .175
, blook: "Dino Fossil"
}, {
type: "fossil"
, val: 75
, rate: .175
, blook: "Stegosaurus"
}, {
type: "fossil"
, val: 100
, rate: .15
, blook: "Velociraptor"
}, {
type: "fossil"
, val: 125
, rate: .125
, blook: "Brontosaurus"
}, {
type: "fossil"
, val: 250
, rate: .075
, blook: "Triceratops"
}, {
type: "fossil"
, val: 500
, rate: .025
, blook: "Tyrannosaurus Rex"
}, {
type: "mult"
, val: 1.5
, rate: .05
}, {
type: "mult"
, val: 2
, rate: .025
}].sort(() => .5 - Math.random())
.slice(0, 3)
}, () => {
e.forEach((e, t) => {
var t = o.state.choices[t]
, a = (e.querySelector("div") && e.querySelector("div")
.remove(), document.createElement("div"));
a.style.color = "white", a.style.fontFamily = "Macondo", a.style.fontSize = "1em", a.style.display = "flex", a.style.justifyContent = "center", a.style.transform = "translateY(25px)", a.innerText = "fossil" === t.type ? `+${99999999<Math.round(t.val*o.state.fossilMult)?Object.values(webpack("74sb")).find(e=>e.toString().includes("×"))(Math.round(t.val*o.state.fossilMult)):Math.round(t.val*o.state.fossilMult)} Fossils` : `x${t.val} Fossils Per Excavation`, e.append(a)
})
})
}, 50))
}
}, {
name: "Set Fossils"
, description: "Sets the amount of fossils you have"
, inputs: [{
name: "Fossils"
, type: "number"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
fossils: e
}), t.props.liveGameController.setVal({
path: "c/" + t.props.client.name
, val: {
b: t.props.client.blook
, f: e
, ic: t.state.isCheating
}
})
}
}, {
name: "Set Multiplier"
, description: "Sets fossil multiplier"
, inputs: [{
name: "Multiplier"
, type: "number"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
fossilMult: e
})
}
}, {
name: "Stop Cheating"
, description: "Undoes cheating so that you can't be caught"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.setState({
isCheating: !1
}), e.props.liveGameController.setVal({
path: `c/${e.props.client.name}/ic`
, val: !1
})
}
}]
, doom: [{
name: "Fill Deck"
, description: "Fills your deck with every maxed out card and artifact (Only works on towers page)"
, run: function () {
var e = document.createElement("iframe");
if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname) {
var {
a: e
, c: t
} = webpackJsonp.push([[], {
"": (e, t, a) => {
t.cache = a.c
}
}, [[""]]])
.cache.gvfT.exports, a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
a.props.tower.artifacts = Object.keys(e), a.props.tower.cards = Object.entries(t)
.map(([e, t]) => ({...t
, blook: e
, strength: 20
, charisma: 20
, wisdom: 20
}));
try {
a.props.addTowerNode()
} catch {}
a.setState({
showDeck: !1
})
} else alert("You need to be on the map to run this cheat!")
}
}, {
name: "Max Cards"
, description: "Maxes out all the cards in your deck"
, run: function () {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname ? (e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], e.props.tower.cards.forEach(e => {
e.strength = 20, e.charisma = 20, e.wisdom = 20
})) : alert("You need to be on the map to run this cheat!")
}
}, {
name: "Max Health"
, description: "Fills the player's health"
, run: function () {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/battle" == window.location.pathname ? Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
myHealth: 100
}) : alert("You need to be in battle to run this cheat!")
}
}, {
name: "Max Card Stats"
, description: "Maxes out player's current card (Only works on attribute select page)"
, run: function () {
var e = document.createElement("iframe")
, e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"];
"select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
myCard: {...e.state.myCard
, strength: 20
, charisma: 20
, wisdom: 20
}
})
}
}, {
name: "Min Enemy Stats"
, description: "Makes the enemy card stats all 0 (Only works on attribute select page)"
, run: function () {
var e = document.createElement("iframe")
, e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"];
"select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
enemyCard: {...e.state.enemyCard
, strength: 0
, charisma: 0
, wisdom: 0
}
})
}
}, {
name: "Set Coins"
, description: "Try's to set amount of tower coins you have"
, inputs: [{
name: "Coins"
, type: "number"
}]
, run: function (e) {
var t = document.createElement("iframe");
if (document.body.append(t), window.alert = t.contentWindow.prompt.bind(window), t.remove(), "/tower/battle" == window.location.pathname) {
var t = parseInt("0" + alert("How many coins would you like?"))
, a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
try {
a.props.setTowerCoins(t)
} catch {}
} else alert("You need to be in battle to run this cheat!")
}
}]
, factory: [{
name: "Choose Blook"
, description: "Gives you a blook"
, inputs: [{
name: "Blook"
, type: "options"
, options: [{
name: "Chick"
, color: "#ffcd05"
, class: "🌽"
, rarity: "Common"
, cash: [3, 7, 65, 400, 2500]
, time: [1, 1, 1, 1, 1]
, price: [300, 3e3, 3e4, 2e5]
}, {
name: "Chicken"
, color: "#ed1c24"
, class: "🌽"
, rarity: "Common"
, cash: [10, 40, 200, 1400, 1e4]
, time: [5, 4, 3, 2, 1]
, price: [570, 4e3, 5e4, 8e5]
}, {
name: "Cow"
, color: "#58595b"
, class: "🌽"
, rarity: "Common"
, cash: [25, 75, 1500, 25e3, 25e4]
, time: [15, 10, 10, 10, 5]
, price: [500, 9500, 16e4, 4e6]
}, {
name: "Duck"
, color: "#4ab96d"
, class: "🌽"
, rarity: "Common"
, cash: [4, 24, 200, 3e3, 4e4]
, time: [3, 3, 3, 3, 3]
, price: [450, 4200, 7e4, 11e5]
}, {
name: "Goat"
, color: "#c59a74"
, class: "🌽"
, rarity: "Common"
, cash: [5, 28, 200, 1300, 12e3]
, time: [3, 3, 2, 2, 2]
, price: [500, 6400, 45e3, 5e5]
}, {
name: "Horse"
, color: "#995b3c"
, class: "🌽"
, rarity: "Common"
, cash: [5, 20, 270, 1800, 15e3]
, time: [2, 2, 2, 2, 2]
, price: [550, 8200, 65e3, 6e5]
}, {
name: "Pig"
, color: "#f6a9cb"
, class: "🌽"
, rarity: "Common"
, cash: [20, 50, 1300, 8e3, 8e4]
, time: [7, 7, 7, 7, 5]
, price: [400, 11e3, 8e4, 13e5]
}, {
name: "Sheep"
, color: "#414042"
, class: "🌽"
, rarity: "Common"
, cash: [6, 25, 250, 1500, 11e3]
, time: [3, 3, 3, 2, 2]
, price: [500, 5e3, 5e4, 43e4]
}, {
name: "Cat"
, color: "#f49849"
, class: "🐾"
, rarity: "Common"
, cash: [5, 18, 170, 1700, 13e3]
, time: [2, 2, 2, 2, 2]
, price: [480, 5500, 6e4, 5e5]
}, {
name: "Dog"
, color: "#995b3c"
, class: "🐾"
, rarity: "Common"
, cash: [7, 25, 220, 1900, 9e3]
, time: [3, 3, 2, 2, 1]
, price: [460, 6600, 7e4, 73e4]
}, {
name: "Goldfish"
, color: "#f18221"
, class: "🐾"
, rarity: "Common"
, cash: [5, 40, 350, 3500, 35e3]
, time: [3, 3, 3, 3, 3]
, price: [750, 7200, 84e3, 95e4]
}, {
name: "Rabbit"
, color: "#e7bf9a"
, class: "🐾"
, rarity: "Common"
, cash: [3, 18, 185, 800, 7e3]
, time: [2, 2, 2, 1, 1]
, price: [500, 5800, 56e3, 55e4]
}, {
name: "Hamster"
, color: "#ce9176"
, class: "🐾"
, rarity: "Common"
, cash: [10, 45, 450, 4500, 45e3]
, time: [4, 4, 4, 4, 4]
, price: [650, 6500, 8e4, 93e4]
}, {
name: "Turtle"
, color: "#619a3c"
, class: "🐾"
, rarity: "Common"
, cash: [23, 120, 1400, 15e3, 17e4]
, time: [10, 10, 10, 10, 10]
, price: [700, 8500, 11e4, 13e5]
}, {
name: "Puppy"
, color: "#414042"
, class: "🐾"
, rarity: "Common"
, cash: [4, 10, 75, 500, 3e3]
, time: [1, 1, 1, 1, 1]
, price: [450, 4e3, 35e3, 25e4]
}, {
name: "Kitten"
, color: "#58595b"
, class: "🐾"
, rarity: "Common"
, cash: [4, 8, 60, 400, 2e3]
, time: [1, 1, 1, 1, 1]
, price: [350, 3500, 26e3, 17e4]
}, {
name: "Bear"
, color: "#995b3c"
, class: "🌲"
, rarity: "Common"
, cash: [12, 70, 550, 4500, 1e5]
, time: [7, 7, 6, 5, 5]
, price: [550, 5500, 63e3, 16e5]
}, {
name: "Moose"
, color: "#995b3c"
, class: "🌲"
, rarity: "Common"
, cash: [8, 45, 400, 3500, 26e3]
, time: [5, 5, 4, 4, 3]
, price: [520, 6500, 58e3, 7e5]
}, {
name: "Fox"
, color: "#f49849"
, class: "🌲"
, rarity: "Common"
, cash: [7, 15, 80, 550, 3e3]
, time: [2, 2, 1, 1, 1]
, price: [400, 4e3, 36e3, 24e4]
}, {
name: "Raccoon"
, color: "#6d6e71"
, class: "🌲"
, rarity: "Common"
, cash: [5, 14, 185, 1900, 19e3]
, time: [2, 2, 2, 2, 2]
, price: [400, 5e3, 71e3, 8e5]
}, {
name: "Squirrel"
, color: "#d25927"
, class: "🌲"
, rarity: "Common"
, cash: [3, 10, 65, 470, 2600]
, time: [1, 1, 1, 1, 1]
, price: [420, 3600, 32e3, 21e4]
}, {
name: "Owl"
, color: "#594a42"
, class: "🌲"
, rarity: "Common"
, cash: [4, 17, 155, 1500, 15e3]
, time: [2, 2, 2, 2, 2]
, price: [500, 4800, 55e3, 58e4]
}, {
name: "Hedgehog"
, color: "#3f312b"
, class: "🌲"
, rarity: "Common"
, cash: [11, 37, 340, 2200, 3e4]
, time: [5, 4, 3, 2, 2]
, price: [540, 7e3, 77e3, 12e5]
}, {
name: "Seal"
, color: "#7ca1d5"
, class: "❄%EF%B8%8F"
, rarity: "Common"
, cash: [6, 17, 150, 1200, 13e3]
, time: [2, 2, 2, 2, 2]
, price: [480, 4500, 43e3, 52e4]
}, {
name: "Arctic Fox"
, color: "#7ca1d5"
, class: "❄%EF%B8%8F"
, rarity: "Common"
, cash: [5, 18, 180, 850, 8500]
, time: [2, 2, 2, 1, 1]
, price: [520, 550, 61e3, 68e4]
}, {
name: "Snowy Owl"
, color: "#feda3f"
, class: "❄%EF%B8%8F"
, rarity: "Common"
, cash: [5, 20, 190, 1900, 16e3]
, time: [3, 3, 2, 2, 2]
, price: [370, 5300, 76e3, 62e4]
}, {
name: "Arctic Hare"
, color: "#7ca1d5"
, class: "❄%EF%B8%8F"
, rarity: "Common"
, cash: [6, 19, 85, 900, 7e3]
, time: [2, 2, 1, 1, 1]
, price: [540, 5200, 66e3, 55e4]
}, {
name: "Penguin"
, color: "#fb8640"
, class: "❄%EF%B8%8F"
, rarity: "Common"
, cash: [4, 21, 310, 3200, 33e3]
, time: [3, 3, 3, 3, 3]
, price: [400, 6500, 76e3, 87e4]
}, {
name: "Baby Penguin"
, color: "#414042"
, class: "❄%EF%B8%8F"
, rarity: "Common"
, cash: [3, 8, 70, 450, 2700]
, time: [1, 1, 1, 1, 1]
, price: [420, 3300, 33e3, 23e4]
}, {
name: "Polar Bear"
, color: "#7ca1d5"
, class: "❄%EF%B8%8F"
, rarity: "Common"
, cash: [12, 75, 700, 6500, 85e3]
, time: [8, 7, 6, 5, 5]
, price: [630, 7e3, 91e3, 14e5]
}, {
name: "Walrus"
, color: "#7d4f33"
, class: "❄%EF%B8%8F"
, rarity: "Common"
, cash: [11, 46, 420, 3700, 51e3]
, time: [5, 5, 4, 4, 4]
, price: [550, 6200, 68e3, 1e6]
}, {
name: "Tiger"
, color: "#f18221"
, class: "🌴"
, rarity: "Common"
, cash: [6, 20, 100, 975, 7500]
, time: [3, 3, 1, 1, 1]
, price: [390, 6e3, 7e4, 61e4]
}, {
name: "Jaguar"
, color: "#fbb040"
, class: "🌴"
, rarity: "Common"
, cash: [8, 28, 230, 1600, 17e3]
, time: [3, 3, 2, 2, 2]
, price: [390, 6e3, 7e4, 61e4]
}, {
name: "Toucan"
, color: "#ffca34"
, class: "🌴"
, rarity: "Common"
, cash: [9, 20, 175, 625, 3800]
, time: [2, 2, 2, 1, 1]
, price: [520, 4800, 42e3, 3e5]
}, {
name: "Cockatoo"
, color: "#7ca1d5"
, class: "🌴"
, rarity: "Common"
, cash: [6, 35, 160, 1700, 18e3]
, time: [4, 4, 2, 2, 2]
, price: [500, 5e3, 63e3, 7e5]
}, {
name: "Macaw"
, color: "#00aeef"
, class: "🌴"
, rarity: "Common"
, cash: [3, 8, 85, 850, 8500]
, time: [1, 1, 1, 1, 1]
, price: [480, 5400, 62e3, 63e4]
}, {
name: "Parrot"
, color: "#ed1c24"
, class: "🌴"
, rarity: "Common"
, cash: [3, 9, 90, 900, 9e3]
, time: [1, 1, 1, 1, 1]
, price: [540, 5700, 65e3, 69e4]
}, {
name: "Panther"
, color: "#2f2c38"
, class: "🌴"
, rarity: "Common"
, cash: [12, 28, 215, 2100, 21e3]
, time: [5, 3, 2, 2, 2]
, price: [530, 6500, 76e3, 87e4]
}, {
name: "Anaconda"
, color: "#8a9143"
, class: "🌴"
, rarity: "Common"
, cash: [3, 15, 85, 1500, 7600]
, time: [1, 2, 1, 2, 1]
, price: [410, 5100, 58e3, 59e4]
}, {
name: "Orangutan"
, color: "#bc6234"
, class: "🌴"
, rarity: "Common"
, cash: [13, 52, 570, 4300, 7e4]
, time: [5, 5, 5, 4, 4]
, price: [600, 7e3, 8e4, 14e5]
}, {
name: "Capuchin"
, color: "#e0b0a6"
, class: "🌴"
, rarity: "Common"
, cash: [4, 14, 160, 780, 8200]
, time: [2, 2, 2, 1, 1]
, price: [390, 4700, 57e3, 68e4]
}, {
name: "Elf"
, color: "#a7d054"
, class: "⚔%EF%B8%8F"
, rarity: "Uncommon"
, cash: [5e3, 15e3, 15e4, 15e5, 1e7]
, time: [1, 1, 1, 1, 1]
, price: [8e5, 9e6, 11e7, 8e8]
}, {
name: "Witch"
, color: "#4ab96d"
, class: "⚔%EF%B8%8F"
, rarity: "Uncommon"
, cash: [18e3, 6e4, 4e4, 4e6, 35e6]
, time: [3, 3, 2, 2, 2]
, price: [11e5, 12e6, 15e7, 14e8]
}, {
name: "Wizard"
, color: "#5a459c"
, class: "⚔%EF%B8%8F"
, rarity: "Uncommon"
, cash: [19500, 65e3, 44e4, 46e5, 4e6]
, time: [3, 3, 2, 2, 2]
, price: [13e5, 135e5, 16e7, 16e8]
}, {
name: "Fairy"
, color: "#df6d9c"
, class: "⚔%EF%B8%8F"
, rarity: "Uncommon"
, cash: [18500, 6e4, 62e4, 44e5, 38e6]
, time: [3, 3, 3, 2, 2]
, price: [12e5, 125e5, 15e6, 15e8]
}, {
name: "Slime Monster"
, color: "#2fa04a"
, class: "⚔%EF%B8%8F"
, rarity: "Uncommon"
, cash: [35e3, 14e4, 1e6, 11e6, 11e7]
, time: [5, 5, 4, 4, 4]
, price: [16e5, 15e6, 2e8, 23e8]
}, {
name: "Jester"
, color: "#be1e2d"
, class: "⚔%EF%B8%8F"
, rarity: "Rare"
, cash: [25e3, 1e5, 68e4, 65e5, 32e6]
, time: [3, 3, 2, 2, 1]
, price: [2e6, 21e6, 23e7, 26e8]
}, {
name: "Dragon"
, color: "#2fa04a"
, class: "⚔%EF%B8%8F"
, rarity: "Rare"
, cash: [36e3, 15e4, 15e5, 15e6, 15e7]
, time: [4, 4, 4, 4, 4]
, price: [23e5, 24e6, 27e7, 3e9]
}, {
name: "Unicorn"
, color: "#f6afce"
, class: "⚔%EF%B8%8F"
, rarity: "Epic"
, cash: [24e3, 15e4, 14e5, 7e6, 75e6]
, time: [2, 2, 2, 1, 1]
, price: [45e5, 45e6, 55e7, 65e8]
}, {
name: "Queen"
, color: "#9e1f63"
, class: "⚔%EF%B8%8F"
, rarity: "Rare"
, cash: [24e3, 95e3, 95e4, 97e5, 95e6]
, time: [3, 3, 3, 3, 3]
, price: [19e5, 2e7, 23e7, 25e8]
}, {
name: "King"
, color: "#ee2640"
, class: "⚔%EF%B8%8F"
, rarity: "Legendary"
, cash: [75e3, 4e5, 6e6, 9e7, 125e7]
, time: [5, 5, 5, 5, 5]
, price: [6e6, 95e6, 16e8, 25e9]
}, {
name: "Two of Spades"
, color: "#414042"
, class: "🏰"
, rarity: "Uncommon"
, cash: [4500, 14e3, 14e4, 14e5, 9e6]
, time: [1, 1, 1, 1, 1]
, price: [77e4, 83e5, 98e6, 71e7]
}, {
name: "Eat Me"
, color: "#d58c55"
, class: "🏰"
, rarity: "Uncommon"
, cash: [13e3, 45e3, 45e4, 45e5, 5e7]
, time: [2, 2, 2, 2, 2]
, price: [13e5, 14e6, 16e7, 2e9]
}, {
name: "Drink Me"
, color: "#dd7399"
, class: "🏰"
, rarity: "Uncommon"
, cash: [12e3, 4e4, 4e5, 4e6, 45e6]
, time: [2, 2, 2, 2, 2]
, price: [12e5, 12e6, 14e7, 18e8]
}, {
name: "Alice"
, color: "#4cc9f5"
, class: "🏰"
, rarity: "Uncommon"
, cash: [13e3, 42e3, 21e4, 21e5, 23e6]
, time: [2, 2, 1, 1, 1]
, price: [12e5, 13e6, 15e7, 19e8]
}, {
name: "Queen of Hearts"
, color: "#d62027"
, class: "🏰"
, rarity: "Uncommon"
, cash: [23e3, 87e3, 62e4, 75e5, 9e7]
, time: [4, 4, 3, 3, 3]
, price: [13e5, 13e6, 18e7, 24e8]
}, {
name: "Dormouse"
, color: "#89d6f8"
, class: "🏰"
, rarity: "Rare"
, cash: [17e3, 68e3, 7e5, 35e5, 35e6]
, time: [2, 2, 1, 1, 1]
, price: [2e6, 22e6, 25e7, 28e8]
}, {
name: "White Rabbit"
, color: "#ffcd05"
, class: "🏰"
, rarity: "Rare"
, cash: [26e3, 105e3, 11e6, 77e5, 72e6]
, time: [3, 3, 3, 2, 2]
, price: [2e6, 23e6, 28e7, 29e8]
}, {
name: "Cheshire Cat"
, color: "#dd7399"
, class: "🏰"
, rarity: "Rare"
, cash: [32e3, 1e5, 9e5, 9e6, 6e7]
, time: [4, 3, 3, 3, 2]
, price: [18e5, 19e6, 22e7, 24e8]
}, {
name: "Caterpillar"
, color: "#00c0f3"
, class: "🏰"
, rarity: "Epic"
, cash: [1e4, 7e4, 65e4, 75e5, 85e6]
, time: [1, 1, 1, 1, 1]
, price: [42e5, 42e6, 54e7, 69e8]
}, {
name: "Mad Hatter"
, color: "#914f93"
, class: "🏰"
, rarity: "Epic"
, cash: [38e3, 25e4, 15e5, 14e6, 8e7]
, time: [3, 3, 2, 2, 1]
, price: [48e5, 48e6, 52e7, 66e8]
}, {
name: "King of Hearts"
, color: "#c62127"
, class: "🏰"
, rarity: "Legendary"
, cash: [8e4, 42e4, 68e5, 1e8, 15e8]
, time: [5, 5, 5, 5, 5]
, price: [7e6, 11e7, 18e8, 3e10]
}, {
name: "Earth"
, color: "#416eb5"
, class: "🚀"
, rarity: "Uncommon"
, cash: [15e3, 45e3, 6e5, 65e5, 65e6]
, time: [3, 3, 3, 3, 3]
, price: [1e6, 11e6, 15e7, 17e8]
}, {
name: "Meteor"
, color: "#c68c3c"
, class: "🚀"
, rarity: "Uncommon"
, cash: [23e3, 65e3, 7e5, 45e5, 2e7]
, time: [5, 4, 3, 2, 1]
, price: [95e4, 13e6, 16e7, 16e8]
}, {
name: "Stars"
, color: "#19184d"
, class: "🚀"
, rarity: "Uncommon"
, cash: [1e4, 4e4, 2e5, 2e6, 18e6]
, time: [2, 2, 1, 1, 1]
, price: [14e5, 14e6, 15e7, 15e8]
}, {
name: "Alien"
, color: "#8dc63f"
, class: "🚀"
, rarity: "Uncommon"
, cash: [3e4, 1e5, 1e6, 11e6, 85e6]
, time: [4, 4, 4, 4, 4]
, price: [15e5, 17e6, 19e7, 17e8]
}, {
name: "Planet"
, color: "#9dc6ea"
, class: "🚀"
, rarity: "Rare"
, cash: [25e3, 1e5, 9e5, 9e6, 9e7]
, time: [3, 3, 3, 3, 3]
, price: [2e6, 21e6, 21e7, 24e8]
}, {
name: "UFO"
, color: "#a15095"
, class: "🚀"
, rarity: "Rare"
, cash: [17e3, 7e4, 7e5, 7e6, 7e7]
, time: [2, 2, 2, 2, 2]
, price: [21e5, 23e6, 25e7, 28e8]
}, {
name: "Spaceship"
, color: "#ffcb29"
, class: "🚀"
, rarity: "Epic"
, cash: [6e4, 32e4, 21e5, 15e6, 85e6]
, time: [5, 4, 3, 2, 1]
, price: [48e5, 46e6, 54e7, 68e8]
}, {
name: "Astronaut"
, color: "#9bd4ee"
, class: "🚀"
, rarity: "Legendary"
, cash: [45e3, 26e4, 25e5, 38e6, 55e7]
, time: [3, 3, 2, 2, 2]
, price: [65e5, 1e8, 17e8, 27e9]
}, {
name: "Lil Bot"
, color: "#3e564a"
, class: "🤖"
, rarity: "Uncommon"
, cash: [4e3, 12e3, 18e4, 19e5, 25e6]
, time: [1, 1, 1, 1, 1]
, price: [73e4, 12e6, 13e7, 19e8]
}, {
name: "Lovely Bot"
, color: "#f179af"
, class: "🤖"
, rarity: "Uncommon"
, cash: [16e3, 65e3, 65e4, 48e5, 42e6]
, time: [3, 3, 3, 2, 2]
, price: [13e5, 14e6, 17e7, 16e8]
}, {
name: "Angry Bot"
, color: "#f1613a"
, class: "🤖"
, rarity: "Uncommon"
, cash: [22e3, 85e3, 8e5, 62e5, 65e6]
, time: [4, 4, 4, 3, 3]
, price: [12e5, 13e6, 15e7, 17e8]
}, {
name: "Happy Bot"
, color: "#51ba6b"
, class: "🤖"
, rarity: "Uncommon"
, cash: [11e3, 45e3, 5e5, 25e5, 3e7]
, time: [2, 2, 2, 1, 1]
, price: [14e5, 15e6, 18e7, 24e8]
}, {
name: "Watson"
, color: "#d69b5a"
, class: "🤖"
, rarity: "Rare"
, cash: [24e3, 1e5, 1e6, 1e7, 1e8]
, time: [3, 3, 3, 3, 3]
, price: [2e6, 22e6, 24e7, 26e8]
}, {
name: "Buddy Bot"
, color: "#9dc6ea"
, class: "🤖"
, rarity: "Rare"
, cash: [22e3, 95e3, 65e4, 65e5, 65e6]
, time: [3, 3, 2, 2, 2]
, price: [19e5, 21e6, 23e7, 25e8]
}, {
name: "Brainy Bot"
, color: "#9ecf7a"
, class: "🤖"
, rarity: "Epic"
, cash: [5e4, 25e4, 21e5, 21e6, 17e7]
, time: [4, 3, 3, 3, 2]
, price: [5e6, 46e6, 5e8, 67e8]
}, {
name: "Mega Bot"
, color: "#d71f27"
, class: "🤖"
, rarity: "Legendary"
, cash: [8e4, 43e4, 42e5, 62e6, 1e9]
, time: [5, 5, 3, 3, 3]
, price: [7e6, 12e7, 19e8, 35e9]
}].map(e => ({
name: e.name
, value: JSON.stringify(e)
}))
}]
, run: function (e) {
var t = document.createElement("iframe")
, t = (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), t.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"];
10 <= t.state.blooks.length && alert("Choose a blook to replace"), t.chooseBlook(JSON.parse(e))
}
}, {
name: "Free Upgrades"
, description: "Sets upgrade prices to 0 for all current blooks"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.setState(e => ({...e
, blooks: e.blooks.map(e => ({...e
, price: [0, 0, 0, 0]
}))
}))
}
}, {
name: "Max Blooks"
, description: "Maxes out all your blooks' levels"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.blooks.forEach(e => e.level = 4)
}
}, {
name: "Remove Glitches"
, description: "Removes all enemy glitches"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.setState({
bits: 0
, ads: []
, hazards: []
, color: ""
, lol: !1
, joke: !1
, slow: !1
, dance: !1
, glitch: ""
, glitcherName: ""
, glitcherBlook: ""
}), clearTimeout(e.adTimeout), clearInterval(e.hazardInterval), clearTimeout(e.nightTimeout), clearTimeout(e.glitchTimeout), clearTimeout(e.lolTimeout), clearTimeout(e.jokeTimeout), clearTimeout(e.slowTimeout), clearTimeout(e.danceTimeout), clearTimeout(e.nameTimeout)
}
}, {
name: "Send Glitch"
, description: "Sends a glitch to everyone else playing"
, inputs: [{
name: "Glitch"
, type: "options"
, options: Object.entries({
lb: "Lunch Break"
, as: "Ad Spam"
, e37: "Error 37"
, nt: "Night Time"
, lo: "#LOL"
, j: "Jokester"
, sm: "Slow Mo"
, dp: "Dance Party"
, v: "Vortex"
, r: "Reverse"
, f: "Flip"
, m: "Micro"
})
.map(([e, t]) => ({
name: t
, value: e
}))
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.safe = !0, t.props.liveGameController.setVal({
path: `c/${t.props.client.name}/tat`
, val: e
})
}
}, {
name: "Set All MegaBot"
, description: "Sets all your blooks to maxed out Mega Bots"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
blooks: new Array(10)
.fill({
name: "Mega Bot"
, color: "#d71f27"
, class: "🤖"
, rarity: "Legendary"
, cash: [8e4, 43e4, 42e5, 62e6, 1e9]
, time: [5, 5, 3, 3, 3]
, price: [7e6, 12e7, 19e8, 35e9]
, active: !1
, level: 4
, bonus: 5.5
})
})
}
}, {
name: "Set Cash"
, description: "Sets amount of cash you have"
, inputs: [{
name: "Cash"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
cash: e
})
}
}]
, fishing: [{
name: "Frenzy"
, description: "Sets everyone to frenzy mode"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.props.liveGameController.setVal({
path: "c/" + e.props.client.name
, val: {
b: e.props.client.blook
, w: e.state.weight
, f: "Frenzy"
, s: !0
}
})
}
}, {
name: "Remove Distractions"
, description: "Removes distractions"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
party: ""
})
}, 50))
}
}, {
name: "Send Distraction"
, description: "Sends a distraction to everyone"
, inputs: [{
name: "Distraction"
, type: "options"
, options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"]
}]
, run: function (e) {
var t = document.createElement("iframe")
, t = (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), t.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"];
t.safe = !0, t.props.liveGameController.setVal({
path: "c/" + t.props.client.name
, val: {
b: t.props.client.blook
, w: t.state.weight
, f: e
, s: !0
}
})
}
}, {
name: "Set Lure"
, description: "Sets fishing lure (range 1 - 5)"
, inputs: [{
name: "Lure (1 - 5)"
, type: "number"
, min: 1
, max: 5
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
lure: Math.max(Math.min(e - 1, 4), 0)
})
}
}, {
name: "Set Weight"
, description: "Sets weight"
, inputs: [{
name: "Weight"
, type: "number"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
weight: e
, weight2: e
}), t.props.liveGameController.setVal({
path: "c/" + t.props.client.name
, val: {
b: t.props.client.blook
, w: e
, f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())]
}
})
}
}]
, flappy: [{
name: "Toggle Ghost"
, description: "Lets you go through the pipes"
, type: "toggle"
, enabled: !1
, run: function () {
this.enabled = !this.enabled, Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(e => e.gameObject.frame.texture.key.startsWith("blook") && (e.checkCollision.none = this.enabled, e.gameObject.setAlpha(this.enabled ? .5 : 1)))
}
}, {
name: "Set Score"
, description: "Sets flappy blook score"
, inputs: [{
name: "Score"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.setState({
score: e
})
}
}]
, gold: [{
name: "Always Triple"
, description: "Always get triple gold"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
let t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t._choosePrize || = t.choosePrize, this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, t.choosePrize = t._choosePrize || t.choosePrize) : (this.enabled = !0, this.data = setInterval(() => {
t.choosePrize = function (e) {
t.state.choices[e] = {
type: "multiply"
, val: 3
, text: "Triple Gold!"
, blook: "Unicorn"
}, t._choosePrize(e)
}
}, 50))
}
}, {
name: "Auto Choose"
, description: "Automatically picks the option that would give you the most gold"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(async() => {
try {
let o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
if ("prize" === o.state.stage) {
var n = Object.entries(await new Promise(t => o.props.liveGameController.getDatabaseVal("c", e => e && t(e))) || [])
.filter(e => e[0] != o.props.client.name)
.sort((e, t) => t[1].g - e[1].g)[0] ? .[1] ? .g || 0;
let a = 0;
index = -1;
for (let t = 0; t < o.state.choices.length; t++) {
var {
type: i
, val: r
} = o.state.choices[t];
let e = o.state.gold;
switch (i) {
case "gold":
e = o.state.gold + r || o.state.gold;
break;
case "multiply":
case "divide":
e = Math.round(o.state.gold * r) || o.state.gold;
break;
case "swap":
e = n || o.state.gold;
case "take":
e = o.state.gold + n * r || o.state.gold
}(e || 0) <= a || (a = e, index = t + 1)
}
document.querySelector(`div[class^='styles__choice${index}']`)
.click()
}
} catch {}
}, 50))
}
}, {
name: "Chest ESP"
, description: "Shows what each chest will give you"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.choices.forEach(({
text: e
}, t) => {
var a, t = document.querySelector(`div[class^='styles__choice${t+1}']`);
t && !t.querySelector("div") && ((a = document.createElement("div"))
.style.color = "white", a.style.fontFamily = "Eczar", a.style.fontSize = "2em", a.style.display = "flex", a.style.justifyContent = "center", a.style.transform = "translateY(200px)", a.innerText = e, t.append(a))
})
}, 50))
}
}, {
name: "Reset Players Gold"
, description: "Sets a player's gold to 0"
, inputs: [{
name: "Player"
, type: "options"
, options: () => {
let e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}]
, run: function (e) {
var {
props: t
, state: a
} = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.liveGameController.setVal({
path: "c/".concat(t.client.name)
, val: {
b: t.client.blook
, g: a.gold
, tat: e + ":swap:0"
}
})
}
}, {
name: "Set Gold"
, description: "Sets amount of gold"
, inputs: [{
name: "Gold"
, type: "number"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
gold: e
, gold2: e
}), t.props.liveGameController.setVal({
path: "c/".concat(t.props.client.name)
, val: {
b: t.props.client.blook
, g: e
}
})
}
}, {
name: "Swap Gold"
, description: "Swaps gold with someone"
, inputs: [{
name: "Player"
, type: "options"
, options: () => {
let e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}]
, run: function (t) {
let a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
a.props.liveGameController.getDatabaseVal("c", e => {
e ? .[t] && (e = e[t]["g"], a.props.liveGameController.setVal({
path: "c/".concat(a.props.client.name)
, val: {
b: a.props.client.blook
, g: e
, tat: t + ":swap:" + a.state.gold
}
}), a.setState({
gold: e
, gold2: e
}))
})
}
}, {
name: "Reset All Players' Gold"
, description: "Set's everyone else's gold to 0"
, run: function () {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove();
let {
props: a
, state: o
} = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], n = 0;
a.liveGameController.getDatabaseVal("c", async e => {
if (e)
for (const t of Object.keys(e)) a.liveGameController.setVal({
path: "c/".concat(a.client.name)
, val: {
b: a.client.blook
, g: o.gold
, tat: t + ":swap:0"
}
}), n++, await new Promise(e => setTimeout(e, 4e3));
alert(`Reset ${n} players' gold!`)
})
}
}]
, kingdom: [{
name: "Choice ESP"
, description: "Shows you what will happen if you say Yes or No"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
if (this.enabled) this.enabled = !1, clearInterval(this.data), Array.from(document.getElementsByClassName("choiceESP"))
.forEach(e => e.remove()), this.data = null;
else {
this.enabled = !0;
let a = ["materials", "people", "happiness", "gold"]
, o = Object.fromEntries([...document.querySelectorAll("[class^=styles__statContainer]")].map((e, t) => [a[t], e]));
this.data = setInterval(() => {
var {
guest: e
, phase: t
} = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state;
"choice" == t && (Array.from(document.getElementsByClassName("choiceESP"))
.forEach(e => e.remove()), Object.entries(e.yes || {})
.forEach(e => {
var t;
"msg" != e[0] && a.includes(e[0]) && ((t = document.createElement("div"))
.className = "choiceESP", t.style = "font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;", t.innerText = String(e[1]), o[e[0]].appendChild(t))
}), Object.entries(e.no || {})
.forEach(e => {
var t;
"msg" != e[0] && a.includes(e[0]) && ((t = document.createElement("div"))
.className = "choiceESP", t.style = "font-size: 24px; color: darkred; font-weight: bolder;", t.innerText = String(e[1]), o[e[0]].appendChild(t))
}))
}, 50)
}
}
}, {
name: "Disable Tax Toucan"
, description: "Tax evasion"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE
}
}, {
name: "Max Stats"
, description: "Sets all resources to the max"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
materials: 100
, people: 100
, happiness: 100
, gold: 100
})
}
}, {
name: "Set Guests"
, description: "Sets the amount of guests you've seen"
, inputs: [{
name: "Guests"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
guestScore: e
})
}
}, {
name: "Skip Guest"
, description: "Skips the current guest"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.nextGuest()
}
}]
, racing: [{
name: "Instant Win"
, description: "Instantly Wins the race"
, run: function () {
const e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e.setState({
progress: e.state.goalAmount
}, () => {
const {
question: a
} = e["state"];
try {
[...document.querySelectorAll('[class*="answerContainer"]')][a.answers.map((e, t) => a.correctAnswers.includes(e) ? t : null)
.filter(e => null != e)[0]] ? .click ? .()
} catch {}
})
}
}]
, royale: [{
name: "Auto Answer (Toggle)"
, description: "Toggles auto answer on"
, type: "toggle"
, enabled: !1
, data: null
, run: function () {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e ? .onAnswer ? .(!0, e.props.client.question.correctAnswers[0])
}, 50))
}
}, {
name: "Auto Answer"
, description: "Chooses the correct answer for you"
, run: function () {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
e ? .onAnswer ? .(!0, e.props.client.question.correctAnswers[0])
}
}]
, rush: [{
name: "Set Blooks"
, description: "Sets amount of blooks you or your team has"
, inputs: [{
name: "Blooks"
, type: "number"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
numBlooks: e
}), t.isTeam ? t.props.liveGameController.setVal({
path: `a/${t.props.client.name}/bs`
, val: e
}) : t.props.liveGameController.setVal({
path: `c/${t.props.client.name}/bs`
, val: numDefense
})
}
}, {
name: "Set Defense"
, description: "Sets amount of defense you or your team has (Max 4)"
, inputs: [{
name: "Defense (max 4)"
, type: "number"
, max: 4
}]
, run: function (e) {
var e = Math.min(e, 4)
, t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
numDefense: e
}), t.isTeam ? t.props.liveGameController.setVal({
path: `a/${t.props.client.name}/d`
, val: e
}) : t.props.liveGameController.setVal({
path: `c/${t.props.client.name}/d`
, val: e
})
}
}]
, workshop: [{
name: "Remove Distractions"
, description: "Removes all enemy distractions"
, run: function () {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
fog: !1
, dusk: !1
, wind: !1
, plow: !1
, blizzard: !1
, force: !1
, canada: !1
, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
})
}
}, {
name: "Send Distraction"
, description: "Sends a distraction to everyone else playing"
, inputs: [{
name: "Distraction"
, type: "options"
, options: Object.entries({
c: "Oh Canada"
, b: "Blizzard"
, f: "Fog Spell"
, d: "Dark & Dusk"
, w: "Howling Wind"
, g: "Gift Time!"
, t: "TREES"
, s: "Snow Plow"
, fr: "Use The Force"
})
.map(([e, t]) => ({
name: t
, value: e
}))
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.safe = !0, t.props.liveGameController.setVal({
path: `c/${t.props.client.name}/tat`
, val: e
})
}
}, {
name: "Set Toys"
, description: "Sets amount of toys"
, inputs: [{
name: "Toys"
, type: "number"
}]
, run: function (e) {
var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
t.setState({
toys: e
}), t.props.liveGameController.setVal({
path: "c/".concat(t.props.client.name)
, val: {
b: t.props.client.blook
, t: e
}
})
}
}, {
name: "Set Toys Per Question"
, description: "Sets amount of toys per question"
, inputs: [{
name: "Toys Per Question"
, type: "number"
}]
, run: function (e) {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
toysPerQ: e
})
}
}, {
name: "Swap Toys"
, description: "Swaps toys with someone"
, inputs: [{
name: "Player"
, type: "options"
, options: () => {
let e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}]
, run: function (a) {
let o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
o.props.liveGameController.getDatabaseVal("c", e => {
var t;
e && Object.keys(e)
.map(e => e.toLowerCase())
.includes(a.toLowerCase()) && ([e, {
t
}] = Object.entries(e)
.find(([e]) => e.toLowerCase() == a.toLowerCase()), o.props.liveGameController.setVal({
path: "c/".concat(o.props.client.name)
, val: {
b: o.props.client.blook
, t: t
, tat: e + ":swap:" + o.state.toys
}
}), o.setState({
toys: t
}))
})
}
}]
, settings: [{
name: "Import Settings"
, description: "Import a custom theme"
, inputs: [{
name: "JSON Data"
, type: "string"
}]
, run: function (e) {
try {
JSON.parse(e)
} catch (e) {
return alert("Invalid JSON provided")
}
e = {
backgroundColor: "rgb(11, 194, 207)"
, infoColor: "#9a49aa"
, cheatList: "#9a49aa"
, defaultButton: "#9a49aa"
, disabledButton: "#A02626"
, enabledButton: "#47A547"
, textColor: "white"
, inputColor: "#7a039d"
, contentBackground: "rgb(64, 17, 95)"
, ...JSON.parse(e)
}, j.setItem("theme", e);
for (const t in e) a.sheet.cssRules[0].style.setProperty("--" + t, e[t])
}
}, {
name: "Export Settings"
, description: "Export the current theme to JSON"
, run: async function () {
await navigator.clipboard.writeText(JSON.stringify(j.data.theme, null, 4)), prompt("Text copied to clipboard. (Paste below to test)")
}
}, {
name: "Defaults"
, description: "Changes all the settings to a preset"
, inputs: [{
name: "Theme"
, type: "options"
, options: [{
name: "Default"
, value: {
backgroundColor: "rgb(11, 194, 207)"
, infoColor: "#9a49aa"
, cheatList: "#9a49aa"
, defaultButton: "#9a49aa"
, disabledButton: "#A02626"
, enabledButton: "#47A547"
, textColor: "white"
, inputColor: "#7a039d"
, contentBackground: "rgb(64, 17, 95)"
}
}, {
name: "Blacket"
, value: {
backgroundColor: "#4f4f4f"
, infoColor: "#2f2f2f"
, cheatList: "#2f2f2f"
, defaultButton: "#4f4f4f"
, disabledButton: "#eb6234"
, enabledButton: "#00c20c"
, textColor: "white"
, inputColor: "#3f3f3f"
, contentBackground: "#2f2f2f"
}
}, {
name: "Skool.lol"
, value: {
backgroundColor: "linear-gradient(90deg, rgba(104,45,140,1) 220px, rgba(237,30,121,1) 100%)"
, cheatList: "#1e2124"
, infoColor: "#1e2124"
, defaultButton: "#36393e"
, inputColor: "#1e2124"
, enabledButton: "#9c9a9a"
, textColor: "white"
, disabledButton: "#171717"
, contentBackground: "#292929"
}
}, {
name: "Blue - Purple Background"
, value: {
backgroundColor: "linear-gradient(162.5deg, rgba(0,183,255,1) 220px, rgba(128,0,255,1) 100%)"
}
}, {
name: "Saint Patricks Background"
, value: {
backgroundColor: "rgb(9, 148, 65)"
}
}, {
name: "Halloween Background"
, value: {
backgroundColor: "rgb(41, 41, 41)"
}
}, {
name: "Fall Background"
, value: {
backgroundColor: "rgb(224, 159, 62)"
}
}, {
name: "Winter Background"
, value: {
backgroundColor: "linear-gradient(rgb(49, 170, 224), rgb(187, 221, 255))"
}
}, {
name: "Crypto Hack"
, value: {
backgroundColor: "radial-gradient(#11581e,#041607)"
, infoColor: "#1a1a1a"
, cheatList: "#1a1a1a"
, defaultButton: "rgb(88 175 88)"
, disabledButton: "#A02626"
, enabledButton: "#0b601b"
, textColor: "white"
, inputColor: "rgb(0 0 0 / 25%)"
, contentBackground: "#11581e"
}
}, {
name: "Fishing Frenzy"
, value: {
backgroundColor: "linear-gradient(180deg,#9be2fe 0,#67d1fb)"
, infoColor: "#c8591e"
, cheatList: "#c8591e"
, defaultButton: "#ff751a"
, disabledButton: "#bf0e0e"
, enabledButton: "#2fb62f"
, textColor: "white"
, inputColor: "rgb(0 0 0 / 25%)"
, contentBackground: "radial-gradient(#02b0ea 40%, #1d86ea)"
}
}, {
name: "Deceptive Dinos"
, value: {
backgroundColor: 'radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url("https://ac.blooket.com/play/111cb7e0ee6607ac3d1a13d534c0e0f1.png"), #ead49a'
, infoColor: "#af8942"
, cheatList: "#af8942"
, defaultButton: "#af8942"
, disabledButton: "#A02626"
, enabledButton: "#47A547"
, textColor: "white"
, inputColor: "rgb(0 0 0 / 10%)"
, contentBackground: "radial-gradient(rgba(1,104,162,.6),rgba(24,55,110,.5)),radial-gradient(#2783b4 1.5px,#18376e 0) center / 24px 24px"
}
}, {
name: "Blook Rush"
, value: {
backgroundColor: "repeating-linear-gradient(45deg,white,white 8%,#e6e6e6 0,#e6e6e6 16%)"
, defaultButton: "#36c"
, inputColor: "rgb(0 0 0 / 25%)"
, infoColor: "#36c"
, cheatList: "#36c"
, contentBackground: "#888"
, textColor: "white"
, disabledButton: "#A02626"
, enabledButton: "#47A547"
}
}, {
name: "Factory"
, value: {
defaultButton: "#1563bf"
, infoColor: "#a5aabe"
, cheatList: "#a5aabe"
, contentBackground: "#2d313d"
, backgroundColor: "#3a3a3a"
, enabledButton: "rgb(75, 194, 46)"
, disabledButton: "#9a49aa"
, inputColor: "rgb(0 0 0 / 25%)"
, textColor: "white"
}
}, {
name: "Cafe"
, value: {
backgroundColor: "linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0) center / 50px 50px,linear-gradient(rgba(200,0,0,0.5) 50%,transparent 0) white center / 50px 50px"
, defaultButton: "#0bc2cf"
, inputColor: "rgb(0 0 0 / 25%)"
, infoColor: "#ac7339"
, cheatList: "#ac7339"
, contentBackground: "rgb(64, 64, 64)"
, textColor: "white"
, disabledButton: "#A02626"
, enabledButton: "#47A547"
}
}, {
name: "Tower of Doom"
, value: {
backgroundColor: "rgb(41 41 41)"
, disabledButton: "rgb(151, 15, 5)"
, defaultButton: "#333"
, inputColor: "rgb(0 0 0 / 25%)"
, contentBackground: "#404040"
, enabledButton: "#4bc22e"
, textColor: "white"
, infoColor: "#9a49aa"
, cheatList: "#9a49aa"
}
}, {
name: "Monster Brawl"
, value: {
defaultButton: "rgb(45, 51, 67)"
, backgroundColor: "rgb(78, 95, 124)"
, inputColor: "rgb(0 0 0 / 25%)"
, contentBackground: "linear-gradient(0deg,#374154,#4f5b74)"
, infoColor: "#374154"
, cheatList: "#374154"
, textColor: "white"
, enabledButton: "#47A547"
, disabledButton: "#A02626"
}
}, {
name: "Tower Defense 2"
, value: {
backgroundColor: "url(https://media.blooket.com/image/upload/v1676164454/Media/defense/backgroundTd1-02.svg) center / cover"
, cheatList: "#a33c22"
, infoColor: "#a33c22"
, defaultButton: "#40b1d8"
, inputColor: "#3e8cbe"
, contentBackground: "#293c82"
, enabledButton: "#47A547"
, disabledButton: "#A02626"
, textColor: "white"
}
}]
}]
, run: function (e) {
j.setItem("theme", {...j.data.theme
, ...e
});
for (const t in e) a.sheet.cssRules[0].style.setProperty("--" + t, e[t])
}
}, {
name: "Scale"
, description: "Forces the GUI to scale from 25%-100%"
, inputs: [{
type: "number"
, name: "Percent scale"
, min: 25
, max: 100
, value: 100 * (j.data.scale || 1)
}]
, run: function (e) {
e = Math.min(Math.max(e, 25), 100), j.setItem("scale", e / 100), M.style.transform = `scale(${e/100})`
}
}, {
name: "Hide Keybind"
, description: "Change the hide keybind (Click button after input to change)"
, inputs: [{
type: "function"
, name: "Input"
, function: n => S(({
shift: e
, ctrl: t
, alt: a
, key: o
}) => n("" + [t && "Ctrl", e && "Shift", a && "Alt", o && o.toUpperCase()].filter(Boolean)
.join(" + ")))
}]
, run: function (e) {
j.setItem("hide", e), l.update(j.data.hide || {
ctrl: !0
, key: "e"
}, j.data.close || {
ctrl: !0
, key: "x"
})
}
}, {
name: "Close Keybind"
, description: "Change the quick close keybind (Click button after input to change)"
, inputs: [{
type: "function"
, name: "Input"
, function: n => S(({
shift: e
, ctrl: t
, alt: a
, key: o
}) => n("" + [t && "Ctrl", e && "Shift", a && "Alt", o && o.toUpperCase()].filter(Boolean)
.join(" + ")))
}]
, run: function (e) {
j.setItem("close", e), l.update(j.data.hide || {
ctrl: !0
, key: "e"
}, j.data.close || {
ctrl: !0
, key: "x"
})
}
}, {
name: "Background Color"
, description: "Changes the background color of the GUI"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
a.sheet.cssRules[0].style.setProperty("--backgroundColor", e), j.setItem("theme.backgroundColor", e)
}
}, {
name: "Category List Color"
, description: "Changes the categories list background color"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
a.sheet.cssRules[0].style.setProperty("--cheatList", e), j.setItem("theme.cheatList", e)
}
}, {
name: "Info Color"
, description: "Changes the color of the information at the top of the GUI"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
a.sheet.cssRules[0].style.setProperty("--infoColor", e), j.setItem("theme.infoColor", e)
}
}, {
name: "Button Color"
, description: "Changes the color of the cheats"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
a.sheet.cssRules[0].style.setProperty("--defaultButton", e), j.setItem("theme.defaultButton", e)
}
}, {
name: "Enabled Toggle Color"
, description: "Changes the color of enabled toggle cheats"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
j.setItem("theme.enabledButton", e)
}
}, {
name: "Disabled Toggle Color"
, description: "Changes the color of disabled toggle cheats"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
a.sheet.cssRules[0].style.setProperty("--disabledButton", e), j.setItem("theme.disabledButton", e)
}
}, {
name: "Text Color"
, description: "Changes the text color"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
a.sheet.cssRules[0].style.setProperty("--textColor", e), j.setItem("theme.textColor", e)
}
}, {
name: "Input Color"
, description: "Changes the color of inputs, like the set gold number input"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
a.sheet.cssRules[0].style.setProperty("--inputColor", e), j.setItem("theme.inputColor", e)
}
}, {
name: "Content Color"
, description: "Changes the background color of the cheats"
, inputs: [{
type: "string"
, name: "Color"
}]
, run: function (e) {
a.sheet.cssRules[0].style.setProperty("--contentBackground", e), j.setItem("theme.contentBackground", e)
}
}]
, alerts: [{
element: f("div", {
className: "alertContainer"
, style: {
margin: "15px 15px 5px 15px"
, backgroundColor: "rgb(0 0 0 / 50%)"
, width: "95%"
, height: "370px"
, borderRadius: "7px"
, display: "block"
, alignItems: "center"
, justifyContent: "center"
}
}, f("ul", {
className: "alertList"
, style: {
margin: "10px 10px 0 10px"
, padding: "0"
, listStyleType: "none"
, display: "flex"
, flexDirection: "column-reverse"
, height: "355px"
, overflowY: "scroll"
, wordWrap: "break-word"
}
}, f("li", {
style: {
margin: "5px"
}
}, f("span", {
style: {
color: "var(--textColor)"
}
, innerText: "[LOG] GUI opened"
}))))
, addLog(e, t) {
return this.element.firstChild.prepend(f("li", {
style: {
margin: "5px"
}
}, f("span", {
style: {
color: t || "var(--textColor)"
}
, innerHTML: "[LOG] " + e
})))
}
, addAlert(e, t, a) {
return this.element.firstChild.prepend(f("li", {
style: {
margin: "5px"
}
}, f("img", {
src: t || this.blookData ? .Black ? .url
, alt: "blook"
, draggable: !1
, style: {
height: "22.5px"
, margin: "0 10px -5px 0"
}
}), f("strong", {}, e), " ", a))
}
, connection: null
, data: {}
, updateLeaderboard(e) {
this.leaderboardEl || this.addLeaderboard(), this.leaderboard.innerHTML = "";
for (var {
blook: t
, name: a
, value: o
}
of e) this.leaderboard.append(f("li", {
style: {
fontSize: "2rem"
, paddingInline: "72px 15px"
, paddingBlock: "1.25px"
, position: "relative"
}
}, f("img", {
src: this.blookData ? .[t] ? .url || this.blookData.Black.url
, alt: t
, draggable: !1
, style: {
height: "45px"
, position: "absolute"
, left: "15px"
}
}), a, f("span", {
innerText: this.parseNumber(parseInt(o))
, style: {
float: "right"
}
})))
}
, parseNumber(o = 0) {
var n = o;
if (o < 1e3) return n.toString();
var e = ["", "K", "M", "B", "T"]
, a = Math.floor((o.toString()
.length - 1) / 3);
if (a < e.length) {
let t = 0;
for (let e = 3; 1 <= e && !((t = parseFloat((0 !== a ? o / Math.pow(1e3, a) : o)
.toPrecision(e)))
.toString()
.replace(/[^a-zA-Z 0-9]+/g, "")
.length <= 3); e--);
n = (t = t % 1 != 0 ? t.toFixed(1) : t) + e[a]
} else {
let e = o
, t = 0;
for (; 100 <= e; t++) e = Math.floor(e / 10);
let a = "";
var i = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
for (const r of(t + 1)
.toString()
.split("")) a += i[Number(r)];
n = e / 10 + " × 10" + a
}
return n
}
, addLeaderboard() {
this.blookData || = Object.values(webpackJsonp.push([[], {
"": (e, t, a) => {
t.cache = a.c
}
}, [[""]]])
.cache)
.find(e => e.exports ? .a ? .Alice && e.exports ? .a ? .Alien)
.exports.a, this.element.append(this.leaderboardEl = f("div", {
id: "leaderboardContent"
, style: {
position: "absolute"
, inset: "110% 0px"
}
}, f("div", {
style: {
alignItems: "center"
, boxSizing: "border-box"
, display: "flex"
, flexDirection: "row"
, flexWrap: "wrap"
, justifyContent: "space-evenly"
, padding: "20px 5px 20px"
, position: "relative"
, width: "100%"
, fontFamily: "Nunito, sans-serif"
, fontWeight: "400"
, color: "var(--textColor)"
, background: "var(--contentBackground)"
, boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)"
, borderRadius: "7px"
}
}, f("div", {
className: "headerText"
, style: {
boxSizing: "border-box"
, display: "block"
, height: "45px"
, left: "-10px"
, padding: "4px 4px 8px"
, position: "absolute"
, top: "-28px"
, backgroundColor: "#ef7426"
, boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)"
, borderRadius: "7px"
}
}, f("div", {
style: {
alignItems: "center"
, boxSizing: "border-box"
, display: "flex"
, height: "100%"
, justifyContent: "center"
, padding: "0 15px"
, width: "100%"
, fontFamily: "Titan One, sans-serif"
, fontSize: "26px"
, fontWeight: "400"
, textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464"
, color: "white"
, background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)"
, borderRadius: "5px"
}
, innerText: "Leaderboard"
})), f("div", {
className: "alertContainer"
, style: {
margin: "15px 15px 5px 15px"
, backgroundColor: "rgb(0 0 0 / 50%)"
, width: "95%"
, height: "370px"
, borderRadius: "7px"
, display: "flex"
, alignItems: "center"
, justifyContent: "center"
}
}, this.leaderboard = f("nl", {
className: "alertList"
, style: {
marginTop: "10px"
, padding: "0"
, listStyleType: "decimal"
, width: "100%"
, height: "355px"
, overflowY: "scroll"
, wordWrap: "break-word"
}
})))))
}
, async connect() {
try {
var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
if (!e ? .props ? .liveGameController ? ._liveGameCode) return !1;
this.connection = await e.props.liveGameController.getDatabaseRef("c");
const w = this.blookData = Object.values(webpackJsonp.push([[], {
"": (e, t, a) => {
t.cache = a.c
}
}, [[""]]])
.cache)
.find(e => e.exports ? .a ? .Alice && e.exports ? .a ? .Alien)
.exports.a
, k = this.getGamemode()
, x = {
lb: "Lunch Break"
, as: "Ad Spam"
, e37: "Error 37"
, nt: "Night Time"
, lo: "#LOL"
, j: "Jokester"
, sm: "Slow Mo"
, dp: "Dance Party"
, v: "Vortex"
, r: "Reverse"
, f: "Flip"
, m: "Micro"
};
this.connection.on("value", e => {
var t = e.val() || {};
if (t && this.diffObjects(this.data, t)) {
var a, o, n, i, r, s, l, c, d = this.diffObjects(this.data, t);
this.data = t;
let e;
switch (k) {
case "racing":
e = Object.entries(t)
.map(([e, {
b: t
, pr: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
case "classic":
e = Object.entries(t)
.map(([e, {
b: t
, p: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
case "royale":
e = Object.entries(t)
.map(([e, {
b: t
, e: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
case "workshop":
e = Object.entries(t)
.map(([e, {
b: t
, t: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
case "brawl":
e = Object.entries(t)
.map(([e, {
b: t
, xp: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
case "defense":
case "defense2":
e = Object.entries(t)
.map(([e, {
b: t
, d: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
case "gold":
for (const h in d) d[h].tat && ([a, o] = d[h].tat.split(":"), "swap" == o ? this.addAlert(h, w[t[h].b] ? .url, "just swapped with " + a) : this.addAlert(h, w[t[h].b] ? .url, `just took ${this.parseNumber(parseInt(o))} gold from ` + a));
e = Object.entries(t)
.map(([e, {
b: t
, g: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
break;
case "hack":
for (const g in d) d[g].tat && ([n, i] = d[g].tat.split(":"), this.addAlert(g, w[t[g].b] ? .url, `just took ${this.parseNumber(parseInt(i))} crypto from ` + n));
e = Object.entries(t)
.map(([e, {
b: t
, cr: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
break;
case "fishing":
for (const b in d) "Frenzy" == d[b].f ? this.addAlert(b, w[t[b].b] ? .url, "just started a frenzy") : d[b].s && this.addAlert(b, w[t[b].b] ? .url, `just sent a ${d[b].f} distraction`);
e = Object.entries(t)
.map(([e, {
b: t
, w: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
break;
case "dino":
for (const y in d) d[y].tat && ([r, s] = d[y].tat.split(":"), "true" == s ? this.addAlert(y, w[t[y].b] ? .url, `just caught ${r} CHEATING!`) : this.addAlert(y, w[t[y].b] ? .url, "investigated " + r));
e = Object.entries(t)
.map(([e, {
b: t
, f: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
break;
case "cafe":
for (const v in d) d[v].up && ([l, c] = d[v].up.split(":"), c) && this.addAlert(v, w[t[v].b] ? .url, `upgraded ${l} to level ` + c);
e = Object.entries(t)
.map(([e, {
b: t
, ca: a
}]) => ({
name: e
, blook: t
, value: a || 0
}));
break;
case "factory":
for (const f in d) {
var p, u, m = d[f];
m.g ? this.addAlert(f, w[t[f].b] ? .url, `activated the ${x[m.g]} glitch!`) : m.s ? ([p, u] = m.s.split("-"), this.addAlert(f, w[t[f].b] ? .url, `has a ${p} ${u} synergy!`)) : m.t && this.addAlert(f, w[t[f].b] ? .url, "now has 10 Blooks!")
}
e = Object.entries(t)
.map(([e, {
b: t
, ca: a
}]) => ({
name: e
, blook: t
, value: a || 0
}))
}
this.updateLeaderboard(e.sort((e, t) => t.value - e.value))
}
})
} catch {
return !1
}
}
, diffObjects(e, t) {
var a, o = {};
for (const n in e) n in t && ("object" == typeof e[n] && "object" == typeof t[n] ? (a = this.diffObjects(e[n], t[n])) && 0 !== Object.keys(a)
.length && (o[n] = a) : JSON.stringify(e[n]) !== JSON.stringify(t[n]) && (o[n] = t[n]));
for (const i in t) i in e || (o[i] = t[i]);
return 0 == Object.keys(o)
.length ? null : o
}
, getGamemode() {
switch (window.location.pathname) {
case "/play/racing":
return "racing";
case "/play/factory":
return "factory";
case "/play/classic/get-ready":
case "/play/classic/question":
case "/play/classic/answer/sent":
case "/play/classic/answer/result":
case "/play/classic/standings":
return "classic";
case "/play/battle-royale/match/preview":
case "/play/battle-royale/question":
case "/play/battle-royale/answer/sent":
case "/play/battle-royale/answer/result":
case "/play/battle-royale/match/result":
return "royale";
case "/play/toy":
return "workshop";
case "/play/gold":
return "gold";
case "/play/brawl":
return "brawl";
case "/play/hack":
return "hack";
case "/play/fishing":
return "fishing";
case "/play/rush":
return "rush";
case "/play/dino":
return "dino";
case "/tower/map":
case "/tower/battle":
case "/tower/rest":
case "/tower/risk":
case "/tower/shop":
case "/tower/victory":
return "doom";
case "/cafe":
case "/cafe/shop":
return "cafe";
case "/defense":
return "defense";
case "/play/defense2":
return "defense2";
case "/kingdom":
return "kingdom";
default:
return !1
}
}
}]
};

function k(e, t) {
var a, o, n = 0
, i = 0;
e.onpointerdown = function (e = window.event) {
n = e.clientX, i = e.clientY, document.onpointerup = function () {
document.onpointerup = null, document.onpointermove = null
}, document.onpointermove = function (e = window.event) {
a = n - e.clientX, o = i - e.clientY, n = e.clientX, i = e.clientY;
t.style.top = t.offsetTop - o + "px", t.style.left = t.offsetLeft - a + "px"
}
}
}
y("Alerts", null, O.alerts, !0), y("Global", "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Games_Played_2.svg", O.global)(), y("Gold Quest", "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg", O.gold), y("Cafe", "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl1.svg", O.cafe), y("Crypto Hack", "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg", O.crypto), y('<span style="font-size: 17px">Deceptive Dinos</span>', ['<img style="height: 30px; margin-left: 8px; margin-right: 12px" src="https://media.blooket.com/image/upload/v1655161325/Media/survivor/Dog.svg">'], O.dinos), y('<span style="font-size: 18px">Tower Defense</span>', ['<img style="width: 30px; margin-right: 5px" src="https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg">'], O.defense), y('<span style="font-size: 16px">Tower Defense 2</span>', ['<img style="width: 30px; margin-right: 5px; rotate: 45deg" src="https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg">'], O.defense2), y("Factory", "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Factory_Upgrades.svg", O.factory), y('<span style="font-size: 19px">Fishing Frenzy</span>', "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg", O.fishing), y("Flappy Blook", "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg", O.flappy), y('<span style="font-size: 17px">Tower of Doom</span>', ['<img style="height: 30px; margin-left: 5px; margin-right: 10px" src="https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg">'], O.doom), y('<span style="font-size: 18px">Crazy Kingdom</span>', "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl1.svg", O.kingdom), y("Racing", "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg", O.racing), y("Battle Royale", "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg", O.royale), y("Blook Rush", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA7YSURBVHic7Z17tFxVfcc/e59zZib3kcfN456YQObOTB43PBIKoeIqSlwIBXwiCCytXe2qxabSWrAqLKmwXKthVRe2BFxitYpasSIPV0sI8mhV5GHVdpWaoCRIvAnZSW/uzeuG3Nec/jFzk8mYOXNm73PmeT7/zt6/s+/d399vv/cWnufRSSilZgEXAZcBl42MHF5m23KrlPJBKcU9mUx6pLElrC+iEwSglFpOscIpVH5q5rfh4YPH0wkBlmUNW5b8oZTyi9ls+ol6l7XetKUAyrz8ciBbKW2pAMqRUk62e3RoGwH4ebkffgIopV2jQ8sKoOjl6zlR6RW93I+gAiinGB22SSkfklJsatXo0FICUEqt4ESFv4WAXu6HrgBKKYkOPypGh+8bG60TTS0ApVQXJ3t5JuxvhCGAcorR4aVidLg7k0kPh/6RkGg6AUTh5X5EIYBSmj06NFwA9fByP6IWQDnNFh0aIgCl1EpO9vJk3QtRpN4CKKUYHfYXo8O92Wx6S93LUA8BFL38rZyo9IHIPxqQRgqgHCnlVEl02FSP6BCZAIpefjmFCn8zDfRyP5pJAKWURIdnin2HSKJDaAJQSnVzclveNF7uR7MKoJyy6HBPJpPeF4ZdIwEopVZxosKb1sv9aBUBlFIWHb6UzaY3a9uqRQBFLy9ty9O6H24WWlEA5RSjwy+llA8X+w6Bo0NVASilBjlR4RfSgl5+KiY9eP6g4IWhad7Xf4Qu2VzzIboUo8NISXR41De9nwCUUpcAj4ddyEaxaxyeHhU8PQLPHBSMTQP7FoHwWDBrnPPnjXFd/yHW9kw0uqihkUolbsnlBjZW+t2ukl+GXJ66MunBcwcFT48WKv7loxUSeoLhoyk2H02xefd8HHuK5b2v8/sLj3DNosOtHh0svx+rCaDlKPXyHx0UHJ2u3cbklM3W0V62jvZy58tu20YHaAMBTOTh+UMBvFwXn+hw9cLD9FgtHR1aUwBDx4pePlpoy3W8XJfy6DD/eHQ4zDk94/UrSEi0hAAm8vDcjJePCLa/3ugSFfEE+4+meOxoisd2z8dxCtHhkvmFvkMrRIemFcBvSrz8x3X2cl0mJ222jvSydaSXv9/uMr9rnHVzxri2/zDn9jZndGgaATStl+viCfaPpdgylmLLa80bHRoqgFIvf+aA4PV8I0sTLc0aHeoqgBkvf2qkUPE7Wt3LdSmPDvYUudmF6HBtnaND5ALYWdqWt7mX6zI5ZbNtpJdtI738w3aXvlnjrJtXiA7nRTyyiEwAvxiDP31J8kqnerkunmDkaIrHj6Z4vDjvsHHVHi7tC3uCo0BkU737JkRc+SEwOWXz6rgTmf2WnuuPMScWQIcTC6DDiQXQ4cQC6HBiAXQ4sQA6nFgAHU4sgA4nFkCHEwugw4kF0OHEAuhwYgF0OLEAOpxqAtDei2sL3Zwx5SQx2kY16fdjNQFob+mYazfHrtd2YFFCf0+8EOKw3+/VBKC9D2lu02w4b30WJ40ORRzw+zG6CBDdLqaO4w3JKZPsvjdgRBYBeq24HxAKAvodowhgJACjbZ1z4mbAGCHM9tELge8l1pEKIO4HmGNL44MUo34/VhPAEUD7RoR5sQCMSVjGAtjr96OvAFzX9YBdul+e68RDQVOSBgKQUk5mMmlfA0FmAod0CxA3AeZ02SYCEGNV0wSwoy2ABfFQ0Jg5tv4QUAjh2/5DxAI4o1s3Z8wMqw0OhwohVLU0kQpgTU/cBzDlonn6AzEhxM5qaYIIoKqRSmS7oMf3lroYP4TweNNsEwHwUrU0QQTwM90CSOCsHt3cMT3JSaPZVCnFg1XTVEvguu5e4BXdQsTNgD6ndx3TzlscAv5v1XQB7T2rW5A1cQTQZk2vvgAsSwaav4leAL1xBNBl/Tz9W0GklC8EShfQ3nO6BUmnYHY8IVQzQnqcP1t/CCileCRQuoD2XqSwLlAzgrgfoENvckJ7w6YQwhOCh4OkDfQN13WngUAh5VSc26ubs3PJdRu1/6OZTDrQIl4tItPuB7xzQRwBauUPFus/ZWNZ8hdB09ZFAIPdsKpLN3fnkXCmuNhsBjDw87S1COB5QNuVr1wUR4GgrOvT6m4dR0rxjcBpgyZ0XfcAsE2rRMB7FnrEWwSD8eElVRfxKmJZcjyTSQeevq+1o6ndDCxNwrrZurk7h57khNGzNJYlX60lfa0C+GGN6U/iyoVxM1CNCxf4nuOoipTyP2pKX6P9h4Gqu0wq8Y4FXrxV3A8BG5b6nuPwzy4EUopP15KnJgG4rnsEeKCmUpXQ58BF8+IoUIm+WcdIGxwCsW1reyaT9t0EWo7OZNNXNfIc5z0LTXK3N5cuNAv/ti3vqjWP1uPRSqmXgVzNGSk8GvHGn0n2NMsTOvsWNboEAFjWNM+8cYf2YxFSysnVq5cnas6n9TX4mmY+EhI+elrcDJRzqXvA6KUQx7F+oJNPVwD3gf6h9ev6PZa2xRPU4WBZ09w+sN/IhpTyFq18Oplc190FPKGTF8ARcRQo5YrFB0gZvE9s29ZwNpv+T528JlfE/JNBXq7p91iWMrHQHtjWNJ9Om3m/bVvf1M1rIoDvgf/JUz9sATeeHkeBdy0ZIWHg/UIIr9axfynaAnBddxz4lm5+gPcu9MjMMrHQ2jj2FJ9Ka/tQwYZjvZjJpA/p5je9JcyoGbAE3NTBUeDKJaPGz7ZZlnWHSX6teYBSlFI/B87RzZ8H1v9c8qtoXkWrToPmARL2FC9csMNoatyy5OuDg8uNdlqEcU/graYF+Gwu33EXFv51bq/xuojj2H9nWg7j/7vruo8CT5rYOH82/NnSzmkKzpp/iGsXmW36sG1rJJcbuM20LGE53k0YTAwBfGKZx+oOOE2cdCb58mDVQ7tVcRz7+hCKE44AXNf9Hww7hI6ATSvyOG29XOyxcdUeugyGfQCJhP3LbDb93TBKFGbT+ynAaDlrdTd8fFn7NgW/13+Atxls9oTCuN+2ratCKlJ4AigeIjUakgBsWOq15dax7tQEm1bsM7aTSNhPBjn0GZSwO993Ar8xMSApNAXd7XSvgPC4e/Vrxr1+KeWUZcn3hVOoos0wjbmuewz4pKmdZSm4baB9moK3LxnhPIOrXmZIJOwvZjJp/T1jpyCK4fe3MThGNsMHXI9r+ltfBKfPHmNjZtjYjm1bR6QUfxlCkU4idAEU7xa8MQxbn8t5XNzXuiLo6zrGw2fvDsWW49gfq3bnnw6RTMC5rvss8B1TO7aAL63yOK8FD5d2Jyf43toho5W+GRzHHspm0/eGUKzfIsoZ2I9S5ZrSIMyS8I0z8qxoobOFCXuKB9YOMdfgkscZpBR527beGUKxTm0/KsOu6+4BrsPg2ZkZ5trw7TPyvKEFtpFZ1jT3rRniNLM7/o+TTDofy2bT/x2KsVMQ6RqM67r/juFi0QyLkwURNPP1s0LkuevM3ZzZrX+0q5Rk0vl+Njvw+VCMVaAei3B3AP8WhqHlXYXmYFYzLh0Kj79ZtYc3zzGb6ZvBcay9liUvC8WYD5H/K4ujgg8Cr4Zh77xe+PKgR6qZRCA8PpLby1ULzVb4ZpBSTjmOfUEUvf7f+lbUHwBwXXcUuBoI5TjIW+d5PHJ2nv6aj0GEj5R5/nb1Lq43uNGjFCEgmXT+OJNJ/zoUg1Womx+5rvtTCiODUFjTA4+tyTf0QupUYpJ/Pmcn75gf3namRCJxfzabDnzBgynGW8JqRSn1TeD9Ydk7Og1//ivBlv2aE+2aW8IWdB/jwbN30Wf2oNNJOI796sqV2YHQDAagES3p9UDgS4yq0WXBVwY9NtRxR9FZ8w/xxO/sDLXyLUuOO471u6EZDEjdBeC67hhwFZr3Dp4KCdya9rhzuRf5hpJ3nzbMt87YE+o9B0IIL5Fwrsxk0ubrxTXSkL6067ovAR+gyru2tXJdv8e/nJmP5LEqIfN8cuVrfMbwDN+pSCadO7LZ9ObQDQeg7n2AUpRS76KwZhBqf373OHxiu+Cp0QBuGqAP0Nd1jLsG97AmpAmeUlKpxMZcbkDrYGcYNFQAAEqpy4GHgNAneh/5P8GtrwiG/eKMjwCkzHPtacPcvEz/1q5KFIZ7idtyuYHbQzdeSzkaLQAApdQlwCNA6AfFDk7B7b8W3L+3QjSoIIBls8e4d1CxJKQ5/VKEECSTzi253MDG0I3XWpZmEACAUmo98K9AJCP7Hx8UfHy74JXymdoyAdj2NH+V3csH+82ua6mEEIJUyrkx6jn+oDSNAACUUhcCm4FInpkYz8PnhwRf2CWYnPmzSwSwdsEhvrByL73mr3WeEiGEl0o5N2SzA/dE8gENmkoAAEqpC4AtQGR7g7eNwc07JC8cAvYtoic5wWdWKKP7eatRqPzE9dls+h8j+4gGTScAAKXUOuBxYF6U33lyRPDskMeGJeHM41eiWPl/lM2m74v0Qxo0pQAAlFLnULiGZn6U3xkerkvlvz+bTd8f6Yc0aaZF1ZNwXfe/gPVAXVbFokBKOZVKJa5q1sqHJhYAgOu6LwJrgab9B1bCceydqZSTzmbTDzW6LH40bRNQjlLqD4G7CXmEEHYTIITwkknnK7ncwIdCNRwRTR0BSnFd9z4KN5H8tNFlqYRlWWOpVOJtrVL50EICAHBddzvwJuCzGLxeEgWJhPOTZNJelM2mn2p0WWqhZZqAcpRSFwNfBxab2DFtAqQU+UTCuTmXGzC+rqURtKwAAJRSCyncXn6Frg0TATiOtc9x7LdkMumqr3Q3Ky0tgBmUUjdQaBZqXlHUEYAQkEg4312+PHN1zZmbjJbqA1TCdd1NwLkY3F8cFNu29qdSyXe3Q+VDm0SAUpRSVwCfA1YFSR80AliWnHAce2MYN3M1E20RAUopXlt3FnADYLx/qziufyCZdOa0W+VDG0aAUpRSc4GbgQ1UmECqFAGEEJ7j2D+xbXlNLe/wtRptLYAZlFJ9FCLCXwB9pb+VC6CwQ9f+gWXJP8lk0jvqV8rG0BECmEEp1UPhXMJNFOcPZgQgpcg7jv2oZckP1fryVivTUQKYQSmVpHBg9cOjo4dXOY79oJTiIybXrrcq/w99zo6mO4xCQAAAAABJRU5ErkJggg==", O.rush), y('<span style="font-size: 18px">Monster Brawl</span>', ['<img style="height: 28px; margin-left: 5px; margin-right: 8px" src="https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg">'], O.brawl), y('<span style="font-size: 15px">Santa\'s Workshop</span>', ['<img style="height: 28px; margin-left: 3px; margin-right: 6px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZERTc2OyIgZD0iTTQzMy42NjEsMjM3LjgzN2MtNC40OTctNi4yMTQtNC44OC0xNC40NC0xLjIyNS0yMS4xODRjMTEuMzY1LTIwLjk2NywxNy43NzMtNDUuMDE0LDE3LjY1MS03MC41NjYKCUM0NDkuNzAxLDY0Ljg2OSwzODIuNTY0LTEuMDM3LDMwMS4zNTIsMC4wMTJjLTgwLjE4MywxLjAzNi0xNDQuODY0LDY2LjM1OS0xNDQuODY0LDE0Ni43ODhjMCwzMi41NTMsMTAuNTk1LDYyLjYzLDI4LjUyNiw4Ni45NzIKCWM3Ljc1MywxMC41MjYsNy4yMTMsMjUuMS0xLjU0MywzNC44MDhjLTEzLjI5NywxNC43NDEtNDEuOTM1LDI0LjMwNi0xMDIuNTk1LTE2LjI3N2MtNi42NTItNC40NS0xNC40NjItNi44NjQtMjIuNDY1LTYuODY0bDAsMAoJYy0xOS45NDcsMC0zNi44MzMsMTQuNjI4LTM5Ljc3NiwzNC4zNTdDNy44ODksMzUxLjgxNiw2LjUyLDUxMiwyMDYuOTY2LDUxMmg3MS4wODNDNDY2LjA1LDUxMiw1MTYuMTI3LDM1MS44MDEsNDMzLjY2MSwyMzcuODM3eiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkI2NDE7IiBkPSJNMTgzLjQ3LDI2OC41ODJjLTMuOTMsNC4zNTctOS4yMDIsOC4yNjEtMTYuMjQ0LDEwLjU1MmMyNC40NjksNS44ODIsMzguODItMS4zMTksNDcuMTQ5LTEwLjU1MgoJCWM4Ljc1Ny05LjcwOCw5LjI5Ni0yNC4yODEsMS41NDMtMzQuODA4Yy0xNy45My0yNC4zNDItMjguNTI2LTU0LjQyLTI4LjUyNi04Ni45NzNjMC03NS44MzMsNTcuNTAzLTEzOC4yMjYsMTMxLjI4MS0xNDUuOTgKCQljLTUuNjg5LTAuNjAxLTExLjQ2Ny0wLjg4NC0xNy4zMjMtMC44MDljLTgwLjE4MywxLjAzNi0xNDQuODY0LDY2LjM1OS0xNDQuODY0LDE0Ni43ODhjMCwzMi41NTMsMTAuNTk1LDYyLjYzLDI4LjUyNiw4Ni45NzMKCQlDMTkyLjc2NiwyNDQuMywxOTIuMjI2LDI1OC44NzMsMTgzLjQ3LDI2OC41ODJ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZCNjQxOyIgZD0iTTQ5LjUzOSwyNzkuNzk2YzIuMTM3LTE0LjMxNywxMS42MTgtMjUuOTQyLDI0LjI4Mi0zMS4yNDVjLTQuODY2LTIuMDIyLTEwLjA5MS0zLjExLTE1LjQxMi0zLjExCgkJbDAsMGMtMTkuOTQ3LDAtMzYuODMzLDE0LjYyOC0zOS43NzYsMzQuMzU3QzcuODg5LDM1MS44MTYsNi41Miw1MTIsMjA2Ljk2Niw1MTJoMzAuOTA1QzM3LjQyNSw1MTIsMzguNzk0LDM1MS44MTYsNDkuNTM5LDI3OS43OTZ6CgkJIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZCNjQxOyIgZD0iTTgwLjUxOCwzNDQuMzM2Yy04Ljc2Niw4LjY1Ni0xMC4yNzcsMjIuMjY4LTMuNTk4LDMyLjYxOQoJCWMxOS41MDQsMzAuMjI3LDY4LjM1MSw4Ni4yODMsMTYyLjM3Miw4Ni4yODNjNTcuMjU2LDAsMTE3Ljc5MS0zNS44MDksMTI5LjA2NC05NS4wOTdjOS4zMS00OC45NjYtMTkuMjQ2LTEwOC44MjEtNzUuMzMtMTA2LjI0NwoJCWMtNDEuMDk3LDEuODg3LTY1LjEzNSwzNy40MTUtOTkuODY1LDUzLjg0MWMtMjQuMzk4LDExLjU0LTUwLjg0NCwxOC42NTEtNzcuNjg3LDIxLjMwNwoJCUMxMDIuNjk4LDMzOC4zMDYsOTAuODA1LDMzNC4xNzgsODAuNTE4LDM0NC4zMzZ6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6IzM4NDg0QTsiIGQ9Ik0zODguMzk0LDExMC44MzNjLTMuNTAyLDAtNi42NzQtMi4zOTYtNy41MTMtNS45NTFsLTMuNzE1LTE1LjczCgljLTAuOTgxLTQuMTUzLDEuNTkxLTguMzE1LDUuNzQzLTkuMjk1YzQuMTUyLTAuOTc5LDguMzE1LDEuNTkxLDkuMjk1LDUuNzQzbDMuNzE1LDE1LjczYzAuOTgxLDQuMTUzLTEuNTkxLDguMzE1LTUuNzQzLDkuMjk1CglDMzg5LjU4LDExMC43NjUsMzg4Ljk4MiwxMTAuODMzLDM4OC4zOTQsMTEwLjgzM3oiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjY0MTsiIGQ9Ik00MjcuNjE4LDY4Ljk5NGMwLDAsMy4xOTgsNDUuODMyLTE4LjAzMyw2Ni41OTFjLTIxLjIzMSwyMC43NTksMTQuMTU0LDUzLjMxNCw1Ni4xNDUsMjIuNjQ2CgljNi4wMzItNC40MDUsMTIuMTQzLTcuMjA0LDE4LjE4NC04Ljc2OGM3Ljc3Ny0yLjAxMiwxMy4yNDMtOC45NjcsMTMuMjQzLTE2Ljk5OWwwLDBjMC03LjcyNC01LjAzMS0xNC41OTctMTIuNDM4LTE2Ljc4NgoJYy00LjkyNS0xLjQ1Ni0xMS4xOC0yLjMyNS0xOC41MTYtMS4zMjVjMCwwLDI1LjM5My0yMi4xMzgsMTkuMTE5LTQ3Ljc1M2MtMi4wMjctOC4yOC0xMS44NTYtMTEuNzI2LTE4LjgzNi02LjgzMgoJQzQ1Ny40NjEsNjYuMDk0LDQ0My40NTQsNzIuNzY0LDQyNy42MTgsNjguOTk0eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K">'], O.workshop), y("Settings", null, O.settings, !0), k(l, M), k(e, M), window.addEventListener("keydown", C);
let c = setInterval(() => {
O.alerts[0].connection ? clearInterval(c) : O.alerts[0].connect()
}, 5e3);

function x() {
M.remove(), clearInterval(c);
for (const e in O)
for (const t of O[e]) t.enabled && t.run();
Object.keys(O)
.forEach(e => O[e].forEach(e => e.enabled && (e.run(), w(...currentMode)))), window.removeEventListener("keydown", C)
}

function C(e) {
var t = j.data.hide || {
ctrl: !0
, key: "e"
}
, a = j.data.close || {
ctrl: !0
, key: "x"
};
(t.ctrl && e.ctrlKey || !t.ctrl && !e.ctrlKey) && (t.shift && e.shiftKey || !t.shift && !e.shiftKey) && (t.alt && e.altKey || !t.alt && !e.altKey) && e.key.toLowerCase() == t.key ? (e.preventDefault(), M.style.display = "block" === M.style.display ? "none" : "block") : (a.ctrl && e.ctrlKey || !a.ctrl && !e.ctrlKey) && (a.shift && e.shiftKey || !a.shift && !e.shiftKey) && (a.alt && e.altKey || !a.alt && !e.altKey) && e.key.toLowerCase() == a.key && (e.preventDefault(), x())
}

function S(c, d = window) {
return new Promise(t => {
const a = {};
let o, n, i, r;
const s = e => {
e.preventDefault(), a[e.code] = !0, o || = e.shiftKey, n || = e.ctrlKey, i || = e.altKey, ["shift", "control", "alt", "meta"].includes(e.key.toLowerCase()) || (r = e.key.toLowerCase()), c ? .({
shift: o
, ctrl: n
, alt: i
, key: r
})
}
, l = e => {
delete a[e.code], 0 < Object.keys(a)
.length || (d.removeEventListener("keydown", s), d.removeEventListener("keyup", l), t({
shift: o
, ctrl: n
, alt: i
, key: r
}))
};
d.addEventListener("keydown", s), d.addEventListener("keyup", l)
})
}
M.addEventListener("mousemove", e => {
var t, a;
"cheatName" != e.target.className && "scriptButton" != e.target.className ? "0" != r.style.opacity && (r.animate([{
opacity: .9
}, {
opacity: 0
			}], {
				duration: 200
			}), r.style.opacity = "0") : (e = "scriptButton" == e.target.className ? e.target : e.target.parentElement, r.innerText == e.dataset.description && "0.9" == r.style.opacity || (t = e.getBoundingClientRect(), a = e.offsetParent.getBoundingClientRect(), r.innerText = e.dataset.description, "0" == r.style.opacity && (r.animate([{
				opacity: 0
			}, {
				opacity: .9
			}], {
				duration: 200
			}), r.style.opacity = "0.9"), r.style.left = t.x - a.x + (t.width - r.clientWidth) / 2 + "px", r.style.top = t.y - a.y + t.height + "px"));
		})
	}
})();