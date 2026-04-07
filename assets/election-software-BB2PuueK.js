import{n as e}from"./chunk-B3K2TuZy.js";import{t}from"./jsx-runtime-1LQxQxZH.js";var n=e(t());function r(e){let t={a:`a`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Image:r,InsiteLink:i,Underline:o}=t;return r||a(`Image`,!0),i||a(`InsiteLink`,!0),o||a(`Underline`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Created a lightweight, asynchronous voting application using FastAPI with a MongoDB backend and deployed within a Docker container for intra-school council elections.
Supported 20+ concurrent voters with total voter count reaching 1000+ votes, and had `,(0,n.jsx)(t.strong,{children:`no discrepency`}),` with the head count.`]}),`
`,(0,n.jsx)(t.h2,{children:`Services`}),`
`,(0,n.jsx)(t.p,{children:`The project consisted of two separate services`}),`
`,(0,n.jsx)(t.h3,{children:`User Registerer`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Used for setting up Posts and Candidates`}),`
`,(0,n.jsx)(t.li,{children:`Used ExpressJS for the backend API along with Multer for file upload handling`}),`
`]}),`
`,(0,n.jsx)(t.h3,{children:`Election Runner`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Handled the main election voting process.`}),`
`,(0,n.jsx)(t.li,{children:`Consisted of password based authentication and session wise tracking for secure voting process.`}),`
`,(0,n.jsxs)(t.li,{children:[`Stored vote-session objects in MongoDB which were later analysed and converted
into a result report (see `,(0,n.jsx)(i,{to:`/work/$id`,slug:{id:`elections-vote-analysis`},children:`Elections Vote Analysis `}),`).`]}),`
`]}),`
`,(0,n.jsx)(o,{children:`Voting Interface`}),`
`,(0,n.jsx)(r,{src:`https://raw.githubusercontent.com/d1vij/electionsoftware/refs/heads/main/voteapp.png`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(o,{children:`Instant Result display powered by:`}),`
`,(0,n.jsx)(t.a,{href:`https://matplotlib.org`,children:`Matplotlib`})]}),`
`,(0,n.jsx)(r,{src:`https://raw.githubusercontent.com/d1vij/electionsoftware/refs/heads/main/results.png`})]})}function i(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};