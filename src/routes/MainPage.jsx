// import React, { useState, useEffect } from "react";
import Section from "../components/Section";
// import Navbar from "../components/Navbar";
// import Repo from "../components/Repo";
// import light_mode_image from "../assets/images/profile_image_light_mode.jpg";
// import dark_mode_image from "../assets/images/profile_image_dark_mode.jpg";
import Background from "../components/Background";
import Header from "../components/Header";

// import {
//   IoLogoJavascript,
//   IoLogoGithub,
//   IoLogoLinkedin,
//   IoLogoReact,
//   IoLogoCss3,
//   IoLogoHtml5,
// } from "react-icons/io5";
// import Test from "../components/Test";
import Introduction from "../components/Introduction";
// import Test from "../components/Test";
import "../styles/MainPage.css";

//const MainPage = () => {
// const BearerToken = process.env.REACT_APP_BEARER_TOKEN;
// const linkedin = process.env.REACT_APP_LINKEDIN;
// const github = process.env.REACT_APP_GITHUB;

// const maxPages = 3;
// const [repos, setRepos] = useState([]);
// const [color_mode, setColorMode] = useState(false);

// useEffect(() => {
//   const storedTemeValue = localStorage.getItem("color_mode");
//   const booleanTemeValue = JSON.parse(storedTemeValue);
//   if (booleanTemeValue) {
//     setColorMode(booleanTemeValue);
//   }
// }, []);

// useEffect(() => {
//   const getRepos = async () => {
//     let fetchedRepos = [];
//     let res;
//     try {
//       for (let i = 1; i <= maxPages; i++) {
//         res = await fetch(
//           `https://api.github.com/users/notdavo/repos?&sort=pushed&per_page=100&page=${i}`,
//           {
//             headers: {
//               Authorization: BearerToken,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         let data = await res.json();
//         fetchedRepos = fetchedRepos.concat(data);
//       }
//       fetchedRepos.sort((a, b) => b.forks_count - a.forks_count);
//       fetchedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
//       setRepos(fetchedRepos);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   getRepos();
// }, [BearerToken]);

// const toggleMode = () => {
//   setColorMode((prevMode) => {
//     const newMode = !prevMode;
//     localStorage.setItem("color_mode", newMode);
//     return newMode;
//   });
// };

// const openURL = (url) => {
//   url === "linkedin"
//     ? window.open(linkedin, "_blank")
//     : window.open(github, "_blank");
// };

// const sections = [
//   { id: 0, title: "David Arce" },
//   { id: 1, title: "About Me" },
//   { id: 2, title: "Portfolio" },
// ];

// const LinkedinIcon = () => {
//   const handleClick = () => {
//     openURL("linkedin");
//   };

//   return (
//     <IoLogoLinkedin
//       id="linkedin"
//       onClick={handleClick}
//       className={`icon ${
//         color_mode ? "dark-mode-color-white" : "light-mode-color-black"
//       }`}
//     />
//   );
// };

// const GithubIcon = () => {
//   const handleClick = () => {
//     openURL("github");
//   };

//   return (
//     <IoLogoGithub
//       id="github"
//       onClick={handleClick}
//       className={`icon ${
//         color_mode ? "dark-mode-color-white" : "light-mode-color-black"
//       }`}
//     />
//   );
// };

// return (
//   <div
//     className={`flex-container ${
//       color_mode ? "dark-mode-flex-container" : "light-mode-flex-container"
//     }`}
//   >
//     <Background color_mode={color_mode} />
//     <Navbar
//       key="navbar"
//       sections={sections}
//       toggleMode={toggleMode}
//       color_mode={color_mode}
//     />
// <div className="sections">
//   {sections.map((section) => (
//     <Section
//       key={section.id}
//       id={section.title.toLowerCase()}
//       title={section.title}
//       color_mode={color_mode}
//     >
//       {section.id === 0 && (
//         <div className="david-container">
//           <p
//             className={`thin-text ${
//               color_mode
//                 ? "dark-mode-color-white"
//                 : "light-mode-color-black"
//             }`}
//           >
//             Welcome to my portfolio as a web developer.
//           </p>
//           <p
//             className={`bold-text ${
//               color_mode ? "dark-mode-color-white" : "light-mode-style-2"
//             }`}
//           >
//             If you want to contact me, write to{" "}
//             <span>arcerodriguezdavidjosue@gmail.com</span>.
//           </p>
//           <div className="flex-row social-container">
//             <LinkedinIcon />
//             <GithubIcon />
//           </div>
//         </div>
//       )}
//       {section.id === 1 && (
//         <div className="flex-row about_me_container">
//           <img
//             className="profile_image"
//             src={color_mode ? dark_mode_image : light_mode_image}
//             alt="David's profile"
//           />
//           <div className="about_me">
//             <p
//               className={`flex-row style-about-me ${
//                 color_mode ? "dark-mode" : "light-mode"
//               }`}
//             >
//               Passionate Software Developer eager to keep learning and
//               grow in the professional scene. Seeking to use my knowledge
//               and committed to becoming a dependable and valuable team
//               member.
//               <br />I have worked with programming languages and
//               frameworks such as:
//             </p>
//             <div className="flex-column skills">
//               <div className="icons-container">
//                 <span className="icons-main background-icon-black">
//                   <IoLogoJavascript className="icon-size-main icon-javascript-main" />
//                   JavaScript
//                 </span>
//                 <span className="icons-main background-icon-black">
//                   <IoLogoReact className="icon-size-main icon-react-main" />
//                   React
//                 </span>
//                 <span className="icons-main html-main">
//                   <IoLogoHtml5 className="icon-size-main icon-white" />
//                   HTML
//                 </span>
//                 <span className="icons-main css-main">
//                   <IoLogoCss3 className="icon-size-main icon-white" />
//                   CSS
//                 </span>
//                 <span className="icons-main background-icon-black">
//                   <IoLogoGithub className="icon-size-main icon-white" />
//                   Git
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {section.id === 2 && (
//         <div className="repo-container">
//           {repos.map((repo) => (
//             <Repo
//               key={repo.id}
//               name={repo.name}
//               description={repo.description}
//               repo_url={repo.html_url}
//               color_mode={color_mode}
//             />
//           ))}
//         </div>
//       )}
//       {/* {section.id === 3 && (
//           <div>
//               <p>This is the content for Contact.</p>
//           </div>
//       )} */}
//     </Section>
//   ))}
// </div>
//   </div>
// );
const MainPage = () => {
  return (
    <div id={"introduction"} className="main-container">
      <Introduction id={"home"} />
      <div id={"body"} className="body-container">
        <Header />
        <div className="section-container">
          <div className="section-spacing">
            <Section id={"about"} title={"About"} />
            <Section id={"experience"} title={"Experience"} />
            <Section id={"f"} title={"Projects"} />
            <Section id={"about"} title={"About"} />
            <Section id={"experience"} title={"Experience"} />
            <Section id={"h"} title={"Projects"} />
            <Section id={"about"} title={"About"} />
            <Section id={"experience"} title={"Experience"} />
            <Section id={"projects"} title={"Projects"} />
          </div>
        </div>
      </div>

      <Background></Background>
    </div>
  );
};

export default MainPage;
