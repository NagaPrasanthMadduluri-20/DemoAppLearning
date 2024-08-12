import React from "react";
import CategoryBannerNew from "../../sections/CategoryBannerNewSection";
import CategoryCourseOutline from "../../sections/CategoryCourseOutlineSection";

import TestimonialSlider from "../../sharedsections/TestimonialSliderSection";
import FaqsAccordian from "../../sharedsections/FaqsAccordian";
import CategoryTrends from "../../sections/CategoryTrendsSection";
import LearningAdvantage from "../../sharedsections/LearningAdvantageSection";
import ExploreOtherCategories from "../../sections/CategoryExploreCategoriesSection";
import SkillsGain from "../../sharedsections/SkillsGainSection";
import CategoryGoverningBodies from "../../sections/CategoryGoverningBodiesSection";
import TrainingPartner from "../../sharedsections/TrainingPartnerSection";
import OnlineAdvantage from "../../sections/OnlineAdvantageSection";
import CategorySuccessStories from "../../sections/CategorySuccessStoriesSection";
import TrainingDeliveryOptions from "../../sections/TrainingDeliveryOptionsSection";
import CategoryJobRoles from "../../sections/CategoryJobRolesSection";
import Image from "next/image";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import CategoryCourseListTab from "../../sections/CategoryCourseListTabSection";
import CategoryCostTable from "../../sections/CategoryCostTableSection";

const templateMapping = {
  CategoryBanner: ({ content }) => <CategoryBannerNew BannerData={content} />,

  // CategoryLoadMoreContent: (props) => (
  //   <CategoryLoadMoreContent contents={props.contents} />
  // ),
  CategoryCourseLevel: ({content, globaldata}) => ( <CategoryCourseListTab  CategoryCourseListTabData = {content} additionalData={globaldata}/>),
  ExploreOtherCategories: ({ content, globaldata }) => (
    <ExploreOtherCategories exploreData={content} additionalData={globaldata} />
  ),
  CategoryGoverningBodies: ({ content, globaldata }) => (
    <CategoryGoverningBodies
      CategoryGoverningBodiesData={content}
      additionalData={globaldata}
    />
  ),
  CategoryStrengthen: ({ content }) => (
    (<CategoryJobRoles strengthenData={content} />)
  ),
  IndustryTrends: ({ content }) => <CategoryTrends trendsData={content} />,
  CourseOutline: ({ content }) => (
    <CategoryCourseOutline courseOutlineData={content} />
  ),
  SkillsGain: ({ content }) => <SkillsGain SkillsGainData={content} />,

  KnowAboutOurTrainers: ({ content }) => (
    <Container>
    <div className="flex flex-col md:grid md:grid-cols-10 gap-6 items-start">
      <div className="md:col-span-7">
        <CategoryJobRoles KnowAboutOurTrainersData={content} />
       
  <Text className="font-semibold ">
    Elevate your Skills With our Top Trainers!{" "}
    <Button variant="secondary" className="ml-3 rounded-none font-semibold">
      Enquire Now
      <MoveRight className="ml-3" />
    </Button>
  </Text>
      </div>
      <div className="md:col-span-3">
        <Image
          src="/cat-trainers-bg.png"
          alt="image"
          width={400}
          height={500}
        />
      </div>
    </div>
    </Container>
  ),
  OnlineAdvantage: ({ content }) => (
    <OnlineAdvantage OnlineAdvantageData={content} />
  ),
  CategorySuccessStories: ({ content, globaldata }) => (
    <CategorySuccessStories
      CategorySuccessStoriesData={content}
      additionalData={globaldata}
    />
  ),
  CategoryKnowAbout: ({ content }) => (
    (<CategoryJobRoles CategoryKnowAboutData={content} />)
  ),

  CategoryJobRoles: ({ content }) => (
    <CategoryJobRoles CategoryJobRolesData={content} />
  ),
  CategoryCostDescriptionTable: ({ content }) => (
    <CategoryCostTable CategoryCostTableData={content} />
  ),
  // CategoryPrerequisites: (props) => (
  //   <CategoryPrerequisites
  //     contents={props.contents}
  //     selected_country={props.selectedCountry}
  //   />
  // ),
  CourseWhoShouldAttend: ({ content }) => (
    <SkillsGain whoShouldAttendData={content} />
  ),
  // EnquiryFormTab: (props) => (
  //   <EnquiryFormTab content={props.contents} />
  // ),
  // Counters: (props) => (
  //   <Counters content={props.contents} />
  // ),
  // EnterpriseGlobally: (props) => (
  //   <EnterpriseGlobally content={props.contents} />
  // ),
  TestimonialSlider: ({ content, globaldata }) => (
    <TestimonialSlider sliderData={content} additionalData={globaldata} />
  ),
  FaqTab: ({ content, globaldata }) => (
    <FaqsAccordian faqsData={content} additionalData={globaldata} category={true}/>
  ),
  LearningAdvantage: ({ content }) => (
    <LearningAdvantage advantageData={content} category={true} />
  ),
  ModeofTraining: () => (
    <>
      <TrainingPartner />
      <TrainingDeliveryOptions />
    </>
  ),
};

const CategoryScreen = ({ data }) => {
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={data} />
    ) : null;
  };

  const { pageContents, pageSeos } = data;
  // console.log("pageSeos");
  // console.log(pageSeos);
  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return <div>{renderContent(pageContents)}</div>;
};

export default CategoryScreen;
