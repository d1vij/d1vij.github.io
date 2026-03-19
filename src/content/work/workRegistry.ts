import { CoalescedRegistry } from "@d1vij/jassm";
import * as v from "valibot";
import { librariesRegistry } from "./librariesRegistry";
import { projectsRegistry } from "./projectRegistry";

export const workRegistry = new CoalescedRegistry(
    librariesRegistry,
    projectsRegistry,
);

export const WorkRegistrySchema = v.picklist(workRegistry.keys);
