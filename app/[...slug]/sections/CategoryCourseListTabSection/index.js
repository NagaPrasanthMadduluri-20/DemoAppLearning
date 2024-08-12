import React from 'react'
import CourseLevelCardSection from '../CourseLevelCardSection'
import Container from '@/components/Container'

const CategoryCourseListTab = ({CategoryCourseListTabData, additionalData}) => {
    const { CategoryCourseLevel } = additionalData;
  return (
    <div className='bg-lightbackground'>
    <Container>
        <CourseLevelCardSection CardData={CategoryCourseLevel} />
    </Container>
    </div>
  )
}

export default CategoryCourseListTab