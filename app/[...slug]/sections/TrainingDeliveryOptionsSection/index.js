import CheckList from "@/app/components/CheckListComponent";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import React from "react";

const TrainingDeliveryOptionsData = {
  lists1: [
    {
      list: "Experience immersive learning from the comfort of your own space",
    },
    {
      list: "Direct and real-time interaction with expert instructors online",
    },
    {
      list: "Access online course materials and resources conveniently",
    },
    {
      list: "Training accessible across various devices ensures seamless learning experience",
    },
  ],
  lists2: [
    {
      list: "Face to Face in-person training at your physical location",
    },
    {
      list:
        "Customized training programs tailored to meet your business objectives",
    },
    {
      list:
        "Engaging and interactive workshops that enables superior peer-to-peer learning experience",
    },
    {
      list: "Receive dedicated guidance from Subject Matter Experts",
    },
  ],
};

const TrainingDeliveryItems =
  TrainingDeliveryOptionsData?.lists1 ||
  TrainingDeliveryOptionsData?.lists2 ||
  [];
const TrainingDeliveryOptions = () => {
  return (
    <div className="bg-gradient-to-r from-[#121F66] via-[#121F66] to-[#121F66]">
    <Container >
      {/* <div className="absolute inset-0 bg-[length:60%_120%] bg-no-repeat bg-right-top hidden md:block" /> */}
      {/* <div className="absolute inset-0 "></div> */}
      <Text
        variant="h2"
        className="text-center mb-8 text-primary-foreground dark:text-darkheadings !text-[35px] relative z-10"
      >
        Training Delivery Options{" "}
      </Text>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-20 relative z-10">
        <div className="p-8 bg-background rounded-lg">
          <Text
            variant="b"
            className="text-secondary dark:text-secondary-foreground text-[22px] text-center mb-4"
          >
            Live Virtual Instructor-led Training
          </Text>
          <CheckList
            items={TrainingDeliveryItems}
            columns={1}
            className=""
          />
          <Button
            variant="secondary"
            className="p-6 mt-6 w-full text-[18px] font-semibold"
          >
            Know More About Our Courses
          </Button>
        </div>
        <div className="p-8 bg-background rounded-lg">
          <Text
            variant="b"
            className="text-secondary dark:text-secondary-foreground text-[22px] text-center mb-4"
          >
            Corporate Group Training-Onsite
          </Text>
          <CheckList
            items={TrainingDeliveryItems}
            columns={1}
            className=""
          />
          <Button
            variant="secondary"
            className="p-6 mt-6 w-full text-[18px] font-semibold"
          >
            Enquire With us Now
          </Button>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default TrainingDeliveryOptions;
