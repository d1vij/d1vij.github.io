import { n as __toESM } from "./chunk-SmwYcJT_.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BmgZPGeN.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
export { MDXContent as default };
