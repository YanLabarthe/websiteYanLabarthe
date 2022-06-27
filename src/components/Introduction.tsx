import gitHubSvg from "../assets/gitHub.svg";
import linkedInSvg from "../assets/linkedIn.svg";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex flex-col items-center justify-center h-full"
      style={{
        backgroundImage: `url("src/assets/nightSky.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-6xl text-white">I'm Yan Labarthe.</div>
      <div className="lg:text-2xl text-white">
        I'm a Javascript developer specialized in React / NodeJs. I love to
        learn new techs and push myself.
      </div>
      <div className="flex">
        <a href="https://github.com/YanLabarthe">
          <img src={gitHubSvg} alt="gitHub svg" className="h-full w-7 sm:w-8 lg:w-9 bg-black rounded ml-2 mr-2" />
        </a>
        <a href="https://www.linkedin.com/in/yan-labarthe/">
          <img
            src={linkedInSvg}
            alt="linkedIn svg"
            className="h-full w-7 sm:w-8 lg:w-9 bg-black rounded ml-2 mr-2"
          />
        </a>
      </div>
    </section>
  );
};

export default Introduction;
