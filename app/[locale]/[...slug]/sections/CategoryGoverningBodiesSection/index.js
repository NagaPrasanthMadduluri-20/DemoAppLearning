// "use client";

// import Container from "@/app/components/Container";
// import React from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Text from "@/components/Text";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// const CategoryGoverningBodies = ({
//   CategoryGoverningBodiesData,
//   additionalData,
// }) => {
//   const { governingBodies } = additionalData;
//   const { contents } = CategoryGoverningBodiesData;

//   const [tabOrientation, setTabOrientation] = useState("horizontal");
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

//     function onMediaQueryChange({ matches }) {
//       setTabOrientation(matches ? "vertical" : "horizontal");
//     }

//     onMediaQueryChange(lgMediaQuery);
//     lgMediaQuery.addEventListener("change", onMediaQueryChange);

//     return () => {
//       lgMediaQuery.removeEventListener("change", onMediaQueryChange);
//     };
//   }, []);

//   return (
//     <div className="bg-lightbackground">
//       {/* <Container>
//           <Text variant="h2">{contents.heading}</Text>
//           {governingBodies?.map((item, index) => (
//             <Tabs
//               className="grid grid-cols-10 gap-x-12"
//               key={index}
//               vertical={tabOrientation === "vertical"}
//             >
//               <TabsList className="col-span-4">
//                 <TabsTrigger
//                   value={item.name}
//                   // className={`${
//                   //   selectedIndex === index
//                   //     ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
//                   //     : "hover:bg-white/10 lg:hover:bg-white/5"
//                   // }`}
//                 >
//                   {item.name}
//                 </TabsTrigger>
//               </TabsList>
//               {item.descriptions?.map((itemdescription, descriptionIndex) => (
//                 <TabsContent
//                   value={item.name}
//                   key={descriptionIndex}
//                   className="col-span-6"
//                 >
//                   {itemdescription.description}
//                 </TabsContent>
//               ))}
//             </Tabs>
//           ))}
//         </Container> */}

//       <Container>
//         <Tabs
//           className="grid grid-cols-10 gap-x-6 items-center"
//           orientation={tabOrientation}
//           onValueChange={(value) =>
//             setSelectedIndex(
//               governingBodies.findIndex((item) => item.name === value)
//             )
//           }
//         >
//           <div className="col-span-4">
//             <TabsList className="flex flex-col bg-primary gap-9 hover:bg-primary">
//               {governingBodies?.map((item, index) => (
//                 <div key={index} className={`${selectedIndex === index ? "bg-primary w-full" : ""}`}>
//                   <TabsTrigger value={item.name} className={`${selectedIndex === index ? "text-white bg-primary" : ""}`}>{item.name}</TabsTrigger>
//                 </div>
//               ))}
//             </TabsList>
//           </div>
//           <div className="col-span-6">
            
//               <TabsContent key={index} value={item.name}>
//                 <div className="">
//                   {item.descriptions?.map(
//                     (itemdescription, descriptionIndex) => (
//                       <div key={descriptionIndex}>
//                         {itemdescription.description}
//                       </div>
//                     )
//                   )}
//                 </div>
//               </TabsContent>
          
//           </div>
//         </Tabs>
//       </Container>
//     </div>
//   );
// };

// export default CategoryGoverningBodies;


'use client'

import React, { useState, useEffect, useRef } from "react";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const CategoryGoverningBodies = ({
  CategoryGoverningBodiesData,
  additionalData,
}) => {
  const { governingBodies } = additionalData;
  const { contents } = CategoryGoverningBodiesData;

  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-lightbackground">
      <Container>
        <Text variant="h2">{contents.heading}</Text>
        <div className="flex flex-col md:flex-row gap-5 lg:gap-12 mt-8 items-center justify-start">
          <div className=" w-full gap-x-4 items-stretch text-center flex md:space-y-8 md:block md:w-[390px] overflow-x-auto custom-scrollbar">
            {governingBodies?.map((item, index) => (
              <>
             <Text
                key={index}
                className={cn(
                  'p-1 w-1/3 md:w-auto lg:p-2 flex items-center text-[12px] md:text-[14px] gap-1 justify-between cursor-pointer rounded-md font-semibold',
                  index !== governingBodies.length - 1 ? 'border-b' : 'border-b lg:border-0',
                  activeTab === index ? 'text-primary-foreground bg-primary' : 'text-foreground bg-background'
                )}
                onClick={() => handleTabClick(index)}
              >
                <Avatar className="hidden md:flex"><AvatarImage src={item.icon} className="bg-background" /></Avatar> 
                {item.name}
                
                <span className="hidden lg:inline-block">→</span>
              </Text>
              
              </>
            ))}
          </div>
          <div
            className="w-full flex-1 p-0 lg:p-4"
          >
            <div className="p-6 lg:p-8 h-[338px] rounded-md bg-background shadow-lg overflow-y-auto custom-scrollbar">
             <div className={` flex flex-row items-center gap-x-3 justify-between transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>            
              <Text className="!text-[12px] md:!text-[14px] w-10/12">
                {governingBodies[activeTab].descriptions[0].description}
              </Text>
              <div className="w-2/12 ml-auto">
                <Image src={governingBodies[activeTab].descriptions[0].image} alt="accredatations" width={50} height={50}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryGoverningBodies;