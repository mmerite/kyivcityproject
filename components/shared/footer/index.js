import Link from "next/link";

export default function Footer({children}) {
    return (
    <div className="w-full flex flex-fow justify-center space-x-6 mx-auto mt-12">
       {children}
    </div>
    );
}
//insert a second button for previous sketch?