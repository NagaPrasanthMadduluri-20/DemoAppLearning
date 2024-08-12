import Container from "@/components/Container";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";

const WhyYouShouldGet = ({ WhyYouShouldGetData }) => {
  const { contents } = WhyYouShouldGetData;
  return (
    <Container className="py-2">
      <Text variant="h2">{contents.heading}</Text>
      <div className="p-3 bg-lightbackground">
        {contents.whoshouldgets.map((item, index) => (
          <div className="flex gap-x-2" key={index}>
            <Image
              src={item.image_path}
              alt="why-you-should-get-icon"
              width={50}
              height={50}
            />
            <Text>{item.title}</Text>
          </div>
          
        ))}
      </div>
    </Container>
  );
};

export default WhyYouShouldGet;
