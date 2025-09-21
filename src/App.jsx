import "./App.scss";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Callfor from "./components/Layout/Callfor/Callfor";
import Place from "./components/Layout/Place/Place";
import Start from "./components/Layout/Start/Start";
import Time from "./components/Layout/Time/Time";
import Yrmat from "./components/Layout/Yrmat/Yrmat";
import MusicPlayer from "./components/Layout/MusicPlayer/MusicPlayer";
import First from "./components/Layout/first/first";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <First />
      <Hero />
      <Callfor />
      <Place />
      <Start />
      <Time />
      <Yrmat />
      <MusicPlayer />
      <Footer />
    </>
  );
}

export default App;
