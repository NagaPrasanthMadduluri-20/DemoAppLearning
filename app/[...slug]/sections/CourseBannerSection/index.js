import Container from "@/components/Container";
import StarRating from "@/app/components/StarRating";
import Text from "@/components/Text";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoveRight, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseBanner = ({ CourseBannerData, additionalData }) => {
  const { contents } = CourseBannerData;
  const { page_name } = additionalData;

  const imageAccreditations = contents.categorybanners?.filter(
    (item) => item.instuctor === "image"
  );
  const textAccreditations = contents.categorybanners?.filter(
    (item) => item.instuctor === "text"
  );
  return (
    <div className="relative">
      {/* <div
        className="absolute inset-0 top-10 right-44 bg-[length:33%_80%] bg-no-repeat bg-right-top hidden md:block "
        style={{
          backgroundImage: `url('${contents.vector_image_webp_path}')`,
        }}
      /> */}

     <div className="absolute inset-0 bg-gradient-to-b from-[rgba(63,81,181,4)] to-[#12133D] sm:hidden"></div>
     <div className="bg-lightbackground">
      <Container className="pb-3 pt-4 sm:pt-12">
        <div className="grid grid-cols-12 relative z-10 text-primary-foreground sm:text-foreground">
          <div className="space-y-4 md:col-span-7 col-span-12">
            <Text variant="h1" className="max-w-[600px]">
              {contents.course_secondary_title}
            </Text>

            <Text className="">{contents.course_content}</Text>
            <div className="flex-col sm:flex sm:flex-row sm:gap-x-5 ">
              <Button variant="secondary" className="p-6 text-[18px] w-full rounded-none flex gap-x-2">
                {" "}
                {page_name == "PMP Certification"
                  ? "View Dates & Enroll for PMP"
                  : " View Dates & Enroll Now"}
                  {" "}
                  <MoveRight />
              </Button>
              <Button
                variant="outline"
                className="p-6 text-[18px] w-full rounded-none bg-transparent xs:mt-4 sm:mt-0"
              >{`Enquire about this Training`}</Button>
            </div>

            <div>
              <div className="flex-col sm:flex sm:flex-row gap-x-20">
                <Text className="flex xs:mb-4">
                  <StarRating rating={Number(contents.course_rating_value)} />
                  <Text>{contents.course_rating_content}</Text>
                </Text>
                <Text className="flex gap-x-2"><UserRound fill="#fff" strokeWidth={0} size={20} />{contents.Course_Learners_count}{""} Learners</Text>
              </div>
            </div>

            <Text className="mt-0">
              {" "}
              <Link href="" className="underline decoration-solid">Get a Quote</Link> : Request for group Training
            </Text>

            <div className="grid grid-rows-2 grid-cols-4 gap-4 ">
              {imageAccreditations?.map((item, index) => (
                <div className="sm:row-span-3 sm:col-span-1 row-span-2 col-span-2" key={index}>
                  {" "}
                  <Image
                    src={item.Accrediations}
                    alt={item.Accrediations}
                    width={140}
                    height={87}
                    className="xs:bg-white xs:w-[120px] sm:bg-transparent dark:bg-detailcontrast"
                    priority
                  />
                  <Button
                    href={item.AccrediationsLink}
                    className="bg-[#6AA942] py-0 px-3 rounded-md h-6 text-center mt-5"
                  >
                    Verify Badge
                  </Button>
                </div>
              ))}

              {textAccreditations.map((item, index) => (
                <div class="row-span-1 col-span-1 hidden md:block w-[80%]" key={index}>
                  {item.instuctor === "text" || item.instuctor != undefined ? (
                    <>
                      {item.Accrediations}
                      <Text>{item.AccrediationsTitle}</Text>
                    </>
                  ) : (
                    <Avatar src={item.Accrediations} key={index} />
                  )}
                </div>
              ))}

              {contents.Pay_Once_Attend_Twice !== "disable" && (
                <div className="row-span-1 col-span-3 hidden md:block">
                  <div className="flex gap-x-5 mt-5">
                    <Text className="text-[20px] font-bold text-primary dark:text-green-100 dark:opacity-65 underline decoration-solid">
                      Pay Once!
                    </Text>
                    <Text className="text-[20px] font-bold text-secondary dark:text-orange-100 dark:opacity-65 underline decoration-solid">
                      Attend Twice*
                    </Text>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="sm:col-span-5 col-span-0 md:flex hidden">
            <Image src={contents.vector_image_webp_path} alt="course-banner" width={500} height={800} className="max-w-[90%] h-[85%]"/>
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
};

export default CourseBanner;

// const pagePmp =
// page_name == "PMP Certification" || page_name == "CAPM Exam Prep"
//   ? true
//   : false;
// const pageItil = [
// "ITIL 4 Foundation",
// "Change Management Foundation & Practitioner Certification",
// "Business Analysis Foundation & Practitioner Certification",
// "Oracle Primavera P6 Certification Training",
// ].includes(page_name);
// const pagePMI = page_name == "PMI-ACP Exam Prep" ? true : false;
// const pageRFF = page_name == "Project Management Fundamentals" ? true : false;

// --------------------------------

{
  /* <div className="flex flex-col justify-end">
              <div className="flex justify-between items-start mb-4">
                <div>
                  {imageAccreditations?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <img
                        src={item.Accrediations}
                        alt={item.Accrediations}
                        width={140}
                        height={87}
                      />
                      <Button
                        href={item.AccrediationsLink}
                        className="bg-[#6AA942] py-0 px-3 rounded-md h-6 text-center ml-2"
                      >
                        Verify Badge
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-8 ml-10">
                  {textAccreditations.map((item, index) => (
                    <div className="flex flex-col items-left" key={index}>
                      {item.instuctor === "text" ||
                      item.instuctor != undefined ? (
                        <>
                          <Text variant="b"> {item.Accrediations}</Text>
                          <Text>{item.AccrediationsTitle}</Text>
                        </>
                      ) : (
                        <Avatar src={item.Accrediations} key={index} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {contents.Pay_Once_Attend_Twice !== "disable" && (
                <div className="flex justify-center space-x-4">
                  <span className="text-xl font-bold text-primary underline">
                    Pay Once!
                  </span>
                  <span className="text-xl font-bold text-secondary underline">
                    Attend Twice*
                  </span>
                </div>
              )}
            </div> */
}
