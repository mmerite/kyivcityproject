import Link from "next/link";
export default function Header({name, children}) {
    return (
        <div className="bg-indigo-500 w-full flex flex-row justify-between max-w-6xl mx-auto py-4 px-4">
            <h1 className="w-3/4 font-medium text-3xl text-white">{name}</h1>
            {children}
        </div>   
        );
}

