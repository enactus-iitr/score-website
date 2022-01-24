import React from "react";
import useStyles from './style.js'
import {Box, MenuItem, FormControl, Select } from '@material-ui/core';
import { Subject } from "@material-ui/icons";
import Image  from "./img/phyvector.svg";

export default function SubjectHead() {

  const [subject, setSubject] = React.useState('');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const classes = useStyles()

  return (
    <div className={classes.subjectHeadContainer}>
      <div className={classes.subjectHeadLeft}>
        <p className={classes.subjectHeadClass}>11th Class</p>
        <h1 className={classes.subjectHeadName}>Physics</h1>
        <p className={classes.subjectHeadContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          voluptatum exercitationem vel? Aspernatur eveniet ut repellat,
          perspiciatis inventore, consequuntur, quis ea nemo commodi tenetur
          voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolores voluptatum exercitationem vel? Aspernatur eveniet ut repellat,
          perspiciatis inventore, consequuntur, quis ea nemo commodi tenetur
          voluptates.
        </p>
      </div>
      <div className={classes.subjectHeadRight}>
        
      <div className={classes.subjectHeadRightTop}>
        <p className={classes.subjectHeadSelectSubject}>Switch to different subject : </p>
        <FormControl className={classes.subjectHeadDropdown}>
        <Select
          value={subject}
          onChange={handleChange}
          displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
          className={classes.subjectHeadDropdownOption}
        >
          <MenuItem value="">
          <em>Subject</em>
          </MenuItem>
          <MenuItem value={1}>Physics</MenuItem>
          <MenuItem value={2}>Chemistry</MenuItem>
          <MenuItem value={3}>Maths</MenuItem>
          <MenuItem value={4}>Biology</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className={classes.subjectHeadRightbottom}>
      <img  className={classes.subjectHeadImage} src={Image} alt="" />
      </div>
      </div>
    </div>
  );
}
