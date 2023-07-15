import React from 'react';
import Slider from "react-slick";
import ProfileCard from "./card";
import { Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";
import { register } from "swiper/element/bundle";
import "swiper/element/css/effect-coverflow";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Cards(){

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    arrows: false,
    // autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function displayPostAge(uploadDate) {
    const dateParts = uploadDate.split("/");
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Month is zero-based in JavaScript
    const year = parseInt(dateParts[2], 10);

    const uploadDateTime = new Date(year, month, day).getTime();
    const currentDateTime = new Date().getTime();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerWeek = 7 * millisecondsPerDay;
    const millisecondsPerMonth = 30.44 * millisecondsPerDay;
    const millisecondsPerYear = 365.25 * millisecondsPerDay;

    const ageInMilliseconds = currentDateTime - uploadDateTime;
    console.log(
      ageInMilliseconds > millisecondsPerDay &&
        ageInMilliseconds < millisecondsPerWeek
    );
    if (
      ageInMilliseconds > millisecondsPerDay &&
      ageInMilliseconds < millisecondsPerWeek
    ) {
      const ageInDays = Math.floor(ageInMilliseconds / millisecondsPerDay);
      return `${ageInDays} day${ageInDays !== 1 ? "s" : ""} ago`;
    } else if (
      ageInMilliseconds > millisecondsPerWeek &&
      ageInMilliseconds < millisecondsPerMonth
    ) {
      const ageInWeeks = Math.floor(ageInMilliseconds / millisecondsPerWeek);
      return `${ageInWeeks} week${ageInWeeks !== 1 ? "s" : ""} ago`;
    } else if (
      ageInMilliseconds > millisecondsPerMonth &&
      ageInMilliseconds < millisecondsPerYear
    ) {
      const ageInMonths = Math.floor(ageInMilliseconds / millisecondsPerMonth);
      return `${ageInMonths} month${ageInMonths !== 1 ? "s" : ""} ago`;
    } else if (ageInMilliseconds > millisecondsPerYear) {
      const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear);
      return `${ageInYears} year${ageInYears !== 1 ? "s" : ""} ago`;
    } else {
      return "More than a year ago";
    }
  }

  const reviewers = [
    {
      name: "Faizan Denver",
      reviews: "1 Review",
      country: "California",
      title: "Very useful software",
      review:
        "Guidance of the software providers gives me a huge hope and alos they are showing a demo about how the automatic trade software runs. After purchasing this software much of my time has been saved.",
      date: "Aug 04, 2022",
      age: "04/08/2022",
    },
    {
      name: "Ivan Heng",
      reviews: "1 Review",
      Country:"Wisconsin",
      title: "Very good company and staff is helpful",
      review:
        "Very good company and staff is helpful,it's a good software and great",
      date: "May 03, 2021",
      age: "03/05/2021",
    },
    {
      name: "Catalina",
      reviews: "3 Reviews",
      country:"Texas",
      title: "It's our service very very very excellent and super",
      review:
        "Hi this company give very excellent guidance very super I'm very happy",
      date: "June 20, 2022",
      age: "20/06/2022",
    },
    {
      name: "Agnus Maria",
      reviews: "1 Review",
      country:"Alaska",
      title: "I ❤ you Guys ",
      review:
        "I ❤ you Guys, From my hard earned money, By using your software I have earned commited profit. I nedd your guidance to install 2 more auto trading account, kindly help me guys",
      date: "Dec 03, 2022",
      age: "03/12/2022",
    },
    {
      name: "Faizan Denver",
      reviews: "1 Review",
      country: "California",
      title: "Very useful software",
      review:
        "Guidance of the software providers gives me a huge hope and alos they are showing a demo about how the automatic trade software runs. After purchasing this software much of my time has been saved.",
      date: "Aug 04, 2022",
      age: "04/08/2022",
    },
    {
      name: "Ivan Heng",
      reviews: "1 Review",
      Country:"Wisconsin",
      title: "Very good company and staff is helpful",
      review:
        "Very good company and staff is helpful,it's a good software and great",
      date: "May 03, 2021",
      age: "03/05/2021",
    },
    {
      name: "Catalina",
      reviews: "3 Reviews",
      country:"Texas",
      title: "It's our service very very very excellent and super",
      review:
        "Hi this company give very excellent guidance very super I'm very happy",
      date: "June 20, 2022",
      age: "20/06/2022",
    },
    {
      name: "Agnus Maria",
      reviews: "1 Review",
      country:"Alaska",
      title: "I ❤ you Guys ",
      review:
        "I ❤ you Guys, From my hard earned money, By using your software I have earned commited profit. I nedd your guidance to install 2 more auto trading account, kindly help me guys",
      date: "Dec 03, 2022",
      age: "03/12/2022",
    },
    {
      name: "Faizan Denver",
      reviews: "1 Review",
      country: "California",
      title: "Very useful software",
      review:
        "Guidance of the software providers gives me a huge hope and alos they are showing a demo about how the automatic trade software runs. After purchasing this software much of my time has been saved.",
      date: "Aug 04, 2022",
      age: "04/08/2022",
    },
    {
      name: "Ivan Heng",
      reviews: "1 Review",
      Country:"Wisconsin",
      title: "Very good company and staff is helpful",
      review:
        "Very good company and staff is helpful,it's a good software and great",
      date: "May 03, 2021",
      age: "03/05/2021",
    },
    {
      name: "Catalina",
      reviews: "3 Reviews",
      country:"Texas",
      title: "It's our service very very very excellent and super",
      review:
        "Hi this company give very excellent guidance very super I'm very happy",
      date: "June 20, 2022",
      age: "20/06/2022",
    },
    {
      name: "Agnus Maria",
      reviews: "1 Review",
      country:"Alaska",
      title: "I ❤ you Guys ",
      review:
        "I ❤ you Guys, From my hard earned money, By using your software I have earned commited profit. I nedd your guidance to install 2 more auto trading account, kindly help me guys",
      date: "Dec 03, 2022",
      age: "03/12/2022",
    },
    {
      name: "Faizan Denver",
      reviews: "1 Review",
      country: "California",
      title: "Very useful software",
      review:
        "Guidance of the software providers gives me a huge hope and alos they are showing a demo about how the automatic trade software runs. After purchasing this software much of my time has been saved.",
      date: "Aug 04, 2022",
      age: "04/08/2022",
    },
    {
      name: "Ivan Heng",
      reviews: "1 Review",
      Country:"Wisconsin",
      title: "Very good company and staff is helpful",
      review:
        "Very good company and staff is helpful,it's a good software and great",
      date: "May 03, 2021",
      age: "03/05/2021",
    },
    {
      name: "Catalina",
      reviews: "3 Reviews",
      country:"Texas",
      title: "It's our service very very very excellent and super",
      review:
        "Hi this company give very excellent guidance very super I'm very happy",
      date: "June 20, 2022",
      age: "20/06/2022",
    },
    {
      name: "Agnus Maria",
      reviews: "1 Review",
      country:"Alaska",
      title: "I ❤ you Guys ",
      review:
        "I ❤ you Guys, From my hard earned money, By using your software I have earned commited profit. I nedd your guidance to install 2 more auto trading account, kindly help me guys",
      date: "Dec 03, 2022",
      age: "03/12/2022",
    },

  ];
  
  return (
    <Slider {...settings}>
    {/* <div>  */}
    {/* <div className="testimonial" style={{ display: "flex",justifyContent:"center" }}> */}
    {reviewers.map((review, ind) => (
      <div>
        <div
          className="testimonial"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-lg-6 col-md-8 col-sm-6">
            <Card
              className="service-box text-white"
              style={{
                display: "flex",
                marginRight: "0px",
                // width: "80%",
                justifyContent: "center",
                background:
                  "linear-gradient(148deg, rgba(var(--theme-color), 0.15) -15.73%, rgba(var(--theme-color), 0) 98.72%)",
              }}
            >
              <Card.Header key={ind}>
                <div
                  className="d-flex align-items-center"
                  style={{ alignItems: "center" }}
                >
                  <div className="mr-3" style={{ marginRight: "4px" }}>
                    <img
                      src="/assets/images/reviews/icon-img-1.png"
                      alt="Profile"
                      className="profile-image"
                    />
                  </div>
                  <div className="block">
                    <h5>
                      <b>{review.name}</b>
                    </h5>
                    <p>
                      {review.reviews} <FiMapPin color="white" />
                      IN{" "}
                    </p>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                {" "}
                <div className="d-flex" style={{ width: "100%" }}>
                  <AiFillStar fill="yellow" />
                  <AiFillStar fill="yellow" />
                  <AiFillStar fill="yellow" />
                  <AiFillStar fill="yellow" />
                  <AiFillStar fill="yellow" />
                  <p
                    style={{
                      float: "right",
                      justifyContent: "end",
                      width: "100%",
                      textAlign: "end",
                    }}
                  >
                    {displayPostAge(`${review.age}`)}
                  </p>
                </div>
                <Card.Text style={{ color: "white" }}>
                  <h3>{review.title}</h3>
                  {review.review}
                  <p style={{ color: "white" }}>
                    <b style={{ marginRight: "5px" }}>
                      date of experience :
                    </b>
                    {review.date}
                  </p>
                </Card.Text>
                {/* </div> */}
              </Card.Body>
              <Card.Footer key={ind}>
                <small className="text-muted">Date : {review.age}</small>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    ))}
  </Slider>
  )}