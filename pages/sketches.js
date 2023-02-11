import Content from "@/components/shared/Content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import SketchGrid from "@/components/sketch-grid";

export default function SketchPage() {
    return (
        <div className="w-full">
            <Header name="Kyiv sketches"/>

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <SketchGrid></SketchGrid>
                </div>
            </Content>

            <Footer href="/" title="Return Home" />

        </div>
    );
}