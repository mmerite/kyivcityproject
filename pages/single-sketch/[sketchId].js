import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/Content";
import { useRouter } from "next/router"
import { useEffect,useState } from "react";
import SketchSingle from "@/components/sketch-single";
import Button from "@/components/shared/Buttons/button";
import MenuButton from "@/components/shared/navigation-bar/menu-button";

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
            <div>Loading...</div>
            
        );
    }


    return (
        <div className="w-full">
            
                <Header name={sketch.title}>
                    <MenuButton title="Home" href="/" className="bg-color-indigo-400"></MenuButton>
                </Header>    

            <SketchSingle
                imgUrl={sketch.img_url}
                title={sketch.title}
                medium={sketch.medium}
                size={sketch.size}
                description={sketch.description}
            />


            <div className="w-full"> 
                    <Footer> 
                        <div className="flex flex-row space-x-8"> 
                            <Button 
                                href={`/single-sketch/${+sketchId - 1}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
                            </Button>

                            <Button 
                                title="Back to sketches"
                                href="/sketches">
                            </Button>

                            <Button 
                                href={`/single-sketch/${+sketchId + 1}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            </Button>

                        </div>

                    </Footer>
            </div>
               
        </div>
    )
}


///console.log("router", sketchId); - this is to check if it goes through ok
//console.log("router", router.query.sketchId)

// to be finished below
    /*if (sketchId >= 9) {
            return (<div className="w-full"> 
            <Header name="MeriteWatercolour">
                <MenuButton title="Home" href="/" className="bg-color-indigo-400"></MenuButton>
            </Header>

            <Content>
                <div className="mt-16"> 
                So sorry the page is not found!
                </div>
                <div className="mt-8">
                    <Button href="/sketches" title="Back to sketches"></Button>
                </div>
            </Content>

            </div>
            );
        } */