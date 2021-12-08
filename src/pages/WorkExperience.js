import React from "react";

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 16,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#3366CC",
  fontWeight: "600",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  color: "#333333"
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

// data
const workExperienceList = [
  {
    company: "Lamudi Philippines",
    yearsWorked: "2 yrs 11 mos",
    position: "Lead Software Engineer",
    positionYears: "Feb 2019 to present",
    color: "#E95800",
  },
  {
    company: "Pronexis",
    yearsWorked: "1 yr 8 mos",
    position: "Lead Software Engineer",
    positionYears: "Apr 2018 to Feb 2019",
    color: "#1099A8",
  },
  {
    company: "Freelance",
    yearsWorked: "2 yrs",
    position: "Software Engineer",
    positionYears: "Mar 2017 to Feb 2019",
    color: "#BC027F",
  },
  {
    company: "University of Southeastern Philippines",
    yearsWorked: "1 yr 11 mos",
    position: "Instructor, Computer Science",
    positionYears: "Oct 2015 to Aug 2017",
    color: "#0D96F2",
  },
  {
    company: "Futuristech, Inc.",
    yearsWorked: "10 mos",
    position: "Web Developer",
    positionYears: "Jan 2015 to Oct 2015",
    color: "#8EB814",
  },
  {
    company: "Offsourcing, Inc.",
    yearsWorked: "9 mos",
    position: "Web Developer",
    positionYears: "Apr 2014 to Dec 2014",
    color: "#663399",
  },
]

const WorkExperience = () => {
  return (
    <div>
      <h2>
        <span role="img" aria-label="woman working emoji">
          👩‍💻&nbsp;&nbsp;
        </span>
        Work Experience
      </h2>
      <ul style={listStyles}>
        {
          workExperienceList.map((item, i) => (
            <li key={i} style={{ ...listItemStyles, color: item.color }}>
              <span>
                <span style={linkStyle}>
                  {item.position}
                </span>
                <br />
                <span style={docLinkStyle}>
                  {item.company}
                </span>
                <br />
                <span style={descriptionStyle}>
                  {item.positionYears} &middot; {item.yearsWorked}
                </span>
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default WorkExperience