import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Image from "next/image";
import Text from "@/components/Text";
import { CalendarDays, Clock4Icon, Star } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

const CourseLevelCardSection = ({ CardData }) => {
  const labels = [
    ...CardData.foundation,
    ...CardData.intermediate,
    ...CardData.advanced,
  ];
  labels.sort((a, b) => a.course_order - b.course_order);
  // console.log("labels", labels);
  return (
    <Container>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {labels.map((course, index) => (
          <Card className="flex flex-col" key={index}>
            <Image
              src={
                course?.course_banner ? course.course_banner : "/prinzimage.png"
              }
              alt="Course thumbnail"
              width={300}
              height={300}
              className="w-full object-contain rounded-t-lg"
            />
            <CardHeader className="pt-2 pb-2 min-h-20">
              <CardTitle className="font-semibold tracking-tight text-[16px]">
                {" "}
                {course.course_name}{" "}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 grid grid-flow-row text-[13px] pb-2">
              <div className="flex gap-x-3 items-center flex-wrap">
                <div className="flex gap-x-2 items-center">
                  <Star size={20} fill="#facc15" stroke="0" />{" "}
                  {course.course_rating}
                </div>
                <Separator orientation="vertical" />
                {course?.course_learner && (
                  <div> {course.course_learner} Learners</div>
                )}
              </div>
              {course?.course_info?.event_date && (
                <>
                  <div className="flex gap-x-3">
                    <CalendarDays stroke="#3f51b5" size={20} />{" "}
                    {course?.course_info?.event_date}
                  </div>
                  {course?.course_days && (
                    <div className="flex gap-x-3">
                      <Clock4Icon stroke="#3f51b5" size={20} />{" "}
                      {course.course_days + " days"}
                    </div>
                  )}
                </>
              )}
              {!course?.course_info && (
                <div>
                  <ul className="list-disc mt-3 pl-4">
                    <li>Instructor-led (On-site/Virtual)</li>
                    <li>Flexible Scheduling Options</li>
                    <li>Tailored Corporate Group Training</li>
                  </ul>
                </div>
              )}
              {course.accrediation && (
                <div className="pt-5 pb-0">
                  <Image
                    src={course.accrediation}
                    alt="accredattation"
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                </div>
              )}
            </CardContent>
            <Separator />
            <CardFooter className="group bg-secondary/50 rounded-sm px-2 py-1 flex items-center justify-between hover:bg-secondary/65 ">
                <div className="flex flex-col">
              {course?.course_info &&
                course.course_info?.cost &&
                course.course_info?.discount_amount > 0 && (
                  <div className="text-[12px] font-normal line-through">
                    {" "}
                    {course.course_info.currency +
                      " " +
                      course.course_info.cost}
                  </div>
                )}
              {course.course_info?.amount && (
                <div className="text-[13px] font-semibold">
                  {" "}
                  {course.course_info.currency +
                    " " +
                    course.course_info.amount}
                    
                </div>    
              )}
              </div>
              <Button variant="outline" className="bg-transparent border-2 border-[#Ec7601] group-hover:bg-[#Ec7601] group-hover:text-secondary-foreground" size="sm">View Course</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
};

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default CourseLevelCardSection;
