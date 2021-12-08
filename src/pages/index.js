import * as React from "react";
import Face from "../images/face.jpg";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

// styles
const pageStyles = {
  color: "#444444",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 480,
}
const contactStyles = {
  marginTop: 0,
  marginBottom: 40,
  maxWidth: 480,
}
const imageStyles = {
  marginTop: 0,
  marginBottom: 10,
  width: 160,
}
const headingAccentStyles = {
  color: "#3366CC",
}
const linkStyle = {
  color: "#3366CC",
  verticalAlign: "5%",
}
const linkContactStyle = {
  color: "#1099A8",
  verticalAlign: "5%",
}
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Monique Dingding's CV</title>
      <h1 style={headingStyles}>
        <img style={imageStyles} src={Face} alt="monik's face"/>
        <br />
        Monique Dingding
        <br />
        <span style={headingAccentStyles}>— Lead Software Engineer at <a style={linkStyle} target="_blank" href="https://lamudi.com.ph">Lamudi Philippines</a> </span>
        <span role="img" aria-label="heart emoji">
          🧡💙
        </span>
      </h1>
      <WorkExperience />
      <Education />
      <p style={contactStyles}>
        Find me at &nbsp;
        <a style={linkContactStyle} target="_blank" href="https://github.com/gloriamaris">github</a>
        &nbsp;&middot; <a style={linkContactStyle} target="_blank" href="https://dev.to/gloriamaris">dev.to</a> 
        &nbsp;&middot; <a style={linkContactStyle} target="_blank" href="https://www.linkedin.com/in/moniquedingding">linkedin</a>
        &nbsp;&middot; <a style={linkContactStyle} target="_blank" href="mailto:monique.dingding@gmail.com">email</a>
      </p>
      <footer> 
        Monique Dingding - CV for IS238. University of the Philippines Open University. &copy; 2021. 
      </footer>
    </main>
  )
}

export default IndexPage
