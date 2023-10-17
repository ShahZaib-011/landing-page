import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import SimpleSlider from "@/components/ReactSlick";
import Hamburger from "@/components/Hamburger";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activeCard, setActiveCard] = useState(0);
  const cardImages = [
    {
      resume:
        "https://www.wozber.com/public/examples/v2/en-us/graphic-designer/graphic-designer-resume-example-w374x1.png",
      user: "https://www.wozber.com/public/images/people/v2/home/3-w187x1.webp",
    },
    {
      resume:
        "https://www.wozber.com/public/examples/v2/en-us/custom/financial-analyst/financial-analyst-resume-example-w374x1.png",
      user: "https://www.wozber.com/public/images/people/v2/home/1-w187x1.webp",
    },
    {
      resume:
        "https://www.wozber.com/public/examples/v2/en-us/digital-marketing-project-manager/digital-marketing-project-manager-resume-example-w374x1.png",
      user: "https://www.wozber.com/public/images/people/v2/home/4-w187x1.webp",
    },
    {
      resume:
        "https://www.wozber.com/public/examples/v2/en-us/assistant-project-manager/assistant-project-manager-resume-example-w374x1.png",
      user: "https://www.wozber.com/public/images/people/v2/home/2-w187x1.webp",
    },
    {
      resume:
        "https://www.wozber.com/public/examples/v2/en-us/office-administrator/office-administrator-resume-example-w374x1.png",
      user: "https://www.wozber.com/public/images/people/v2/home/5-w187x1.webp",
    },
    // Add more image URLs for different cards
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((activeCard + 1) % cardImages.length);
    }, 3000); // Adjust the interval duration as needed (e.g., 3000ms for 3 seconds)

    return () => {
      clearInterval(interval);
    };
  }, [activeCard]);
  const svgStyles: React.CSSProperties = {
    width: '96px',
    height: '96px',
  };

  const circleStyles: React.CSSProperties = {
    fill: 'transparent',
    strokeWidth: 8,
  };
  return (
    <>
      <div className="mx-[20px] md:mx-[40px]  xl:mx-[120px] mt-10">
        <div className="">
          <Hamburger />
          <div className="flex flex-col lg:flex lg:flex-row justify-evenly relative h-[60vh] md:h-[55vh] lg:h-[50vh] mb-[160px] mt-[160px] md:mt-[120px]">
            <div className="text max-w-[588px]">
              <h1 className="text-[28px] lg:text-[50px] font-bold mb-2">
                Free resume builder for modern job seekers
              </h1>
              <p className="text-[24px] font-light mb-2 max-w-[486px]">
                By employing the best practices and innovative tech, Wozber
                boosts your chances of landing a better job &ndash; completely
                for free.
              </p>
              <div className="flex gap-[20px]">
                <button className="p-4 bg-[#0c66ff] rounded-md text-white">
                  Build Resume
                </button>
                <div className="flex justify-center items-center">
                  No registration required
                </div>
              </div>
            </div>
            <div className=" relative">
              <div className="preview">
                <div className="intro-abstract-parts active">
                  <div className="triangles">
                    <div></div>
                    <div></div>
                  </div>
                  <div className="circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="squares">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                {/* Resume Example 1 */}
                <div className="flex justify-center items-center h-[60vh] relative">
                  <div className="resume-example transform rotate-0 lg:rotate-3 skew-x-0 lg:skew-x-1.5">
                    <div className="image-wrapper resume">
                      <div className="image-container">
                        <picture>
                          <source
                            media="(min-width: 800px)"
                            srcSet={cardImages[activeCard].resume}
                            type="image/png"
                          />
                          <img
                            src={cardImages[activeCard].resume}
                            alt="Modern resume example for Financial Analyst position"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="user-example absolute md:left-[10%] left-[-12%] transform rotate-0 lg:rotate-[2deg] skew-y-0 lg:skwey-y-[5deg]">
                    <div className="image-wrapper user">
                      <div className="image-container">
                        <picture>
                          <source
                            srcSet={cardImages[activeCard].user}
                            type="image/webp"
                          />
                          <img
                            src={cardImages[activeCard].user}
                            alt="Job seeker #1"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add more resume examples here in a similar structure */}
              </div>
            </div>
          </div>
          <div>
            <div className="landing-home-top-benefits flex">
              <div className="content">
                <div className="list flex gap-5">
                  <div className="item">
                    <div className="title font-bold">Smart</div>
                    <div className="info">
                      Forget about Word templates and hours of editing. Powered
                      by intelligent technologies, Wozber will save your time
                      and guide you to the best version of your resume.
                    </div>
                  </div>
                  <div className="item">
                    <div className="title font-bold">Privacy-friendly</div>
                    <div className="info">
                      Anonymously create and download your resume with a cover
                      letter entirely in the browser, without storing any of
                      your personal data on our server – unless you choose to
                      save your progress yourself.
                    </div>
                  </div>
                  <div className="item">
                    <div className="title font-bold">Free</div>
                    <div className="info">
                      Everything necessary to build and download a job-winning
                      resume is entirely free. Make sure of that by checking out{" "}
                      <a href="/en-us/services">Wozber services</a>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <div>
              <div>
                <p className="text-2xl font-bold">
                  Start by selecting a free resume template
                </p>
              </div>
              <div className="mt-[40px]">
                <SimpleSlider />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex md:flex-row md:justify-between  gap-5 mb-[140px] md:mb-[40px] mt-[40px]">
            <div className="left-side">
              <p className="capitalize text-[#ba326a] titlefield max-w-[384px]">
                FIELD&ndash;TESTED RESUME FORMAT
              </p>
              <p className="text-[32px] leading-[46px] font-bold max-w-[360px] mb-12">
                Build your resume quickly and easily
              </p>
              <p className="p-4 bg-[#f2f2f2] max-w-[384px]">
                Follow simple steps and write about yourself.
              </p>
              <p className="p-4 bg-[#f2f2f2]  max-w-[384px] mt-[10px]">
                Wozber will be providing you with tips and examples to make sure
                you use the best industry practices.
              </p>
              <p className="p-4 bg-[#f2f2f2] max-w-[384px] mt-[10px]">
                As a result, you will get a job-winning resume and cover letter.
                A piece of cake!
              </p>
            </div>
            <div className="right-side relative mt-10 bg-[#fff] p-6 w-[270px] md:w-[50%] lg:w-auto">
              <div className="flex gap-5">
                <div className="h-[96px] w-[96px] md:h-[164px] md:w-[164px]">
                  <Image
                    src={"/images/nikelogo.jpg"}
                    className="ml-0 lg:ml-[-40px]"
                    alt=""
                    height={164}
                    width={164}
                  />
                </div>
                <div className="input-container">
                  <div className="input-wrapper">
                    <div>
                      <p className="text-[#bbb] pb-[2px] text-[6px] md:text-[16px]">
                        First Name
                      </p>
                      <p className="pb-[2px] text-[6px] md:text-[16px]">
                        Hassaan
                      </p>
                    </div>
                    <div className="border-[1px] border-[#eee] w-[100%]"></div>
                  </div>
                  <div className="input-wrapper">
                    <div>
                      <p className="text-[#bbb] pb-[2px] text-[6px] md:text-[16px]">
                        Last Name
                      </p>
                      <p className="pb-[2px] text-[6px] md:text-[16px]">
                        {" "}
                        Zameer
                      </p>
                    </div>
                    <div className="border-[1px] border-[#eee] w-[100%]"></div>
                  </div>
                  <div className="input-wrapper">
                    <div>
                      <p className="text-[#bbb] pb-[2px] text-[6px] md:text-[16px]">
                        Job Position Title
                      </p>
                      <p className="pb-[2px] text-[6px] md:text-[16px]">
                        Digital Marketing Project Manager
                      </p>
                    </div>
                    <div className="border-[1px] border-[#eee] w-[100%]"></div>
                  </div>
                </div>
              </div>
              <div className="input-container mt-[10px]">
                <div className="input-wrapper">
                  <div>
                    <p className="mt-16px text-[#bbb] text-[7px] md:text-[16px] pb-1">
                      Contact Details
                    </p>
                    <p className="text-[#bbb] pb-[2px] text-[6px] md:text-[16px]">
                      Phone Number
                    </p>
                    <p className="pb-[2px] text-[6px] md:text-[16px]">
                      051 09078601
                    </p>
                  </div>
                  <div className="border-[1px] border-[#eee] w-[100%]"></div>
                </div>
                <div className="input-wrapper">
                  <div>
                    <p className="text-[#bbb] pb-[2px] text-[6px] md:text-[16px]">
                      Email Address
                    </p>
                    <p className="pb-[2px] text-[6px] md:text-[16px]">
                      example@tensor.com
                    </p>
                  </div>
                  <div className="border-[1px] border-[#eee] w-[100%]"></div>
                </div>
                <div className="input-wrapper">
                  <div>
                    <p className="text-[#bbb] capitalize pb-[2px] text-[6px] md:text-[16px]">
                      Personal website
                    </p>
                    <p className="pb-[2px] text-[6px] md:text-[16px]">
                      www.tensorlab.com
                    </p>
                  </div>
                  <div className="border-[1px] border-[#eee] w-[100%]"></div>
                </div>
                <div className="input-wrapper">
                  <div>
                    <p className="mt-16px text-[#bbb] mt-[16px] text-[7px] md:text-[16px] pb-1">
                      Location
                    </p>
                    <p className="text-[#bbb] pb-[2px] text-[6px] md:text-[16px] capitalize">
                      city
                    </p>
                    <p className="pb-[2px] text-[6px] md:text-[16px]">
                      Islamabad
                    </p>
                  </div>
                  <div className="border-[1px] border-[#eee] w-[100%]"></div>
                </div>
              </div>
              <div className="absolute-card absolute left-[40%] top-[60%] md:top-[51%] md:left-[61%] lg:left-[51%] w-[200px] md:w-[220px] lg:w-[340px] bg-[#fff]">
                <div>
                  <div className="p-4 md:p-8">
                    <div className="flex gap-4 mb-2">
                      <div className="flex justify-center items-center">
                        <div className="h-[8px] w-[8px] bg-[#0c66ff] rounded-full"></div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="capitalize text-[14px] md:text-[16px]">
                          personal details
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="flex justify-center items-center">
                        <div className="h-[4px] w-[4px] bg-[#bbb] rounded-full"></div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="capitalize text-[14px] md:text-[16px]">
                          experience
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="flex justify-center items-center">
                        <div className="h-[4px] w-[4px] bg-[#bbb] rounded-full"></div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="capitalize text-[14px] md:text-[16px]">
                          education
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="flex justify-center items-center">
                        <div className="h-[4px] w-[4px] bg-[#bbb] rounded-full"></div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="capitalize text-[14px] md:text-[16px]">
                          skills
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="flex justify-center items-center">
                        <div className="h-[4px] w-[4px] bg-[#bbb] rounded-full"></div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="capitalize text-[14px] md:text-[16px]">
                          Languages
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="flex justify-center items-center">
                        <div className="h-[4px] w-[4px] bg-[#bbb] rounded-full"></div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="capitalize text-[14px] md:text-[16px]">
                          certificates
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex justify-center items-center">
                        <div className="h-[4px] w-[4px] bg-[#bbb] rounded-full"></div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="capitalize text-[14px] md:text-[16px]">
                          summary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f3f1f1] p-8">
            <div>
              <p className="bg-[#222] p-1 capitalize text-[10px] max-w-[86px] md:text-[16px] rounded-3xl text-center text-white">
                PAID SERVICE
              </p>
              <p className="font-medium mt-[8px] text-[24px]">
                ATS Resume Scanner
              </p>
              <p className="mt-[8px] text-[#222222a3]">
                An AI-driven service dedicated to help you tailor your resume
                for any job position you seek by revealing the key information
                Applicant Tracking Systems and recruiters search for. It's your
                secret key to getting into more job interviews.
              </p>
            </div>
          </div>
          {/* <div className="spinner-wrap ">
              <div className="spinner-item"></div>
              <div className="spinner-item spinner-item--2"></div>
              <div className="spinner-item spinner-item--3"></div>
            </div> */}
          {/* <div className="relative">

              <div className="mt-[10px]">
                <img src="https://www.wozber.com/public/examples/v2/en-us/custom/marketing-project-manager/digital-marketing-project-manager-4-resume-example-w374x1.png" alt="ats" />
              </div>
              <div className=" match-rate-progress absolute top-[40%] left-[30%] z-10"><Image src={"/images/circle.webp"} alt="circle" height={96} width={96} /></div>
            </div> */}
          <Footer />

        </div>
      </div>
    </>
  );
}
