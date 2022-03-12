import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const useStyles = makeStyles({
  layoutContainer: {
    position: 'relative',
    width: '100%'
  },
  childContainer: {
    minHeight: '90vh',
    overflowX: 'hidden'
  }
})

export default function BasicLayout ({ children }) {
  const styles = useStyles()

  return (
    <div className={styles.layoutContainer}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid className={styles.childContainer} item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}
