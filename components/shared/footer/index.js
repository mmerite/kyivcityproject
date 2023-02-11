import Link from "next/link";

export default function Footer({href, title}) {
    return (
    <div className="w-full max-w-6xl mx-auto mt-8">
        
        <button 
        className="bg-orange-300 hover:bg-orange-400 text-white py-2 px-4 rounded-lg"
        type="button">
        <Link href={href}>
            {title}
        </Link>
        </button>
    </div>
    );
}