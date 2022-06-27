import gitHubSvg from "../assets/gitHub.svg";
import linkedInSvg from "../assets/linkedIn.svg";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex flex-col items-center justify-center h-full"
      style={{
        backgroundImage: `url("src/assets/nightSky.jpg")`,
        backgroundSize: 'cover'
      }}
    >
      <div className="text-6xl text-white" >I'm Yan Labarthe.</div>
      <div className="text-2xl text-white" >
        I'm a Javascript developer specialized in React / NodeJs. I love to
        learn new techs and push myself.
      </div>
      <div className="flex">
        <img src={gitHubSvg} alt="gitHub svg" className="w-5 sm:w-6 lg:w-7" />
        <img
          src={linkedInSvg}
          alt="linkedIn svg"
          className="w-6 sm:w-7 lg:w-8"
        />
      </div>
    </section>
  );
};

export default Introduction;
