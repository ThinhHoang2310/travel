import React, { useEffect } from "react";
import "./main.scss";

// Import icons
import { CiLocationOn } from "react-icons/ci";
import { LuClipboardCheck } from "react-icons/lu";

// Import images
import img from "../../assets/VHL.png";
import img2 from "../../assets/PQ.png";
import img3 from "../../assets/BT.png";
import img4 from "../../assets/DL.png";
import img5 from "../../assets/MCC.png";
import img6 from "../../assets/HSD.png";
import img7 from "../../assets/HG.png";
import img8 from "../../assets/TG.png";
import img9 from "../../assets/NB.png";
import img10 from "../../assets/CD.png";
import img11 from "../../assets/Hue.png";
import img12 from "../../assets/BNH.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "Vịnh Hạ Long",
    location: "Quảng Ninh,Việt Nam",
    grade: "Trải nghiệm văn hóa nhẹ nhàng",
    fees: "10.000.000 đ",
    description:
      "Di sản thiên nhiên thế giới với hàng ngàn đảo đá vôi tuyệt đẹp.",
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: "Phú Quốc",
    location: "Kiên Giang,Việt Nam",
    grade: "Nghỉ dưỡng biển cao cấp",
    fees: "12.000.000 đ",
    description:
      "Thiên đường nghỉ dưỡng với biển xanh, cát trắng và resort sang trọng.",
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: "Biển Cổ Thạch",
    location: "Bình Thuận,Việt Nam",
    grade: "Khám phá biển & văn hóa",
    fees: "6.000.000 đ",
    description: "Nổi tiếng với Mũi Né, đồi cát bay và văn hóa Chăm đặc sắc.",
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: "Thác Cam Ly",
    location: "Đà Lạt,Việt Nam",
    grade: "Thư giãn giữa thiên nhiên",
    fees: "8.000.000 đ",
    description: "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm.",
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: "Mù Cang Chải",
    location: "Yên Bái,Việt Nam",
    grade: "Chinh phục thiên nhiên hoang sơ",
    fees: "7.000.000 đ",
    description:
      "Nức tiếng với ruộng bậc thang mùa lúa chín và bản sắc dân tộc.",
  },
  {
    id: 6,
    imgSrc: img6,
    desTitle: "Hang Sơn Đoòng",
    location: "Quảng Bình,Việt Nam",
    grade: "Phiêu lưu kỳ vĩ",
    fees: "50.000.000 đ",
    description:
      "Hang động lớn nhất thế giới – trải nghiệm đỉnh cao cho dân khám phá.",
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: "Ruộng bậc thang Hoàng Su Phì",
    location: "Hà Giang,Việt Nam",
    grade: "Tour phượt hùng vĩ",
    fees: "9.000.000 đ",
    description:
      "Cung đường đá và núi tuyệt đẹp, hấp dẫn giới trẻ yêu khám phá.",
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: "Khu dự trữ sinh quyển rừng ngập mặn Cần Giờ",
    location: "Tiền Giang,Việt Nam",
    grade: "Du lịch miệt vườn sông nước",
    fees: "5.000.000 đ",
    description:
      "Trải nghiệm chợ nổi, trái cây miệt vườn và đờn ca tài tử Nam Bộ.",
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: "Tam Cốc",
    location: "Ninh Bình,Việt Nam",
    grade: "Thắng cảnh và tâm linh",
    fees: "6.500.000 đ",
    description: "Tam Cốc, Tràng An – hòa quyện thiên nhiên và lịch sử.",
  },
  {
    id: 10,
    imgSrc: img10,
    desTitle: "Côn Đảo",
    location: "Bà Rịa - Vũng Tàu,Việt Nam",
    grade: "Du lịch tâm linh & thiên nhiên",
    fees: "15.000.000 đ",
    description:
      "Hòn đảo lịch sử, trong lành với biển xanh và các rạn san hô đa dạng.",
  },
  {
    id: 11,
    imgSrc: img11,
    desTitle: "Kinh Thành Huế",
    location: "Huế,Việt Nam",
    grade: "Khám phá cố đô",
    fees: "20.000.000 đ",
    description: "Cung đình cổ kính, lăng tẩm trầm mặc và nhã nhạc cung đình.",
  },
  {
    id: 12,
    imgSrc: img12,
    desTitle: "Bà Nà Hills",
    location: "Đà Nẵng,Việt Nam",
    grade: "Giải trí trên đỉnh núi",
    fees: "10.000.000 đ",
    description:
      "Cầu Vàng, làng Pháp, cáp treo và trải nghiệm tuyệt vời tại Đà Nẵng.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right"  className="title">Điểm đến nổi bật</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id}
              data-aos="fade-up"
              className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="desTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <CiLocationOn className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    Thông tin <LuClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
