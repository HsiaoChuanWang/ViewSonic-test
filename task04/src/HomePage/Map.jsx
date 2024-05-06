import React, { useEffect, useRef, useState } from "react";
import map02 from "./photos/map02.svg";
import map03 from "./photos/map03.svg";
import map04 from "./photos/map04.svg";
import map05 from "./photos/map05.svg";
import map06 from "./photos/map06.svg";

function Map() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mapThreeOpacity, setMapThreeOpacity] = useState(1);
  const [mapFourOpacity, setMapFourOpacity] = useState(0);
  const [mapFiveOpacity, setMapFiveOpacity] = useState(0);
  const [mapSixOpacity, setMapSixOpacity] = useState(0);
  const startDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = startDivRef.current.getBoundingClientRect();

      if (top <= 0) {
        const scrollDistance = Math.abs(top);
        setScrollPosition(scrollDistance);

        setMapThreeOpacity(1);

        if (scrollDistance > 1300) {
          setMapFiveOpacity(0);
          const MapThreeFinalOpacity = 1 - scrollDistance / 2000;
          setMapThreeOpacity(
            MapThreeFinalOpacity < 0 ? 0 : MapThreeFinalOpacity,
          );
          MapThreeFinalOpacity > 0 && setMapFourOpacity(0);
        }

        if (scrollDistance > 2500 && scrollDistance < 4000) {
          const MapFourInitialOpacity = mapFourOpacity + scrollDistance / 5000;
          setMapFourOpacity(
            MapFourInitialOpacity > 1 ? 1 : MapFourInitialOpacity,
          );
        }

        if (scrollDistance > 4000) {
          setMapFiveOpacity(0);
          const MapFourFinalOpacity = 1 - scrollDistance / 5000;
          setMapFourOpacity(MapFourFinalOpacity < 0 ? 0 : MapFourFinalOpacity);
        }

        if (scrollDistance > 5500 && scrollDistance < 7500) {
          const MapFiveInitialOpacity = mapFiveOpacity + scrollDistance / 8000;
          setMapFiveOpacity(
            MapFiveInitialOpacity > 1 ? 1 : MapFiveInitialOpacity,
          );
        }

        if (scrollDistance > 7500) {
          setMapSixOpacity(0);
          const MapFiveFinalOpacity = 1 - scrollDistance / 9000;
          setMapFiveOpacity(MapFiveFinalOpacity < 0 ? 0 : MapFiveFinalOpacity);
        }

        if (scrollDistance > 9000) {
          const MapSixInitialOpacity = mapSixOpacity + scrollDistance / 12000;
          setMapSixOpacity(MapSixInitialOpacity > 1 ? 1 : MapSixInitialOpacity);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateStrokeDashoffset = () => {
    const finalStrokeDashoffset =
      scrollPosition > 50 ? 1280 - scrollPosition : 1280;
    return finalStrokeDashoffset > 0 ? finalStrokeDashoffset : 0;
  };

  return (
    <div>
      <div className="mx-auto w-[620px] py-20 text-[#404040]">
        <h3 className="mb-5 text-[28px] font-bold leading-10">
          台灣人有多獵奇？全球的動物都來了
        </h3>
        <p className="text-lg leading-9">
          台灣的特寵涵蓋哺乳類、兩棲爬蟲類、鳥類及魚類，雖然多數業者採合法進口，但走私行為在國際惡名昭彰。民國70年代，台灣掀起紅毛猩猩豢養潮，不肖商人將其走私引進，民眾飼養後又棄養，導致紅毛猩猩輾轉流落動物園，成為第一代棄養特寵。40年後的今天，台灣寵物熱潮未歇，只是「新寵」換人當。本報挑選12種來自全球的台灣寵物，讓你瞭解這塊市場有多瘋狂。
        </p>
      </div>

      <div ref={startDivRef} className=" relative h-[12000px]">
        <div className={`sticky top-0 translate-y-[-20px]`}>
          <div
            className="relative h-[56.25vw] w-screen bg-[url('src/HomePage/photos/map01.svg')]       
      bg-cover bg-no-repeat"
          >
            <img className="absolute h-full w-full" src={map02}></img>
            <img
              className={`${scrollPosition > 50 ? "block" : "hidden"} absolute h-full w-full`}
              style={{ opacity: mapThreeOpacity }}
              src={map03}
            ></img>
            <img
              className="absolute h-full w-full"
              style={{ opacity: mapFourOpacity }}
              src={map04}
            ></img>
            <img
              className="absolute h-full w-full"
              style={{ opacity: mapFiveOpacity }}
              src={map05}
            ></img>
            <img
              className="absolute h-full w-full"
              style={{ opacity: mapSixOpacity }}
              src={map06}
            ></img>

            <svg
              className={`absolute`}
              style={{ opacity: mapThreeOpacity }}
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 720"
              fill="none"
              strokeDashoffset={calculateStrokeDashoffset()}
              strokeDasharray="1280px"
            >
              {/*北美洲*/}
              <path
                d="M203.5 191.827C203.5 191.827 667.58 -138.366 1026.5 282.327"
                stroke="#B78C00"
                strokeWidth="0.5"
                strokeLinecap="round"
              ></path>

              <path
                d="M203 196.826C206.314 196.826 209 194.14 209 190.826C209 187.513 206.314 184.826 203 184.826C199.686 184.826 197 187.513 197 190.826C197 194.14 199.686 196.826 203 196.826Z"
                fill="#B78C00"
              ></path>

              {/*美國中部南部*/}
              <path
                d="M152.481 237.981C152.481 237.981 627.395 -275.717 1025.5 280.5"
                stroke="#B78C00"
                strokeWidth="0.5"
                strokeLinecap="round"
              ></path>

              <path
                d="M154 242.826C157.314 242.826 160 240.14 160 236.826C160 233.513 157.314 230.826 154 230.826C150.686 230.826 148 233.513 148 236.826C148 240.14 150.686 242.826 154 242.826Z"
                fill="#B78C00"
              ></path>

              {/*南美洲蘇利南*/}
              <path
                d="M293 388.826C293 388.826 616.5 -26.1736 1026 282.326"
                stroke="#B78C00"
                strokeWidth="0.5"
              ></path>

              <path
                d="M291 398.826C294.314 398.826 297 396.14 297 392.826C297 389.513 294.314 386.826 291 386.826C287.686 386.826 285 389.513 285 392.826C285 396.14 287.686 398.826 291 398.826Z"
                fill="#B78C00"
              ></path>

              {/*中南美洲*/}
              <path
                d="M308.5 471.326C308.5 471.326 578 -22.0002 1025.5 282.5"
                stroke="#B78C00"
                strokeWidth="0.5"
              ></path>

              <path
                d="M310 476.826C313.314 476.826 316 474.14 316 470.826C316 467.513 313.314 464.826 310 464.826C306.686 464.826 304 467.513 304 470.826C304 474.14 306.686 476.826 310 476.826Z"
                fill="#B78C00"
              ></path>

              {/*歐洲*/}
              <path
                d="M586 158.327C586 158.327 777.612 84.7763 1025.5 281.826"
                stroke="#B78C00"
                strokeWidth="0.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M588 163.826C591.314 163.826 594 161.14 594 157.826C594 154.513 591.314 151.826 588 151.826C584.686 151.826 582 154.513 582 157.826C582 161.14 584.686 163.826 588 163.826Z"
                fill="#B78C00"
              ></path>

              {/*非洲撒哈拉*/}
              <path
                d="M580.311 305.644C580.311 305.644 749 96.5 1026 283.327"
                stroke="#B78C00"
                strokeWidth="0.5"
              ></path>
              <path
                d="M580 311.826C583.314 311.826 586 309.14 586 305.826C586 302.513 583.314 299.826 580 299.826C576.686 299.826 574 302.513 574 305.826C574 309.14 576.686 311.826 580 311.826Z"
                fill="#B78C00"
              ></path>

              {/*非洲*/}
              <path
                d="M631.521 346.473C631.521 346.473 762.483 122.773 1025.58 283.173"
                stroke="#B78C00"
                strokeWidth="0.5"
              ></path>
              <path
                d="M634 349.826C637.314 349.826 640 347.14 640 343.826C640 340.513 637.314 337.826 634 337.826C630.686 337.826 628 340.513 628 343.826C628 347.14 630.686 349.826 634 349.826Z"
                fill="#B78C00"
              ></path>

              {/*葉門*/}
              <path
                d="M737.404 305.644C737.404 305.644 828 190.827 1025.35 283.259"
                stroke="#B78C00"
                strokeWidth="0.5"
              ></path>
              <path
                d="M737 312.826C740.314 312.826 743 310.14 743 306.826C743 303.513 740.314 300.826 737 300.826C733.686 300.826 731 303.513 731 306.826C731 310.14 733.686 312.826 737 312.826Z"
                fill="#B78C00"
              ></path>

              {/*中國*/}
              <path
                d="M988 257L1026 282"
                stroke="#B78C00"
                strokeWidth="0.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M985 260.826C988.314 260.826 991 258.14 991 254.826C991 251.513 988.314 248.826 985 248.826C981.686 248.826 979 251.513 979 254.826C979 258.14 981.686 260.826 985 260.826Z"
                fill="#B78C00"
              ></path>

              {/*婆羅洲*/}
              <path
                d="M971.15 327.879C971.15 327.879 979 288.826 1024.82 283.095"
                stroke="#B78C00"
                strokeWidth="0.5"
              ></path>
              <path
                d="M971 332.826C974.314 332.826 977 330.14 977 326.826C977 323.513 974.314 320.826 971 320.826C967.686 320.826 965 323.513 965 326.826C965 330.14 967.686 332.826 971 332.826Z"
                fill="#B78C00"
              ></path>

              {/*馬來西亞*/}
              <path
                d="M1014.91 415.936C1014.91 415.936 968.37 348.317 1024.26 283.68"
                stroke="#B78C00"
                strokeWidth="0.5"
              ></path>
              <path
                d="M1012.26 419.833C1015.58 419.833 1018.26 417.146 1018.26 413.833C1018.26 410.519 1015.58 407.833 1012.26 407.833C1008.95 407.833 1006.26 410.519 1006.26 413.833C1006.26 417.146 1008.95 419.833 1012.26 419.833Z"
                fill="#B78C00"
              ></path>

              {/*澳洲*/}
              <path
                d="M1108.69 504.952C1108.69 504.952 982.077 382.894 1024.28 283.07"
                stroke="#B78C00"
                strokeWidth="0.5"
              ></path>
              <path
                d="M1108 510.826C1111.31 510.826 1114 508.14 1114 504.826C1114 501.513 1111.31 498.826 1108 498.826C1104.69 498.826 1102 501.513 1102 504.826C1102 508.14 1104.69 510.826 1108 510.826Z"
                fill="#B78C00"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
