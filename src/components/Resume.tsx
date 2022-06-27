const Resume = () => {
  return (
    <section id='resume' className="flex flex-col items-center justify-center h-full">
      <h1>Resume</h1>
      <div className="grid grid-cols-2 gap-4">
        <h2>WORK</h2>
        <article>
          <div>
            <h3>OSEZ VOS DROITS</h3>
            <div className="flex">
              <p>SEO specialist</p> <pre> 2019</pre>
            </div>
            <p>
              Elaboration of SEO strategies. Audit, code and netlkining. Trafic
              analysis. Recruitment of sales representatives.
            </p>
          </div>
          <div>
            <h3>NEODIA</h3>
            <div className="flex">
              <p>SEO specialist</p> <pre> 2018</pre>
            </div>
            <p>
              Elaboration of SEO strategies. Audit, code and netliking. Trafic
              analysis. Redaction of SEO friendly content.
            </p>
          </div>
        </article>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <h2>EDUCATION</h2>
        <article>
        <div>
          <h3>Wild Code School</h3>
          <div className="flex">
            <p>Full-stack JavaScript developer</p> <pre> 2022</pre>
          </div>
          <p>
            React, NodeJs, MySql, GitHub, etc.
            Agile methods for work environment.
          </p>
        </div>
        <div>
          <h3>ESC PAU</h3>
          <div className="flex">
            <p>Management of companies and administrations</p> <pre> 2018</pre>
          </div>
          <p>
            Marketing, communication, management and other business studies.
          </p>
        </div>
        </article>
      </div>
    </section>
  );
};

export default Resume;
