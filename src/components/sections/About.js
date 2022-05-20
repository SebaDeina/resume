import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Seba",
  avatarImage: "/images/perfil2.png",
  content:
    "Yo soy Sebastian Deina, soy un desarrollador web de Buenos Aires, Argentina. Tengo experiencia en el diseño, creación y personalización de sitios web con diversas herramientas, por ejemplo Reack Js y WordPress. Ademas cuento con experiencia en Data analytics y Data Science.",
};

const progressData = [
  {
    id: 1,
    title: "Development",
    percantage: 75,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "UI/UX Design",
    percantage: 60,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Data scientist",
    percantage: 80,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "Data analytics",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projectos completados",
    count: 5,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Tazas de cafe",
    count: 9,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "clientes satisfechos",
    count: 5,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Productos",
    count: 5,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://drive.google.com/file/d/1sA52oaLWEQoMKhS-HkmeXEPaWjYZ3giY/view?usp=sharing" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
