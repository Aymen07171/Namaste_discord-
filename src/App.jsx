import './App.css'
import Body from './Components/Body'
import BoxComponents from './Components/BoxComponents';
import Header from './Components/Header'
import VideoBox1 from './assets/VdeoSecondBox.mp4';
import VideoBox2 from './assets/videos_FirstBox.mp4'
import VideoBox3 from './assets/VideoThird.mp4'
import SmallIcon from './assets/icon.webp'
import SectionComponent from './Components/SectionComponent';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background div with blur */}
      <div className="fixed inset-0 bg-[url('C:\Users\Public\Documents\motion_landingpage\src\assets\Background.png')] bg-contain blur-sm -z-10" />
      
      {/* Content div */}
      <div className="relative z-10">
        <Header />
        <Body />
        <BoxComponents 
                title="Make your group chats more fun"
                description="Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way."
                videoSrc={VideoBox1}
                gradientFrom="cyan-500"
                gradientTo="blue-500"
            />

        <BoxComponents 
                title="stream like you’re in the same room"
                description="High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something."
                videoSrc={VideoBox2}
                gradientFrom="red-500"
                gradientTo="pink-500"
            />


          <BoxComponents
              iconImage={SmallIcon}
              iconSize="w-20 h-20"  // Larger icon
              iconPosition="-top-10 left-10"  // Custom position
              iconGradient="from-pink-500 to-purple-500"  // Custom gradient
              title="See who's around to chill"
              description="See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up."
              videoSrc={VideoBox3}
              gradientFrom="purple-500"
              gradientTo="blue-500"
          />


          <SectionComponent />
          <Footer/>


      </div>
    </div>
  )
}

export default App
