import React from "react";
import "./Home.css";
import LandingPageCard from "../../components/LandingPageCard/LandingPageCard";

function Home() {
  const allCardDetails = [
    {
      id: 1,
      cardTitle: "COORDINATOR",
      cardSubTitle: "Simplify, Create, and Manage Placements Effortlessly.",
      cardDescription:
        "Create job postings, manage applications, set deadlines, analyze job stats, and notify students—all in one user-friendly platform designed for campus placement coordinators.",
      cardButton: "Create Placement",
      cardButtonPath: "/Signup",
    },
    {
      id: 2,
      cardTitle: "STUDENTS",
      cardSubTitle: "A one-stop site for employment on campus.",
      cardDescription:
        "Easily browse job opportunities, apply with pre-filled forms, track application status, and stay updated with notifications for deadlines and new postings—all tailored for your course and department.",
      cardButton: "Apply to Placement",
      cardButtonPath: "/Signup",
    },
  ];

  // const cardDetailsCoordinatorObject = {
  //   cardTitle : "Coordinator",
  //   cardSubTitle : "Simplify, Create, and Manage Placements Effortlessly.",
  //   cardDescription : "Create job postings, manage applications, set deadlines, analyze job stats, and notify students—all in one user-friendly platform designed for campus placement coordinators.",
  //   cardButton : "create placement"
  // }

  // const cardDetailsStudentObject = {
  //   cardTitle : "Students",
  //   cardSubTitle : "A one-stop site for employment on campus.",
  //   cardDescription : "Easily browse job opportunities, apply with pre-filled forms, track application status, and stay updated with notifications for deadlines and new postings—all tailored for your course and department.",
  //   cardButton : "Apply to Placement"
  // }

  const landingPageTitle = "College Placements Made Easy !";

  return (
    <>
      <div>
        <h1>{landingPageTitle}</h1>
      </div>

      <div>
        {allCardDetails.map((cardDetails) => (
          <LandingPageCard cardDetails={cardDetails} key={cardDetails.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
