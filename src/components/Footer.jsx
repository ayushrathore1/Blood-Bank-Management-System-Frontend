import React from "react";

function Footer() {
  return (
    <footer
      className="w-full mt-12 py-6 bg-gray-50 border-t border-gray-200 text-center text-gray-600 flex flex-col items-center gap-2"
      role="contentinfo"
    >
      <hr className="w-full border-gray-200 mb-4" />
      <div className="text-base font-medium">
        &copy; {new Date().getFullYear()} Blood Bank Management System. All
        rights reserved.
      </div>
      <div className="text-xs">
        Powered by Medha Platform | For assistance, contact{" "}
        <a
          href="mailto:support@medha.com"
          className="underline text-blue-600 hover:text-blue-800 transition"
        >
          support@medha.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
