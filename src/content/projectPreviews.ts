import * as v from "valibot";
import { ProjectRegistrySchema } from "./projectRegistry";

const schema = v.array(ProjectRegistrySchema);
export default v.parse(schema, [
    "spotify-data-analysis",
    "browsersh",
    "bad-ui-battles",
    "election-software",
    "portfolio",
]);
