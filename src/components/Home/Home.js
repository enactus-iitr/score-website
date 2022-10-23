import React from 'react'
import { Button, Box, Typography, Grid } from '@material-ui/core'
import useStyles from './styles'
import { colors } from '../../styles/colors'
import enactusImg from '../../assets/images/enactus.png'
import homeIcon from '../../assets/images/HomeIcon.png'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const Home = () => {
  const classes = useStyles()

  return (
    <Box>
      <Box display='flex' className={clsx(classes.scoreHome)}>
        <Grid item xs={12} sm={8} md={6} className={classes.scorePage}>
          <Typography variant='h2' className={`${classes.heading}`}>
            SCORE
          </Typography>
          <Typography variant='h6' className={classes.iitHead}>
            IIT Roorkee
          </Typography>
          <p className={classes.desc}>
          JEE Advanced is perhaps India's most prestigious and difficult engineering entrance examination. Score aims to give an edge to aspirants by providing material curated from high-quality sources. Click on the button below to give a boost to your preparation!
          </p>
          <Link to='/course' style={{ textDecoration: 'none' }}>
            <Button
              className={`${classes.homeButton} ${classes.learnCase}`}
              variant='contained'
            >
              <span className={classes.btnText} style={{ color: colors.blue }}>
                Start Learning
              </span>
            </Button>
          </Link>
          {/*<Button className={`${classes.homeButton} ${classes.knowMoreCase}`} variant="contained"><span className={classes.btnText} style={{ color: '#FFFFFF' }}>Know More</span></Button>*/}
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.htag}>
          <img className={classes.imgEnactus} src={homeIcon} />
        </Grid>
      </Box>
      <Box display='flex' className={classes.enactusDetail}>
        <Grid item xs={12} sm={8} md={6} className={classes.scorePage}>
          <Typography variant='h2' className={classes.enactus}>
            Enactus
          </Typography>
          <Typography variant='h6' className={classes.iitRoorkee}>
            IIT Roorkee
          </Typography>
          <Typography className={classes.descEnactus}>
          Enactus is an international non-profit organization that believes in investing in students who take entrepreneurial action for others, thus creating a better world for us all. Enactus works to promote social entrepreneurship among young minds in educational institutes all over the globe. We are the IIT-Roorkee Chapter of Enactus. We are currently working on various projects which aim to have a high impact on the community.{' '}
          </Typography>
          {/*<Button className={classes.btnKnow}><span className={classes.btnText} style={{ color: '#191C4D' }}>Know More</span></Button>*/}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className={clsx(classes.htag, classes.enactusImg)}
        >
          <img className={classes.imgEnactus} src={enactusImg} />
        </Grid>
      </Box>
    </Box>
  )
}

export default Home
