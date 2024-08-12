
import Text from '@/components/Text'
import Link from 'next/link'
import React from 'react'
import Container from '../../components/Container'

const Info = () => {
  return (
    <Container>
    <Text variant="h3" className='text-center'> Info page</Text>
     <Text variant="h2" >To see the Info Articles page- <Link href="/info/info-article" className="text-blue-700">Click-here</Link> </Text>
    </Container>
  )
}

export default Info