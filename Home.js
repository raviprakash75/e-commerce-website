import React from "react"
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" />
        <div className="home_row">
          <Product
            id="352425ravi"
            title="Zero to One: Notes on Start Ups, or How to Build the Future
          by Peter Thiel and Blake Masters"
            price={40.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="1234567a"
            title="New Apple iPad Pro(12.32-inch,Wi-Fi,128GB) -Silver(6th Genration"
            price={400.38}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="1234567"
            title="Samsung LC453733838TEGD 49' Curved LED Gaming Monitor"
            price={200.38}
            rating={3}
            image="https://m.media-amazon.com/images/I/719Arg-0YFL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="123rsg"
            title="Dr Trust Professional Series Finger Tip Pulse Oximeter With Audio Visual Alarm and Respiratory Rate"
            price={13.21}
            rating={3}
            image="https://m.media-amazon.com/images/I/71M-09ee9AL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="234566"
            title="Oppo A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={47.50}
            rating={4}
            image="https://m.media-amazon.com/images/I/41OBf52bnOL.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="123456"
            title="LG 25-inch (63.5 cm) UltraWide Multitasking Monitor with Full HD  (2560 x 1080) IPS Panel, HDMI Port, AMD Freesync - 25UM5...
            LG 25-inch (63.5 cm) UltraWide Multitasking Monitor with Full HD  (2560 x 1080)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81pv0g8bQhL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}
export default Home;