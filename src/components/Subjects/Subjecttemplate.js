import React from 'react'
import UseStyles from './styles'
import imagephy from './Group 151physics.svg'
import imagemat from './Group 153maths.svg'
import imageche from './Group 152chemistry.svg'

const SubjectTemplate =()=> {

    const classes=UseStyles()


    return <div className={classes.some}>
        <h1 className={classes.heading}> 11th Class</h1>
        <p style={{marginTop:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s. the industry's standard dummy text ever since
             the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
             has been the industry's standard dummy text ever since the 1500s. the industry's standard dummy 
             text ever since the 1500s.</p>

       
        <div className={classes.subjects}>
            <div className={classes.subject}>
                <img src={imagephy}/>
            </div>
            <div className={classes.subject}>
                <img src={imageche}/>
            </div>
            <div className={classes.subject}>
                <img src={imagemat}/>
            </div>
            
        </div>

        <div className={classes.yellowbar}>
           
           </div>
    </div>
}

export default SubjectTemplate;