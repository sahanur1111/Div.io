import React from "react";
import vg from "../assets/1.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Div.io</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </main>
      </div>

      <div className="home2" id="">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            omnis magni accusamus inventore totam magnam deserunt a cupiditate
            dignissimos. Quod magni deserunt dolorem a eum consequatur iste
            tempore, dolore voluptatem.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            quos sed obcaecati, rem vero cupiditate magni, officiis earum rerum
            ducimus ullam ad voluptatum vitae est accusantium debitis nisi
            pariatur expedita laborum ipsam quam eius? Ad, est veniam. Repellat,
            voluptatum ad!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
