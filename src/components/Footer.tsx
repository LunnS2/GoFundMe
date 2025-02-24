import React from "react";

function Footer() {
  return (
    <footer className="bg-background text-center py-0 mt-auto">
      <p className="text-sm text-tertiary">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
