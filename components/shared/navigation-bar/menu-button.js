import Link from "next/link";

export default function MenuButton({href, title, children}) {
    return (
        <div className="">
            <button 
                className="hover:bg-orange-400 text-white py-1 px-3 rounded-lg"
                type="button">
                    <Link href={href}>
                        {title}
                        {children}
                    </Link>
            </button>
        </div>
    );
}