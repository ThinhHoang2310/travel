import React, { useEffect, useState, useRef } from "react";
import "./footer.scss";
import video from "../../assets/video-footer-travel-web.mp4";

//IMPORT ICON
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const timeoutRef = useRef(null);
  const inputRef = useRef(null);

  // Hàm kiểm tra định dạng email
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const shoot = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);


    if (!email.trim()) {
      setPopupMessage("Vui lòng nhập email!");
      setPopupType("error");
    } else if (!isValidEmail(email)) {
      setPopupMessage("Email không hợp lệ!");
      setPopupType("error");
    } else {
      setPopupMessage(
        "Cảm ơn bạn đã quan tâm, VivuVietNam sẽ sớm liên hệ lại với bạn !"
      );
      setPopupType("success");
      setEmail("");
    }

    timeoutRef.current = setTimeout(() => {
      setPopupMessage("");
      setPopupType("");
    }, 4000);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsError(false); // xóa lỗi khi bắt đầu gõ lại
  };

  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          type="video/mp4"
        ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>GIỮ LIÊN LẠC VỚI NHAU NHÉ !!!</small>
            <h2>Đồng hành cùng Vivu</h2>
          </div>

          <div className="inputDiv flex" data-aos="fade-up">
            <input
              ref={inputRef}
              className={isError ? "error-input" : ""}
              type="text"
              placeholder="Nhập địa chỉ Email" 
              value={email}
              onChange={handleInputChange}
            />
           

            <button
              onClick={shoot}
              data-aos="fade-up"
              className="btn flex"
              type="submit"
            >
              GỬI
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                ViVuVietNam
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Mỗi chuyến đi không chỉ là một hành trình di chuyển,mà còn là cơ
              hội để kết nối, khám phá và thấu hiểu sâu sắc vẻ đẹp của mảnh đất
              hình chữ S thân thương.Với ViVu Việt Nam, mỗi bước chân là một
              nhịp đập yêu thương gửi trao về đất mẹ, mỗi chuyến đi là một sợi
              chỉ thêu thêm vào tấm thổ cẩm rực rỡ của lòng tự hào dân tộc.
              <br />
              Đi để Trải Nghiệm-Đi để Học Hỏi và đi để Yêu Thương.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiFillYoutube className="icon" />
              <FaFacebook className="icon" />
              <RiInstagramFill className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* {GROUP ONE} */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="linkGroup"
            >
              <span className="groupTitle">Về Vivu Travel</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Dịch Vụ
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bảo hiểm
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Đại lý du lịch
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Tin tức
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Thanh toán
              </li>
            </div>

            {/* {GROUP TWO} */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">Đối tác liên kết</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Traveloka
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Agoda
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trip.com
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trivago
              </li>
            </div>

            {/* {GROUP THREE} */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">Hành trình ưu đãi</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Đà Lạt
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Huế
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bình Thuận
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Hà Giang
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Ninh Bình
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>TRANG WEB DU LỊCH XUẤT SẮC NHẤT</small>
            <small>BẢN QUYỀN THUỘC VỀ VIVU TRAVEL HOANGTHINH-2025</small>
          </div>
        </div>
      </div>

      {popupMessage && (
        <div className={`popup ${popupType}`}>{popupMessage}</div>
      )}
    </section>
  );
};

export default Footer;
