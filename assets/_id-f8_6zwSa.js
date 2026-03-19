const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_id-C3J_dGyp.js","assets/dist-DubO62zS.js","assets/jsx-runtime-BmgZPGeN.js","assets/chunk-SmwYcJT_.js","assets/react-Dp0uNt7U.js","assets/projectRegistry-C9x_LS4C.js","assets/projectRegistry-BxWIbDUQ.css","assets/createLucideIcon-CWqp94-Z.js"])))=>i.map(i=>d[i]);
import { n as __toESM } from "./chunk-SmwYcJT_.js";
import { t as require_react } from "./react-Dp0uNt7U.js";
import { O as invariant, R as isModuleNotFoundError, S as trimPathRight, U as reactUse, a as __vitePreload, s as Link, u as useRouter, v as joinPaths, x as trimPathLeft } from "./dist-DubO62zS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BmgZPGeN.js";
import { _ as useSearch, d as optional, f as parse, g as useNavigate, h as string, i as librariesRegistry, l as Oo, n as projectsRegistry, p as picklist, u as object, v as useMatch } from "./projectRegistry-C9x_LS4C.js";
function isNotFound(obj) {
	return !!obj?.isNotFound;
}
function redirect(opts) {
	opts.statusCode = opts.statusCode || opts.code || 307;
	if (!opts._builtLocation && !opts.reloadDocument && typeof opts.href === "string") try {
		new URL(opts.href);
		opts.reloadDocument = true;
	} catch {}
	const headers = new Headers(opts.headers);
	if (opts.href && headers.get("Location") === null) headers.set("Location", opts.href);
	const response = new Response(null, {
		status: opts.statusCode,
		headers
	});
	response.options = opts;
	if (opts.throw) throw response;
	return response;
}
function isRedirect(obj) {
	return obj instanceof Response && !!obj.options;
}
var BaseRoute = class {
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
	constructor(options) {
		this.init = (opts) => {
			this.originalIndex = opts.originalIndex;
			const options$1 = this.options;
			const isRoot = !options$1?.path && !options$1?.id;
			this.parentRoute = this.options.getParentRoute?.();
			if (isRoot) this._path = "__root__";
			else if (!this.parentRoute) invariant(false, `Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.`);
			let path = isRoot ? "__root__" : options$1?.path;
			if (path && path !== "/") path = trimPathLeft(path);
			const customId = options$1?.id || path;
			let id = isRoot ? "__root__" : joinPaths([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, customId]);
			if (path === "__root__") path = "/";
			if (id !== "__root__") id = joinPaths(["/", id]);
			const fullPath = id === "__root__" ? "/" : joinPaths([this.parentRoute.fullPath, path]);
			this._path = path;
			this._id = id;
			this._fullPath = fullPath;
			this._to = trimPathRight(fullPath);
		};
		this.addChildren = (children) => {
			return this._addFileChildren(children);
		};
		this._addFileChildren = (children) => {
			if (Array.isArray(children)) this.children = children;
			if (typeof children === "object" && children !== null) this.children = Object.values(children);
			return this;
		};
		this._addFileTypes = () => {
			return this;
		};
		this.updateLoader = (options$1) => {
			Object.assign(this.options, options$1);
			return this;
		};
		this.update = (options$1) => {
			Object.assign(this.options, options$1);
			return this;
		};
		this.lazy = (lazyFn) => {
			this.lazyFn = lazyFn;
			return this;
		};
		this.redirect = (opts) => redirect({
			from: this.fullPath,
			...opts
		});
		this.options = options || {};
		this.isRoot = !options?.getParentRoute;
		if (options?.id && options?.path) throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
	}
};
var BaseRootRoute = class extends BaseRoute {
	constructor(options) {
		super(options);
	}
};
function useLoaderData(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		structuralSharing: opts.structuralSharing,
		select: (s) => {
			return opts.select ? opts.select(s.loaderData) : s.loaderData;
		}
	});
}
function useLoaderDeps(opts) {
	const { select, ...rest } = opts;
	return useMatch({
		...rest,
		select: (s) => {
			return select ? select(s.loaderDeps) : s.loaderDeps;
		}
	});
}
function useParams(opts) {
	return useMatch({
		from: opts.from,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		strict: opts.strict,
		select: (match) => {
			const params = opts.strict === false ? match.params : match._strictParams;
			return opts.select ? opts.select(params) : params;
		}
	});
}
function useRouteContext(opts) {
	return useMatch({
		...opts,
		select: (match) => opts.select ? opts.select(match.context) : match.context
	});
}
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var Route$1 = class extends BaseRoute {
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				select: opts?.select,
				from: this.id,
				structuralSharing: opts?.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
		this.$$typeof = Symbol.for("react.memo");
	}
};
function createRoute(options) {
	return new Route$1(options);
}
var RootRoute = class extends BaseRootRoute {
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				select: opts?.select,
				from: this.id,
				structuralSharing: opts?.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
		this.$$typeof = Symbol.for("react.memo");
	}
};
function createRootRoute(options) {
	return new RootRoute(options);
}
function createFileRoute(path) {
	if (typeof path === "object") return new FileRoute(path, { silent: true }).createRoute(path);
	return new FileRoute(path, { silent: true }).createRoute;
}
var FileRoute = class {
	constructor(path, _opts) {
		this.path = path;
		this.createRoute = (options) => {
			const route = createRoute(options);
			route.isRoot = false;
			return route;
		};
		this.silent = _opts?.silent;
	}
};
var LazyRoute = class {
	constructor(opts) {
		this.useMatch = (opts$1) => {
			return useMatch({
				select: opts$1?.select,
				from: this.options.id,
				structuralSharing: opts$1?.structuralSharing
			});
		};
		this.useRouteContext = (opts$1) => {
			return useRouteContext({
				...opts$1,
				from: this.options.id
			});
		};
		this.useSearch = (opts$1) => {
			return useSearch({
				select: opts$1?.select,
				structuralSharing: opts$1?.structuralSharing,
				from: this.options.id
			});
		};
		this.useParams = (opts$1) => {
			return useParams({
				select: opts$1?.select,
				structuralSharing: opts$1?.structuralSharing,
				from: this.options.id
			});
		};
		this.useLoaderDeps = (opts$1) => {
			return useLoaderDeps({
				...opts$1,
				from: this.options.id
			});
		};
		this.useLoaderData = (opts$1) => {
			return useLoaderData({
				...opts$1,
				from: this.options.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: useRouter().routesById[this.options.id].fullPath });
		};
		this.options = opts;
		this.$$typeof = Symbol.for("react.memo");
	}
};
function createLazyFileRoute(id) {
	if (typeof id === "object") return new LazyRoute(id);
	return (opts) => new LazyRoute({
		id,
		...opts
	});
}
function lazyRouteComponent(importer, exportName) {
	let loadPromise;
	let comp;
	let error;
	let reload;
	const load = () => {
		if (!loadPromise) loadPromise = importer().then((res) => {
			loadPromise = void 0;
			comp = res[exportName ?? "default"];
		}).catch((err) => {
			error = err;
			if (isModuleNotFoundError(error)) {
				if (error instanceof Error && typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
					const storageKey = `tanstack_router_reload:${error.message}`;
					if (!sessionStorage.getItem(storageKey)) {
						sessionStorage.setItem(storageKey, "1");
						reload = true;
					}
				}
			}
		});
		return loadPromise;
	};
	const lazyComp = function Lazy(props) {
		if (reload) {
			window.location.reload();
			throw new Promise(() => {});
		}
		if (error) throw error;
		if (!comp) if (reactUse) reactUse(load());
		else throw load();
		return import_react.createElement(comp, props);
	};
	lazyComp.preload = load;
	return lazyComp;
}
const workRegistry = new Oo(librariesRegistry, projectsRegistry);
const WorkRegistrySchema = picklist(workRegistry.keys);
var $$splitComponentImporter = () => __vitePreload(() => import("./_id-C3J_dGyp.js"), __vite__mapDeps([0,1,2,3,4,5,6,7]));
const Route = createFileRoute("/work/$id")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch(s) {
		return parse(object({ focus: optional(string()) }), s);
	},
	params: { parse: ({ id }) => ({ id: parse(WorkRegistrySchema, id) }) },
	loader: async ({ params: { id } }) => {
		return {
			component: workRegistry.getComponent(id),
			meta: workRegistry.getMetadata(id)
		};
	}
});
export { createRootRoute as a, isNotFound as c, createLazyFileRoute as i, lazyRouteComponent as n, isRedirect as o, createFileRoute as r, redirect as s, Route as t };
