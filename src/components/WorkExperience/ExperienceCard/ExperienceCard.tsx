import React from "react";
import "./ExperienceCard.css";

type ExperienceType = {
  title: string;
  date: Date | string;
  responsibilities: any;
}

type ExperienceCardProps = {
    key: string;
    details: ExperienceType;
}

const ExperienceCard = ({ key, details }: ExperienceCardProps) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>

      <div className="work-duration">{details.date as string}</div>

      <ul>
        {details.responsibilities.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
