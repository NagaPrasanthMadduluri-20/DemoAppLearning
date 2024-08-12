import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Text from "@/components/Text";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const FaqsAccordian = ({ faqsData, additionalData, category }) => {
  const FaqData = additionalData?.FaqTab?.faqs?.general_faqs || [];
  const CourseFaqData = additionalData?.FaqTab?.faqs?.course_faqs || [];
  // console.log("heading", additionalData?.FaqTab?.tab_heading);
  // console.log("CourseFaqData", additionalData);
  return (
    <Container className="py-3">
      {CourseFaqData && CourseFaqData.length > 0 ? (
      <div>
        <Text className="text-[20px] font-semibold mb-5">
          {" "}
          {additionalData?.FaqTab?.tab_heading}
        </Text>
        <Accordion
          type="single"
          collapsible
          className="border border-1 rounded-sm"
          defaultValue="course-0"
        >
          {CourseFaqData.map((item, index) => (
            <AccordionItem
              value={`course-${index}`}
              key={`course-${index}`}
              className="border-b-2"
            >
              <AccordionTrigger className="data-[state=open]:bg-background xs:text-left">
                <Text variant="body1" className="font-semibold px-3">
                  {item.FaqQuestion}
                </Text>
              </AccordionTrigger>
              <AccordionContent className="">
                <Text variant="body1" className="px-3 pt-1">
                  {item.FaqAns}
                </Text>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
       ) : null}
<div>
        <Text variant="h2" className="!text-[24px] my-6">
          {category ? `${faqsData.contents.tab_heading}` : `General FAQ's`}
        </Text>
        <Accordion
          type="single"
          collapsible
          className="border border-1 rounded-sm"
          defaultValue="general-0"
        >
          {FaqData.map((item, index) => (
            <AccordionItem
              value={`general-${index}`}
              key={`general-${index}`}
              className="border-b-2"
            >
              <AccordionTrigger className="data-[state=open]:bg-background xs:text-left">
                <Text variant="body1" className="font-semibold px-3">
                  {item.FaqQuestion}
                </Text>
              </AccordionTrigger>
              <AccordionContent className="">
                <Text variant="body1" className="px-3 pt-1">
                  {item.FaqAns}
                </Text>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Text className="font-semibold mt-5">
        <b> Not sure how to get started? </b> Let our Learning Advisor help you.
        {" "}
    <Button variant="secondary" className="ml-3 rounded-none font-semibold">
      Contact Our Learning Advisor
      <MoveRight className="ml-3" />
    </Button>
  </Text>
      </div>
    </Container>
  );
};

export default FaqsAccordian;
