// import CheckList from "@/app/components/CheckListComponent";
// import Container from "@/app/components/Container";
// import NotFound from "@/app/not-found";
// import React from "react";

// const SkillsGain = ({SkillsGainData, whoShouldAttendData}) => {
//   const { contents: skillsGainContents } = SkillsGainData || {};
//   const { contents: whoShouldAttendContents } = whoShouldAttendData || {};

//   console.log("skillsGainContents", skillsGainContents);
//   console.log("whoShouldAttendContents", whoShouldAttendContents);
//   // const items = contents.skillsgains;
//   // const whoShouldAttendItems = whoShouldAttendContents.coursewhoshouldattends
//   const isSkillsGainDataAvailable = contents && contents.skillsgains;
//   const isWhoShouldAttendDataAvailable = whoShouldAttendContents && whoShouldAttendContents.coursewhoshouldattends;

//   const items = isSkillsGainDataAvailable ? contents.skillsgains : (isWhoShouldAttendDataAvailable ? whoShouldAttendContents.coursewhoshouldattends : []);
//   const heading = isSkillsGainDataAvailable ? (contents.heading || contents.new_heading) : (whoShouldAttendContents.heading || whoShouldAttendContents.new_heading);
//   const description = isSkillsGainDataAvailable ? contents.description : whoShouldAttendContents.description;
//   return (
//     <Container>
//        {(isSkillsGainDataAvailable || isWhoShouldAttendDataAvailable) ? (
//           <CheckList
//             heading={heading}
//             description={description}
//             items={items}
//             columns={2}
//             className="bg-lightbackground p-4"
//           />
//         ) : (
//           <NotFound />
//         )}
//       {/* <div className="container mx-auto p-4">
//         <CheckList
//           heading={contents.heading || contents.new_heading}
//           description={contents.description}
//           items={items}
//           columns={2}
//           className="bg-lightbackground p-4"
//         />
//       </div> */}
//     </Container>
//   );
// };

// export default SkillsGain;

import CheckList from "@/app/components/CheckListComponent";
import Container from "@/components/Container";
import ExpandableContent from "@/app/components/ExpandableComponent";
import NotFound from "@/app/not-found";
import { Check } from "lucide-react";
import React from "react";

