import { makeStyles } from '@material-ui/core/styles';
import {colors} from '../styles/colors';

const useStyles = makeStyles({
    body:{ 
        fontSize:"62.5%", 
    },
    subjectHeadContainer: {
        background:colors.blue,
        width: '100%',
        height: '37.56rem',
        display:'inline-flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
  },
  subjectHeadLeft:{
      display: 'flex',
      flexDirection: 'column',
  },
  subjectHeadClass:{
    display:'inline-block',
    marginTop: '10%',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '3rem',
    lineHeight: '3.75rem',
    letterSpacing:'0.03em',
    color:colors.white,
  },
  subjectHeadName:{
    marginTop: '2%',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '9rem',
    lineHeight: '11.31rem',
    letterSpacing: '0.03em',
    color: colors.yellow,
  },
  subjectHeadContent:{
    width: "39.62rem",
    height: "13.5rem",
    marginTop: "4%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    textAlign: "justify",
    letterSpacing: "0.03em",
    color: colors.white
  },
  subjectHeadRight:{
    display: 'flex',
    flexDirection: 'column',
  },
  subjectHeadRightTop:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: "15%",
    alignSelf:"flex-end",
  },
  subjectHeadSelectSubject:{
    display:"block",
    width: "78%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
    color: colors.white
  },
  subjectHeadDropdown:{
    width: "10.437rem",
    height: "2.562rem",
    marginLeft:"1%",
    marginTop:'-0.5rem',
    background: colors.lightblue,
    borderRadius: "0.625rem",
  },
  subjectHeadDropdownOption:{
    width: "6.25rem",
    height: "1.375rem",
    left: "1.75rem",
    top: "0.625rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1rem",
    color: colors.white,
  },
  subjectHeadRightbottom:{
    display:"inline-block",
    width: "78%",
    height: "58%",
    background: colors.lightblue,
    opacity: 0.85,
    marginTop:"14%",
    borderRadius: "0.625rem",
    alignSelf:"flex-end",
  },
  subjectHeadImage:{
    marginLeft:"3.7rem",
    marginTop:"3.7rem"
  }
})

export default useStyles
