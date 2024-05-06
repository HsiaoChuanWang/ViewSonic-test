import React, { useState } from "react";
import PictorialBack01 from "./photos/PictorialBack01.png";
import PictorialBack02 from "./photos/PictorialBack02.png";
import PictorialBack03 from "./photos/PictorialBack03.png";
import PictorialBack04 from "./photos/PictorialBack04.png";
import PictorialBack05 from "./photos/PictorialBack05.png";
import PictorialBack06 from "./photos/PictorialBack06.png";
import PictorialBack07 from "./photos/PictorialBack07.png";
import PictorialBack08 from "./photos/PictorialBack08.png";
import PictorialBack09 from "./photos/PictorialBack09.png";
import PictorialFront01 from "./photos/PictorialFront01.png";
import PictorialFront02 from "./photos/PictorialFront02.png";
import PictorialFront03 from "./photos/PictorialFront03.png";
import PictorialFront04 from "./photos/PictorialFront04.png";
import PictorialFront05 from "./photos/PictorialFront05.png";
import PictorialFront06 from "./photos/PictorialFront06.png";
import PictorialFront07 from "./photos/PictorialFront07.png";
import PictorialFront08 from "./photos/PictorialFront08.png";
import PictorialFront09 from "./photos/PictorialFront09.png";

const cardItems = [
  {
    name: "天竺鼠",
    price: "NT$ 999",
    origin: "南美洲，廣泛引進各國飼養",
    conservation: "無危",
    habit:
      "長大後，體型及食量變大、排泄變多，疏於清潔會屎尿滿地，味道濃重，因此遭棄養。",
    chaos:
      "不肖繁殖場強迫母體不斷生產幼體來販賣，未給予足夠休養時間；待母體繁殖力消耗殆盡後，便將牠們遺棄。",
    isFlipped: false,
    frontPhoto: PictorialFront01,
    backPhoto: PictorialBack01,
  },
  {
    name: "北美浣熊",
    price: "NT$ 40,000",
    origin: "北美洲",
    conservation: "無危",
    habit:
      "野性較高具攻擊性，不適合作為居家寵物，若飼主未花時間培養互信，浣熊會生氣咬人致流血，因此遭到棄養。",
    chaos:
      "在日本，遭棄養的浣熊在野外大繁衍，造成嚴重農損；在台灣，已有民眾在野外目擊浣熊「母帶子」生活，恐成下一外來入侵種。",
    isFlipped: false,
    frontPhoto: PictorialFront02,
    backPhoto: PictorialBack02,
  },
  {
    name: "絨鼠 (龍貓)",
    price: "NT$ 59,999",
    origin: "南美洲安地斯山脈",
    conservation: "瀕危",
    habit:
      "適宜溫度為攝氏15至23度，在台飼養需開冷氣，否則有食慾不佳、皮膚病問題。",
    chaos:
      "高單價新興寵物，高雄港曾查獲50隻走私，鑑價每隻高達16萬元；因是國外人工繁殖，不列入保育類，以安樂死銷毀。",
    isFlipped: false,
    frontPhoto: PictorialFront03,
    backPhoto: PictorialBack03,
  },
  {
    name: "海蟾蜍",
    price: "已禁止販售",
    origin: "中南美洲",
    conservation: "無危",
    habit:
      "遇敵人會噴出毒液，屬雜食性，食量極大且繁殖力強，需留意過度繁殖問題。",
    chaos:
      "遭人放生野外的海蟾蜍，在南投草屯繁衍，入侵本土生態；逾600隻遭移除，恐遭安樂死處理。政府已列管，禁止繁殖販賣。",
    isFlipped: false,
    frontPhoto: PictorialFront04,
    backPhoto: PictorialBack04,
  },
  {
    name: "刺蝟",
    price: "NT$ 599",
    origin: "西歐、北歐、北非、中國",
    conservation: "無危",
    habit:
      "夜行性動物，喜歡半夜翻箱倒櫃。生氣時把刺豎起來或咬人，部分飼主不花時間與牠互動，建立感情，反而將牠遺棄。",
    chaos:
      "繁殖業者採「近親交配」，造成小刺蝟有基因缺陷，包括體型弱小、腳部萎縮等問題。",
    isFlipped: false,
    frontPhoto: PictorialFront05,
    backPhoto: PictorialBack05,
  },
  {
    name: "狐獴",
    price: "NT$ 120,000",
    origin: "非洲喀拉哈里沙漠",
    conservation: "無危",
    habit:
      "群居數量可達30隻，挖洞為巢，但台灣飼養多為單隻且空間狹小。動保人士批違反習性，不應作為寵物。",
    chaos:
      "高單價新興寵物，桃園機場曾查獲走私，每隻鑑價高達15萬台幣，因不屬保育類，依防疫規定以安樂死銷毀。",
    isFlipped: false,
    frontPhoto: PictorialFront06,
    backPhoto: PictorialBack06,
  },
  {
    name: "蘇卡達象龜",
    price: "NT$ 3,299",
    origin: "非洲撒哈拉沙漠南部",
    conservation: "瀕危",
    habit:
      "草食性。世界第三大陸龜，可長到80公分，部分飼主因空間不足棄養，流落至動物園或私人單位。",
    chaos:
      "未開放進口前，走私利潤大，每隻可賺2萬；開放進口後，台產繁殖氾濫，利用宅配寄送，過程死亡黑數眾多。",
    isFlipped: false,
    frontPhoto: PictorialFront07,
    backPhoto: PictorialBack07,
  },
  {
    name: "綠鬣蜥",
    price: "已禁止販售",
    origin: "中南美洲",
    conservation: "無危",
    habit:
      "草食性。成體可長到180公分，加上求偶季會變得暴躁，咬人抓人，因此遭棄養。",
    chaos:
      "因棄養或逃逸野外，在南部大規模繁衍，造成巨大農損，去年屏東縣移除近2萬隻為全國最多；已列管，禁止繁殖販賣。",
    isFlipped: false,
    frontPhoto: PictorialFront08,
    backPhoto: PictorialBack08,
  },
  {
    name: "麝香豬",
    price: "NT$ 3,000",
    origin: "中國大陸",
    conservation: "無危",
    habit:
      "寵物店販售時標榜「迷你豬」，實際可養到體重破百，加上食量大，飼主因此棄養。因體型大，後端收容成難題。",
    chaos:
      "常見不當對待，有豬隻被關在狹小鐵籠，當成吃廚餘工具，腳部受傷變形，所幸獲救。",
    isFlipped: false,
    frontPhoto: PictorialFront09,
    backPhoto: PictorialBack09,
  },
];

