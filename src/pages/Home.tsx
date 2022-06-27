import AboutMe from "../components/AboutMe";
import Introduction from "../components/Introduction";
import Resume from "../components/Resume";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
        <NavBar />
        <Introduction />
        <AboutMe />
        <Resume />
    </>
  );
}

export default Home;
