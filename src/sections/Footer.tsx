import { columnData, columnTwoData } from "@/components/footer/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <section className="bg-[#1a1e2b] ">
      <section className="flex  mt-20 pt-5   justify-evenly items-center ">
        <ul className="flex flex-col  justify-center items-start   text-sm  md:text-base text-gray-500/70">
          {columnData.map((footerLinks) => (
            <li className="hover:text-gray-400" key={footerLinks.link}>
              <FontAwesomeIcon icon={footerLinks.icon} className="mr-2" />
              <Link to={footerLinks.href}>{footerLinks.link}</Link>{" "}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col justify-center items-start  text-sm md:text-base  text-gray-500/70 ">
          {columnTwoData.map((footerLinks) => (
            <li className="hover:text-gray-400" key={footerLinks.link}>
              <FontAwesomeIcon icon={footerLinks.icon} className="mr-2" />
              <Link to={footerLinks.href}>{footerLinks.link}</Link>{" "}
            </li>
          ))}
        </ul>
      </section>
      <h3 className="text-center mt-5 text-sm md:text-lg footerGray ">
        Copyright {new Date().getFullYear()}
      </h3>
    </section>
  );
};