function PictorialGuide() {
  const [cards, setCards] = useState(cardItems);

  function handleFlip(name) {
    const updatedCards = cards.map((card) =>
      card.name === name ? { ...card, isFlipped: !card.isFlipped } : card,
    );
    setCards(updatedCards);
  }

  const cardsList = cards.map((card) => {
    return (
      <div
        className="card"
        key={card.name}
        onClick={() => handleFlip(card.name)}
      >
        <div
          className={`flip-card-container ${card.isFlipped ? "flip-card" : ""}`}
        >
          <div
            className={`front relative flex h-[382px] w-[336px] transform justify-center rounded-md`}
          >
            <img
              className="absolute h-full w-full rounded-md"
              src={card.frontPhoto}
              title="點擊圖片 看動物亂象"
            ></img>

            <div className="absolute bottom-0 text-[#fafafa]">
              <div className="flex flex-col items-center text-2xl font-bold leading-[34px]">
                <h5 className="mb-[3px]">{card.name}</h5>
                <h5 className="mb-[3px]">{card.price}</h5>
              </div>

              <div className="mb-[25px] mt-[15px] text-xs leading-6">
                <p>原產地：{card.origin}</p>
                <p>保育等級：{card.conservation}</p>
              </div>
            </div>
          </div>

          <div
            className={`back relative flex h-[382px] w-[336px] justify-center rounded-md`}
          >
            <img className="absolute h-full w-full" src={card.backPhoto}></img>

            <div className="absolute bottom-0 text-[15px] font-light leading-6 text-[#fafafa]">
              <p className="ml-[18px] mr-4 mt-[15px]">
                <span>習性與飼養難處：</span>
                {card.habit}
              </p>
              <p className="mb-[18px] ml-[18px] mr-4 mt-[15px]">
                <span>亂象：</span>
                {card.chaos}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-screen bg-[#232323]">
      <div className="mx-auto w-[620px] text-[#d8d8d8]">
        <h3 className="mb-5 text-[28px] leading-[50px]">
          變調的現實寶可夢：寵物圖鑑與亂象
        </h3>
        <p className="text-lg leading-[37px]">
          「這好酷、好可愛」是許多人對特殊寵物的第一印象，甚至因一時衝動或獵奇心態而購買，但我們是否真的善待牠們？《聯合報》製作9種非犬貓寵物的圖鑑，帶領讀者瞭解牠們的故事以及買賣與棄養亂象。
        </p>
      </div>

      <div className="my-10 flex justify-center">
        <p className="inline bg-[#b78c00] px-[8.5px] pb-[3px] pt-[1px] text-lg leading-6 text-[#232323]">
          點擊下方圖片 看動物亂象
        </p>
      </div>

      <div className="mx-auto flex w-[1200px] flex-wrap justify-center gap-5">
        {cardsList}
      </div>

      <div className="mx-auto mt-[30px] w-[620px] pb-20 text-[15px] font-light leading-[22px] text-[#d8d8d8]">
        <p>
          資料來源：記者訪談、國際自然保護聯盟（IUCN）紅皮書、台北市立動物園保育網
        </p>
        <p>附註：僅為參考價格，實際價格依品系與年齡而不同</p>
      </div>
    </div>
  );
}

export default PictorialGuide;
