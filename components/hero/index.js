import Bio from "./bio";

export default function Hero({name, subtitle, imgUrl}) {
    return (
        <div className="w-full max-w-6xl mx-auto mt-8">
            <div className="w-full flex flex-row space-x-2 py-4">
            
                <div className="w-2/12">
                    <img src={imgUrl} className="h-32"></img>
                </div>

                <div className="w-10/12">
                    <p className="text-xl text-gray-700">{subtitle}</p>
                </div>

                <div className="w-10/12">
                    <Bio></Bio>
                </div>

            </div>
        </div>
    );
}