import z from "zod";
import { ProjectRegistrySchema } from "./projectRegistry";

const schema = z.array(ProjectRegistrySchema);
export default schema.parse([
    "spotify-data-analysis",
    "browsersh",
    "bad-ui-battles",
    "election-software",
    "portfolio",
]);
