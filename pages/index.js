import Topics from "@/components/home/topics";
import Hero from "@/components/home/hero";
import Content from "@/components/shared/Content";
import Header from "@/components/shared/header";
import MenuButton from "@/components/shared/navigation-bar/menu-button";

export default function Home() {
  return (
    <div className="w-full"> 

    <Header name ="MeriteWatercolour">
      <MenuButton href="https://www.instagram.com/mmerite/" className="bg-color-indigo-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </MenuButton>
    </Header>

    <Hero
      imgUrl="/assets/profile_1.jpeg" 
      subtitle="Hi! I am Maria,"/>


    <Content>
      <div className="w-full flex flex-col">
        <Topics 
        imgUrl="/assets/fountain.jpeg"/>
      
      </div>
    </Content>
    
    </div>
  )
}
