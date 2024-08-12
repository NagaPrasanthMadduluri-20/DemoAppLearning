import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";

const CorporateTrainingCard = () => {
  return (
    <div>
      <Container >
        <Text variant="h2" className="mb-2"> Training Options </Text>
        <div className="bg-[url('/sticky-right-sidebar-individual.webp')] py-2 px-2 bg-cover mb-4">
          <ul className="list-disc space-y-3 text-[13px] text-primary-foreground ml-5 mb-4 font-semibold">
            <li>Wide range of Training dates</li>
            <li>Pay Once, Attend Twice</li>
            <li>Impactful Instructor-Led training</li>
          </ul>
          <div className="flex gap-x-3">
            {" "}
            <Button variant="secondary" className="w-auto px-2 py-0">
              View Training Dates
              <MoveRight size={15} className="ml-1" />
            </Button>
            <Button
              variant="outline"
              className="bg-background w-auto px-2 py-0"
            >
              Inquire Now <MoveRight size={15} className="ml-1" />
            </Button>
          </div>
        </div>
        <div className="bg-[url('/sticky-right-sidebar-group.webp')] py-2 px-2 bg-cover">
          <ul className="list-disc space-y-3 text-[13px] text-primary-foreground ml-5 mb-4 font-semibold">
            <li>Customized Training</li>

            <li>For small to large groups</li>

            <li>Onsite / Virtual Instructor-Led</li>
          </ul>
          <Button variant="secondary" className=" w-auto px-2 py-0">
            Inquire for Corporate Group Training
            <MoveRight size={15} className="ml-1" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CorporateTrainingCard;
