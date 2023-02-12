import topics from "./topics"

export default function Topics(imgUrl, href) {
    return (
        <div className="w-full flex flex-col-2">
            <div className="w-5/12 flex flex-col py-4 max-w-sm" >
                <h3 className="text-xl text-gray-700 py-4 mx-auto">
                    Why I loved urban sketching?
                </h3>

                <div className="list-disc px-8 mx-auto font-light text-gray-500">
                    {topics.map((topic, index) => {
                        return <li key={index}> {topic} </li>
                    })}
                </div>
                <button 
                    className="bg-orange-300 hover:bg-orange-400 text-white py-2 px-4 rounded-lg w-40 mx-auto my-8"
                    type="button">
                    <a href="/sketches"> See sketches </a>
                </button>

                
             </div>

            <div className="w-7/12 py-4 px-8 mx-auto">
                <img src="/assets/fountain.jpeg"></img>
            </div>


        </div>
    )
}

//max-w-6xl mx-auto mt-8"