const SkillsGain = ({
  SkillsGainData,
  whoShouldAttendData,
  CourseMaterialData,
  CourseBenefitsNewData,
  WhatWillYouLearnData,
}) => {
  const { contents: skillsGainContents } = SkillsGainData || {};
  const { contents: whoShouldAttendContents } = whoShouldAttendData || {};
  const { contents: CourseMaterialContents } = CourseMaterialData || {};
  const { contents: CourseBenefitsNewContents } = CourseBenefitsNewData || {};
  const { contents: WhatWillYouLearnContents } = WhatWillYouLearnData || {};

  const skillsGainItems = skillsGainContents?.skillsgains || [];
  const skillsGainHeading =
    skillsGainContents?.heading || skillsGainContents?.new_heading || "";
  const skillsGainDescription = skillsGainContents?.description || "";

  const whoShouldAttendItems =
    whoShouldAttendContents?.coursewhoshouldattends || [];
  const whoShouldAttendHeading =
    whoShouldAttendContents?.heading ||
    whoShouldAttendContents?.new_heading ||
    "";
  const whoShouldAttendDescription = whoShouldAttendContents?.description || "";

  const CourseMaterialItems = CourseMaterialContents?.coursematerials || "";
  const CourseMaterialHeading =
    CourseMaterialContents?.heading ||
    CourseMaterialContents?.new_heading ||
    "";
  const CourseMaterialDescription = CourseMaterialContents?.description || "";

  const CourseBenefitsNewItems =
    CourseBenefitsNewContents?.coursebenefitsnews || {};
  const CourseBenefitsNewIcons =
    CourseBenefitsNewContents?.coursebenefitsnews.lists_icons || {};
  const CourseBenefitsNewHeading =
    CourseBenefitsNewContents?.heading ||
    CourseBenefitsNewContents?.new_heading ||
    "";
  const CourseBenefitsNewDescription =
    CourseBenefitsNewContents?.description || "";

  const WhatWillYouLearnItems =
    WhatWillYouLearnContents?.whatwillyoulearns || [];
  const WhatWillYouLearnHeading = WhatWillYouLearnContents?.heading || "";

  const hasSkillsGainData =
    skillsGainItems.length > 0 && (skillsGainHeading || skillsGainDescription);
  const hasWhoShouldAttendData =
    whoShouldAttendItems.length > 0 &&
    (whoShouldAttendHeading || whoShouldAttendDescription);
  const hasCourseMaterialData =
    CourseMaterialItems.length > 0 &&
    (CourseMaterialHeading || CourseMaterialDescription);
  const hasCourseBenefitsNewData =
    CourseBenefitsNewItems.length > 0 &&
    (CourseBenefitsNewHeading || CourseBenefitsNewDescription);
  const hasWhatWillYouLearnData =
    WhatWillYouLearnItems.length > 0 &&
    (WhatWillYouLearnHeading || WhatWillYouLearnItems);
    const initialHeight = { mobile: "600px", desktop: "300px" };
  return (
   
    <Container className="py-3">
      <div>
        {hasSkillsGainData ? (
          <CheckList
            heading={skillsGainHeading}
            description={skillsGainDescription}
            items={skillsGainItems}
            icon={Check}
            columns={2}
            className="bg-lightbackground p-4 mb-4"
          />
        ) : null}

        {hasWhoShouldAttendData ? (
          <CheckList
            heading={whoShouldAttendHeading}
            description={whoShouldAttendDescription}
            items={whoShouldAttendItems}
            columns={3}
            className=""
          />
        ) : null}

        {hasCourseMaterialData ? (
          <CheckList
            heading={CourseMaterialHeading}
            description={CourseMaterialDescription}
            items={CourseMaterialItems}
            columns={2}
            className=""
          />
        ) : null}
  
        {hasCourseBenefitsNewData ? (
          <CheckList
            heading={CourseBenefitsNewHeading}
            description={CourseBenefitsNewDescription}
            items={CourseBenefitsNewItems}
            columns={2}
            variant="customIcon"
            className="gap-8"
          />
        ) : null}
     
      
        {hasWhatWillYouLearnData ? (
            <ExpandableContent
            initialHeight={initialHeight}
            buttonClassName="rounded-full border border-gray-500 relative z-10 h-8 items-center hover:bg-primary hover:text-primary-foreground"
            contentClassName="mt-4"
          >
          <CheckList
            heading={WhatWillYouLearnHeading}
            items={WhatWillYouLearnItems}
            columns={2}
            className="gap-4"
            variant="numbered"
          />
           </ExpandableContent>
        ) : null}
  
        {!hasSkillsGainData &&
        !hasWhoShouldAttendData &&
        !hasCourseMaterialData &&
        !hasCourseBenefitsNewData &&
        !hasWhatWillYouLearnData ? (
          <NotFound />
        ) : null}
      </div>
    </Container>
  );
};

export default SkillsGain;

// import React from "react";

// import { Star, Heart, Sun } from "lucide-react";
// import CheckList from "@/app/components/CheckListComponent";

// const ExampleUsage = () => {
//   const defaultItems = [
//     { text: "Default item 1" },
//     { text: "Default item 2" },
//     { text: "Default item 3" },
//   ];

//   const customIconItems = [
//     { text: "Star item", icon: Star },
//     { text: "Heart item", icon: Heart },
//     { text: "Sun item", icon: Sun },
//   ];

//   const numberedItems = [
//     { text: "Numbered item 1" },
//     { text: "Numbered item 2" },
//     { text: "Numbered item 3" },
//   ];

//   return (
//     <div className="space-y-8">
//       <CheckList
//         heading="Default Variant"
//         description="This is the default checklist."
//         items={defaultItems}
//       />

//       <CheckList
//         heading="Custom Icon Variant"
//         description="This checklist uses custom icons for each item."
//         items={customIconItems}
//         variant="customIcon"
//       />

//       <CheckList
//         heading="Numbered Variant"
//         description="This checklist uses numbered circles instead of icons."
//         items={numberedItems}
//         variant="numbered"
//       />
//     </div>
//   );
// };

// export default ExampleUsage;
