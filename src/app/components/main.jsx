"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";

export default function Main() {
  const [isBottomBannerVisible, setIsBottomBannerVisible] = useState(false);
  const topBannerRef = useRef(null);

  const handleScroll = () => {
    if (
      window.pageYOffset > (topBannerRef.current?.offsetHeight || 0) &&
      !localStorage.getItem("bannerClosed")
    ) {
      setIsBottomBannerVisible(true);
    } else {
      setIsBottomBannerVisible(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("bannerClosed")) {
      setIsBottomBannerVisible(false);
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeBottomBanner = () => {
    setIsBottomBannerVisible(false);
    localStorage.setItem("bannerClosed", "true");
  };

  return (
    <main className={styles.main}>
      <div className={styles.topBanner} ref={topBannerRef}>
        <img className={styles.topBannerImg} src="/logo.png" alt="logo" />
        <div>
          <p>
            <span className={styles.blackFridaySpan}>Black Friday</span>
            <span className={styles.nov}>,24-27 Nov</span>
          </p>
          <p style={{ display: "flex" }}>
            <img className={styles.dot}
              src="/vector.svg"
              alt="dot"
            />
            <span className={styles.tenSpan}>10%OFF</span>
            <img
             className={styles.dot}
              src="/vector.svg"
              alt="dot"
            />
          </p>
          <p className={styles.topBannerThree}>
            Use code
            <span style={{ padding: "0 5px" }} className={styles.tenSpan}>
              10FRIDAY
            </span>
            <span className={styles.atCheckout}>at checkout</span>
          </p>
          <svg
            className={styles.topBannerPointer}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8373 22.8105C11.1302 23.1034 11.6051 23.1034 11.898 22.8105L19.1621 15.5463C19.2981 15.4104 19.3709 15.2352 19.3807 15.0573C19.4058 14.8378 19.3342 14.6094 19.1659 14.441L11.902 7.17716C11.6092 6.88427 11.1343 6.88427 10.8414 7.17717C10.5485 7.47006 10.5485 7.94493 10.8414 8.23783L17.5954 14.9918L10.8373 21.7498C10.5445 22.0427 10.5445 22.5176 10.8373 22.8105Z"
              fill="#D9D9D9"
              fillOpacity="0.4"
            />
          </svg>
        </div>
        <button className={styles.shopButton}>Shop now</button>
      </div>

      <div className={styles.content}>{/* Your main content goes here */}</div>

      {isBottomBannerVisible && (
        <div className={styles.bottomBanner}>
          <button onClick={closeBottomBanner} className={styles.closeBunner}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697Z"
                fill="white"
                fillOpacity="0.3"
              />
            </svg>
          </button>

          <div className={styles.bottomBannerInfo}>
            <h2> Black Friday</h2>
            <h3>10%OFF</h3>
            <p>
              Use code <span className={styles.tenSpan}>10FRIDAY</span> at
              checkout
            </p>
            <button>Shop now through Monday</button>
          </div>
        </div>
      )}
    </main>
  );
}
