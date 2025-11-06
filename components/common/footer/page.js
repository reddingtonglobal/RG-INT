"use client";

import { RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const FooterBlogLink = () => {
  const pathname = usePathname();
  const isExternal = !pathname.startsWith("/");

  const handleClick = (e) => {
    if (isExternal) {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        window.open(
          "https://in.linkedin.com/company/reddington-global-consultancy-pvt-ltd",
          "_blank"
        );
      }
    }
  };

  return (
    <li className="mb-3 pl-4 relative">
      {isExternal ? (
        <a
          href="https://in.linkedin.com/company/reddington-global-consultancy-pvt-ltd"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          BLOG
        </a>
      ) : (
        <Link
          href="https://in.linkedin.com/company/reddington-global-consultancy-pvt-ltd"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          BLOG
        </Link>
      )}
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-[url('/assets/images/footer.png')] bg-cover bg-no-repeat bg-center h-[248px]">
        <div className="container  h-full">
          <Carousel
            className="h-full"
            autoplay={true}
            dots={false}
            autoplaySpeed={3000}
          >
            <div className="min-h-[248px] !flex items-center">
              <Image
                src="/assets/images/rglogo4.png"
                width="220"
                height="50"
                alt="logo"
                className="mx-auto"
              />
            </div>
            <div className="min-h-[248px] !flex items-center">
              <Image
                src="/assets/images/IMMERGIX_LOGO.svg"
                width="220"
                height="50"
                alt="logo"
                className="mx-auto"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="blueBg py-14">
        <div className="container flex md:flex-row flex-col">
          <div className="md:w-1/4 w-full">
            <Image
              src="/assets/images/rglogo3.png"
              alt="logo"
              width={147}
              height={71}
            />
            <p className="text-white sm:py-10 pt-10 pb-5 pr-9">
              We focus on the needs of small to middle market businesses to
              improve and grow their return.
            </p>
            <p className="yellowText sm:pb-0 pb-5 uppercase">
              <Link href="/about">
                Read More <RightOutlined className="text-xs font-semibold" />{" "}
              </Link>
            </p>
          </div>
          <div className="sm:w-1/4">
            <h3 className="text-lg font-semibold uppercase text-white">
              Useful Links
            </h3>
            <hr className="w-[90.751px] h-[3px] bg-[#DFDF00]" />
            <ul className="text-[15px] uppercase text-white sm:mt-[30px] mt-[15px] sm:mb-0 mb-6 footerList">
              <li className="mb-3 pl-4 relative">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-3  pl-4 relative">
                <Link href="/services">Our Services</Link>
              </li>
              <li className="mb-3  pl-4 relative">
                <Link href="/">Our Team</Link>
              </li>
              <li className="mb-3  pl-4 relative">
                <Link href="/career">Careers</Link>
              </li>
              <li className="mb-3 pl-4 relative">
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 w-full">
            <h3 className="text-lg font-semibold uppercase text-white">
              Company
            </h3>
            <hr className="w-[90.751px] h-[3px] bg-[#DFDF00]" />
            <ul className="text-[15px] uppercase text-white sm:mt-[30px] mt-[15px] sm:mb-0 mb-6 footerList">
              <FooterBlogLink />
              <li className="mb-3  pl-4 relative">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-3  pl-4 relative">
                <Link href="/">Our Consultants</Link>
              </li>
              <li className="mb-3  pl-4 relative">
                <Link href="/contact_us">Contact Us</Link>
              </li>
              <li className="mb-3 pl-4 relative">
                <a 
                  href="mailto:sales@reddingtonglobal.com"
                  className="text-white hover:text-[#DFDF00] transition-colors normal-case"
                >
                  📧 sales@reddingtonglobal.com
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 w-full">
            <h3 className="text-lg font-semibold uppercase text-white">
              Our Offices
            </h3>
            <hr className="w-[90.751px] h-[3px] bg-[#DFDF00]" />
            <div className="sm:mt-[30px] mt-[15px] space-y-4">
              {/* RG Consultancy */}
              <Link href="/" className="block group">
                <div className="bg-white/5 p-3 rounded-lg border border-transparent hover:border-[#DFDF00] hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Image
                        src="/assets/images/rglogo3.png"
                        alt="RG Consultancy"
                        width={50}
                        height={25}
                        className="mt-1 brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:brightness-150 group-hover:drop-shadow-[0_0_15px_rgba(223,223,0,0.8)] transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-bold mb-1 group-hover:text-[#DFDF00] transition-colors">
                        RG Consultancy
                      </p>
                      <p className="text-gray-300 text-xs leading-relaxed group-hover:text-white transition-colors">
                        Tulip Ivory T-D ,FL - G002  sector-70 , Gurugram ,Haryana 122016
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* RG Group Inc */}
              <Link href="/" className="block group">
                <div className="bg-white/5 p-3 rounded-lg border border-transparent hover:border-[#DFDF00] hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Image
                        src="/assets/images/rginclogo.png"
                        alt="RG Group Inc"
                        width={50}
                        height={25}
                        className="mt-1 brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:brightness-150 group-hover:drop-shadow-[0_0_15px_rgba(223,223,0,0.8)] transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-bold mb-1 group-hover:text-[#DFDF00] transition-colors">
                        RG Group Inc
                      </p>
                      <p className="text-gray-300 text-xs leading-relaxed group-hover:text-white transition-colors">
                        30 N Gould St Ste R Sheridan, WY 82801
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Immergix */}
              <a 
                href="https://maps.google.com/?q=750, Udyog Vihar Phase 5, Sector 19, Gurugram, Haryana 122016" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="bg-white/5 p-3 rounded-lg border border-transparent hover:border-[#DFDF00] hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Image
                        src="/assets/images/Immergix_White_Logo.png"
                        alt="Immergix"
                        width={70}
                        height={18}
                        className="mt-1 brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:brightness-150 group-hover:drop-shadow-[0_0_15px_rgba(223,223,0,0.8)] transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 text-xs leading-relaxed group-hover:text-white transition-colors mt-1">
                        📍 750, Udyog Vihar Phase 5, Sector 19, Gurugram, Haryana 122016
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              
              {/* RG Care Foundation */}
              <a 
                href="https://maps.google.com/?q=750, Udyog Vihar Phase 5, Sector 19, Gurugram, Haryana 122016" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="bg-white/5 p-3 rounded-lg border border-transparent hover:border-[#DFDF00] hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Image
                        src="/assets/images/rgcarefoundation.png"
                        alt="RG Care Foundation"
                        width={50}
                        height={25}
                        className="mt-1 brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:brightness-150 group-hover:drop-shadow-[0_0_15px_rgba(223,223,0,0.8)] transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-bold mb-1 group-hover:text-[#DFDF00] transition-colors">
                        RG Care Foundation
                      </p>
                      <p className="text-gray-300 text-xs leading-relaxed group-hover:text-white transition-colors">
                        📍 750, Udyog Vihar Phase 5, Sector 19, Gurugram, Haryana 122016
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[65px] flex justify-center items-center">
        <p className="text-[#00224C] text-[15px] ">
          Copyright © 2023 RG consultancy All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
