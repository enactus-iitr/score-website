import React from 'react'
import useStyles from './styles'
import imagephy from '../../assets/icons/PhysicsIcon.svg'
import imagemat from '../../assets/icons/MathsIcon.svg'
import imageche from '../../assets/icons/ChemistryIcon.svg'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ClassTemplate = ({ cls }) => {
  const classes = useStyles()

  return (
    <Box display='flex' justifyContent='center'>
      <div className={classes.mainbox}>
        <Box className={classes.yellowbar}></Box>
        <h1 className={classes.heading}>{cls}th Class</h1>
        <p className={classes.classDesc}>
        {cls==11 && <p>Starting preparation for prestigious competitive exams like JEE Mains and JEE Advanced from class 11 itself gives the student a much-needed firm grasp over the basics and can put the student in a better position to crack these exams. In Class 11, Students are introduced to Mechanics, Physical Chemistry, and Algebra which provide the foundation for their preparation.</p>}
        {cls==12 && <p>A student in their 12th class is given an opportunity to appear for one of the most prestigious engineering entrance exams in India. In order to be better placed to face this exam, prior preparation and strong basics in the concepts of class 12 is a must. In Class 12, Important Topics like Electrodynamics, Calculus, and Organic Chemistry are covered which are crucial for any exam.</p>}
        </p>
        <div className={classes.subjects}>
          <Link to={`/subject/${cls}/physics`}>
            <div className={classes.subject}>
              <img src={imagephy} alt='physics' />
            </div>
          </Link>
          <Link to={`/subject/${cls}/chemistry`}>
            <div className={classes.subject}>
              <img src={imageche} alt='chemistry' />
            </div>
          </Link>
          <Link to={`/subject/${cls}/maths`}>
            <div className={classes.subject}>
              <img src={imagemat} alt='maths' />
            </div>
          </Link>
        </div>
      </div>
    </Box>
  )
}

export default ClassTemplate
