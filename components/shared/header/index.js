import Link from "next/link";
export default function Header({name, children}) {
    return (
        <div className="bg-indigo-500 w-full flex flex-row justify-between max-w-6xl mx-auto py-4 px-12">
            <h2 className="font-medium text-3xl text-white">{name}</h2>
            {children}
        </div>   
        );
}

