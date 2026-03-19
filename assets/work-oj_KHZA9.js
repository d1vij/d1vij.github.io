import { n as __toESM } from "./chunk-SmwYcJT_.js";
import "./react-Dp0uNt7U.js";
import { i as useVibrate, n as cn, o as require_compiler_runtime, s as Link, u as useRouter } from "./dist-DubO62zS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BmgZPGeN.js";
import { a as librariesRegistry_default, c as skill_icons_default, h as string, m as safeParse, n as projectsRegistry, p as picklist, r as librariesOrder, s as UnknownSkillSchema, t as projectOrder, u as object } from "./projectRegistry-C9x_LS4C.js";
import { t as createLucideIcon } from "./createLucideIcon-CWqp94-Z.js";
var AppWindow = createLucideIcon("app-window", [
	["rect", {
		x: "2",
		y: "4",
		width: "20",
		height: "16",
		rx: "2",
		key: "izxlao"
	}],
	["path", {
		d: "M10 4v4",
		key: "pp8u80"
	}],
	["path", {
		d: "M2 8h20",
		key: "d11cs7"
	}],
	["path", {
		d: "M6 4v4",
		key: "1svtjw"
	}]
]);
var Github = createLucideIcon("github", [["path", {
	d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
	key: "tonef"
}], ["path", {
	d: "M9 18c-4.51 2-5-2-7-2",
	key: "9comsn"
}]]);
var Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
var import_compiler_runtime$3 = require_compiler_runtime();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function EmptyIcon(_) {
	return null;
}
function SkillIcons(t0) {
	const $ = (0, import_compiler_runtime$3.c)(9);
	let { skill } = t0;
	let Icon;
	if (safeParse(UnknownSkillSchema, skill).success) {
		Icon = EmptyIcon;
		let t1$1;
		if ($[0] !== skill) {
			t1$1 = skill.slice(1);
			$[0] = skill;
			$[1] = t1$1;
		} else t1$1 = $[1];
		skill = t1$1;
	} else Icon = skill_icons_default[skill];
	let t1;
	if ($[2] !== Icon) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" });
		$[2] = Icon;
		$[3] = t1;
	} else t1 = $[3];
	let t2;
	if ($[4] !== skill) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: skill });
		$[4] = skill;
		$[5] = t2;
	} else t2 = $[5];
	let t3;
	if ($[6] !== t1 || $[7] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex w-fit items-center justify-center gap-1 border-2 border-theme-primary-900/50 bg-theme-primary-950 p-1 text-center d:text-sm text-theme-primary-200 text-xs",
			children: [t1, t2]
		});
		$[6] = t1;
		$[7] = t2;
		$[8] = t3;
	} else t3 = $[8];
	return t3;
}
var import_compiler_runtime$2 = require_compiler_runtime();
object({
	for: picklist([
		"github",
		"website",
		"__internal"
	]),
	url: string()
});
function WorkListItem(t0) {
	const $ = (0, import_compiler_runtime$2.c)(33);
	const { description, links, stack, title, id } = t0;
	let t1;
	if ($[0] !== stack) {
		t1 = stack.map(_temp);
		$[0] = stack;
		$[1] = t1;
	} else t1 = $[1];
	const skillIcons = t1;
	const router = useRouter();
	let t2;
	if ($[2] !== id || $[3] !== router) {
		t2 = router.buildLocation({
			to: "/work/$id",
			params: { id }
		});
		$[2] = id;
		$[3] = router;
		$[4] = t2;
	} else t2 = $[4];
	const location = t2.href;
	let t3;
	if ($[5] !== location) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkIcon, {
			for: "__internal",
			url: location
		}, "__internal");
		$[5] = location;
		$[6] = t3;
	} else t3 = $[6];
	let t4;
	if ($[7] !== links) {
		t4 = Object.keys(links);
		$[7] = links;
		$[8] = t4;
	} else t4 = $[8];
	let t5;
	if ($[9] !== links || $[10] !== t4) {
		t5 = t4.map((l) => {
			const k = l;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkIcon, {
				for: k,
				url: links[k]
			}, k);
		});
		$[9] = links;
		$[10] = t4;
		$[11] = t5;
	} else t5 = $[11];
	let t6;
	if ($[12] !== t3 || $[13] !== t5) {
		t6 = [t3, ...t5];
		$[12] = t3;
		$[13] = t5;
		$[14] = t6;
	} else t6 = $[14];
	const linkIcons = t6;
	let t7;
	if ($[15] !== id) {
		t7 = { id };
		$[15] = id;
		$[16] = t7;
	} else t7 = $[16];
	let t8;
	if ($[17] !== t7 || $[18] !== title) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			className: "font-semibold text-2xl underline decoration-theme-primary-400/60 decoration-dotted hover:decoration-solid md:text-3xl md:decoration-3",
			to: "/work/$id",
			params: t7,
			children: title
		});
		$[17] = t7;
		$[18] = title;
		$[19] = t8;
	} else t8 = $[19];
	let t9;
	if ($[20] !== description) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 mb-2 w-[90%] text-sm text-theme-primary-400 md:mb-3 md:text-base",
			children: description
		});
		$[20] = description;
		$[21] = t9;
	} else t9 = $[21];
	let t10;
	if ($[22] !== skillIcons) {
		t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1 md:gap-2",
			children: skillIcons
		});
		$[22] = skillIcons;
		$[23] = t10;
	} else t10 = $[23];
	let t11;
	if ($[24] !== t10 || $[25] !== t8 || $[26] !== t9) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "",
			children: [
				t8,
				t9,
				t10
			]
		});
		$[24] = t10;
		$[25] = t8;
		$[26] = t9;
		$[27] = t11;
	} else t11 = $[27];
	let t12;
	if ($[28] !== linkIcons) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-1",
			children: linkIcons
		});
		$[28] = linkIcons;
		$[29] = t12;
	} else t12 = $[29];
	let t13;
	if ($[30] !== t11 || $[31] !== t12) {
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between gap-1 border-2 border-x-0 border-y-theme-primary-900 bg-theme-primary p-2 md:border-y-2 md:p-4",
			children: [t11, t12]
		});
		$[30] = t11;
		$[31] = t12;
		$[32] = t13;
	} else t13 = $[32];
	return t13;
}
function _temp(s) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillIcons, { skill: s }, s);
}
function LinkIcon(props) {
	const $ = (0, import_compiler_runtime$2.c)(9);
	const vibrator = useVibrate();
	if (props.for === void 0) return null;
	let t0;
	if ($[0] !== vibrator) {
		t0 = function handleClick$1() {
			vibrator(50);
		};
		$[0] = vibrator;
		$[1] = t0;
	} else t0 = $[1];
	const handleClick = t0;
	let Icon;
	bb0: switch (props.for) {
		case "github":
			Icon = Github;
			break bb0;
		case "website":
			Icon = AppWindow;
			break bb0;
		case "__internal":
			Icon = Info;
			break bb0;
		default: return;
	}
	const t1 = props.for !== "__internal" ? "_blank" : "_self";
	let t2;
	if ($[2] !== Icon) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4.5 stroke-theme-primary-400" });
		$[2] = Icon;
		$[3] = t2;
	} else t2 = $[3];
	let t3;
	if ($[4] !== handleClick || $[5] !== props.url || $[6] !== t1 || $[7] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			onClick: handleClick,
			to: props.url,
			target: t1,
			className: "cursor-pointer px-1",
			rel: "noopener",
			children: t2
		});
		$[4] = handleClick;
		$[5] = props.url;
		$[6] = t1;
		$[7] = t2;
		$[8] = t3;
	} else t3 = $[8];
	return t3;
}
var worklist_module_default = {
	background: "_background_afp2z_9",
	spin: "_spin_afp2z_1"
};
var import_compiler_runtime$1 = require_compiler_runtime();
function WorkList(t0) {
	const $ = (0, import_compiler_runtime$1.c)(14);
	const { metadatas, title, order } = t0;
	let t1;
	if ($[0] !== metadatas || $[1] !== order) {
		let t2$1;
		if ($[3] !== metadatas) {
			t2$1 = (m) => {
				const meta = metadatas[m];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkListItem, { ...meta }, m);
			};
			$[3] = metadatas;
			$[4] = t2$1;
		} else t2$1 = $[4];
		t1 = order.map(t2$1);
		$[0] = metadatas;
		$[1] = order;
		$[2] = t1;
	} else t1 = $[2];
	const listElms = t1;
	let t2;
	if ($[5] !== title) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-2 text-5xl",
			children: title
		});
		$[5] = title;
		$[6] = t2;
	} else t2 = $[6];
	let t3;
	let t4;
	if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = cn("relative mx-auto grid grid-cols-1 gap-5 overflow-clip border-2 border-x-theme-primary-900 border-y-0 md:border-x-2");
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn(worklist_module_default.background, "absolute -inset-100 -z-20") });
		$[7] = t3;
		$[8] = t4;
	} else {
		t3 = $[7];
		t4 = $[8];
	}
	let t5;
	if ($[9] !== listElms) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: t3,
			children: [t4, listElms]
		});
		$[9] = listElms;
		$[10] = t5;
	} else t5 = $[10];
	let t6;
	if ($[11] !== t2 || $[12] !== t5) {
		t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [t2, t5] });
		$[11] = t2;
		$[12] = t5;
		$[13] = t6;
	} else t6 = $[13];
	return t6;
}
var import_compiler_runtime = require_compiler_runtime();
var projectMetas = projectsRegistry.metadata;
var librariesMetas = librariesRegistry_default.metadata;
function RouteComponent() {
	const $ = (0, import_compiler_runtime.c)(3);
	let t0;
	let t1;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkList, {
			metadatas: projectMetas,
			title: "Projects",
			order: projectOrder
		});
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkList, {
			metadatas: librariesMetas,
			title: "Libraries",
			order: librariesOrder
		});
		$[0] = t0;
		$[1] = t1;
	} else {
		t0 = $[0];
		t1 = $[1];
	}
	let t2;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 mb-5 content-container",
			children: [
				t0,
				t1,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/d1vij?tab=repositories",
						target: "_blank",
						className: "text-sm underline decoration-2 decoration-dotted hover:decoration-solid",
						rel: "noopener",
						children: "see more"
					})
				})
			]
		});
		$[2] = t2;
	} else t2 = $[2];
	return t2;
}
export { RouteComponent as component };
