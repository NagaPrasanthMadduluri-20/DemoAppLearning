
import Text from '@/components/Text'
import Link from 'next/link'
import React from 'react'
import Container from '../../components/Container'

const Webinars = () => {
  return (
    <Container>
    <Text variant="h3" className='text-center'> Webinars page</Text>
     <Text variant="h2" >To see the Child Webinars page- <Link href="/webinars/evm-techniques" className="text-blue-700">Click-here</Link> </Text>
    </Container>
  )
}

export default Webinars