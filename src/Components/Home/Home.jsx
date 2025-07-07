import React, { useEffect, useState } from "react";
import "./home.scss";
import video from "../../assets/video-banner-travel-web.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [price, setPrice] = useState(5000000);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video
        src={video}
        muted
        autoPlay
        loop
        playsInline
        
        preload="auto"
        type="video/mp4"
      ></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Vivu tour
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Hành trình mơ ước
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Chọn điểm đến của bạn </label>
            <div className="input flex">
              <input type="text" placeholder="	Bạn muốn đi đâu ?" />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Ngày khởi hành </label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Giá cao nhất:</label>
              <h3 className="total">
                {Number(price).toLocaleString("vi-VN")} đ
              </h3>
            </div>

            <div className="input flex">
              <input
                type="range"
                min="5000000"
                max="100000000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className="icon" />
            <span>MORE FILTER</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FiInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
