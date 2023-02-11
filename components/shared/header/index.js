export default function Header({name}) {
    return (
        <div className="bg-indigo-500 w-full max-w-6xl mx-auto py-4 px-4">
            <h1 className="font-medium text-3xl text-white">{name}</h1>
        </div>   
        );
}