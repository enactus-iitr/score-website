import React from "react";
import useStyles from "./styles";
import imagephy from "./Group 151physics.svg";
import imagemat from "./Group 153maths.svg";
import imageche from "./Group 152chemistry.svg";

const SubjectTemplate = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainbox}>
      <h1 className={classes.heading}>
        {" "}
        11<span style={{ fontSize: "64px" }}>th</span> Class
      </h1>
      <p className={classes.para}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. the industry's standard dummy text ever since the
        1500s.
      </p>

      <div className={classes.subjects}>
        <div className={classes.subject}>
          <img src={imagephy} alt="physics" />
        </div>
        <div className={classes.subject}>
          <img src={imageche} alt="chemistry" />
        </div>
        <div className={classes.subject}>
          <img src={imagemat} alt="math" />
        </div>
      </div>
    </div>
  );
};

export default SubjectTemplate;
