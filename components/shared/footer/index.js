import Link from "next/link";

export default function Footer({href, title}) {
    return (
    <div className="w-full flex flex-fow justify-center space-x-6 mx-auto mt-8" role="group">
       
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
//insert a second button for previous sketch?