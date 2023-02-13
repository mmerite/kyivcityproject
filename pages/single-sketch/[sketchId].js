import Header from "@/components/shared/header";
import { useRouter } from "next/router"
import { useEffect,useState } from "react";
import SketchSingle from "@/components/sketch-single";

export default function SingleSketch(){
    const router = useRouter();
    const { sketchId } = router.query; // and router is for front end
    const [ sketch, setSketch ] = useState(null); // null because it does not exist untill we retrieve the value

    useEffect(() => {
        if (!sketchId) return;

        getSketch(sketchId); 

    }, [sketchId]);

    const getSketch = async (id) => {
        const response = await fetch(`/api/sketch-by-id?id=${id}`);
        const data = await response.json();
        const { sketch } = data;
        setSketch(sketch);
    }

    console.log(sketch);

    if (!sketch) {
        return (
            <div> Loading...</div>
        )
    }

    return (
        <div className="w-full">
            <Header name={sketch.title} />
            <SketchSingle
                imgUrl={sketch.imgUrl}
                medium={sketch.medium}
                size={sketch.size}
                description={sketch.description}>
            </SketchSingle>
        </div>
    )
}


///console.log("router", sketchId); - this is to check if it goes through ok
//console.log("router", router.query.sketchId)