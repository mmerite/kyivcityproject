import Bio from "./bio";

export default function Hero({name, subtitle, imgUrl}) {
    return (
        <div className="w-full max-w-6xl mx-auto mt-8">
            <div className="w-full flex flex-row-2 space-x-24 py-4">
            
                <div className="w-4/12">
                    <img src={imgUrl} className="rounded-lg"></img>
                </div>

                <div className="w-8/12">
                    <p className="text-xl text-gray-700">{subtitle}</p>
                    
                    <Bio className="text-left"></Bio>
                </div>


            </div>
        </div>
    );
}