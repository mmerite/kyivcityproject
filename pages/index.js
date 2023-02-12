import Hero from "@/components/hero";
import Content from "@/components/shared/Content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <div className="w-full"> 

    <Header name ="MeriteWatercolour"/>

    <Hero
      imgUrl="/assets/profile_1.jpeg" 
      subtitle="Hi I am Maria"/>


    <Content>
    </Content>

    <Footer href="/sketches" title="See Sketches" />
    
    </div>
  )
}
