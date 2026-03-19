import { n as __toESM } from "./chunk-SmwYcJT_.js";
import "./react-Dp0uNt7U.js";
import { o as require_compiler_runtime, s as Link } from "./dist-DubO62zS.js";
import { t as Route } from "./_id-f8_6zwSa.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BmgZPGeN.js";
import { o as Work } from "./projectRegistry-C9x_LS4C.js";
import { t as createLucideIcon } from "./createLucideIcon-CWqp94-Z.js";
var ArrowUpLeft = createLucideIcon("arrow-up-left", [["path", {
	d: "M7 17V7h10",
	key: "11bw93"
}], ["path", {
	d: "M17 17 7 7",
	key: "2786uv"
}]]);
var import_compiler_runtime = require_compiler_runtime();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function RouteComponent() {
	const $ = (0, import_compiler_runtime.c)(3);
	const data = Route.useLoaderData();
	console.log(data);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "..",
			className: "relative mb-2 flex items-center justify-start gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpLeft, { className: "-left-6 size-4 md:absolute" }), "Go back"]
		});
		$[0] = t0;
	} else t0 = $[0];
	let t1;
	if ($[1] !== data) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto mt-4 mb-5 content-container",
			children: [t0, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, { ...data })]
		});
		$[1] = data;
		$[2] = t1;
	} else t1 = $[2];
	return t1;
}
export { RouteComponent as component };
