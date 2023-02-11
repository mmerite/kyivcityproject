import Link from "next/link";

export default function Footer({href, title}) {
    return (
    <div classname="bg-indigo-500 w-full max-w-6xl mx-auto py-4 px-4">
        <Link href={href}>
            Go to {title}
        </Link>
    </div>
    );
}