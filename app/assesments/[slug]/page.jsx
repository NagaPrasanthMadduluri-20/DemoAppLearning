import Container from '@/components/Container'
import Text from '@/components/Text'
import Link from 'next/link'
import React from 'react'

const NestedAssesment = () => {
  return (
    <Container>
    <Text variant='h3' className='text-center'>Nested Assesment page</Text>
     <Text variant="h2"> assessment-for-project-coordinator <Link href="/assesments/project-management/assessment-for-project-coordinator" className='text-blue-600'>-click-here</Link> </Text>
    </Container>
  )
}

export default NestedAssesment