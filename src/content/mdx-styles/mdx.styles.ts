import type { StyleClassesMap } from "@d1vij/jassm";
import styles from "./mdx.module.css";
/**
 * Map up the internal classes to stylesheet classes
 */
export const stylemap: StyleClassesMap = {
    header: styles.header,
    header_button: styles.header_button,
    header_1: styles.header_1,
    header_2: styles.header_2,
    header_3: styles.header_3,
    header_4: styles.header_4,
    header_5: styles.header_5,
    header_6: styles.header_6,
    header_icon: styles.header_icon,
    anchor: styles.anchor,
    button: styles.button,
    bold: styles.bold,
    italic: styles.italic,
    span: styles.span,
    striked: styles.striked,
    paragraph: styles.paragraph,
    code: styles.code,
    preformatted: styles.preformatted,
    blockquote: styles.blockquote,
    horizontal_line: styles.horizontal_line,
    image: styles.image,
    list: styles.list,
    unordered_list: styles.unordered_list,
    ordered_list: styles.ordered_list,
    list_item: styles.list_item,
    table: styles.table,
    table_head: styles.table_head,
    table_head_cell: styles.table_head_cell,
    table_body: styles.table_body,
    table_row: styles.table_row,
    table_data: styles.table_data,

    table_container: styles.table_container,
    table_action_button: styles.table_action_button,
    table_action_button_csv: styles.table_action_button_csv,
    table_action_button_html: styles.table_action_button_html,
    table_action_button_json: styles.table_action_button_json,
    table_action_button_markdown: styles.table_action_button_markdown,
    table_action_buttons_summary: styles.table_action_buttons_summary,
    table_action_buttons_details: styles.table_action_buttons_details,
} as const;

export default stylemap;
