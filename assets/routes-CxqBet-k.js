const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/fa-B-eHgm23.js","assets/iconBase-BWl5hMAf.js","assets/react-Dp0uNt7U.js","assets/chunk-SmwYcJT_.js","assets/io5-_dxKAG7d.js"])))=>i.map(i=>d[i]);
import { n as __toESM } from "./chunk-SmwYcJT_.js";
import "./react-Dp0uNt7U.js";
import { a as __vitePreload, i as useVibrate, o as require_compiler_runtime, s as Link } from "./dist-DubO62zS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BmgZPGeN.js";
var import_compiler_runtime$3 = require_compiler_runtime();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ContactList(t0) {
	const $ = (0, import_compiler_runtime$3.c)(7);
	const { contacts: contacts$1 } = t0;
	const vibrator = useVibrate();
	let t1;
	if ($[0] !== contacts$1 || $[1] !== vibrator) {
		let t2$1;
		if ($[3] !== vibrator) {
			t2$1 = (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "justify-baseline flex items-center gap-2 text-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-4 fill-theme-primary-400 stroke-theme-primary-400 md:size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: c.href,
					target: "_blank",
					rel: "noopener",
					onClick: () => vibrator(50),
					className: "text-theme-primary-400 decoration-2 hover:text-theme-primary-200 hover:underline active:underline",
					children: c.content
				})]
			}, c.href);
			$[3] = vibrator;
			$[4] = t2$1;
		} else t2$1 = $[4];
		t1 = contacts$1.map(t2$1);
		$[0] = contacts$1;
		$[1] = vibrator;
		$[2] = t1;
	} else t1 = $[2];
	const elms = t1;
	let t2;
	if ($[5] !== elms) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8",
			children: elms
		});
		$[5] = elms;
		$[6] = t2;
	} else t2 = $[6];
	return t2;
}
var import_compiler_runtime$2 = require_compiler_runtime();
function LinkWrapper(props) {
	const $ = (0, import_compiler_runtime$2.c)(5);
	const vibrator = useVibrate();
	let t0;
	if ($[0] !== vibrator) {
		t0 = function handleClick$1() {
			vibrator(100);
		};
		$[0] = vibrator;
		$[1] = t0;
	} else t0 = $[1];
	const handleClick = t0;
	let t1;
	if ($[2] !== handleClick || $[3] !== props) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			onClick: handleClick,
			className: "flex cursor-pointer items-center justify-center border-theme-primary-800/80 p-1 text-center underline decoration-2 decoration-theme-primary-300 decoration-dotted hover:decoration-solid md:text-xl",
			...props
		});
		$[2] = handleClick;
		$[3] = props;
		$[4] = t1;
	} else t1 = $[4];
	return t1;
}
var import_compiler_runtime$1 = require_compiler_runtime();
function PrimaryText(t0) {
	const $ = (0, import_compiler_runtime$1.c)(2);
	const { children } = t0;
	let t1;
	if ($[0] !== children) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4",
			children
		});
		$[0] = children;
		$[1] = t1;
	} else t1 = $[1];
	return t1;
}
var { FaGithub, FaLinkedinIn } = await __vitePreload(async () => {
	const { FaGithub: FaGithub$1, FaLinkedinIn: FaLinkedinIn$1 } = await import("./fa-B-eHgm23.js");
	return {
		FaGithub: FaGithub$1,
		FaLinkedinIn: FaLinkedinIn$1
	};
}, __vite__mapDeps([0,1,2,3]));
var { IoMailOutline } = await __vitePreload(async () => {
	const { IoMailOutline: IoMailOutline$1 } = await import("./io5-_dxKAG7d.js");
	return { IoMailOutline: IoMailOutline$1 };
}, __vite__mapDeps([4,1,2,3]));
const contacts = [
	{
		icon: IoMailOutline,
		content: "verma.divij@gmail.com",
		href: "mailto:verma.divij@gmail.com"
	},
	{
		icon: IoMailOutline,
		content: "leenukhs@gmail.com (alt)",
		href: "mailto:leenukhs@gmail.com"
	},
	{
		icon: FaGithub,
		content: "Github",
		href: "https://github.com/d1vij"
	},
	{
		icon: FaLinkedinIn,
		content: "Linkedin",
		href: "https://www.linkedin.com/in/divij-verma-013993365/"
	}
];
var homepage_module_default = { backdrop: "_backdrop_n6o77_1" };
var import_compiler_runtime = require_compiler_runtime();
function App() {
	const $ = (0, import_compiler_runtime.c)(4);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: homepage_module_default.backdrop });
		$[0] = t0;
	} else t0 = $[0];
	let t1;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative p-5 px-4! md:p-10",
			children: [t0, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-20 flex flex-col content-container content-container md:mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-start font-semibold text-8xl leading-tight tracking-tight md:text-9xl",
					children: "Divij Verma"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
					className: "w-full px-4 text-secondary text-sm text-theme-primary-400 italic md:px-8 md:text-base",
					children: "Student, Developer"
				})]
			})]
		});
		$[1] = t1;
	} else t1 = $[1];
	let t2;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 md:mt-20 md:text-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryText, { children: "I mostly work with web technologies and python and am currently learning C and Go." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryText, { children: "Majorly working with web technologies and python along with occasional C and Go," }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryText, { children: "Interested in OSS and Linux." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactList, { contacts })
			]
		});
		$[2] = t2;
	} else t2 = $[2];
	let t3;
	if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative z-20 bg-transparent",
			children: [t1, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto p-5 content-container content-width",
				children: [t2, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "justify-baseline mt-12 grid w-fit grid-cols-2 bg-theme-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkWrapper, {
						to: "/work",
						children: "Work"
					})
				})]
			})]
		});
		$[3] = t3;
	} else t3 = $[3];
	return t3;
}
export { App as component };
