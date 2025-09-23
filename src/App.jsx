import "./App.scss";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Callfor from "./components/Layout/Callfor/Callfor";
import Place from "./components/Layout/Place/Place";
import Start from "./components/Layout/Start/Start";
import Time from "./components/Layout/Time/Time";
import Yrmat from "./components/Layout/Yrmat/Yrmat";
import MusicPlayer from "./components/Layout/MusicPlayer/MusicPlayer";
import Footer from "./components/Layout/Footer/Footer";
import Anketa from "./components/Layout/Anketa/Anketa";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Callfor />
      <Place />
      <Start />
      <Time />
      <Yrmat />
      <MusicPlayer />
      <Anketa />
      <Footer />
    </>
  );
}

export default App;
