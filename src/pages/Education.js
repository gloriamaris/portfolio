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
  fontWeight: "bold",
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
const educationList = [
  {
    school: "University of the Philippines Open University",
    course: "Master of Information Systems",
    schoolYears: "2020 - 2022",
    color: "#0D96F2",
  },
  {
    school: "University of Southeastern Philippines",
    course: "Master of Information Technology",
    schoolYears: "2016 - 2017",
    color: "#8EB814",
  },
  {
    school: "University of the Philippines Mindanao",
    course: "Bachelor of Science in Computer Science",
    schoolYears: "2010 - 2014",
    color: "#663399",
  },
]
const Education = () => {
  return (
    <div>
      <h2>
        <span role="img" aria-label="studying emoji">
          📚&nbsp;&nbsp;
        </span>
        Education
      </h2>
      <ul style={listStyles}>
        {
          educationList.map((item, i) => (
            <li key={i} style={{ ...listItemStyles, color: item.color }}>
              <span>
                <span style={linkStyle}>
                  {item.school}
                </span>
                <br />
                <span style={docLinkStyle}>
                  {item.course}
                </span>
                <br />
                <span style={descriptionStyle}>
                  {item.schoolYears}
                </span>
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Education