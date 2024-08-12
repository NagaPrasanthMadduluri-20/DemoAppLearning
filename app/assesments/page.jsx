
import Text from "@/components/Text";
import Link from "next/link";
import React from "react";
import Container from "../../components/Container";

const Assesment = () => {
  return (
    <Container>
    <Text variant="h3" className='text-center'> Assesment page</Text>
     <Text variant="h2" >project-management Assesment page- <Link href="/assesments/project-management" className="text-blue-700">Click-here</Link> </Text>
    </Container>
  );
};

export default Assesment;
