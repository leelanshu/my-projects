import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Example = () => {
  return (
    <div className="flex h-[500px] text-black max-w-[85%] mx-auto mt-5">
      <FlyoutLink  href="#" FlyoutContent={PricingContent}>
       Business Stationary
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
       Marketing Material 
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
       Promotional Item 
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
       Corporate Gifting 
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
       Flyers & Leaflete 
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
       Poster 
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
       Visiting Cards 
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
       Letter Heads
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black mx-5">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#EF7F1A] transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl rounded-lg">
      <div className="mb-3 space-y-3">
        {/* <h3 className="font-semibold">For Individuals</h3> */}
      <a href="#" className="block text-sm hover:underline">
          Introduction
        </a> 
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        {/* <h3 className="font-semibold">For Companies</h3> */}
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      {/* <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button> */}
    </div>
  );
};

export default Example;