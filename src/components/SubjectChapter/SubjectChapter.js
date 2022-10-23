import React from 'react'
import { useState } from 'react'
// how to pass props through linking 
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core'
import useStyles from './styles'
import prevYearQues from '../../assets/icons/PrevYearQues.svg'
import studyMaterial from '../../assets/icons/StudyMaterial.svg'
import videoLecture from '../../assets/icons/VideoLecture.svg'
import pracQues from '../../assets/icons/PracticeQuestion.svg'

function TabPanel (props) {
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

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const SubjectChapter = () => {
  
  var url_string = window.location.href; 
var url = new URL(url_string);
var pathArray = url.pathname.split('/');

var cls =pathArray[2]
var subject =pathArray[3]
var chapter =pathArray[4]
var chpt =chapter.replace(/%20/g,' ')
var index=0;

  let allchapters = ['Units and Measurements', 'Motion in Straight Line', 'Motion in Plane', 'Laws of Motion', 'Work,Energy & Power', 'Rotational Motion', 'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves', 'Vectors', 'Centre of Mass'
  ,'Some basic concepts of chemistry', 'Atomic structure', 'Periodic table & properties', 'chemical bonding & Molecular structure', 'States of matter', 'Thermodynamics', 'Equilibrium:Ionic & Chemical', 'Redox reactions', 'Hydrogen', 'S-block', 'P-block', 'General organic chemistry', 'Mole concept'
  ,'Sets', 'Relation & Functions', 'Trigonometric Functions', 'Principle of mathematical induction', 'Complex numbers & Quadratic equations', 'Linear inequalities', 'Permutations & combinations', 'Binomial theorem', 'Sequence & series', 'Straight Lines', 'Conic Section', 'Limits & Derivatives', 'Mathematical Reasoning', 'Statistics', 'Probability', 'Logarithm', 'Circles', 'Solution of Triangle', 'NCERT', 'PYQS'
  ,'Electric charges & fields', 'Electrostatic Potential & Capacitance', 'Current electricity', 'Moving charges & magnetism', 'Magnetism & matter', 'Electromagnetic induction', 'Alternating current', 'Electromagnetic waves', 'Ray optics and optical instruments', 'Wave optics', 'Dual nature of Radiation & matter', 'Atoms', 'Semiconductor Electronics', 'Communication Systems'
  ,'The solid states', 'Solutions', 'Electrochemistry', 'Chemical kinematics', 'Surface Chemistry', 'Metallurgy', 'P-block', 'd & f block', 'Coordination compounds', 'Haloalkanes & Haloarenes', 'Alcohols , Phenols & Ethers', 'Aldehyde ,Ketones & Carboxylic acid', 'Amines', 'Biomolecules', 'Polymers', 'Chemistry in everyday life'
  ,'Relations & Functions', 'Inverse Trigonometric Functions', 'Continuity & Differntiability', 'Methods of differntiation', 'Application of derivatives', 'Integrals', 'Applications of integrals', 'Differntial equations', 'Vector algebra', '3-D Geometry', 'Matrices & Determinants', 'Area under curve']
  
  let vl=['https://www.youtube.com/playlist?list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N','https://youtu.be/XIJAZM5G5Fg','https://www.youtube.com/playlist?list=PLbu_fGT0MPsvEPAW19bDBzHCRxyWbpZvO','','https://www.youtube.com/watch?v=WEriI0hK0lc&list=PLYVDsiuOZP5qOhevtD5Ikd3R6gy6wsMaW','https://www.youtube.com/watch?v=xnKTuVckfDk&list=PL-afQELdVORnXbhqjRnjVORf6Ce2KA9KR','https://www.youtube.com/playlist?list=PLF_7kfnwLFCEwyxzG-rg2uYeYA2q1S2d8','https://youtu.be/vsozTe2eu6Y?t=7','https://www.youtube.com/playlist?list=PLF_7kfnwLFCHXd4k2jaPkHOBMzzGCq7t0','https://www.youtube.com/watch?v=zyJkmIAda6E','https://www.youtube.com/playlist?list=PLeyMlqy0Z1nYX_91BLAjU688E-YuM8T8b','https://www.youtube.com/watch?v=U9DaA-2M7yo','https://www.youtube.com/playlist?list=PLF_7kfnwLFCEvhpUaPoDQvhPwug0aZ1R4','https://www.youtube.com/playlist?list=PLbu_fGT0MPsvEu3Zsoyt3EHmoybHek75h','https://www.youtube.com/playlist?list=PLNkAOg4wQQXPL4HL_fHSLMYp50Yp4MCHj','https://www.youtube.com/playlist?list=PL_A4M5IAkMad-bxE6Fu7wyp_wyUcctCmU','https://www.youtube.com/playlist?list=PLbu_fGT0MPssEl7Z5fZv6TURYnm-n799b','https://www.youtube.com/watch?v=8owJbGvpPL4&list=PLxyGaR3hEy3hQBpquwxccX85xR64uz_A7','https://www.youtube.com/playlist?list=PLbu_fGT0MPsuhfwwMtzne8SDJ8vdGL3al','https://youtube.com/playlist?list=PLF_7kfnwLFCGzzyaPRyNjSXRRR7W_qmny','https://www.youtube.com/playlist?list=PLbu_fGT0MPsvAoZLCy5IRhdLGw3X5SLMW','https://www.youtube.com/watch?v=V2A5Gf0Fw-Y&list=PL_A4M5IAkMaeRvDnG59F_78rB1xnVGll9','','https://www.youtube.com/watch?v=d1sQg1Cql_o','https://www.youtube.com/watch?v=1U3-cdOoOD4','https://www.youtube.com/watch?v=I1a0eBq09MY','https://www.youtube.com/watch?v=SDhze1GBDdY','https://www.youtube.com/playlist?list=PLbu_fGT0MPst5bHfwlMcTTSpYfmESHFsF','https://youtu.be/YPUHbVRIUGg','https://www.youtube.com/playlist?list=PLbu_fGT0MPstU8CwQSUj5-UsyCUjYFMN-','https://www.youtube.com/watch?v=9-u0G4neDeE&list=PL_A4M5IAkMad5zB0Dh6gUw1eYK8dN7hP7','https://www.youtube.com/playlist?list=PL_A4M5IAkMafhPkzpa16mbUDqD8d7bBhL','https://www.youtube.com/watch?v=rKPZqAwzheY', '', 'https://youtu.be/UJXel5_AOSY', 'https://youtube.com/playlist?list=PLbu_fGT0MPssMPJuhGZfYKn6MVqcDUjwJ', 'https://www.youtube.com/playlist?list=PL_A4M5IAkMacSgRRlEkUB9v-gE1yxw_rG', 'https://www.youtube.com/playlist?list=PL_A4M5IAkMaeu--QWWngkEI10RKOXf8TF', 'https://youtube.com/playlist?list=PL_A4M5IAkMaf3M7rSq9M4NmLACdYuCQ_7', '', 'https://www.youtube.com/watch?v=7WxUaH-50Vw&list=PLbu_fGT0MPsvdAD7rKScmZhJhuB09FzWC&index=1', ' ', 'https://www.youtube.com/playlist?list=PL_A4M5IAkMadco0ISV4gL7BEkzs7ki6lm', 'https://www.youtube.com/playlist?list=PL_A4M5IAkMaf-WePkSulK_zt0yfQUrZgE', 'https://www.youtube.com/watch?v=bOQl1kUBivY', 'https://youtube.com/playlist?list=PL_A4M5IAkMadiR6WFaUTQegpdKUJRD90D', 'https://youtube.com/playlist?list=PLbu_fGT0MPsvzEqXCkrnAetBPuus-kZp2', '', ''
 ,'https://www.youtube.com/watch?v=DJw9Vnt-kE4', 'https://www.youtube.com/playlist?list=PLF_7kfnwLFCFxjSU9HKYiq2K2cxbpf6mz', 'https://youtube.com/playlist?list=PLYVDsiuOZP5pNp6mKyhYm_dyKhQa89d-U', 'https://youtube.com/playlist?list=PLF_7kfnwLFCF8sjVSdxn3yWAghIgVnw26', 'https://youtube.com/playlist?list=PLYxMlXeOofIVFzJybpSfAM5pbbhUwxYrn', 'https://youtube.com/playlist?list=PLbu_fGT0MPss8qMczR0pMtqkBZFEP41uB', 'https://www.youtube.com/watch?v=b6Lwe72XGyc', 'https://youtube.com/playlist?list=PLYxMlXeOofIVFzJybpSfAM5pbbhUwxYrn', 'https://youtube.com/playlist?list=PLYVDsiuOZP5pDolBtG83KK5GNiFP2Wdwo', 'https://youtube.com/playlist?list=PLF_7kfnwLFCHr4eZATw4YURnGNr6mwF5R', 'https://www.youtube.com/playlist?list=PLbu_fGT0MPsu0J-ny0EBpnvR7yx9mS5Or', 'https://www.youtube.com/playlist?list=PLDzI0P7fUJcNGgA2DrKmoDfFCQSvbAOag', 'https://youtube.com/playlist?list=PLc8bIC9m4cTJKtM_mjzBrg1cUJx0vuhNJ', 'https://youtube.com/playlist?list=PLF7C-DWw7CnPwCSx8KxsJJvgLp9415W_o'
  ,'https://www.youtube.com/watch?v=vt50PgWrrno', 'https://www.youtube.com/playlist?list=PLbu_fGT0MPsvUw7BWkS0MUdq2YU-fSf4w', 'https://www.youtube.com/watch?v=O3-2bcBXbEQ&t=2368s', 'https://www.youtube.com/watch?v=kyKmGR1y77U', 'https://www.youtube.com/watch?v=IBQnbMPnYxA', 'https://youtu.be/p1pa6hAWU-Q', 'P-https://youtube.com/playlist?list=PLbu_fGT0MPsssR5Em2OzTMapSZ1pMT1l5', 'https://youtu.be/p7B6JYr_1i8', 'https://www.youtube.com/watch?v=eT9ovn-inGY', 'https://youtube.com/playlist?list=PLzSTglXGeoUsPlazjJePtupJbBgZnqJcp', 'https://youtu.be/dLzYauDcM7o', 'https://youtu.be/AwpOjvXgDkw', 'https://youtube.com/playlist?list=PLzSTglXGeoUuWKjKHwOyL-cax5skhif0T', 'https://youtu.be/xuKRxlEcJvM', 'https://www.youtube.com/watch?v=BC1nk4x5BlQ', 'https://www.youtube.com/watch?v=FugrbPXmThU'
  ,'https://youtube.com/playlist?list=PLbu_fGT0MPstwkq3uZYzTgOj5ZYG0L8gV', 'https://www.youtube.com/playlist?list=PLbu_fGT0MPstK9u3OsHbPYorvKnMcuWoO', 'https://www.youtube.com/watch?v=QFc0VL51OPs&list=PL_A4M5IAkMads1bsxLYBoJOLA3bWsY7mK', 'https://www.youtube.com/playlist?list=PLbu_fGT0MPstRQE_YHxk78sWcgwskuYpe', 'https://www.youtube.com/watch?v=1UlGCFupbWw&t=3157s', 'https://www.youtube.com/playlist?list=PLqjFFrfKcY5y047_ivKEtcLq0VfYx0t6_', 'https://www.youtube.com/playlist?list=PLv2dcAh4E3PUD4Mjw8VH8gkfC5mo5ppBq', 'https://youtube.com/playlist?list=PLKKfKV1b9e8okem4FUhff_2r5JNMkhk2o', 'https://www.youtube.com/watch?v=dcVOOKmOEmw&list=PLbu_fGT0MPsvj-vBNsKMtrvwLEGdLNjzl', 'https://www.youtube.com/watch?v=MZve-8aUBPQ&list=PLbu_fGT0MPsuIMX8r6Gcjj9Y86Y49yeuJ', 'https://youtube.com/playlist?list=PL_A4M5IAkMaex9aIhynPtk3ZO-xO_G2kJ', 'https://www.youtube.com/watch?v=_l5nx9Cdu4A&t=6156s']
  let sm=['http://physicswallahalakhpandey.com/alpha-xi-physics/02-units-and-measurement/','','https://byjus.com/ncert-solutions-class-11-physics/chapter-4-motion-in-a-plane/','','https://drive.google.com/drive/folders/1gQCUUF0IAjL7ttWB8c8_UoeiJpN1c_0y?usp=sharing','','https://ncert.nic.in/ncerts/l/keph108.pdf','https://www.learncbse.in/mechanical-properties-solids-cbse-notes-class-11-physics/','','','','','','','http://problemsphysics.com/vectors/formulas.html','https://www.esaral.com/category/study-material/class-11-physics/mind-maps-for-revision/','https://drive.google.com/file/d/1vYhlgfYKQEapV7EPTJlIrz63MVk-_J8Z/view','','https://www.esaral.com/periodic-table/','','https://www.esaral.com/gaseous-state-notes-for-class-11-iit-jee-neet/','','https://drive.google.com/drive/folders/1FymywU4MWS9E5Z3c1i1zx2XJJk7aNtxc?usp=sharing','','https://drive.google.com/file/d/1rbccLZqFQ-FvjFe7UD2pwd6dj38pKxlr/view?usp=sharing','https://www.learncbse.in/s-block-elements-cbse-notes-class-11-chemistry/','https://ncert.nic.in/ncerts/l/kech204.pdf','https://drive.google.com/file/d/0B7XdoBFDgMITS0tPS1NlRk5wRFNNb1UtMVF1SmxOMXFCUlFn/view?resourcekey=0-P2JAw4jKsZSuisxKOyWehg','https://drive.google.com/file/d/1wG3zxVB852NJE6HS8TW-fqij0r01leJQ/view?usp=sharing','https://ncert.nic.in/ncerts/l/kemh101.pdf','https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbDdYVnQ0a1MtZE9VbXBtaW5ZUGdSUThQZTFNQXxBQ3Jtc0ttb1kxMENZRG0yWWlMMkppdFhXQzRmZC1ZUXBIMkMwZDdUVDJvbTRqM1ZtVF94WlU1amtFNXd4SXNvS00teThpSDdWY0RoalB1c1FZSnpmaG9NTkxhSU5jYXoxRUdSUFpLcVRqVUxiU0tZa0ZWaGpLZw&q=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1axN5VNne4cWewpWzuPrnGoUf4ebKtlZt%2Fview%3Fusp%3Dsharing','https://drive.google.com/file/d/1_zwXgBvY_llUe9PsmzIJ21LNtuzUn2PP/view','', 'https://drive.google.com/drive/folders/1_NJ6r0krA4IlWvFNSeg1-m103GToHf03?usp=sharing', 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2lrTTd4TXRDbFFXc3lYbWdJWDZEY0V4TGxIQXxBQ3Jtc0ttV2xkRDJtQnR5MjBmOWJqekR5NHFIbWp2d3VkQ1k5aXJjaEpNWDJiQi1yQk5EUV9VaWdyazhKNGdfMTBGWHhLWGdQNkZMLU1rQW9SSlRxaGozZ0x0Wng5dDQzV3JiNE9WTVZqN2xtOEFmMHFqb281MA&q=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F13v9iDgNobN3_hLqM0d2x6PmFSBL2LdjM%2Fview%3Fusp%3Dsharing&v=UJXel5_AOSY', '', 'https://www.askiitians.com/revision-notes/maths/binomial-theorem/#:~:text=The%20number%20of%20terms%20in,the%20end%20are%20always%20equal.', 'https://drive.google.com/file/d/1XXxw5PbRFfr-Ax-7GpCM1j3L4V3xWVNe/view?usp=sharing', 'https://www.esaral.com/straight-lines-class-11-notes/', 'https://docs.google.com/document/d/1wJBQ8C7WsIpRcuhL0oePC5DU4g5sduaF/edit?usp=sharing&ouid=107247457200069812325&rtpof=true&sd=true', 'https://www.esaral.com/mind-maps-for-limits-revision-class-11-jee-main-advanced/', '', 'https://drive.google.com/file/d/1XXxw5PbRFfr-Ax-7GpCM1j3L4V3xWVNe/view?usp=sharing', '', 'https://www.bansal.ac.in/acc_sample_maths.pdf', 'https://www.esaral.com/circle-class-11-notes-formulae-equations-of-circle/', 'https://www.entrancei.com/chapter-trignometric-equations/properties-of-triangles', 'https://drive.google.com/drive/folders/1diU6R45OrQoTWzOiivL0bSffLxJTtoSg?usp=sharing', 'https://drive.google.com/drive/folders/1CDA-VrasFqht2cfiEMzjNJr0WJOx32Kg?usp=sharing'
  ,'https://byjus.com/jee/important-electrostatics-formulas-for-jee/', 'https://physicsgurukul.com/wp-content/uploads/2019/05/dpp-16-electric-potential-capacitance.pdf', 'https://youtu.be/FBFAj1z_rCQ', 'https://www.esaral.com/moving-charges-and-magnetism-class-12-notes/', 'https://www.teachmint.com/tfile/studymaterial/class-12th/12thchemistryclasses21/magnetismandmatterdpppdf/b8959b8c-fc83-4e7c-9b8c-2ebbf20f550d', '', 'https://vmkt.s3.ap-southeast-1.amazonaws.com/app_youtube_sprints/Alternating+Current+Revision+in+One+Shot+JEE+2022+CC+Suri+Sir+Physics+VJEE.pdf', 'https://www.askiitians.com/revision-notes/physics/electromagnetic-waves/', '', '', 'https://www.esaral.com/mind-maps-for-modern-physics-revision-class-xii-jee-neet/', 'https://www.esaral.com/mind-map-of-nuclear-physics-class-12-jee-neet-download-from-here/', 'https://www.esaral.com/semiconductor-electronics-class-12-notes-iit-jee-neet/', 'https://www.vedantu.com/iit-jee/jee-main-communication-system-revision-notes'
  ,'https://vmkt.s3.ap-southeast-1.amazonaws.com/app_youtube_sprints/-complete+solid+state+(1).pdf', 'https://www.saptarshiclasses.com/wp-content/uploads/2019/02/Sample-Notes-Chemistry-I-Solution-and-Coligative.pdf', '', 'https://www.selfstudys.com/books/jee-chemistry/english/inorganic/12th/dpp-no-49-chemical-kinetics/111776', 'https://vmkt.s3-ap-southeast-1.amazonaws.com/app_youtube_sprints/Surface+chemistry+_+Lecture+-1+_+24-05-2021.pdf', 'https://mycbseguide.com/blog/general-principles-processes-isolation-elements-class-12-notes-chemistry/', 'https://www.esaral.com/p-block-elements-nitrogen-family-elements/-block', 'https://www.esaral.com/d-and-f-block-elements-class-12-notes/', 'https://drive.google.com/file/d/1gr3m7T9cni_45dc7i6isOczZ627UIB8t/view', 'https://www.esaral.com/halogen-derivatives-notes-for-class-12-iit-jee-neet/', 'https://www.esaral.com/alcohol-ether-and-phenol-notes-for-class-12-iit-jee-neet/', 'https://www.esaral.com/aldehyde-ketone-benzaldehyde-notes-for-class-12-iit-jee-neet/', '', 'https://www.vedantu.com/iit-jee/jee-main-biomolecules-revision-notes', '', 'https://drive.google.com/file/d/1PFLmi0g8SqNP7eIiSAxc0GOxUprQBJZm/view?usp=sharing'
  ,'', 'https://www.toppr.com/ask/content/posts/inverse-trigonometric-functions/mindmap-28138/', 'https://drive.google.com/file/d/1HkpcnOABZvIN7bFXryJcL_waYlNsWnhn/view', 'https://drive.google.com/file/d/1m68X6fmL0RgThFyUWN6rDTz323zREa7B/view', 'https://vmkt.s3-ap-southeast-1.amazonaws.com/app_youtube_sprints/AOD+1+(Derivative+as+Rate+Measure+%2B+Approximations+and+Errors).pdf', 'https://vmkt.s3-ap-southeast-1.amazonaws.com/app_youtube_sprints/JEE_CBSE+2021_+INTEGRATION+L-1+_+INTRODUCTION.pdf', '', 'https://drive.google.com/file/d/1lYPk2wYzyLBDXsHp-xCOLhS0zde1iSsD/view?usp=sharing', 'https://www.esaral.com/mind-maps-for-vectors-revision-class-12-jee/', 'https://www.esaral.com/mind-maps-of-3d-geometry-class-12-jee/', 'https://www.esaral.com/tag/matrices-and-determinants/', 'https://vmkt.s3.ap-southeast-1.amazonaws.com/app_youtube_sprints/YT+_+Areas+under+Curve+-+12th+Elite.pdf']
  let pq=['','','https://www.studyadda.com/question-bank/jee-main-advanced/physics/two-dimensional-motion/uniform-circular-motion/951','','https://www.youtube.com/watch?v=Or-fU_e6Z0U&t=0s','https://drive.google.com/file/d/1dapNtCIyTaaAmuMFaDo8G_en23SjrEXE/view?usp=sharing','https://www.studyadda.com/question-bank/jee-main-advanced/physics/gravitation/critical-thinking/985','','https://www.youtube.com/watch?v=RoBZABSkByw','','https://www.youtube.com/watch?v=bFcM5nGOFTY&list=PLHEUDUID1Uxu7db8djmWDMVys5tiuKuwZ&index=16','https://www.youtube.com/watch?v=J-8ySxgcyjU','https://www.embibe.com/','https://byjus.com/jee/jee-main-waves-on-string-previous-year-questions-with-solutions/','https://drive.google.com/file/d/0B6P1nHfwm9tvNnpZaUJUelJub0E/view?resourcekey=0-AWx1o8ZFJK71xJxrGQ1YZw','https://motion.ac.in/downloads/COM_DPP-1_Ques_p65-2.pdf','https://questions.examside.com/past-years/jee/jee-main/chemistry/some-basic-concepts-of-chemistry/','','https://questions.examside.com/past-years/jee/jee-main/chemistry/periodic-table-and-periodicity/','https://drive.google.com/file/d/1dj65mZYdEPn4n-cKrl8Ak7oIpXT6us_O/view?usp=sharing','https://questions.examside.com/past-years/jee/jee-main/chemistry/gaseous-state/','','','','https://drive.google.com/file/d/1BCOw5fdJIUm0treBLykuv5HpwVmHkO-N/view?usp=sharing','','https://www.learncbse.in/p-block-elements-cbse-notes-class-11-chemistry/','https://www.selfstudys.com/books/jee-chemistry/english/organic/11th/dpp-no-12-general-organic-chemistry/111987','https://youtu.be/RYdUkTVY-zA','','https://d10lpgp6xz60nq.cloudfront.net/pdf_download/CENGAGE_MATHS_SOLUTIONS-DPP+DAILY+PRACTICE+PROBLEMS_RELATIONS+AND+FUNCTIONS.pdf','https://www.youtube.com/playlist?list=PLbu_fGT0MPstvxSfrvyR6m2St4G9OY-6D','', '', '', 'https://www.esaral.com/permutations-combinations-class-11-notes/', 'https://www.selfstudys.com/books/jee-maths/english/dpp/maths-11th/dpp-no-62-binomial-theorem/111328', 'https://ncert.nic.in/textbook/pdf/kemh109.pdf', 'https://www.studyadda.com/question-bank/11th-class/mathematics/straight-line/critical-thinking/1383', 'https://drive.google.com/drive/folders/1ccJdZhvp19u_OrMDglpLHUKAo8L4_eG3?usp=sharing', 'https://www.esaral.com/limit-jee-main-previous-year-question-with-solutions/', '', 'https://ncert.nic.in/textbook/pdf/kemh115.pdf', '', 'https://www.youtube.com/watch?v=cBqlArWKpBc', 'https://www.studyadda.com/question-bank/jee-main-advanced/mathematics/circle-and-system-of-circles/tangent-and-normal-to-a-circle/1365', 'https://questions.examside.com/past-years/jee/jee-main/mathematics/properties-of-triangle/', '', ''
  ,'https://www.vedantu.com/iit-jee/jee-main-electrostatics-important-questions', 'https://drive.google.com/file/d/1dXiUvRTtnIkjHMZlx2mnaNH3df8Hk61d/view', 'https://youtube.com/playlist?list=PLYVDsiuOZP5qulTTrwostxzWAlcH7J9w3', 'https://physicsgurukul.com/wp-content/uploads/2019/05/dpp-18-moving-charges-magnetism.pdf', 'https://www.teachmint.com/tfile/studymaterial/class-12th/12thchemistryclasses21/magnetismandmatterdpppdf/b8959b8c-fc83-4e7c-9b8c-2ebbf20f550d', '', 'https://www.selfstudys.com/books/neet-physics/english/dpp/part-b-chapter-wise/dpp-no-21-alternating-current/182053', 'https://www.vedantu.com/iit-jee/jee-main-electromagnetic-waves-important-questions', '', 'https://drive.google.com/file/d/1XYK03lHW7bzpK3FdNiQ5HnOHPFBxs-6w/view?usp=sharing', 'https://questions.examside.com/past-years/jee/jee-main/physics/dual-nature-of-radiation/', 'https://questions.examside.com/past-years/jee/jee-main/physics/atoms-and-nuclei/', 'https://questions.examside.com/past-years/jee/jee-main/physics/electronic-devices/', ''
  ,'', 'https://questions.examside.com/past-years/jee/jee-main/chemistry/solutions/', '', 'https://drive.google.com/file/d/1_sMDc8Sp_kFwYJTJL77ZojoEEsLSPuAx/view', 'https://vmkt.s3-ap-southeast-1.amazonaws.com/app_youtube_sprints/DPP1+Surface+Chemistry+L-1+(Harsh+Sir)+(24-05-2021).pdf', 'https://www.zigya.com/competition/jee/study/Chemistry/CH/General++Principles+And+Processes+of++Isolation+Of+Elements/20', '', 'https://youtu.be/5Pj3zDrmwnw', 'https://vmkt.s3.ap-southeast-1.amazonaws.com/app_youtube_sprints/DPP1+Coordination+Compounds+L-1.pdf', '', 'https://youtu.be/ZMki8AgyGA8', 'https://youtu.be/MamI3ah5rek', 'https://youtu.be/L7u-1EI8PDo', '', 'https://drive.google.com/file/d/1KYqHIOZFuRHZ33EkJRWFyANZbhKdCctA/view?usp=sharing', 'https://drive.google.com/file/d/1CfiHcojWyy6Gv4QiHxpcuWfYmfOJXPkO/view?usp=sharing'
  ,'https://drive.google.com/file/d/1x7XAcGWE9Orqp7H0F6LcY5XGytjgbptX/view?usp=sharing', 'https://questions.examside.com/past-years/jee/jee-main/mathematics/inverse-trigonometric-functions/', 'https://d10lpgp6xz60nq.cloudfront.net/pdf_download/CENGAGE_MATHS_SOLUTIONS-DPP+DAILY+PRACTICE+PROBLEMS_CONTINUITY+AND+DIFFERENTIABILITY.pdf', 'https://drive.google.com/file/d/1kO6ZowwHgL9nk3axwiF6Uj4uHmpDHOpu/view', 'https://questions.examside.com/past-years/jee/jee-main/mathematics/application-of-derivatives/', 'https://questions.examside.com/past-years/jee/jee-main/mathematics/indefinite-integrals/', 'https://questions.examside.com/past-years/jee/jee-main/mathematics/definite-integrals-and-applications-of-integrals/', 'https://drive.google.com/file/d/1oYdDPCQ0swqkAHYanjWPOTBVLlw7-m2B/view?usp=drivesdk', 'https://questions.examside.com/past-years/jee/jee-main/mathematics/vector-and-3d-geometry', 'https://questions.examside.com/past-years/jee/jee-main/mathematics/vector-and-3d-geometry', 'https://youtu.be/jNAhOsdWyKU', 'https://vmkt.s3.ap-southeast-1.amazonaws.com/app_youtube_sprints/Area+under+the+curves+DPP+-+12th+Elite.pdf']
  let pyq=['https://questions.examside.com/past-years/jee/jee-advanced/physics/units-and-measurements/','','https://www.youtube.com/watch?v=8wzKl4CuZj8&t=2470s','','https://drive.google.com/drive/folders/1vGO2_TIEXsPWy9s2F_5XafwFr04kTc94?usp=sharing','','https://drive.google.com/file/d/1D64kxN6cgn80ibnPWwTATZaKiCIjThOo/view?usp=sharing','','','','https://www.youtube.com/watch?v=XH3_RtUJf2Y','https://www.youtube.com/watch?v=aa1NvrB7LzE','https://www.esaral.com/simple-harmonic-motion-jee-advanced-previous-year-questions-with-solutions-2/','https://www.esaral.com/wave-on-string-jee-advanced-previous-year-questions-with-solutions/','','https://drive.google.com/file/d/1Q7gRt_1hg3FMgsOBfZjE-wM1d1oMzuyA/view','https://questions.examside.com/past-years/jee/jee-advanced/chemistry/some-basic-concepts-of-chemistry/','','https://questions.examside.com/past-years/jee/jee-advanced/chemistry/periodic-table-and-periodicity/','','https://questions.examside.com/past-years/jee/jee-advanced/chemistry/gaseous-state/','','','https://drive.google.com/file/d/1FDuP-baVIc3LWNRLgADtIUBw_ou7W4OH/view?usp=sharing','','','','https://drive.google.com/file/d/1BG8ue6zqA88pRo5gzWFz9xcM6g-poKo5/view','https://youtu.be/zpP-OJZZPuI','https://www.youtube.com/watch?v=kMd-gkw3En8','','','https://questions.examside.com/past-years/jee/jee-main/mathematics/mathematical-induction-and-binomial-theorem', '', 'https://www.youtube.com/watch?v=1x1hrGC-lYU', 'https://questions.examside.com/past-years/jee/jee-main/mathematics/permutations-and-combinations/', '', '', 'https://vineetloomba.com/wp-content/uploads/Straight-Lines-IIT-JEE-Advanced-Level-Questions.pdf', '', 'https://www.esaral.com/limit-jee-advanced-previous-year-questions-with-solutions/', '', '', '', '', '', '', '', ''
  ,'', 'https://drive.google.com/file/d/17W-dzc83pAFKEiQCVvfg4bGrKhtZEM35/view', 'https://youtube.com/playlist?list=PLYVDsiuOZP5pFmAoduzQy3sxwcki-D-BH', 'https://edurev.in/chapter/25216_Moving-Charges-and-Magnetism', 'https://questions.examside.com/past-years/jee/jee-main/physics/magnetics', 'https://drive.google.com/file/d/1_ZWlVcBn0sDf1413d1vR-V9PbnPKuBym/view?usp=sharing', 'https://drive.google.com/file/d/15aFtz6R2SQtxZEmFWBvqw-1yUJuiRJBz/view', 'https://www.mathongo.com/dw/jee-main-chapter-wise-questions/?subject=Physics', 'https://youtube.com/playlist?list=PLYVDsiuOZP5pPq2iq_laoefweIqDYpDyo', '', 'https://questions.examside.com/past-years/jee/jee-advanced/physics/dual-nature-of-radiation/', 'https://questions.examside.com/past-years/jee/jee-advanced/physics/atoms-and-nuclei/', '', 'https://questions.examside.com/past-years/jee/jee-main/physics/communication-systems/'
  ,'https://drive.google.com/file/d/1bM7VivXCKIxHCnbY_Nis-g3ZPvJVfqbY/view', 'https://questions.examside.com/past-years/jee/jee-advanced/chemistry/solutions/', 'https://drive.google.com/drive/folders/1nqYxO-H86CHs_avOn-aNpjkwep0GdVNr?usp=sharing', 'https://drive.google.com/file/d/1Mr1Gv2jnmL0KFvxd6TZZcgH0PHsMNt8_/view', 'https://drive.google.com/file/d/1uUJ9ZdSqn7gpGoROKhAsgxdxh5VbOd5u/view', '', 'P-https://drive.google.com/file/d/1J8pdkEoUTzpWR0DXJz_3Igr90LVlIx_U/view?usp=drivesdk', 'https://youtu.be/mKsFXuocUMI', 'https://drive.google.com/file/d/1_Um5CdMEGwxMWTPgPYUyK4k_Yo_CIMp8/view', 'https://drive.google.com/file/d/1OHySJ7mjTkJ5FSPS_mL4CZXAb_GXF0yY/view?usp=drivesdk', 'https://drive.google.com/file/d/1FwQXQOcXGRrb2lJU8URoO7cx0OP0e8WR/view?usp=drivesdk', 'https://drive.google.com/file/d/13H5MUhKFzj1ffbOr09FQ5WSTzHgIZ4Y0/view?usp=drivesdk', 'https://drive.google.com/file/d/1hLMxvUQIVKlh-jHNacyTHc6P6TYnEk-Z/view?usp=drivesdk', 'https://questions.examside.com/past-years/jee/jee-main/chemistry/biomolecules/', '', ''
  ,'', 'https://questions.examside.com/past-years/jee/jee-advanced/mathematics/inverse-trigonometric-functions/', 'https://www.studyadda.com/question-bank/jee-main-advanced/mathematics/functions/continuity/1045', 'https://drive.google.com/file/d/1hfc9gOiT3hm2hafaE6AXiRMHx9RNfQIM/view', 'https://questions.examside.com/past-years/jee/jee-advanced/mathematics/application-of-derivatives/', 'https://questions.examside.com/past-years/jee/jee-advanced/mathematics/indefinite-integrals/', 'https://questions.examside.com/past-years/jee/jee-advanced/mathematics/definite-integrals-and-applications-of-integrals/', '', 'https://questions.examside.com/past-years/jee/jee-advanced/mathematics/vector-and-3d-geometry/', 'https://questions.examside.com/past-years/jee/jee-advanced/mathematics/vector-and-3d-geometry/', 'https://youtu.be/zRtJpmgDilc', 'https://drive.google.com/file/d/1KiOIfiLSlI45gyLa8uXy9vDSm0Tac6hw/view']
  for(var i=0;i<allchapters.length;i++){
  if(allchapters[i]===chpt){
   index=i;
    
  }
}

  const classes = useStyles()
  
  //const [chapter, setChapter] = React.useState('')
  const [value, setValue] = React.useState(0)
      
  // const handleChange = event => {
  //   setChapter(event.target.value)
  //   setchpt(pathArray[4]);
    
  // }

   const handleChangeTab = (event, newValue) => {
     setValue(newValue)
  }

  const renderTabContent = material => {
    switch (material) {
      case 'Video Lecture':
        return (
          <>
            <h2 className={classes.linkHead} style={{ marginBottom: '2%' }}>
              Link :
            </h2>
            <ul>
              <a className={classes.studyLink} href={vl[index]}>
              {vl[index]}
              </a>
            </ul>
          </>
        )
      case 'Study Material':
        return (
          <>
            <h2 className={classes.linkHead} style={{ marginBottom: '2%' }}>
              Link :
            </h2>
            <ul>
            <a className={classes.studyLink} href={sm[index]}>
              {sm[index]}
              </a>
            </ul>
          </>
        )
      case 'Practice Questions':
        return (
          <>
            <h2 className={classes.linkHead} style={{ marginBottom: '2%' }}>
              Link :
            </h2>
            <ul>
            <a className={classes.studyLink} href={pq[index]}>
              {pq[index]}
              </a>
            </ul>
          </>
        )
      case 'Prev. year questions':
        return (
          <>
            <h2 className={classes.linkHead} style={{ marginBottom: '2%' }}>
              Link :
            </h2>
            <ul>
            <a className={classes.studyLink} href={pyq[index]}>
              {pyq[index]}
              </a>
            </ul>
          </>
        )
    }
  }
 

  return (
    <Box display='flex'>
      <div className={classes.subjectPage}>
        <div className={classes.headerBox}>
          {/* <Box className={classes.subjectHeadRight}>
            <Typography className={classes.switchHead}>
              Switch to different chapter :
            </Typography>
            <FormControl variant='outlined' className={classes.subjectDropdown}>
              <Select
                value={chapter}
                onChange={handleChange}
                className={classes.subjectDropdownOption}
              >
                {phy11.map((item)=>{return(<MenuItem value={item}>{item}</MenuItem>)})}
                
              </Select>
            </FormControl>
          </Box> */}
          <Box style={{ float: 'left' }}>
            <Typography className={classes.subjectName}>Selected Subject:{subject} </Typography>
            <Typography className={classes.chapterName}>Chapter : {chpt} </Typography>
          </Box>
        </div>
        <div className={classes.mainBox}>
          <Box className={classes.content}>
            <Typography className={classes.contentHead}>Contents</Typography>
            <Tabs
              value={value}
              onChange={handleChangeTab}
              className={classes.tabsContainer}
              orientation='vertical'
            >
              <Tab
                {...a11yProps(0)}
                className={classes.contentList}
                // label='Video Lecture'
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={videoLecture} className={classes.icon} /> Video
                    Lecture
                  </div>
                }
                iconPosition='start'
                wrapped={true}
              />
              <Tab
                {...a11yProps(1)}
                className={classes.contentList}
                // label='Study Material'
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={studyMaterial} className={classes.icon} /> Study
                    Material
                  </div>
                }
                // icon={<img src={studyMaterial} className={classes.icon} />}
                iconPosition='start'
              />
              <Tab
                {...a11yProps(2)}
                className={classes.contentList}
                // label='Practise Questions'
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={pracQues} className={classes.icon} /> Practise
                    Questions
                  </div>
                }
                // icon={<img src={pracQues} className={classes.icon} />}
                iconPosition='start'
              />
              <Tab
                {...a11yProps(3)}
                className={classes.contentList}
                // label='Pre. year questions'
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={prevYearQues} className={classes.icon} /> Pre.
                    year questions
                  </div>
                }
                // icon={<img src={prevYearQues} className={classes.icon} />}
                iconPosition='start'
              />
            </Tabs>
          </Box>
          <div className={classes.materialLink}>
            <TabPanel value={value} index={0}>
              {renderTabContent('Video Lecture')}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {renderTabContent('Study Material')}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {renderTabContent('Practice Questions')}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {renderTabContent('Prev. year questions')}
            </TabPanel>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default SubjectChapter
