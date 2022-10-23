import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChapterList from '../../../components/chapterList/ChapterList.js'
import SubjectHead from '../../../components/SubjectHead/SubjectHead.js'
import BasicLayout from '../../../layouts/BasicLayout.js'
import useStyles from './styles.js'

export default function Subject () {
  const classes = useStyles()
  const [subject, setSubject] = useState('')
  const [standard, setStandard] = useState('')

  const { cls, sub } = useParams()

  const handleChangeSubject = data => {
    setSubject(data)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    setSubject(sub)
    setStandard(cls)
  }, [cls, sub])

  return (
    <BasicLayout>
      <SubjectHead
        sub={subject}
        cls={standard}
        handleChangeSubject={handleChangeSubject}
      />
      <ChapterList sub={subject}
        cls={standard} />
    </BasicLayout>
  )
}

