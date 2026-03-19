const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/di-DhUqiO6F.js","assets/iconBase-BWl5hMAf.js","assets/react-Dp0uNt7U.js","assets/chunk-SmwYcJT_.js","assets/fa-B-eHgm23.js","assets/fa6-BBkGZIqO.js","assets/si-BzlIxbT2.js","assets/jassm-q_24-Q5E.js","assets/jsx-runtime-BmgZPGeN.js","assets/bad-ui-battles-Dr-L65Zd.js","assets/browsersh-DQFtVoMm.js","assets/election-software-CN2mFAI6.js","assets/portfolio-B_DlVIhp.js","assets/spotify-data-analysis-DIZHeZBc.js"])))=>i.map(i=>d[i]);
import { n as __toESM } from "./chunk-SmwYcJT_.js";
import { t as require_react } from "./react-Dp0uNt7U.js";
import { O as invariant, a as __vitePreload, l as useRouterState, n as cn, o as require_compiler_runtime, r as useClipboardText, t as Activity, u as useRouter } from "./dist-DubO62zS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BmgZPGeN.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var matchContext = import_react.createContext(void 0);
var dummyMatchContext = import_react.createContext(void 0);
function useMatch(opts) {
	const nearestMatchId = import_react.useContext(opts.from ? dummyMatchContext : matchContext);
	return useRouterState({
		select: (state) => {
			const match = state.matches.find((d) => opts.from ? opts.from === d.routeId : d.id === nearestMatchId);
			invariant(!((opts.shouldThrow ?? true) && !match), `Could not find ${opts.from ? `an active match from "${opts.from}"` : "a nearest match!"}`);
			if (match === void 0) return;
			return opts.select ? opts.select(match) : match;
		},
		structuralSharing: opts.structuralSharing
	});
}
function useSearch(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.search) : match.search;
		}
	});
}
function useNavigate(_defaultOpts) {
	const router = useRouter();
	return import_react.useCallback((options) => {
		return router.navigate({
			...options,
			from: options.from ?? _defaultOpts?.from
		});
	}, [_defaultOpts?.from, router]);
}
var store$4;
/* @__NO_SIDE_EFFECTS__ */
function getGlobalConfig(config$1) {
	return {
		lang: config$1?.lang ?? store$4?.lang,
		message: config$1?.message,
		abortEarly: config$1?.abortEarly ?? store$4?.abortEarly,
		abortPipeEarly: config$1?.abortPipeEarly ?? store$4?.abortPipeEarly
	};
}
var store$3;
/* @__NO_SIDE_EFFECTS__ */
function getGlobalMessage(lang) {
	return store$3?.get(lang);
}
var store$2;
/* @__NO_SIDE_EFFECTS__ */
function getSchemaMessage(lang) {
	return store$2?.get(lang);
}
var store$1;
/* @__NO_SIDE_EFFECTS__ */
function getSpecificMessage(reference, lang) {
	return store$1?.get(reference)?.get(lang);
}
/* @__NO_SIDE_EFFECTS__ */
function _stringify(input) {
	const type = typeof input;
	if (type === "string") return `"${input}"`;
	if (type === "number" || type === "bigint" || type === "boolean") return `${input}`;
	if (type === "object" || type === "function") return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
	return type;
}
function _addIssue(context, label, dataset, config$1, other) {
	const input = other && "input" in other ? other.input : dataset.value;
	const expected = other?.expected ?? context.expects ?? null;
	const received = other?.received ?? /* @__PURE__ */ _stringify(input);
	const issue = {
		kind: context.kind,
		type: context.type,
		input,
		expected,
		received,
		message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
		requirement: context.requirement,
		path: other?.path,
		issues: other?.issues,
		lang: config$1.lang,
		abortEarly: config$1.abortEarly,
		abortPipeEarly: config$1.abortPipeEarly
	};
	const isSchema = context.kind === "schema";
	const message$1 = other?.message ?? context.message ?? /* @__PURE__ */ getSpecificMessage(context.reference, issue.lang) ?? (isSchema ? /* @__PURE__ */ getSchemaMessage(issue.lang) : null) ?? config$1.message ?? /* @__PURE__ */ getGlobalMessage(issue.lang);
	if (message$1 !== void 0) issue.message = typeof message$1 === "function" ? message$1(issue) : message$1;
	if (isSchema) dataset.typed = false;
	if (dataset.issues) dataset.issues.push(issue);
	else dataset.issues = [issue];
}
/* @__NO_SIDE_EFFECTS__ */
function _getStandardProps(context) {
	return {
		version: 1,
		vendor: "valibot",
		validate(value$1) {
			return context["~run"]({ value: value$1 }, /* @__PURE__ */ getGlobalConfig());
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function _joinExpects(values$1, separator) {
	const list$1 = [...new Set(values$1)];
	if (list$1.length > 1) return `(${list$1.join(` ${separator} `)})`;
	return list$1[0] ?? "never";
}
var ValiError = class extends Error {
	constructor(issues) {
		super(issues[0].message);
		this.name = "ValiError";
		this.issues = issues;
	}
};
/* @__NO_SIDE_EFFECTS__ */
function regex(requirement, message$1) {
	return {
		kind: "validation",
		type: "regex",
		reference: regex,
		async: false,
		expects: `${requirement}`,
		requirement,
		message: message$1,
		"~run"(dataset, config$1) {
			if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "format", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function getFallback(schema$1, dataset, config$1) {
	return typeof schema$1.fallback === "function" ? schema$1.fallback(dataset, config$1) : schema$1.fallback;
}
/* @__NO_SIDE_EFFECTS__ */
function getDefault(schema$1, dataset, config$1) {
	return typeof schema$1.default === "function" ? schema$1.default(dataset, config$1) : schema$1.default;
}
/* @__NO_SIDE_EFFECTS__ */
function array(item, message$1) {
	return {
		kind: "schema",
		type: "array",
		reference: array,
		expects: "Array",
		async: false,
		item,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			const input = dataset.value;
			if (Array.isArray(input)) {
				dataset.typed = true;
				dataset.value = [];
				for (let key = 0; key < input.length; key++) {
					const value$1 = input[key];
					const itemDataset = this.item["~run"]({ value: value$1 }, config$1);
					if (itemDataset.issues) {
						const pathItem = {
							type: "array",
							origin: "value",
							input,
							key,
							value: value$1
						};
						for (const issue of itemDataset.issues) {
							if (issue.path) issue.path.unshift(pathItem);
							else issue.path = [pathItem];
							dataset.issues?.push(issue);
						}
						if (!dataset.issues) dataset.issues = itemDataset.issues;
						if (config$1.abortEarly) {
							dataset.typed = false;
							break;
						}
					}
					if (!itemDataset.typed) dataset.typed = false;
					dataset.value.push(itemDataset.value);
				}
			} else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function object(entries$1, message$1) {
	return {
		kind: "schema",
		type: "object",
		reference: object,
		expects: "Object",
		async: false,
		entries: entries$1,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			const input = dataset.value;
			if (input && typeof input === "object") {
				dataset.typed = true;
				dataset.value = {};
				for (const key in this.entries) {
					const valueSchema = this.entries[key];
					if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
						const value$1 = key in input ? input[key] : /* @__PURE__ */ getDefault(valueSchema);
						const valueDataset = valueSchema["~run"]({ value: value$1 }, config$1);
						if (valueDataset.issues) {
							const pathItem = {
								type: "object",
								origin: "value",
								input,
								key,
								value: value$1
							};
							for (const issue of valueDataset.issues) {
								if (issue.path) issue.path.unshift(pathItem);
								else issue.path = [pathItem];
								dataset.issues?.push(issue);
							}
							if (!dataset.issues) dataset.issues = valueDataset.issues;
							if (config$1.abortEarly) {
								dataset.typed = false;
								break;
							}
						}
						if (!valueDataset.typed) dataset.typed = false;
						dataset.value[key] = valueDataset.value;
					} else if (valueSchema.fallback !== void 0) dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
					else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
						_addIssue(this, "key", dataset, config$1, {
							input: void 0,
							expected: `"${key}"`,
							path: [{
								type: "object",
								origin: "key",
								input,
								key,
								value: input[key]
							}]
						});
						if (config$1.abortEarly) break;
					}
				}
			} else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function optional(wrapped, default_) {
	return {
		kind: "schema",
		type: "optional",
		reference: optional,
		expects: `(${wrapped.expects} | undefined)`,
		async: false,
		wrapped,
		default: default_,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (dataset.value === void 0) {
				if (this.default !== void 0) dataset.value = /* @__PURE__ */ getDefault(this, dataset, config$1);
				if (dataset.value === void 0) {
					dataset.typed = true;
					return dataset;
				}
			}
			return this.wrapped["~run"](dataset, config$1);
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function picklist(options, message$1) {
	return {
		kind: "schema",
		type: "picklist",
		reference: picklist,
		expects: /* @__PURE__ */ _joinExpects(options.map(_stringify), "|"),
		async: false,
		options,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (this.options.includes(dataset.value)) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function string(message$1) {
	return {
		kind: "schema",
		type: "string",
		reference: string,
		expects: "string",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (typeof dataset.value === "string") dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function _subIssues(datasets) {
	let issues;
	if (datasets) for (const dataset of datasets) if (issues) issues.push(...dataset.issues);
	else issues = dataset.issues;
	return issues;
}
/* @__NO_SIDE_EFFECTS__ */
function union(options, message$1) {
	return {
		kind: "schema",
		type: "union",
		reference: union,
		expects: /* @__PURE__ */ _joinExpects(options.map((option) => option.expects), "|"),
		async: false,
		options,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			let validDataset;
			let typedDatasets;
			let untypedDatasets;
			for (const schema$1 of this.options) {
				const optionDataset = schema$1["~run"]({ value: dataset.value }, config$1);
				if (optionDataset.typed) if (optionDataset.issues) if (typedDatasets) typedDatasets.push(optionDataset);
				else typedDatasets = [optionDataset];
				else {
					validDataset = optionDataset;
					break;
				}
				else if (untypedDatasets) untypedDatasets.push(optionDataset);
				else untypedDatasets = [optionDataset];
			}
			if (validDataset) return validDataset;
			if (typedDatasets) {
				if (typedDatasets.length === 1) return typedDatasets[0];
				_addIssue(this, "type", dataset, config$1, { issues: /* @__PURE__ */ _subIssues(typedDatasets) });
				dataset.typed = true;
			} else if (untypedDatasets?.length === 1) return untypedDatasets[0];
			else _addIssue(this, "type", dataset, config$1, { issues: /* @__PURE__ */ _subIssues(untypedDatasets) });
			return dataset;
		}
	};
}
function parse(schema$1, input, config$1) {
	const dataset = schema$1["~run"]({ value: input }, /* @__PURE__ */ getGlobalConfig(config$1));
	if (dataset.issues) throw new ValiError(dataset.issues);
	return dataset.value;
}
/* @__NO_SIDE_EFFECTS__ */
function pipe(...pipe$1) {
	return {
		...pipe$1[0],
		pipe: pipe$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			for (const item of pipe$1) if (item.kind !== "metadata") {
				if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
					dataset.typed = false;
					break;
				}
				if (!dataset.issues || !config$1.abortEarly && !config$1.abortPipeEarly) dataset = item["~run"](dataset, config$1);
			}
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function safeParse(schema$1, input, config$1) {
	const dataset = schema$1["~run"]({ value: input }, /* @__PURE__ */ getGlobalConfig(config$1));
	return {
		typed: dataset.typed,
		success: !dataset.issues,
		output: dataset.value,
		issues: dataset.issues
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), J = (0, import_react.createContext)(null);
function e() {
	let o = (0, import_react.useContext)(J);
	if (o === null) throw Error("No stylesmap found at any parent level. Either you forgot to pass the stylesmap to component loader or didnt wrap your component in StyleContext");
	return o;
}
function A(o) {
	let t = (0, import_react.useMemo)(() => new URL(window.location.href).origin.toString(), []), r = e(), [n] = (0, import_react.useState)(() => {
		if (o.href?.match(/^#.*/)) return "_self";
		return new URL(o.href ?? "").origin.toString() === t ? "_self" : "_blank";
	});
	return (0, import_jsx_runtime.jsx)("a", {
		className: cn(r.anchor),
		target: n,
		href: o.href,
		children: o.children
	});
}
function E(o) {
	return (0, import_jsx_runtime.jsx)("blockquote", {
		className: cn(e().blockquote),
		children: o.children
	});
}
function H(o) {
	return (0, import_jsx_runtime.jsx)("span", {
		className: cn(e().bold),
		children: o.children
	});
}
function P(o) {
	let t = e(), r = /language-(\w+)/.exec(o.className || "")?.[1];
	return (0, import_jsx_runtime.jsx)("code", {
		className: cn(t.code, r && `language-${r}`),
		children: o.children
	});
}
function h(o) {
	let t = e(), r = (0, import_react.useRef)(null), [n, s] = (0, import_react.useState)(""), { copy: l } = useClipboardText();
	async function m() {
		await l(new URL(`/#${n}`, window.location.origin).toString());
	}
	return (0, import_react.useEffect)(() => {
		if (!r.current) return;
		s((r.current.textContent ?? "").toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 30));
	}, []), (0, import_jsx_runtime.jsx)("h1", {
		className: cn(t.header, t[`header_${o.level}`]),
		children: (0, import_jsx_runtime.jsx)("button", {
			onClick: () => void m(),
			ref: r,
			id: n,
			className: cn(t.header_button),
			type: "button",
			children: o.children
		})
	});
}
function S(o) {
	return (0, import_jsx_runtime.jsx)("hr", { className: cn(e().horizontal_line) });
}
function X(o) {
	return (0, import_jsx_runtime.jsx)("img", {
		className: cn(e().image),
		alt: o.alt,
		title: o.title,
		src: o.src
	});
}
function B(o) {
	return (0, import_jsx_runtime.jsx)("span", {
		className: cn(e().italic),
		children: o.children
	});
}
function b(o) {
	let t = e();
	return (0, import_jsx_runtime.jsx)(o.type === "ordered" ? "ol" : "ul", {
		className: cn(t.list, o.type === "ordered" && t.ordered_list, o.type === "unordered" && t.unordered_list),
		children: o.children
	});
}
function q(o) {
	return (0, import_jsx_runtime.jsx)("li", {
		className: cn(e().list_item),
		children: o.children
	});
}
function M(o) {
	return (0, import_jsx_runtime.jsx)("p", {
		className: cn(e().paragraph),
		children: o.children
	});
}
function g(o) {
	return (0, import_jsx_runtime.jsx)("pre", {
		className: cn(e().preformatted),
		children: o.children
	});
}
function $(o) {
	return (0, import_jsx_runtime.jsx)("span", {
		className: cn(e().striked),
		children: o.children
	});
}
function y({ label: o, onClick: t, setOpen: r }) {
	let n = e();
	function s(l) {
		r(!1), t(l);
	}
	return (0, import_jsx_runtime.jsx)("button", {
		onClick: s,
		className: cn(n.table_action_button),
		type: "button",
		children: o
	});
}
function Lo(o) {
	let t = [];
	o.querySelectorAll("thead > tr > th").forEach((l) => {
		t.push(l.innerText.trim());
	});
	let n = [], s = o.querySelectorAll("tbody > tr");
	return s.forEach((l) => {
		let m = [];
		l.querySelectorAll("td").forEach((a, c) => {
			m.push({
				column: t[c] ?? c.toString(),
				content: a.innerText.trim()
			});
		}), n.push(m);
	}), {
		meta: {
			columns: t.length,
			rows: s.length
		},
		headings: t,
		rows: n
	};
}
function No(o) {
	return [o.headings.join(","), o.rows.map((n) => n.map((s) => s.content).join(",")).join(`
`)].join(`
`);
}
function Ao(o) {
	let t = o.headings.map((n) => `<th>${n}</th>`).join(""), r = o.rows.map((n) => {
		return `<tr>${n.map((l) => `<td>${l.content}</td>`).join("")}</tr>`;
	});
	return [
		"<table>",
		"<thead>",
		`<tr>${t}</tr>`,
		"</thead>",
		"<tbody>",
		...r,
		"</tbody>",
		"</table>"
	].join(`
`);
}
function Ho(o) {
	return [
		`|${o.headings.join("|")}|`,
		`|${o.headings.map(() => "-----").join("|")}|`,
		...o.rows.map((s) => `|${s.map((l) => l.content).join("|")}|`)
	].join(`
`);
}
function z(o) {
	let t = e(), r = (0, import_react.useRef)(null), n = (0, import_react.useRef)(null), [s, l] = (0, import_react.useState)(!1), { copy: m } = useClipboardText();
	(0, import_react.useEffect)(() => {
		let c = n.current;
		if (!c) return;
		function f() {
			l(!1);
		}
		function i() {
			l(!0);
		}
		return c.addEventListener("mouseenter", i), c.addEventListener("mouseleave", f), () => {
			c.removeEventListener("mouseenter", i), c.removeEventListener("mouseleave", f);
		};
	}, []);
	let a = (0, import_react.useCallback)((c) => {
		return async () => {
			let f = r.current;
			if (!f) return;
			let i = Lo(f), d;
			switch (c) {
				case "html":
					d = Ao(i);
					break;
				case "csv":
					d = No(i);
					break;
				case "markdown":
					d = Ho(i);
					break;
				case "json":
					d = JSON.stringify(i, null, 4);
					break;
				default: return;
			}
			await m(d);
		};
	}, [m]);
	return (0, import_jsx_runtime.jsxs)("div", {
		className: cn(t.table_container),
		children: [(0, import_jsx_runtime.jsx)("table", {
			ref: r,
			className: cn(t.table),
			children: o.children
		}), (0, import_jsx_runtime.jsxs)("details", {
			ref: n,
			className: cn(t.table_action_buttons_details),
			open: s,
			children: [
				(0, import_jsx_runtime.jsx)("summary", {
					className: cn(t.table_action_buttons_summary),
					children: "Copy"
				}),
				(0, import_jsx_runtime.jsx)(y, {
					setOpen: l,
					label: "HTML",
					onClick: a("html")
				}),
				(0, import_jsx_runtime.jsx)(y, {
					setOpen: l,
					label: "CSV",
					onClick: a("csv")
				}),
				(0, import_jsx_runtime.jsx)(y, {
					setOpen: l,
					label: "Json",
					onClick: a("json")
				}),
				(0, import_jsx_runtime.jsx)(y, {
					setOpen: l,
					label: "Markdown",
					onClick: a("markdown")
				})
			]
		})]
	});
}
function Q(o) {
	return (0, import_jsx_runtime.jsx)("thead", {
		className: cn(e().table_head),
		children: o.children
	});
}
function D(o) {
	return (0, import_jsx_runtime.jsx)("tbody", {
		className: cn(e().table_body),
		children: o.children
	});
}
function U(o) {
	return (0, import_jsx_runtime.jsx)("tr", {
		className: cn(e().table_row),
		children: o.children
	});
}
function V(o) {
	return (0, import_jsx_runtime.jsx)("th", {
		className: cn(e().table_head_cell),
		children: o.children
	});
}
function F(o) {
	return (0, import_jsx_runtime.jsx)("td", {
		className: cn(e().table_data),
		children: o.children
	});
}
var T = {
	h1: (o) => h({
		...o,
		level: 1
	}),
	h2: (o) => h({
		...o,
		level: 2
	}),
	h3: (o) => h({
		...o,
		level: 3
	}),
	h4: (o) => h({
		...o,
		level: 4
	}),
	h5: (o) => h({
		...o,
		level: 5
	}),
	h6: (o) => h({
		...o,
		level: 6
	}),
	a: A,
	em: B,
	del: $,
	strong: H,
	code: P,
	blockquote: E,
	pre: g,
	p: M,
	hr: S,
	ol: (o) => b({
		...o,
		type: "ordered"
	}),
	ul: (o) => b({
		...o,
		type: "unordered"
	}),
	li: q,
	img: X,
	table: z,
	thead: Q,
	tbody: D,
	th: V,
	tr: U,
	td: F
};
function ne(o, t = !0) {
	if (t) return {
		...T,
		...o
	};
	else return { ...o };
}
function vo({ modulesGlob: o, metadataGlob: t, root: r, virtual: n }) {
	let s = Object.keys(o), l = [], m = [], a = [], c = [], f = n === "/" || n === "" ? "" : n;
	for (let i of s) {
		let d = i.replace(`${r}/`, f).replace(".mdx", ""), N = o[i];
		l.push(d), m.push([d, (0, import_react.lazy)(() => N())]), a.push([d, N]);
		let K = t[i.replace(".mdx", ".meta.ts")];
		c.push([d, {
			__splat: d,
			...K
		}]);
	}
	return {
		keys: l,
		components: Object.fromEntries(m),
		exports: Object.fromEntries(a),
		metadata: Object.fromEntries(c)
	};
}
var w = class {
	diffKeys() {
		let o = new Set(this.keys), t = new Set(Object.keys(this.exports)), r = new Set(Object.keys(this.metadata)), n = o.symmetricDifference(t), s = o.symmetricDifference(r), l = [], m = {
			inComponentsButNotInExports: void 0,
			inComponentsButNotInMetadata: void 0,
			inExportsButNotInComponents: void 0,
			inMetadataButNotInComponents: void 0
		};
		if (n.size !== 0) m.inComponentsButNotInExports = Array.from(o.difference(t)), m.inExportsButNotInComponents = Array.from(t.difference(o)), l.push(`Exports Registry and Component Registry have ${n.size} key mismatches.
                Keys which are present in Component map but not in Exports
                	${m.inComponentsButNotInExports.join(`
	`)}
                and the keys present in Exports but not in component map are
                	${m.inExportsButNotInComponents.join(`
	`)}
                `);
		if (s.size !== 0) m.inComponentsButNotInMetadata = Array.from(o.difference(r)), m.inMetadataButNotInComponents = Array.from(s.difference(o)), l.push(`Metadata Registry and Component Registry have ${s.size} key mismatches.
                Keys which are present in Component map but not in Metadata
                	${m.inComponentsButNotInMetadata.join(`
	`)}
                and the keys present in Metadata but not in Component map are
                	${m.inMetadataButNotInComponents.join(`
	`)}
                `);
		if (l.length === 0) return null;
		return {
			diffs: m,
			error: Error(l.join(`

`))
		};
	}
	get(o, t) {
		let r = o[t];
		if (!r) throw Error(`Invalid key passed ${t.toString()} to access whatever the fuck we were extractign`);
		return r;
	}
	getComponent(o) {
		return this.get(this.components, o);
	}
	getExport(o) {
		return this.exports[o]();
	}
	getMetadata(o) {
		return this.get(this.metadata, o);
	}
};
var Bo = class extends w {
	keys;
	components;
	exports;
	metadata;
	constructor(o) {
		super();
		let t = vo(o);
		this.keys = t.keys, this.components = t.components, this.exports = t.exports, this.metadata = t.metadata;
	}
};
var Oo = class extends w {
	keys = [];
	components = {};
	exports = {};
	metadata = {};
	constructor(...o) {
		super();
		for (let t of o) this.keys.push(...t.keys), Object.assign(this.components, t.components), Object.assign(this.exports, t.exports), Object.assign(this.metadata, t.metadata);
	}
};
function Co({ source: o, styles: t, fallback: r, elements: n = T }) {
	return (0, import_jsx_runtime.jsx)(J, {
		value: t,
		children: (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: r,
			children: (0, import_jsx_runtime.jsx)(o, { components: n })
		})
	});
}
var { DiHtml5, DiMongodb } = await __vitePreload(async () => {
	const { DiHtml5: DiHtml5$1, DiMongodb: DiMongodb$1 } = await import("./di-DhUqiO6F.js");
	return {
		DiHtml5: DiHtml5$1,
		DiMongodb: DiMongodb$1
	};
}, __vite__mapDeps([0,1,2,3]));
var { FaDocker, FaSass } = await __vitePreload(async () => {
	const { FaDocker: FaDocker$1, FaSass: FaSass$1 } = await import("./fa-B-eHgm23.js");
	return {
		FaDocker: FaDocker$1,
		FaSass: FaSass$1
	};
}, __vite__mapDeps([4,1,2,3]));
var { FaPython, FaReact } = await __vitePreload(async () => {
	const { FaPython: FaPython$1, FaReact: FaReact$1 } = await import("./fa6-BBkGZIqO.js");
	return {
		FaPython: FaPython$1,
		FaReact: FaReact$1
	};
}, __vite__mapDeps([5,1,2,3]));
var { SiExpress, SiFastapi, SiJupyter, SiNumpy, SiPandas, SiTailwindcss, SiTypescript } = await __vitePreload(async () => {
	const { SiExpress: SiExpress$1, SiFastapi: SiFastapi$1, SiJupyter: SiJupyter$1, SiNumpy: SiNumpy$1, SiPandas: SiPandas$1, SiTailwindcss: SiTailwindcss$1, SiTypescript: SiTypescript$1 } = await import("./si-BzlIxbT2.js");
	return {
		SiExpress: SiExpress$1,
		SiFastapi: SiFastapi$1,
		SiJupyter: SiJupyter$1,
		SiNumpy: SiNumpy$1,
		SiPandas: SiPandas$1,
		SiTailwindcss: SiTailwindcss$1,
		SiTypescript: SiTypescript$1
	};
}, __vite__mapDeps([6,1,2,3]));
var skill_icons_default = {
	React: FaReact,
	TailwindCSS: SiTailwindcss,
	TypeScript: SiTypescript,
	Express: SiExpress,
	HTML: DiHtml5,
	SCSS: FaSass,
	Python: FaPython,
	FastApi: SiFastapi,
	Pandas: SiPandas,
	Numpy: SiNumpy,
	Jupyter: SiJupyter,
	Docker: FaDocker,
	MongoDB: DiMongodb
};
const UnknownSkillSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ regex(/^\*.*/));
function generateWorkMetadata(meta) {
	return meta;
}
function capitalize(str) {
	if (!str || str.length === 0) return "";
	const lower = str.toLowerCase();
	return lower.substring(0, 1).toUpperCase() + lower.substring(1, lower.length);
}
function title(str) {
	if (!str) return "";
	return str.split(/(?=[A-Z])|[\.\-\s_]/).map((s) => s.trim()).filter((s) => !!s).map((s) => capitalize(s.toLowerCase())).join(" ");
}
var import_compiler_runtime$7 = require_compiler_runtime();
function Links(t0) {
	const $$1 = (0, import_compiler_runtime$7.c)(6);
	const { links } = t0;
	let t1;
	let t2;
	if ($$1[0] !== links) {
		t2 = Symbol.for("react.early_return_sentinel");
		bb0: {
			const keys = Object.keys(links);
			if (keys.length === 0) {
				t2 = null;
				break bb0;
			}
			t1 = keys.map((k$1) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: links[k$1],
				target: "_blank",
				rel: "noopener",
				className: "underline decoration-2 decoration-dotted hover:decoration-solid",
				children: title(k$1)
			}) }, k$1));
		}
		$$1[0] = links;
		$$1[1] = t1;
		$$1[2] = t2;
	} else {
		t1 = $$1[1];
		t2 = $$1[2];
	}
	if (t2 !== Symbol.for("react.early_return_sentinel")) return t2;
	const linkElms = t1;
	let t3;
	if ($$1[3] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = cn("flex w-fit flex-wrap gap-2");
		$$1[3] = t3;
	} else t3 = $$1[3];
	let t4;
	if ($$1[4] !== linkElms) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: t3,
				children: linkElms
			})
		});
		$$1[4] = linkElms;
		$$1[5] = t4;
	} else t4 = $$1[5];
	return t4;
}
var import_compiler_runtime$6 = require_compiler_runtime();
function Preview(t0) {
	const $$1 = (0, import_compiler_runtime$6.c)(4);
	const { link } = t0;
	const [show, setShow] = (0, import_react.useState)(false);
	if (!link) return null;
	if (show) {
		let t1;
		if ($$1[0] !== link) {
			t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: link,
				className: "h-[90vh] w-full overflow-scroll bg-transparent",
				src: link
			});
			$$1[0] = link;
			$$1[1] = t1;
		} else t1 = $$1[1];
		return t1;
	} else {
		let t1;
		if ($$1[2] === Symbol.for("react.memo_cache_sentinel")) {
			t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("bg-[linear-gradient(to_right,var(--color-theme-primary-800),transparent_1px),linear-gradient(to_bottom,var(--color-theme-primary-800)_1px,transparent_1px)] bg-size-[14px_24px]", "shadowlg absolute inset-0 bg-theme-rimary-900 shadow-theme-primary-800 blur-[3px]") });
			$$1[2] = t1;
		} else t1 = $$1[2];
		let t2;
		if ($$1[3] === Symbol.for("react.memo_cache_sentinel")) {
			t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid h-[90vh] w-full place-content-center",
				children: [t1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative z-20 cursor-pointer bg-theme-primary/40 p-2 ring-2 ring-theme-primary-900",
					onClick: () => setShow(true),
					children: "Load Preview"
				})]
			});
			$$1[3] = t2;
		} else t2 = $$1[3];
		return t2;
	}
}
var import_compiler_runtime$5 = require_compiler_runtime();
function SectionDivider() {
	const $$1 = (0, import_compiler_runtime$5.c)(1);
	let t0;
	if ($$1[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: cn("-mx-2 mt-5 mb-5 border border-theme-primary-800/58") });
		$$1[0] = t0;
	} else t0 = $$1[0];
	return t0;
}
var mdx_module_default = {
	header: "_header_1fivp_22",
	header_button: "_header_button_1fivp_42",
	header_1: "_header_1_1fivp_61",
	header_2: "_header_2_1fivp_65",
	header_3: "_header_3_1fivp_69",
	header_4: "_header_4_1fivp_73",
	header_5: "_header_5_1fivp_77",
	header_6: "_header_6_1fivp_81",
	anchor: "_anchor_1fivp_85",
	bold: "_bold_1fivp_115",
	italic: "_italic_1fivp_120",
	striked: "_striked_1fivp_124",
	paragraph: "_paragraph_1fivp_133",
	image: "_image_1fivp_140",
	code: "_code_1fivp_144",
	preformatted: "_preformatted_1fivp_156",
	blockquote: "_blockquote_1fivp_178",
	horizontal_line: "_horizontal_line_1fivp_188",
	list: "_list_1fivp_205",
	unordered_list: "_unordered_list_1fivp_209",
	ordered_list: "_ordered_list_1fivp_213",
	table: "_table_1fivp_217",
	table_head_cell: "_table_head_cell_1fivp_227",
	table_data: "_table_data_1fivp_235",
	table_action_button: "_table_action_button_1fivp_242",
	table_container: "_table_container_1fivp_254",
	table_action_buttons_summary: "_table_action_buttons_summary_1fivp_259",
	table_action_buttons_details: "_table_action_buttons_details_1fivp_277"
};
const stylemap = {
	header: mdx_module_default.header,
	header_button: mdx_module_default.header_button,
	header_1: mdx_module_default.header_1,
	header_2: mdx_module_default.header_2,
	header_3: mdx_module_default.header_3,
	header_4: mdx_module_default.header_4,
	header_5: mdx_module_default.header_5,
	header_6: mdx_module_default.header_6,
	header_icon: mdx_module_default.header_icon,
	anchor: mdx_module_default.anchor,
	button: mdx_module_default.button,
	bold: mdx_module_default.bold,
	italic: mdx_module_default.italic,
	span: mdx_module_default.span,
	striked: mdx_module_default.striked,
	paragraph: mdx_module_default.paragraph,
	code: mdx_module_default.code,
	preformatted: mdx_module_default.preformatted,
	blockquote: mdx_module_default.blockquote,
	horizontal_line: mdx_module_default.horizontal_line,
	image: mdx_module_default.image,
	list: mdx_module_default.list,
	unordered_list: mdx_module_default.unordered_list,
	ordered_list: mdx_module_default.ordered_list,
	list_item: mdx_module_default.list_item,
	table: mdx_module_default.table,
	table_head: mdx_module_default.table_head,
	table_head_cell: mdx_module_default.table_head_cell,
	table_body: mdx_module_default.table_body,
	table_row: mdx_module_default.table_row,
	table_data: mdx_module_default.table_data,
	table_container: mdx_module_default.table_container,
	table_action_button: mdx_module_default.table_action_button,
	table_action_button_csv: mdx_module_default.table_action_button_csv,
	table_action_button_html: mdx_module_default.table_action_button_html,
	table_action_button_json: mdx_module_default.table_action_button_json,
	table_action_button_markdown: mdx_module_default.table_action_button_markdown,
	table_action_buttons_summary: mdx_module_default.table_action_buttons_summary,
	table_action_buttons_details: mdx_module_default.table_action_buttons_details
};
var import_compiler_runtime$4 = require_compiler_runtime();
function Anchor(props) {
	const $$1 = (0, import_compiler_runtime$4.c)(13);
	let t0;
	if ($$1[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = new URL(window.location.href).origin.toString();
		$$1[0] = t0;
	} else t0 = $$1[0];
	const selfOrigin = t0;
	let t1;
	if ($$1[1] !== props.href) {
		t1 = () => {
			if (props.href?.match(/^#.*/)) return "_self";
			return new URL(props.href ?? "").origin.toString() === selfOrigin ? "_self" : "_blank";
		};
		$$1[1] = props.href;
		$$1[2] = t1;
	} else t1 = $$1[2];
	const [target] = (0, import_react.useState)(t1);
	const navigate = useNavigate();
	let t2;
	if ($$1[3] !== navigate || $$1[4] !== props.href) {
		t2 = function handleSelfClick$1() {
			navigate({
				to: ".",
				search: { focus: props.href?.slice(1) }
			});
		};
		$$1[3] = navigate;
		$$1[4] = props.href;
		$$1[5] = t2;
	} else t2 = $$1[5];
	const handleSelfClick = t2;
	if (target === "_self") {
		let t3;
		if ($$1[6] === Symbol.for("react.memo_cache_sentinel")) {
			t3 = cn(stylemap.anchor, "cursor-pointer");
			$$1[6] = t3;
		} else t3 = $$1[6];
		let t4;
		if ($$1[7] !== handleSelfClick || $$1[8] !== props.children) {
			t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: t3,
				type: "button",
				onClick: handleSelfClick,
				children: props.children
			});
			$$1[7] = handleSelfClick;
			$$1[8] = props.children;
			$$1[9] = t4;
		} else t4 = $$1[9];
		return t4;
	} else {
		let t3;
		if ($$1[10] !== props.children || $$1[11] !== props.href) {
			t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: stylemap.anchor,
				href: props.href,
				target: "_blank",
				rel: "noopener",
				children: props.children
			});
			$$1[10] = props.children;
			$$1[11] = props.href;
			$$1[12] = t3;
		} else t3 = $$1[12];
		return t3;
	}
}
const Elements = ne({
	Image,
	a: Anchor,
	h1: (props) => Header({
		...props,
		level: 1
	}),
	h2: (props) => Header({
		...props,
		level: 2
	}),
	h3: (props) => Header({
		...props,
		level: 3
	}),
	h4: (props) => Header({
		...props,
		level: 4
	}),
	h5: (props) => Header({
		...props,
		level: 5
	}),
	h6: (props) => Header({
		...props,
		level: 6
	})
}, true);
var import_compiler_runtime$3 = require_compiler_runtime();
function Header(props) {
	const $$1 = (0, import_compiler_runtime$3.c)(28);
	const styles = e();
	const headerRef = (0, import_react.useRef)(null);
	const [hash, setHash] = (0, import_react.useState)("");
	const { copy } = useClipboardText();
	let t0;
	if ($$1[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = { strict: false };
		$$1[0] = t0;
	} else t0 = $$1[0];
	const { focus } = useSearch(t0);
	const router = useRouter();
	let t1;
	if ($$1[1] !== hash || $$1[2] !== router) {
		t1 = router.buildLocation({
			to: ".",
			search: { focus: hash }
		});
		$$1[1] = hash;
		$$1[2] = router;
		$$1[3] = t1;
	} else t1 = $$1[3];
	const location = t1;
	const selfLocation = `${window.origin}/#${location.href}`;
	let t2;
	let t3;
	if ($$1[4] !== focus || $$1[5] !== hash) {
		t2 = () => {
			if (focus === hash) headerRef.current?.scrollIntoView();
		};
		t3 = [focus, hash];
		$$1[4] = focus;
		$$1[5] = hash;
		$$1[6] = t2;
		$$1[7] = t3;
	} else {
		t2 = $$1[6];
		t3 = $$1[7];
	}
	(0, import_react.useEffect)(t2, t3);
	let t4;
	if ($$1[8] !== copy || $$1[9] !== selfLocation) {
		t4 = async function handleClick$1() {
			await copy(selfLocation);
		};
		$$1[8] = copy;
		$$1[9] = selfLocation;
		$$1[10] = t4;
	} else t4 = $$1[10];
	const handleClick = t4;
	let t5;
	let t6;
	if ($$1[11] === Symbol.for("react.memo_cache_sentinel")) {
		t5 = () => {
			if (!headerRef.current) return;
			setHash((headerRef.current.textContent ?? "").toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 30));
		};
		t6 = [];
		$$1[11] = t5;
		$$1[12] = t6;
	} else {
		t5 = $$1[11];
		t6 = $$1[12];
	}
	(0, import_react.useEffect)(t5, t6);
	const t7 = styles[`header_${props.level}`];
	let t8;
	if ($$1[13] !== styles.header || $$1[14] !== t7) {
		t8 = cn(styles.header, t7);
		$$1[13] = styles.header;
		$$1[14] = t7;
		$$1[15] = t8;
	} else t8 = $$1[15];
	let t9;
	if ($$1[16] !== handleClick) {
		t9 = () => void handleClick();
		$$1[16] = handleClick;
		$$1[17] = t9;
	} else t9 = $$1[17];
	let t10;
	if ($$1[18] !== styles.header_button) {
		t10 = cn(styles.header_button);
		$$1[18] = styles.header_button;
		$$1[19] = t10;
	} else t10 = $$1[19];
	let t11;
	if ($$1[20] !== hash || $$1[21] !== props.children || $$1[22] !== t10 || $$1[23] !== t9) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: t9,
			ref: headerRef,
			id: hash,
			className: t10,
			type: "button",
			children: props.children
		});
		$$1[20] = hash;
		$$1[21] = props.children;
		$$1[22] = t10;
		$$1[23] = t9;
		$$1[24] = t11;
	} else t11 = $$1[24];
	let t12;
	if ($$1[25] !== t11 || $$1[26] !== t8) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: t8,
			children: t11
		});
		$$1[25] = t11;
		$$1[26] = t8;
		$$1[27] = t12;
	} else t12 = $$1[27];
	return t12;
}
var import_compiler_runtime$2 = require_compiler_runtime();
function Image(t0) {
	const $$1 = (0, import_compiler_runtime$2.c)(10);
	const { alt, src, widthRem: t1, center, twStyles } = t0;
	const widthRem = t1 === void 0 ? 30 : t1;
	const t2 = center && "mx-auto";
	let t3;
	if ($$1[0] !== t2 || $$1[1] !== twStyles) {
		t3 = cn("w-full md:w-(--img-md-width)", t2, twStyles);
		$$1[0] = t2;
		$$1[1] = twStyles;
		$$1[2] = t3;
	} else t3 = $$1[2];
	const t4 = `min(100%,${widthRem}rem)`;
	let t5;
	if ($$1[3] !== t4) {
		t5 = { "--img-md-width": t4 };
		$$1[3] = t4;
		$$1[4] = t5;
	} else t5 = $$1[4];
	const t6 = t5;
	let t7;
	if ($$1[5] !== alt || $$1[6] !== src || $$1[7] !== t3 || $$1[8] !== t6) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			alt,
			src,
			className: t3,
			style: t6
		});
		$$1[5] = alt;
		$$1[6] = src;
		$$1[7] = t3;
		$$1[8] = t6;
		$$1[9] = t7;
	} else t7 = $$1[9];
	return t7;
}
var import_compiler_runtime$1 = require_compiler_runtime();
function Fallback() {
	const $$1 = (0, import_compiler_runtime$1.c)(1);
	let t0;
	if ($$1[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Fetching..." });
		$$1[0] = t0;
	} else t0 = $$1[0];
	return t0;
}
function TextSection(t0) {
	const $$1 = (0, import_compiler_runtime$1.c)(17);
	const { component } = t0;
	const [open, setOpen] = (0, import_react.useState)(false);
	const t1 = open ? "h-full" : "h-[90vh]";
	let t2;
	if ($$1[0] !== t1) {
		t2 = cn("overflow-clip", t1);
		$$1[0] = t1;
		$$1[1] = t2;
	} else t2 = $$1[1];
	let t3;
	if ($$1[2] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fallback, {});
		$$1[2] = t3;
	} else t3 = $$1[2];
	let t4;
	if ($$1[3] !== component) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Co, {
			source: component,
			styles: stylemap,
			elements: Elements,
			fallback: t3
		});
		$$1[3] = component;
		$$1[4] = t4;
	} else t4 = $$1[4];
	let t5;
	if ($$1[5] !== t2 || $$1[6] !== t4) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: t2,
			children: t4
		});
		$$1[5] = t2;
		$$1[6] = t4;
		$$1[7] = t5;
	} else t5 = $$1[7];
	const t6 = !open;
	let t7;
	if ($$1[8] === Symbol.for("react.memo_cache_sentinel")) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setOpen(true),
			className: "absolute right-0 bottom-0 left-0 -mx-2 -mb-4 grid cursor-pointer border-theme-primary-900 border-t-2 bg-theme-primary/70 px-2 pt-4 pb-3 backdrop-blur",
			children: "Expand"
		});
		$$1[8] = t7;
	} else t7 = $$1[8];
	let t8;
	if ($$1[9] !== t6) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
			show: t6,
			children: t7
		});
		$$1[9] = t6;
		$$1[10] = t8;
	} else t8 = $$1[10];
	let t9;
	if ($$1[11] !== t5 || $$1[12] !== t8) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [t5, t8]
		});
		$$1[11] = t5;
		$$1[12] = t8;
		$$1[13] = t9;
	} else t9 = $$1[13];
	let t10;
	if ($$1[14] === Symbol.for("react.memo_cache_sentinel")) {
		t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionDivider, {});
		$$1[14] = t10;
	} else t10 = $$1[14];
	let t11;
	if ($$1[15] !== t9) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t9, t10] });
		$$1[15] = t9;
		$$1[16] = t11;
	} else t11 = $$1[16];
	return t11;
}
var import_compiler_runtime = require_compiler_runtime();
function Work(t0) {
	const $$1 = (0, import_compiler_runtime.c)(15);
	const { component, meta } = t0;
	let t1;
	if ($$1[0] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = cn("mx-auto border-2 border-theme-primary-900 p-2");
		$$1[0] = t1;
	} else t1 = $$1[0];
	let t2;
	if ($$1[1] !== meta.title) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-5xl",
			children: meta.title
		});
		$$1[1] = meta.title;
		$$1[2] = t2;
	} else t2 = $$1[2];
	let t3;
	if ($$1[3] !== meta.links) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Links, { links: meta.links });
		$$1[3] = meta.links;
		$$1[4] = t3;
	} else t3 = $$1[4];
	let t4;
	if ($$1[5] === Symbol.for("react.memo_cache_sentinel")) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionDivider, {});
		$$1[5] = t4;
	} else t4 = $$1[5];
	let t5;
	if ($$1[6] !== component) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextSection, { component });
		$$1[6] = component;
		$$1[7] = t5;
	} else t5 = $$1[7];
	let t6;
	if ($$1[8] !== meta.links.website) {
		t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, { link: meta.links.website });
		$$1[8] = meta.links.website;
		$$1[9] = t6;
	} else t6 = $$1[9];
	let t7;
	if ($$1[10] !== t2 || $$1[11] !== t3 || $$1[12] !== t5 || $$1[13] !== t6) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: t1,
			children: [
				t2,
				t3,
				t4,
				t5,
				t6
			]
		});
		$$1[10] = t2;
		$$1[11] = t3;
		$$1[12] = t5;
		$$1[13] = t6;
		$$1[14] = t7;
	} else t7 = $$1[14];
	return t7;
}
var jassm_meta_default = generateWorkMetadata({
	id: "jassm",
	description: "",
	links: { github: "https://github.com/d1vij/jassm" },
	stack: [],
	title: "JASSM"
});
const librariesRegistry = new Bo({
	modulesGlob: { "/src/assets/mdx/libraries/jassm.mdx": () => __vitePreload(() => import("./jassm-q_24-Q5E.js"), __vite__mapDeps([7,8,3])) },
	metadataGlob: { "/src/assets/mdx/libraries/jassm.meta.ts": jassm_meta_default },
	root: "/src/assets/mdx/libraries",
	virtual: ""
});
var librariesRegistry_default = librariesRegistry;
librariesRegistry.keys;
const librariesOrder = librariesRegistry.keys;
var bad_ui_battles_meta_default = generateWorkMetadata({
	id: "bad-ui-battles",
	title: "Bad UI Battles",
	description: "A",
	stack: [
		"React",
		"TailwindCSS",
		"TypeScript",
		"SCSS"
	],
	links: {
		github: "https://github.com/d1vij/bad-ui-battles",
		website: "https://d1vij.github.io/bad-ui-battles/"
	}
});
var browsersh_meta_default = generateWorkMetadata({
	id: "browsersh",
	title: "BrowserSH",
	description: "",
	stack: [
		"TypeScript",
		"HTML",
		"SCSS"
	],
	links: {
		github: "https://github.com/d1vij/BrowserSH",
		website: "https://d1vij.github.io/BrowserSH/"
	}
});
var election_software_meta_default = generateWorkMetadata({
	id: "election-software",
	title: "Election Software",
	description: "A fullstack application for secure vote ",
	stack: [
		"FastApi",
		"Express",
		"TypeScript",
		"Python",
		"*Matplotlib",
		"*Seaborn",
		"Docker",
		"MongoDB"
	],
	links: { github: "https://github.com/d1vij/electionsoftware" }
});
var portfolio_meta_default = generateWorkMetadata({
	id: "portfolio-website",
	title: "Portfolio Website",
	description: "",
	stack: [
		"React",
		"TailwindCSS",
		"TypeScript",
		"*TanstackRouter"
	],
	links: { github: "https://github.com/d1vij/d1vij/tree/website" }
});
var spotify_data_analysis_meta_default = generateWorkMetadata({
	id: "spotify-data-analysis",
	description: "A quantitative analysis of spotify listening history using pandas and matplotlib for data visualizations",
	title: "Spotify Data Analysis",
	links: {
		github: "http://github.com/d1vij/spotify-data-analysis",
		website: "https://d1vij.github.io/spotify-data-analysis/"
	},
	stack: [
		"Python",
		"Pandas",
		"Numpy",
		"Jupyter",
		"*Matplotlib",
		"*Seaborn"
	]
});
const projectsRegistry = new Bo({
	modulesGlob: {
		"/src/assets/mdx/projects/bad-ui-battles.mdx": () => __vitePreload(() => import("./bad-ui-battles-Dr-L65Zd.js"), __vite__mapDeps([9,8,3])),
		"/src/assets/mdx/projects/browsersh.mdx": () => __vitePreload(() => import("./browsersh-DQFtVoMm.js"), __vite__mapDeps([10,8,3])),
		"/src/assets/mdx/projects/election-software.mdx": () => __vitePreload(() => import("./election-software-CN2mFAI6.js"), __vite__mapDeps([11,8,3])),
		"/src/assets/mdx/projects/portfolio.mdx": () => __vitePreload(() => import("./portfolio-B_DlVIhp.js"), __vite__mapDeps([12,8,3])),
		"/src/assets/mdx/projects/spotify-data-analysis.mdx": () => __vitePreload(() => import("./spotify-data-analysis-DIZHeZBc.js"), __vite__mapDeps([13,8,3]))
	},
	metadataGlob: {
		"/src/assets/mdx/projects/bad-ui-battles.meta.ts": bad_ui_battles_meta_default,
		"/src/assets/mdx/projects/browsersh.meta.ts": browsersh_meta_default,
		"/src/assets/mdx/projects/election-software.meta.ts": election_software_meta_default,
		"/src/assets/mdx/projects/portfolio.meta.ts": portfolio_meta_default,
		"/src/assets/mdx/projects/spotify-data-analysis.meta.ts": spotify_data_analysis_meta_default
	},
	root: "/src/assets/mdx/projects",
	virtual: ""
});
const projectOrder = parse(/* @__PURE__ */ array(/* @__PURE__ */ picklist(projectsRegistry.keys)), [
	"spotify-data-analysis",
	"browsersh",
	"bad-ui-battles",
	"election-software",
	"portfolio"
]);
console.log(projectsRegistry.components);
export { useSearch as _, librariesRegistry_default as a, skill_icons_default as c, optional as d, parse as f, useNavigate as g, string as h, librariesRegistry as i, Oo as l, safeParse as m, projectsRegistry as n, Work as o, picklist as p, librariesOrder as r, UnknownSkillSchema as s, projectOrder as t, object as u, useMatch as v, matchContext as y };
