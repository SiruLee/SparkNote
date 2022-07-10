import {
  Boxicons,
  Electron,
  ReactSpring,
  ReactIcon,
  WebIcon,
} from "./icons.jsx";
function About() {
  return (
    <div className="contents">
      <div id="subject" className="subject">
        SparkNote
      </div>
      <div id="description">
        A multi-functional desktop application providing note, ToDo, clock, and
        weather services.
      </div>
      <div id="author" className="subject">
        By Jiheon L.
      </div>
      <div id="institution" className="subject">
        University of Toronto
      </div>
      <a href="https://github.com/SiruLee" target="blank">
        <button className="subject" id="toGithub">
          GitHub
        </button>
      </a>
      <a href="https://sirulee.github.io/jiheon-lee" target="blank">
        <button className="subject" id="homepage">
          Webpage
        </button>
      </a>
      <div id="container">
        <div id="tools" className="subject">
          Languages & Tools
        </div>
        <div className="xScroll">
          <div className="box" id="reactjs">
            <ReactIcon />
            <div>ReactJS</div>
          </div>
          <div className="box" id="electron">
            <Electron />
            <div>Electron</div>
          </div>
          <div className="box" id="spring">
            <ReactSpring />
            <div>React-Spring</div>
          </div>
          <div className="box" id="boxicons">
            <Boxicons />
            <div>Boxicons</div>
          </div>
          <div className="box" id="html">
            <WebIcon />
            <div>HTML CSS JS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
