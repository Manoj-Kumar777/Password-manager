import React, { useState, useEffect } from "react";
import "./style.scss";
import { SkillSetCard } from "Components/UI Components/Atoms";

const SkillDetail = () => {
  const [animationStart, setAnimationStart] = useState(false);
  const [skills, setSkills] = useState([
    {
      skill: "MANOJ KUMAR",
    },
    {
      skill: "AYUSH ANAND",
    },
    {
      
      skill: "GAUTAM JHA",
    },
    {
      
      skill: "JHASAKETAN PRUSTY",
    },
  ]);
  useEffect(() => {
    const animationDelayTime = setTimeout(() => {
      setSkills([
        {
          skill: "MANOJ KUMAR",
          className: "first",
        },
        {
          skill: "AYUSH ANAND",
          className: "second",
        },
        {
          skill: "GAUTAM JHA",
          className: "first",
        },
        {
          skill: "JHASAKETAN PRUSTY",
          className: "second",
        },
      ]);
      setAnimationStart(true);
    }, 1000);
    return () => {
      clearTimeout(animationDelayTime);
    };
  }, []);

  useEffect(() => {
    if (animationStart) {
      var cloneSkills = skills;
      var updateCounting = setInterval(() => {
        setSkills((skillsset) => {
          var sample = cloneSkills[0];
          cloneSkills.shift();
          cloneSkills.push(sample);
          skillsset = [...cloneSkills];
          return skillsset;
        });
      }, 1980);
    }
    return () => {
      clearInterval(updateCounting);
    };
  }, [animationStart]);

  return (
    <div className="skillSection">
      {skills.length > 0 &&
        skills.map((data, index) => (
          <div key={index} className={data.className}>
            <SkillSetCard experience={data.experience} content={data.skill} />
          </div>
        ))}
    </div>
  );
};

export default SkillDetail;
