export interface Config {
    // type of history to use, hash based or normal url based
    // choose hash if deploying on static site hosters like github pages
    HISTORY_TYPE: "hash" | undefined;
}

const config: Config = {
    HISTORY_TYPE: "hash",
} as const;

export default config;
