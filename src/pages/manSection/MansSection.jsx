import Products from "../../assets/mens_products";

import MansStyle from "./MansSection.module.css";
import { Icon } from "@iconify/react";

function MansSection() {
  return (
    <div className={MansStyle.container}>
      <div className={MansStyle.containerTitle}>
        <h1>It may interest you</h1>
      </div>

      <div className={MansStyle.containerCarousel}>
        <div className={MansStyle.product}>
          <img src={Products[0].image} alt="" />
          <p className={MansStyle.productName}>{Products[0].name}</p>
          <p className={MansStyle.productPrice}>${Products[0].price}</p>
        </div>
        <div className={MansStyle.product}>
          <img src={Products[9].image} alt="" />
          <p className={MansStyle.productName}>{Products[9].name}</p>
          <p className={MansStyle.productPrice}>${Products[9].price}</p>
        </div>
        <div className={MansStyle.product}>
          <img src={Products[6].image} alt="" />
          <p className={MansStyle.productName}>{Products[6].name}</p>
          <p className={MansStyle.productPrice}>${Products[6].price}</p>
        </div>
        <div className={MansStyle.product}>
          <img src={Products[3].image} alt="" />
          <p className={MansStyle.productName}>{Products[3].name}</p>
          <p className={MansStyle.productPrice}>${Products[3].price}</p>
        </div>
        <div className={MansStyle.product}>
          <img src={Products[4].image} alt="" />
          <p className={MansStyle.productName}>{Products[4].name}</p>
          <p className={MansStyle.productPrice}>${Products[4].price}</p>
        </div>
      </div>

      <div className={MansStyle.arrowDown}>
        <Icon icon="ion:arrow-up-sharp" color="white" rotate={2} width={22} />
      </div>
    </div>
  );
}
export default MansSection;
