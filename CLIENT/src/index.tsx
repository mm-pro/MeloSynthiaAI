import instagram from "@/assets/instagram.svg"
import twitter from "@/assets/twitter.svg"
import facebook from "@/assets/facebook.svg"
import linkedin from "@/assets/linkedin.svg"


const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;

  export const footerLinks = [
    {
      title: "Lorem ipsum",
      links: [
        {
          name: "Lorem",
          link: "",
        },
        {
          name: "Lorem",
          link: "",
        },
        {
          name: "Lorem",
          link: "",
        },
        {
          name: "Lorem",
          link: "",
        },
        {
          name: "Lorem",
          link: "",
        },
      ],
    },
    {
      title: "Lorem ipsum",
      links: [
        {
          name: "lorem",
          link: "",
        },
        {
          name: "lorem",
          link: "",
        },
        {
          name: "lorem",
          link: "",
        },
        {
          name: "lorem",
          link: "",
        },
        {
          name: "lorem",
          link: "",
        },
      ],
    },
    {
      title: "lorem ipsum",
      links: [
        {
          name: "lorem",
          link: "",
        },
        {
          name: "lorem",
          link: "",
        },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];