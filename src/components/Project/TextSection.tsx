import { MDXFromComponent } from "@d1vij/jassm";
import { useLoaderData } from "@tanstack/react-router";

import { stylemap } from "@/content/mdx-styles/mdx.styles";
import { Elements } from "@/components/MDX";

function Fallback() {
    return <div>Loading</div>
}

export default function TextSection() {
    const { component } = useLoaderData({
        from: "/projects/$projectId",
    });
    return (
        <div>
            <MDXFromComponent
                source={component}
                styles={stylemap}
                elements={Elements}
                fallback={<Fallback/>}
            />
        </div>
    );
}
