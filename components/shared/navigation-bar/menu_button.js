import Link from "next/link";

export default function MenuButton({href, title, children}) {
    return (
        <div className="">
            <button 
            className="hover:bg-orange-400 text-white py-2 px-4 rounded-lg"
            type="button">
                <Link href={href}>
                    {children   }
                    {title}
                </Link>
         </button>
        </div>
    );
}