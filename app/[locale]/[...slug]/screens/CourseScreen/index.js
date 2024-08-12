import React from 'react';
import CourseBanner from '../../sections/CourseBannerSection';
import CourseDescription from '../../sections/CourseOverviewSection';
import CourseMaterial from '../../sections/CourseMaterialSection';
import Container from '@/components/Container';
import Text from '@/components/Text';
import SkillsGain from '../../sharedsections/SkillsGainSection';
import CategoryCourseOutline from '../../sections/CategoryCourseOutlineSection';
import CourseOverview from '../../sections/CourseOverviewSection';
import RelatedCourseLinks from '../../sharedsections/RelatedCourseLinksSection';
import TrainingPartner from '../../sharedsections/TrainingPartnerSection';
import FaqsAccordian from '../../sharedsections/FaqsAccordian';
import LearningAdvantage from '../../sharedsections/LearningAdvantageSection';
import TestimonialSlider from '../../sharedsections/TestimonialSliderSection';
import OrganizeCorporateTraining from '../../sharedsections/OrganizeCorporateTrainingSection';
import CourseTrainingDeliveryOptions from '../../sections/courseTrainingDeliveryOptions';
import CorporateTrainingCard from '../../sections/CorporateTrainingCardSection';
import ExamFormat from '../../sections/ExamFormatSection';
import CourseTimeLine from '../../sections/CourseTimeLineSection';
import WhyYouShouldGet from '../../sections/WhyYouShouldGetSection';




const twoColumnComponents = [
  'CourseDescription',
  'WhatWillYouLearn',
  'SkillsGain',
  'CourseBenefits',
  'WhoShouldGet',
  'WhyChooseUsNew',
  'InfographicSection',
  'HowToApplyForTheExam',
  'CourseWhoShouldAttend',
  'CourseMaterial',
  'CourseBenefitsNew',
  'CourseTraningDeliveryMode',
  'CourseOutline',
  'CourseExamAndCost',
  'CourseTimeLine'
];

const firstColumnComponents = [
  'CategoryBanner' 
]

const otherColumnComponents = [
  'RelatedCourseinternalLinks',
  'FaqTab',
  'TestimonialSlider',
  'LearningAdvantage',
]

const templateMapping = {
  CategoryBanner: ({ content, globaldata }) => (
    <>
    <CourseBanner 
    CourseBannerData={content} 
      additionalData={globaldata}
    />
    <TrainingPartner/>
    </>
  ),
  CourseDescription: ({ content }) => (
    <CourseOverview courseOverviewData={content} />
  ),
  WhatWillYouLearn: ({ content, globaldata }) => (<SkillsGain WhatWillYouLearnData={content} additionalData={globaldata}/>),
  SkillsGain: ({ content }) => (
        <SkillsGain SkillsGainData={content} />
    ),
  CourseOutline: ({content}) => (
    <CategoryCourseOutline  courseOutlineData={content} />
  ),
  CourseWhoShouldAttend: ({ content }) => (
      <SkillsGain whoShouldAttendData={content} />
  ),
  CourseBenefitsNew: ({ content }) => (
    <SkillsGain CourseBenefitsNewData={content} /> 
  ),

  RelatedCourseinternalLinks: ( { content, globaldata }) => (
    <RelatedCourseLinks RelatedCourseLinksData={content} additionalData={globaldata}/>
  ),
  // TestimonialSlider: ({ content, globaldata }) => (
  //   <TestimonialSlider sliderData={content} additionalData={globaldata} />
  // ),
  InvlCorporateTrainingAvatar: ({ content, globaldata}) => (
    <OrganizeCorporateTraining CorporateTrainingData={content} additionalData={globaldata}/>
  ),
  FaqTab: ({ content, globaldata }) => (
    <FaqsAccordian faqsData={content} additionalData={globaldata} />
  ),
  LearningAdvantage: ({ content }) => (
    <LearningAdvantage advantageData={content} category={true} />
  ),
  // CourseBenefitsNew: ({ content }) => (
  //   <CourseBenefits CourseBenefitsNewData={content} /> 
  // ),
  CourseTraningDeliveryMode: ({ content }) => (
    <CourseTrainingDeliveryOptions/>
  ),
  CourseExamAndCost: ({ content }) => (
    <ExamFormat CourseFormatData={content} />
  ),
  CourseTimeLine: ({ content }) => (
    <CourseTimeLine CourseTimeLineData={content}/>
  ),
  // CourseBenefits: ({ content, globalData }) => (
  //   <CustomAccordion title={content.heading} defaultExpanded={true} id="CourseBenefits">
  //     <CourseBenefitsNew contents={content} price={globalData.courseBenefitsPrice} />
  //   </CustomAccordion>
  // ),
  WhoShouldGet: ({ content, globalData }) => (

      <WhyYouShouldGet WhyYouShouldGetData={content}/>
   
  ),
  // WhyChooseUsNew: ({ content }) => (
  //   <CustomAccordion title={content.heading} defaultExpanded={false} id="WhyChooseUsNew">
  //     <WhyChooseUsNew contents={content} />
  //   </CustomAccordion>
  // ),
  // InfographicSection: ({ content }) => (
  //   <InfographicSection content={content} />
  // ),
  // HowToApplyForTheExam: ({ content }) => (
  //   <HowToApplyForTheExam content={content} />
  // ),

  CourseMaterial:  ({ content }) => (
  <SkillsGain CourseMaterialData={content} /> )
  // Add other components here...
};

const CourseScreen = ({ data }) => {
  console.log("data",data);
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={data} />
    ) : null;
  };

  const { pageContents } = data;

  const twoColumnContent = pageContents.filter(content => twoColumnComponents.includes(content.template));
  const firstColumnContent = pageContents.filter(content => firstColumnComponents.includes(content.template));
  const otherContent = pageContents.filter(content => otherColumnComponents.includes(content.template));

  return (
    <>
      {firstColumnContent.map((content, index) => (
        <div key={index}>{renderTemplate(content.template, content)}</div>
      ))}
      <Container>
        <div className='lg:grid lg:grid-cols-10 lg:gap-x-3 lg:items-start xs:flex xs:flex-col xs:items-center'>
          <div className='col-span-7'>
            {twoColumnContent.map((content, index) => (
              <div key={index}>{renderTemplate(content.template, content)}</div>
            ))}
          </div>
          <div className='col-span-3 sticky top-8'>
            {/* <div className="sticky top-20">
              {data.course_video_url && (
                <VideoCard 
                  video={data.course_video_url} 
                  banner={data.course_video_thumbnail} 
                  name={data.link_title} 
                />
              )}  */}
              <div>
              <CorporateTrainingCard/>
            </div> 
        
          </div>
        </div>
      </Container>
      {otherContent.map((content, index) => (
        <div key={index}>{renderTemplate(content.template, content)}</div>
      ))}
    </>
  );
};

export default CourseScreen;