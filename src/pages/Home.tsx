import AboutMe from "../components/AboutMe";
import Introduction from "../components/Introduction";
import Timeline from "../components/Timeline";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
        <NavBar />
        <Introduction />
        <AboutMe />
        <Timeline />
    </>
  );
}

export default Home;
