"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import getData from "@/app/lib/getData";
const Showschool = ({ alluser }) => {
  const [showMenu, setshowMenu] = useState(false);

  const showbar = () => {
    setshowMenu(!showMenu);
    console.log(showMenu);
  };
  useEffect(() => {
    if (alluser) console.log("user Obtained");
    else console.log("noUser");
  }, [alluser]);

  return (
    <div className="mainpage_container">
      <div className="header_container">
        <div className="website_address_icon">
          <div> school @informapp.in </div>{" "}
          <div className="social_icon">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaLinkedin />
            <FaYoutube />
          </div>{" "}
        </div>{" "}
        <div className="box">
          <div className="logoicon">
            <Image
              src={"/logo.png"}
              className="logo"
              height={50}
              width={50}
              alt="School_logo"
            />
          </div>{" "}
          <div className="ul_container" onClick={showbar}>
            <ul className="li_container">
              <li> Common Admission </li> <li> School Portal </li>{" "}
              <li> Find School </li> <li> Blog </li> <li> Login </li>{" "}
              <li> Signup </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={`${showMenu ? "showmenu" : "hidemenu"}`}>
        <ul className="li__container">
          <li> Common Admission </li> <li> School Portal </li>{" "}
          <li> Find School </li> <li> Blog </li> <li> Login </li>{" "}
          <li className="apply_li"> Signup </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div className="body">
        <div>
          <h3 className="bigone"> School Search </h3>{" "}
        </div>{" "}
        <div>
          <p className="cityname largespace">
            {" "}
            Find the right school for your child.{" "}
          </p>{" "}
        </div>{" "}
        <div className="inputbox">
          <IoIosSearch className="searchicon" />
          <input type="text" placeholder="school Name..." />
        </div>{" "}
        <div className="sc_ul_contaienr">
          <ul className="sc_li_container">
            <li className="option_tag">
              <select name="city" id="cities">
                <option defaultValue="choose City"> Choose City </option>{" "}
                <option value="Lucknow"> Lucknow </option>{" "}
                <option value="Delhi"> Delhi </option>{" "}
                <option value="Noida"> Noida </option>{" "}
              </select>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="containers">
          {" "}
          {alluser ? (
            alluser.map((items) => {
              const { id, image, city, state, name } = items;
              return (
                <div className="allimage_box" key={id}>
                  <div className="imgdiv">
                    <Image
                      src={`/schoolImage/${image}`}
                      width={100}
                      height={100}
                      className="image"
                      alt="img_school"
                    />
                  </div>{" "}
                  <div className="detail">
                    <div className="statename"> {city} </div>{" "}
                    <div> {name} </div>{" "}
                    <div className="cityname"> {state} </div>{" "}
                  </div>{" "}
                  <div className="apply_button">
                    <button> Apply Now </button>{" "}
                  </div>{" "}
                </div>
              );
            })
          ) : (
            <h2> Loading... </h2>
          )}{" "}
        </div>{" "}
      </div>{" "}
      <div className="footer">
        <div className="footer_container">
          <div className="first_col">
            <p className="first"> Subscribe to Newsletter </p>{" "}
            <p>
              Ge updated about admission forms, deadlines and articles to help
              you through the process.{" "}
            </p>{" "}
          </div>{" "}
          <div className="links_col">
            <p className="first"> Schools in India </p>{" "}
            <p> Other Schools in India </p> <p> Colleges in India </p>{" "}
            <p> Advertise With Us </p> <p> Common Admissions </p>{" "}
            <p> Edunify India </p>{" "}
          </div>{" "}
          <div className="support_privacy">
            <p className="first"> Privacy Policy </p> <p> Refund Policy </p>{" "}
            <p> Contact us </p> <p> About Us </p> <p> CGPA Converter </p>{" "}
            <p> </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Showschool;
