import React from "react";

function Footer() {
  return (
    <div className="pb-2 text-center">
      <p className="text-sm opacity-60">
        &copy; {new Date().getFullYear()} Bradley Beamish. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
