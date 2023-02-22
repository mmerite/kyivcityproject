import Content from "@/components/shared/Content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import SketchGrid from "@/components/sketch-grid";
import MenuButton from "@/components/shared/navigation-bar/menu-button";
import Button from "@/components/shared/Buttons/button";

export default function SketchPage() {
    return (
        <div className="w-full">
            <Header name="Kyiv sketches">
                <div className="flex flex-row">
                    <MenuButton title="Home" href="/" className="bg-color-indigo-400"></MenuButton>
                    <MenuButton href="https://www.instagram.com/mmerite/" className="bg-color-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </MenuButton>
                 </div>
            </Header>

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <SketchGrid></SketchGrid>
                </div>
            </Content>

            <div className="w-full flex align:center"> 
                <Footer>
                    <Button href="/" title ="Return Home"></Button>
                </Footer>
            </div>

        </div>
    );
}