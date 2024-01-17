import Products from "../../assets/womens_products";
import WomanStyle from "./WomansSection.module.css";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MansSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={WomanStyle.container}>
      <div className={WomanStyle.containerTitle}>
        <h1>It may interest you</h1>
      </div>

      <div className={WomanStyle.containerCarousel}>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        {/* <div className={WomanStyle.product}>
          <img src={Products[7].productImg.pr42} alt="" />
          <p className={WomanStyle.productName}>{Products[7].name}</p>
          <p className={WomanStyle.productPrice}>${Products[7].price}</p>
        </div>
        <div className={WomanStyle.product}>
          <img src={Products[1].image} alt="" />
          <p className={WomanStyle.productName}>{Products[1].name}</p>
          <p className={WomanStyle.productPrice}>${Products[1].price}</p>
        </div>
        <div className={WomanStyle.product}>
          <img src={Products[6].image} alt="" />
          <p className={WomanStyle.productName}>{Products[6].name}</p>
          <p className={WomanStyle.productPrice}>${Products[6].price}</p>
        </div>
        <div className={WomanStyle.product}>
          <img src={Products[3].productImg.pr33} alt="" />
          <p className={WomanStyle.productName}>{Products[3].name}</p>
          <p className={WomanStyle.productPrice}>${Products[3].price}</p>
        </div>
        <div className={WomanStyle.product}>
          <img src={Products[0].image} alt="" />
          <p className={WomanStyle.productName}>{Products[0].name}</p>
          <p className={WomanStyle.productPrice}>${Products[0].price}</p>
        </div> */}
      </div>

      <div className={WomanStyle.arrowDown}>
        <Icon icon="ion:arrow-up-sharp" color="white" rotate={2} width={25} />
      </div>
    </div>
  );
}
export default MansSection;
