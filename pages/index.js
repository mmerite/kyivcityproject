import Topics from "@/components/home/topics";
import Hero from "@/components/home/hero";
import Content from "@/components/shared/Content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <div className="w-full"> 

    <Header name ="MeriteWatercolour"/>

    <Hero
      imgUrl="/assets/profile_1.jpeg" 
      subtitle="Hi! I am Maria,"/>


    <Content>
      <div className="w-full flex flex-col">
        <Topics 
        imgUrl="/assets/fountain.jpeg"/>
      
      </div>
    </Content>

    <Footer href="/sketches" title="See what is next?" />
    
    </div>
  )
}
