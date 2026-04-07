import{n as e}from"./chunk-B3K2TuZy.js";import{t}from"./jsx-runtime-1LQxQxZH.js";var n=e(t());function r(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,del:`del`,em:`em`,h2:`h2`,h3:`h3`,img:`img`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:[`
`,(0,n.jsx)(t.p,{children:`MDX has (almost) all features of normal markdown`}),`
`,(0,n.jsx)(t.p,{children:`Asdasd`}),`
`,(0,n.jsxs)(t.blockquote,{children:[`
`,(0,n.jsx)(t.p,{children:`asd
asd
asd`}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:`p
*asd*
`})}),`
`,(0,n.jsx)(t.p,{children:`asd`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Asdasd`}),`
`]}),`
`,(0,n.jsx)(t.h2,{children:`Headers`}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:`# Header 1
## Header 2
...
###### Header 6
`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Headers when clicked copy the URL to directly focus onto them`}),`
`,(0,n.jsx)(t.li,{children:`Only the first header of the file should be a Header-1 (single hash)`}),`
`]}),`
`,(0,n.jsx)(t.h2,{children:`Text formatting`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Bold`}),` `,(0,n.jsx)(t.code,{children:`**Bold**`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:`italics`}),` `,(0,n.jsx)(t.code,{children:`_italics_`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.del,{children:`striked`}),` `,(0,n.jsx)(t.code,{children:`~striked~`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`inline code`}),` `,(0,n.jsx)(t.code,{children:"`inline`"})]}),`
`,(0,n.jsx)(t.li,{children:`Code blocks`}),`
`]}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"```<language>\n<code>\n```\n"})}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-py`,children:`for i in range(10):
    print("hello")
`})}),`
`,(0,n.jsxs)(t.ol,{start:`6`,children:[`
`,(0,n.jsx)(t.li,{children:`Tables - normally`}),`
`]}),`
`,(0,n.jsx)(t.h2,{children:`Embedding images`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Save images in `,(0,n.jsx)(t.code,{children:`/public/images`}),` folder and reference them here using `,(0,n.jsx)(t.code,{children:`/images/<image name>`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Or alternatively use the `,(0,n.jsx)(t.code,{children:`<Image/>`}),` component (defined `,(0,n.jsx)(t.a,{href:`https://github.com/thesmallbits/thesmallbits.github.io/blob/main/src/components/MDXImage/Image.tsx`,children:`here`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[`DO NOT directly use the `,(0,n.jsx)(t.code,{children:`<img/>`}),` tag to embed images since they wont get styled automatically`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`![BFOP](/images/BFOP.png)`})}),`
`,(0,n.jsx)(t.p,{children:`Preview`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:`/images/BFOP.png`,alt:`BFOP`})}),`
`,(0,n.jsx)(t.h2,{children:`Embedding React components`}),`
`,(0,n.jsx)(t.p,{children:`Since we are using MDX we can import and export any component to and from the .mdx files`}),`
`,(0,n.jsx)(t.p,{children:`There are two ways to go about when including custom components`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Direct imports`}),`
`]}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-tsx`,children:`import MyComponent from "@/components/MyComponent";

<MyComponent />;
`})}),`
`,(0,n.jsx)(t.p,{children:`Example`}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-tsx`,children:`import Sample from "@/components/Sample"
<Sample text={"this is it being directly imported into the mdx file"/> <Sample text={"this is it being directly imported into the mdx file"/>
`})}),`
`,(0,n.jsxs)(t.ol,{start:`2`,children:[`
`,(0,n.jsxs)(t.li,{children:[`We define it globally by adding it to the global `,(0,n.jsx)(t.code,{children:`Elements`}),` map object`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Goto `,(0,n.jsx)(t.em,{children:`/src/content/registry.ts`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Import and add the element component to the object passed to `,(0,n.jsx)(t.code,{children:`generateElementsFrom`}),` function, and then directly reference that component here`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-tsx`,children:`import { generateElementsFrom } from "@d1vij/jassm";
import Sample from "@/components/Sample";

export const Elements = generateElementsFrom(
  {
    Sample, // this will automatically be injecting in all mdx files
  },
  true,
);
`})}),`
`,(0,n.jsxs)(t.blockquote,{children:[`
`,(0,n.jsxs)(t.p,{children:[`the build step `,(0,n.jsx)(t.strong,{children:`WONT FAIL`}),` if the compiler is unable to resolve the component at build time, instead it would fail at runtime`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{children:`Embedding js`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`You can also embedded js expression into mdx by wrapping the expression in `,(0,n.jsx)(t.code,{children:`{}`})]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Example`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`{Date.now()}`}),` => `,Date.now()]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Since compiled mdx is just a react component, you can import-export anything from it`}),`
`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Importing from somwehre`}),`
`]}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-ts`,children:`import {value} from "@/components/Sample"

Imported value is {value}
`})}),`
`,(0,n.jsxs)(t.ol,{start:`2`,children:[`
`,(0,n.jsx)(t.li,{children:`Exporting something from the mdx file into a mdx file`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Stuff like components, variables etc can be exported from mdx files`}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{})}),`
`,(0,n.jsx)(`br`,{}),`
`,(0,n.jsxs)(t.ol,{start:`2`,children:[`
`,(0,n.jsx)(t.li,{children:`Exporting something from mdx file into React files`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Components and variables can be imported from mdx files in two ways`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Direct import from mdx file`}),`
`]}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-ts`,children:`import {
  valueFromMDX,
  ComponentFromMdx,
} from "@/assets/mdx/blogs/export_sample.mdx";

console.log(valueFromMDX);
`})}),`
`,(0,n.jsxs)(t.ol,{start:`2`,children:[`
`,(0,n.jsxs)(t.li,{children:[`Using the `,(0,n.jsx)(t.code,{children:`registry.getExport()`}),` method if the file is registered in in the registry (see `,(0,n.jsx)(t.a,{href:`#working-with-registry`,children:`working with registry`}),`)`]}),`
`]}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-ts`,children:`import {registry} from "@/content/registry";
const exports =
`})}),`
`,(0,n.jsx)(t.h2,{children:`Working with registry`}),`
`,(0,n.jsx)(t.p,{children:`The "registry" is at its core a mapping of virtual paths to real path of .mdx files`}),`
`,(0,n.jsxs)(t.h3,{children:[`0. Create a `,(0,n.jsx)(t.code,{children:`module`}),` object from the source directory`]}),`
`,(0,n.jsxs)(t.p,{children:[`The object returned by `,(0,n.jsx)(t.code,{children:`import.meta.glob`}),` consists of all the files matching a specific pattern.`]}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-ts`,children:`const modules = import.meta.glob("/src/assets/mdx/**/*.mdx");
`})}),`
`,(0,n.jsx)(t.h3,{children:`1. Generating a registry`}),`
`,(0,n.jsx)(t.p,{children:`the Registry class constructor takes in the following things`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`The `,(0,n.jsx)(t.code,{children:`module`}),` object returned by import.meta.glob`]}),`
`,(0,n.jsxs)(t.li,{children:[`The `,(0,n.jsx)(t.code,{children:`source`}),` folder`]}),`
`,(0,n.jsxs)(t.li,{children:[`The virtual path (`,(0,n.jsx)(t.code,{children:`mountOn`}),`) on which the files will be mounted`]}),`
`,(0,n.jsxs)(t.li,{children:[`A `,(0,n.jsx)(t.code,{children:`records`}),` object containing map between virtual name and the path of target file relative to the `,(0,n.jsx)(t.code,{children:`source`}),` folder`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`For example, if the directory structure is like this`}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:`src/
├── assets
│\xA0\xA0 └── mdx
│\xA0\xA0     ├── blogs
│\xA0\xA0     │\xA0\xA0 ├── chemistry
│\xA0\xA0     │\xA0\xA0 │\xA0\xA0 └── BeckmanRearrangement.mdx
│\xA0\xA0     │\xA0\xA0 │\xA0\xA0 └── BeckmanRearrangement.mdx
│\xA0\xA0     │\xA0\xA0 ├── ├── physical
│\xA0\xA0     │\xA0\xA0 │\xA0\xA0 │\xA0\xA0└── Electrochemistry.mdx
│\xA0\xA0     │\xA0\xA0 ├── maths
│\xA0\xA0     │\xA0\xA0 │\xA0\xA0 └── IndefiniteIntegration.mdx
│\xA0\xA0     │\xA0\xA0 ├── physics
│\xA0\xA0     │\xA0\xA0 │\xA0\xA0 └── Electrostatics.mdx
│\xA0\xA0     │\xA0\xA0 └── info.mdx
`})}),`
`,(0,n.jsx)(t.p,{children:`Then the process of creating registries would be`}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-ts`,children:`import { Registry } from "@d1vij/jassm";

// glob all the mdx files inside the /src/assets/mdx folder and its decendents
const modules = import.meta.glob("/src/assets/mdx/**/*.mdx");

const chemistry = new Registry({
  modules,
  source: "/chemistry", // root folder becomes the /src/assets/mdx/chemistry folder
  mountOn: "/blogs/chemistry", // All records will be prefixed by this path
  records: {
    "/beckmann-rearrangement": "/BeckmanRearrangement.mdx",
    "/electrochemistry": "/physical/Electrochemistry.mdx", // /src/assets/mdx/chemistry/physical/electrochemistry
  },
});

// similarly create maths and physics registries

// create a CoalescedRegistry which is a union of all the registries
const registry = new CoalescedRegistry(chemistry, maths, physics);
`})}),`
`,(0,n.jsx)(t.h3,{children:`2. Accessing components and Exports`}),`
`,(0,n.jsx)(t.p,{children:`Once a registry is defined, it can be exported to any other file or component and its corresponding MDX component and exports can be used via`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`.getComponent(vpath)`}),` method - Returns the lazy loaded component from the virtual path (virtual path is `,(0,n.jsx)(t.code,{children:`mountOn`}),` + `,(0,n.jsx)(t.code,{children:`/`}),` + `,(0,n.jsx)(t.code,{children:`virtual name`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`.getExport(vpath)`}),` method - Returns the exported module object the virtual path (virtual path is `,(0,n.jsx)(t.code,{children:`mountOn`}),` + `,(0,n.jsx)(t.code,{children:`/`}),` + `,(0,n.jsx)(t.code,{children:`virtual name`}),`)`]}),`
`]}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-tsx`,children:`// import the component loader
import { MDXFromComponent } from "@d1vij/jassm";
// import the Elements
import { Elements } from "@/elements";
// import the stylemap
import { stylemap } from "@/stylemap";
// import the registry
import { registry } from "@/registry";
// use this Component wrapped inside a Suspense to provider better UX
function Foo() {
  // using the \`use()\` hook to resolve the import promise
  const exports = use(registry.getExport("/blogs/chemistry/electrochemistry"));
  const Component = exports.default;
  // or else
  const Component = registry.getComponent("/blogs/chemistry/electrochemistry");

  return (
    <div>
      {/* you should validate the exported object at runtime via some validation lib like zod or valibot */}
      {exports.meta.title}
      <MDXFromComponent
        source={Component}
        elements={Elements}
        styles={stylemap}
      />
    </div>
  );
}
`})}),`
`,(0,n.jsx)(t.h2,{children:`Blog Metadata`}),`
`,(0,n.jsxs)(t.p,{children:[`Each blog `,(0,n.jsx)(t.strong,{children:`must`}),` export a metadata object. The schema for which is present at `,(0,n.jsx)(t.code,{children:`/src/schemas/BlogExportSchema.ts`})]}),`
`,(0,n.jsx)(t.p,{children:`Example`}),`
`,(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:`language-ts`,children:`export const meta = {
  author: "Divij Verma",
  created_at: "26-02-2026",
  modified_at: "27-02-2026",
  tags: ["tutorial", "style guide", "mdx"],
};
`})}),`
`,(0,n.jsx)(t.p,{children:`If the exported meta is not upto the schema, runtime error will be raised`})]})}function i(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};