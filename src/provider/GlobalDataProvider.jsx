import { createContext } from "react";
import about from "../data/about.json";
import resume from "../data/resume.json";
import skills from "../data/skills.json";
import projects from "../data/projects.json";
import blogs from "../data/blogs.json";
import certifications from "../data/certifications.json";
import hobbies from "../data/hobbies.json";

const GlobalData = { about, resume, skills, projects, blogs, certifications, hobbies };

const GlobalDataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  return (
    <GlobalDataContext.Provider value={GlobalData}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
