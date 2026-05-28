"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

// Simple error boundary for menu
const SafeMenu = ({ children, fallback = null }) => {
  try {
    return children;
  } catch (error) {
    console.error('Menu error:', error);
    return fallback;
  }
};

const LogoBox = ({ src, alt, customSize, priority = false }) => (
  <div
    className={`relative flex items-center justify-center ${
      customSize ? customSize : "h-[80px] w-[180px]"
    }`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="200px"
      className="object-contain"
      priority={priority}
    />
  </div>
);

const Header = () => {
  const [menuOpenKeys, setMenuOpenKeys] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Safe menu items configuration
  const getMenuItems = () => {
    try {
      return [
        { 
          label: <Link href="/">Home</Link>, 
          key: "home" 
        },
        {
          label: <span>Who we are</span>,
          key: "who_we_are",
          children: [
            { label: <Link href="/about">About Us</Link>, key: "about" },
            { label: <Link href="/career">Career</Link>, key: "career" },
            { label: <Link href="/leadership">Leadership</Link>, key: "leadership" },
          ],
        },
        {
          label: <Link href="/services">Services</Link>,
          key: "services",
          children: [
            {
              label: <Link href="/financial_services">Financial Services</Link>,
              key: "financial_services",
            },
            {
              label: <Link href="/recruitment_solutions">Recruitment and Staffing Services</Link>,
              key: "recruitment",
            },
            { 
              label: <Link href="/services/virtual_centre">IMMERGIX BPO</Link>, 
              key: "virtual_centre" 
            },
            { 
              label: <Link href="/management_consultancy">Management Consultancy</Link>, 
              key: "management_consultancy" 
            },
            { 
              label: <Link href="/retail_requirement">Retail Requirements</Link>, 
              key: "retail_requirement" 
            },
          ],
        },
        { 
          label: (
            <a 
              href="https://www.linkedin.com/company/immergixthefuture/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                try {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && window.open) {
                    window.open('https://www.linkedin.com/company/immergixthefuture/', '_blank');
                  }
                } catch (error) {
                  console.error('Error opening link:', error);
                }
              }}
            >
              Blog
            </a>
          ), 
          key: "blog" 
        },
        { 
          label: <Link href="/testimonial">Testimonial</Link>, 
          key: "testimonial" 
        },
        { 
          label: <Link href="/contact_us">Contact Us</Link>, 
          key: "contact_us" 
        },
      ];
    } catch (error) {
      console.error('Error creating menu items:', error);
      return [];
    }
  };

  const items = getMenuItems();

  const rootSubmenuKeys = ["who_we_are", "services"];
  
  const handleOpenChange = (keys) => {
    try {
      if (!keys || !Array.isArray(keys)) {
        setMenuOpenKeys([]);
        return;
      }
      
      const latestOpenKey = keys.find((key) => 
        menuOpenKeys && menuOpenKeys.indexOf(key) === -1
      );
      
      if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setMenuOpenKeys(keys);
      } else {
        setMenuOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    } catch (error) {
      console.error('Error in handleOpenChange:', error);
      setMenuOpenKeys([]);
    }
  };

  const handleDrawerClose = () => {
    try {
      setDrawerOpen(false);
    } catch (error) {
      console.error('Error closing drawer:', error);
    }
  };

  const handleDrawerOpen = () => {
    try {
      setDrawerOpen(true);
    } catch (error) {
      console.error('Error opening drawer:', error);
    }
  };

  return (
    <header className="bg-[#00224C]">
      {/* ======= TOP STRIP ======= */}
      <div className="w-full py-1 sm:py-2 md:py-3 border-b border-white/10">
        <div className="flex items-center w-full px-1 sm:px-2 md:px-4">
          {/* Left logos - optimized for all screen sizes including laptops */}
          <div className="flex items-center justify-start gap-0.5 xs:gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-8 2xl:gap-14 flex-1 min-w-0 overflow-hidden">
            {/* 1️⃣ RG Consultancy — absolutely flush left */}
            <div className="flex-shrink-0 min-w-0">
              <Link href="https://reddingtonglobal.com" target="_blank" rel="noopener noreferrer">
                <LogoBox
                  src="/assets/images/rglogo3.png"
                  alt="RG Consultancy"
                  customSize="h-[30px] w-[60px] xs:h-[35px] xs:w-[70px] sm:h-[45px] sm:w-[90px] md:h-[55px] md:w-[110px] lg:h-[65px] lg:w-[130px] xl:h-[80px] xl:w-[160px] 2xl:h-[130px] 2xl:w-[280px]"
                  priority
                />
              </Link>
            </div>

            {/* 2️⃣ IMMERGIX */}
            <div className="flex-shrink-0 min-w-0">
              <Link href="https://reddingtonglobal.com" target="_blank" rel="noopener noreferrer">
                <LogoBox
                  src="/assets/images/Immergix_White_Logo.png"
                  alt="IMMERGIX"
                  customSize="h-[25px] w-[75px] xs:h-[30px] xs:w-[90px] sm:h-[35px] sm:w-[105px] md:h-[45px] md:w-[135px] lg:h-[50px] lg:w-[150px] xl:h-[60px] xl:w-[180px] 2xl:h-[90px] 2xl:w-[300px]"
                />
              </Link>
            </div>

            {/* 3️⃣ Reddington Group INC */}
            <div className="flex-shrink-0 min-w-0">
              <Link href="https://reddingtonglobal.com" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <LogoBox
                    src="/assets/images/rginclogo.png"
                    alt="Reddington Group INC"
                    customSize="h-[25px] w-[60px] xs:h-[28px] xs:w-[70px] sm:h-[32px] sm:w-[80px] md:h-[38px] md:w-[95px] lg:h-[42px] lg:w-[105px] xl:h-[50px] xl:w-[125px] 2xl:h-[90px] 2xl:w-[250px]"
                  />
                  <p className="text-white text-[5px] xs:text-[6px] sm:text-[6px] md:text-[7px] lg:text-[7px] xl:text-[8px] 2xl:text-xs leading-none mt-[1px] tracking-wide uppercase text-center font-semibold whitespace-nowrap">
                    Reddington Group INC
                  </p>
                </div>
              </Link>
            </div>

            {/* 4️⃣ RG Care Foundation */}
            <div className="flex-shrink-0 min-w-0">
              <Link href="https://rgcare.in" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <LogoBox
                    src="/assets/images/rgcarefoundation.png"
                    alt="RG Care Foundation"
                    customSize="h-[25px] w-[60px] xs:h-[28px] xs:w-[70px] sm:h-[32px] sm:w-[80px] md:h-[38px] md:w-[95px] lg:h-[42px] lg:w-[105px] xl:h-[50px] xl:w-[125px] 2xl:h-[90px] 2xl:w-[250px]"
                  />
                  <p className="text-white text-[5px] xs:text-[6px] sm:text-[6px] md:text-[7px] lg:text-[7px] xl:text-[8px] 2xl:text-xs leading-none mt-[1px] tracking-wide uppercase text-center font-semibold whitespace-nowrap">
                    Reddington Global Care
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Certified + Contact - optimized for laptop screens */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-8 flex-shrink-0 ml-1 sm:ml-2">
            <div className="flex flex-col items-center text-center">
              <p className="text-[#DFDF00] text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-[17px] tracking-wide mb-0.5 md:mb-1 whitespace-nowrap">
                CERTIFIED BY
              </p>
              <div className="relative h-[15px] w-[45px] xs:h-[18px] xs:w-[54px] sm:h-[20px] sm:w-[60px] md:h-[24px] md:w-[90px] lg:h-[28px] lg:w-[105px] xl:h-[32px] xl:w-[120px] 2xl:h-[40px] 2xl:w-[190px]">
                <Image
                  src="/assets/images/nasscomLogo.png"
                  alt="nasscom"
                  fill
                  sizes="(max-width: 475px) 45px, (max-width: 640px) 54px, (max-width: 768px) 60px, (max-width: 1024px) 90px, (max-width: 1280px) 105px, (max-width: 1536px) 120px, 190px"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block h-4 md:h-5 lg:h-6 xl:h-7 2xl:h-8 w-px bg-white/30" />
            <div className="flex flex-col items-start space-y-0.5 md:space-y-1">
              <p className="text-[#DFDF00] text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-medium whitespace-nowrap">
                Have Any Question
              </p>
              <Link
                href="tel:+919818224495"
                className="text-white text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base font-semibold tracking-wide hover:text-[#DFDF00] transition-colors whitespace-nowrap"
              >
                +91&nbsp;9818224495
              </Link>
              <Link
                href="tel:+19545563969"
                className="text-white text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base font-semibold tracking-wide hover:text-[#DFDF00] transition-colors whitespace-nowrap"
              >
                +1&nbsp;9545563969
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ======= MAIN NAVBAR ======= */}
      <div className="w-full border-t border-white/10">
        <nav className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="relative flex items-center justify-center py-3">
            {/* Desktop Menu */}
            <div className="hidden md:block w-full">
              {items && items.length > 0 && (
                <SafeMenu fallback={<div className="text-white">Navigation loading...</div>}>
                  <Menu
                    mode="horizontal"
                    items={items}
                    openKeys={menuOpenKeys || []}
                    onOpenChange={handleOpenChange}
                    className="
                      bg-transparent text-white flex justify-center
                      text-sm lg:text-base
                      [&_.ant-menu-item]:px-0
                      [&_.ant-menu-submenu]:px-0
                      [&_.ant-menu-item]:mx-3 lg:[&_.ant-menu-item]:mx-5 xl:[&_.ant-menu-item]:mx-7
                      [&_.ant-menu-submenu]:mx-3 lg:[&_.ant-menu-submenu]:mx-5 xl:[&_.ant-menu-submenu]:mx-7
                      [&_.ant-menu-title-content]:font-medium
                    "
                  />
                </SafeMenu>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center justify-between w-full">
              <div className="text-white font-medium">Menu</div>
              <Button
                className="menubtn bg-transparent border-white text-white hover:bg-white hover:text-[#00224C]"
                type="primary"
                shape="circle"
                icon={<MenuOutlined />}
                onClick={handleDrawerOpen}
              />
            </div>
            
            {/* Mobile Drawer */}
            <Drawer
              title={
                <div className="relative h-[50px] w-[120px]">
                  <Image
                    src="/assets/images/rglogo3.png"
                    alt="RG Consultancy"
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
              }
              placement="left"
              onClose={handleDrawerClose}
              open={drawerOpen}
              className="!bg-[#00224C]"
              width={280}
            >
              {items && items.length > 0 && (
                <SafeMenu fallback={<div className="text-white p-4">Menu loading...</div>}>
                  <Menu
                    openKeys={menuOpenKeys || []}
                    onOpenChange={handleOpenChange}
                    mode="inline"
                    items={items}
                    className="bg-[#00224C] text-white border-none [&_.ant-menu-item]:border-b [&_.ant-menu-item]:border-white/10 [&_.ant-menu-submenu]:border-b [&_.ant-menu-submenu]:border-white/10"
                  />
                </SafeMenu>
              )}
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
