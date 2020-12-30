import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

function FlightSlide({ listMode, recommendSalesData }) {
  return (
    <SlideMode listMode={listMode}>
      <Slider {...settings}>
        {recommendSalesData?.map((flight, idx) => {
          return (
            <SlideGoods key={idx} id={flight.id}>
              <img src={flight.image} alt="location_img" />
              <div className="desc">
                <div className="icon">편도 총액</div>
                <Route>
                  <span>{flight.depart}</span>
                  <img src="https://www.flaticon.com/svg/static/icons/svg/481/481127.svg" alt="arrow" />
                  <span>{flight.arrive}</span>
                </Route>
                <Price>
                  <p className="unit">KRW</p>
                  <p className="price">{Number(flight.price).toLocaleString()}~</p>
                </Price>
              </div>
            </SlideGoods>
          );
        })}
      </Slider>
    </SlideMode>
  );
}

export default FlightSlide;

const SlideMode = styled.div`
  display: ${(props) => (props.listMode === "Slide" ? "block" : "none")};
  width: 1200px;
  margin: 0px auto 40px;
`;

const SlideGoods = styled.div`
  width: 282px !important;
  display: flex;
  flex-direction: column;
  outline: none;

  img {
    width: 100%;
    height: 174px;
  }

  .desc {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    width: 282px;
    height: 251px;
    background-color: white;

    .icon {
      margin-bottom: 25px;
      padding: 7px 11px;
      font-size: 16px;
      font-weight: 700;
      background-color: #ccc;
      border-radius: 20px;
    }
  }
`;

const Route = styled.div`
  display: flex;
  margin-bottom: 15px;
  height: 60px;
  font-size: 24px;
  font-weight: 700;
  vertical-align: middle;
  overflow: hidden;
  line-height: 1.1;

  img {
    width: 24px;
    height: 24px;
    margin: 0 40px;
    filter: invert(40%);
  }
`;

const Price = styled.div`
  .unit {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  .price {
    font-size: 44px;
    font-weight: 700;
  }
`;

const settings = {
  dots: true,
  slidesToShow: 4,
  slidesPerRow: 1,
  autoplay: true,
};
