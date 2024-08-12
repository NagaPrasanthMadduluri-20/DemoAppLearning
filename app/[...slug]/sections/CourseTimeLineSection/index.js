import Container from '@/components/Container'
import Text from '@/components/Text';
import Image from 'next/image';
import React from 'react'

const CourseTimeLine = ({CourseTimeLineData}) => {
    const {contents} = CourseTimeLineData;
  return (
    <Container className="py-2">
       <Text variant='h2'>{contents.heading}</Text>
       <Text className="mb-5">{contents.sub_heading} </Text>

      <div>
        <Image src={contents.image_path} alt='90day Roadmap Sucesss' width={900} height={500}/>
      </div>
    </Container>

  )
}

export default CourseTimeLine