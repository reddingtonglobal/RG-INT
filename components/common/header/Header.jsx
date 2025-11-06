"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="w-full py-2 md:py-3 border-b border-white/10">
        <div className="flex items-center justify-between w-full px-2 md:px-4">
          {/* Left logos */}
          <div className="flex items-center justify-start gap-1 sm:gap-2 md:gap-4 lg:gap-8 xl:gap-14 w-full overflow-hidden">
            {/* 1️⃣ RG Consultancy — absolutely flush left */}
            <div className="flex-shrink-0">
              <Link href="https://reddingtonglobal.com" target="_blank" rel="noopener noreferrer">
                <LogoBox
                  src="/assets/images/rglogo3.png"
                  alt="RG Consultancy"
                  customSize="h-[40px] w-[80px] sm:h-[60px] sm:w-[120px] md:h-[80px] md:w-[160px] lg:h-[100px] lg:w-[200px] xl:h-[130px] xl:w-[280px]"
                  priority
                />
              </Link>
            </div>

            {/* 2️⃣ IMMERGIX */}
            <div className="flex-shrink-0">
              <Link href="https://reddingtonglobal.com" target="_blank" rel="noopener noreferrer">
                <LogoBox
                  src="/assets/images/Immergix_White_Logo.png"
                  alt="IMMERGIX"
                  customSize="h-[35px] w-[100px] sm:h-[50px] sm:w-[150px] md:h-[60px] md:w-[180px] lg:h-[70px] lg:w-[220px] xl:h-[90px] xl:w-[300px]"
                />
              </Link>
            </div>

            {/* 3️⃣ Reddington Group INC */}
            <div className="flex-shrink-0">
              <Link href="https://reddingtonglobal.com" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <LogoBox
                    src="/assets/images/rginclogo.png"
                    alt="Reddington Group INC"
                    customSize="h-[35px] w-[90px] sm:h-[45px] sm:w-[110px] md:h-[60px] md:w-[150px] lg:h-[75px] lg:w-[190px] xl:h-[90px] xl:w-[250px]"
                  />
                  <p className="text-white text-[6px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs leading-none mt-[1px] tracking-wide uppercase text-center font-semibold">
                    Reddington Group INC
                  </p>
                </div>
              </Link>
            </div>

            {/* 4️⃣ RG Care Foundation */}
            <div className="flex-shrink-0">
              <Link href="https://rgcare.in" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <LogoBox
                    src="/assets/images/rgcarefoundation.png"
                    alt="RG Care Foundation"
                    customSize="h-[35px] w-[90px] sm:h-[45px] sm:w-[110px] md:h-[60px] md:w-[150px] lg:h-[75px] lg:w-[190px] xl:h-[90px] xl:w-[250px]"
                  />
                  <p className="text-white text-[6px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs leading-none mt-[1px] tracking-wide uppercase text-center font-semibold">
                    Reddington Global Care
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Certified + Contact */}
          <div className="flex items-center gap-2 md:gap-6 lg:gap-10 mr-2 md:mr-4 flex-shrink-0">
            <div className="flex flex-col items-center text-center">
              <p className="text-[#DFDF00] text-[10px] sm:text-xs md:text-sm lg:text-[17px] tracking-wide mb-1">
                CERTIFIED BY
              </p>
              <div className="relative h-[20px] w-[60px] sm:h-[25px] sm:w-[80px] md:h-[30px] md:w-[120px] lg:h-[40px] lg:w-[190px]">
                <Image
                  src="/assets/images/nasscomLogo.png"
                  alt="nasscom"
                  fill
                  sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, (max-width: 1024px) 120px, 190px"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block h-6 md:h-8 w-px bg-white/30" />
            <div className="flex flex-col items-start space-y-1">
              <p className="text-[#DFDF00] text-[10px] sm:text-xs md:text-sm font-medium">
                Have Any Question
              </p>
              <Link
                href="tel:+919818224495"
                className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-wide hover:text-[#DFDF00] transition-colors"
              >
                +91&nbsp;9818224495
              </Link>
              <Link
                href="tel:+19545563969"
                className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-wide hover:text-[#DFDF00] transition-colors"
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
