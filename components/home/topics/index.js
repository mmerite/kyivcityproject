import topics from "./topics"

export default function Topics(imgUrl) {
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
             </div>

            <div className="w-7/12 py-4 px-8 mx-auto">
                <img src="/assets/fountain.jpeg"></img>
            </div>


        </div>
    )
}

//max-w-6xl mx-auto mt-8"