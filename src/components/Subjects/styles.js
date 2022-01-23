import { makeStyles} from "@material-ui/core";
import { colors } from '../../../styles/colors';


const UseStyles= makeStyles({

    body:{
        color:'white',
        
        
    },


    some:{
        // X: '241px',
        // Y: '309px',
        width: '70%',
        // height: '',
        borderRadius: '20px',
        padding:'8%',
        paddingTop: '3%',
        backgroundColor: colors.blue,
        color:'white',
        marginLeft: '15%',
        

    },

   yellowbar:{
       width:'100px',
       height: '100px',
       backgroundColor: colors.yellow,
       transform:'translate(-100px,-200px)'
       
   },


   subjects:{
        marginTop: '2rem',
        display: 'flex',
        flexWrap: 'wrap'
   },

   subject:{
        backgroundColor:colors.lightblue,
        width:'9rem',
        height:'9rem',
        paddingTop:'1.3rem',
        borderRadius:'1rem',
        // paddingLeft:'1.7rem',
        marginRight: '1rem',
        marginTop: '1rem',
        display:'flex',
        justifyContent:'center'

   }




})

export default UseStyles;