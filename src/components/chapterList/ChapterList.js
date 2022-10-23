import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import React from 'react';
//import { useNavigate } from 'react-router-dom';
//import { useState } from 'react'
import useStyles from './styles'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
// import SubjectChapter from '../SubjectChapter/SubjectChapter'
import { Link } from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const ChapterList = (props) => {
  const classes = useStyles()

  //console.log(cls)
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
    


  let phy11 = ['Units and Measurements', 'Motion in Straight Line', 'Motion in Plane', 'Laws of Motion', 'Work,Energy & Power', 'Rotational Motion', 'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves', 'Vectors', 'Centre of Mass']
  let chem11 = ['Some basic concepts of chemistry', 'Atomic structure', 'Periodic table & properties', 'chemical bonding & Molecular structure', 'States of matter', 'Thermodynamics', 'Equilibrium:Ionic & Chemical', 'Redox reactions', 'Hydrogen', 'S-block', 'P-block', 'General organic chemistry', 'Mole concept']
  let math11 = ['Sets', 'Relation & Functions ', 'Trigonometric Functions', 'Principle of mathematical induction ', 'Complex numbers & Quadratic equations', 'Linear inequalities', 'Permutations & combinations', 'Binomial theorem', 'Sequence & series', 'Straight Lines', 'Conic Section', 'Limits & Derivatives', 'Mathematical Reasoning', 'Statistics', 'Probability', 'Logarithm', 'Circles', 'Solution of Triangle', 'NCERT', 'PYQS']
  let phy12 = ['Electric charges & fields', 'Electrostatic Potential & Capacitance', 'Current electricity', 'Moving charges & magnetism', 'Magnetism & matter', 'Electromagnetic induction', 'Alternating current', 'Electromagnetic waves', 'Ray optics and optical instruments', 'Wave optics', 'Dual nature of Radiation & matter', 'Atoms','Semiconductor Electronics', 'Communication Systems']
  let chem12 = ['The solid states', 'Solutions', 'Electrochemistry', 'Chemical kinematics', 'Surface Chemistry', 'Metallurgy', 'P-block', 'd & f block', 'Coordination compounds', 'Haloalkanes & Haloarenes', 'Alcohols , Phenols & Ethers', 'Aldehyde ,Ketones & Carboxylic acid', 'Amines', 'Biomolecules', 'Polymers', 'Chemistry in everyday life']
  let math12 = ['Relations & Functions', 'Inverse Trigonometric Functions', 'Continuity & Differntiability', 'Methods of differntiation', 'Application of derivatives', 'Integrals', 'Applications of integrals', 'Differntial equations', 'Vector algebra', '3-D Geometry', 'Matrices & Determinants', 'Area under curve']
  let phy11maped = phy11.map((name) => <Box className={classes.chaptersList}>
    <Box className={classes.chapter}>
      <Typography className={classes.chapterName} >
        {name}
      </Typography>
      <Typography className={classes.learnbtn}>
        <Link className={classes.learnIcon} to={{
          pathname:`/subjectchapter/${props.cls}/${props.sub}/${name}`,
        }} >Learn </Link>
        <KeyboardArrowRightIcon />
      </Typography>
    </Box>
    <br />
  </Box>)
  let phy12maped = phy12.map((name) => <Box className={classes.chaptersList}>
    <Box className={classes.chapter}>
      <Typography className={classes.chapterName} >
        {name}
      </Typography>
      <Typography className={classes.learnbtn}>
        <Link className={classes.learnIcon} to={`/subjectchapter/${props.cls}/${props.sub}/${name}`}>Learn </Link>
        <KeyboardArrowRightIcon />
      </Typography>
    </Box>
    <br />
  </Box>)
  let chem11maped = chem11.map((name) => <Box className={classes.chaptersList}>
    <Box className={classes.chapter}>
      <Typography className={classes.chapterName} >
        {name}
      </Typography>
      <Typography className={classes.learnbtn}>
        <Link className={classes.learnIcon} to={`/subjectchapter/${props.cls}/${props.sub}/${name}`} >Learn </Link>
        <KeyboardArrowRightIcon />
      </Typography>
    </Box>
    <br />
  </Box>)
  let chem12maped = chem12.map((name) => <Box className={classes.chaptersList}>
    <Box className={classes.chapter}>
      <Typography className={classes.chapterName} >
        {name}
      </Typography>
      <Typography className={classes.learnbtn}>
        <Link className={classes.learnIcon} to={`/subjectchapter/${props.cls}/${props.sub}/${name}`} >Learn </Link>
        <KeyboardArrowRightIcon />
      </Typography>
    </Box>
    <br />
  </Box>)
  let math11maped = math11.map((name) => <Box className={classes.chaptersList}>
    <Box className={classes.chapter}>
      <Typography className={classes.chapterName} >
        {name}
      </Typography>
      <Typography className={classes.learnbtn}>
        <Link className={classes.learnIcon} to={`/subjectchapter/${props.cls}/${props.sub}/${name}`} >Learn </Link>
        <KeyboardArrowRightIcon />
      </Typography>
    </Box>
    <br />
  </Box>)
  let math12maped = math12.map((name) => <Box className={classes.chaptersList}>
    <Box className={classes.chapter}>
      <Typography className={classes.chapterName} >
        {name}
      </Typography>
      <Typography className={classes.learnbtn}>
        <Link className={classes.learnIcon} to={`/subjectchapter/${props.cls}/${props.sub}/${name}`} >Learn </Link>
        <KeyboardArrowRightIcon />
      </Typography>
    </Box>
    <br />
  </Box>)


  const renderChapterDetails = course => {

    switch (course) {
      case 'Jee Main':
        return (

          <>
            <Typography className={classes.subheading}>
              Select the chapter you want to study for Jee Main :
            </Typography>
            {props.cls === '11' && props.sub === 'physics' && phy11maped}
            {props.cls === '11' && props.sub === 'chemistry' && chem11maped}
            {props.cls === '11' && props.sub === 'maths' && math11maped}
            {props.cls === '12' && props.sub === 'physics' && phy12maped}
            {props.cls === '12' && props.sub === 'chemistry' && chem12maped}
            {props.cls === '12' && props.sub === 'maths' && math12maped}
           
          </>
        )
      case 'Jee Advanced':
        return (

          <>
            <Typography className={classes.subheading}>
              Select the chapter you want to study for Jee Main :
            </Typography>
            {props.cls === '11' && props.sub === 'physics' && phy11maped}
            {props.cls === '11' && props.sub === 'chemistry' && chem11maped}
            {props.cls === '11' && props.sub === 'maths' && math11maped}
            {props.cls === '12' && props.sub === 'physics' && phy12maped}
            {props.cls === '12' && props.sub === 'chemistry' && chem12maped}
            {props.cls === '12' && props.sub === 'maths' && math12maped}
           </>
        )
      case 'Boards':
        return (

          <>
            <Typography className={classes.subheading}>
              Select the chapter you want to study for Jee Main :
            </Typography>
            {props.cls === '11' && props.sub === 'physics' && phy11maped}
            {props.cls === '11' && props.sub === 'chemistry' && chem11maped}
            {props.cls === '11' && props.sub === 'maths' && math11maped}
            {props.cls === '12' && props.sub === 'physics' && phy12maped}
            {props.cls === '12' && props.sub === 'chemistry' && chem12maped}
            {props.cls === '12' && props.sub === 'maths' && math12maped}   
          </>
        )
      default:
        return (
          <>
            <Typography className={classes.subheading}>
              Please select a course
            </Typography>
          </>
        )
    }
  }

  return (
    <div className={classes.mainbox}>
      <Typography className={classes.heading}>
        Select the exam you want to study for :
      </Typography>

      <Box className={classes.tabsCourse}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          aria-label='simple tabs example'
        >
          <Tab
            label='Jee Main'
            className={classes.tabButton}
            {...a11yProps(0)}
          />
          <Tab
            label='Jee Advanced'
            className={classes.tabButton}
            {...a11yProps(1)}
          />
          <Tab label='Boards' className={classes.tabButton} {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          {renderChapterDetails('Jee Main')}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {renderChapterDetails('Jee Advanced')}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {renderChapterDetails('Boards')}
        </TabPanel>
      </Box>
    </div>
  )
}

export default ChapterList
