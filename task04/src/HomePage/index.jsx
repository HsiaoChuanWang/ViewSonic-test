import Flowchart from "./Flowchart";
import Map from "./Map";
import PictorialGuide from "./PictorialGuide";
import banner from "./photos/banner.png";

function HomePage() {
  return (
    <>
      <div className="relative h-screen w-screen">
        <img
          className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 transform object-cover"
          src={banner}
        />

        <div className="vertical absolute right-0 top-0 font-bold text-[#fafafa]">
          <h1 className="mr-[100px] mt-[70px] w-[72px] text-[50px] leading-[56px] tracking-[8px]">
            失控寵物島
          </h1>
          <h2 className="mr-[15px] mt-[76px] text-2xl leading-[26px] tracking-[2px]">
            從走私、繁殖到棄養 &nbsp;誰讓牠們無聲死去？
          </h2>
        </div>
      </div>

      <article className="h-[520px] w-screen bg-[#232323] py-20">
        <div className="mx-auto flex h-[360px] w-[620px] flex-col justify-between text-lg leading-9 text-[#d8d8d8]">
          <p>
            卡通《天竺鼠車車》去年爆紅，民眾瘋飼養天竺鼠但很快爆發棄養潮，動保團體忙著救援遺棄野外的鼠隻，感嘆「一年收容200隻快爆棚！」
          </p>

          <p>
            天竺鼠有人救援，但更多特殊寵物在無聲中死去：狐獴非法走私，遭查緝後「人道銷毀」；角蛙違規宅配，收到包裹已成乾屍；海蟾蜍遭人野放，背上入侵種罪名，捕捉後恐遭安樂死。
          </p>

          <p>
            「特殊寵物」泛指犬貓之外的寵物，台灣約有100萬家戶飼養，市場蓬勃卻亂象叢生。本報針對走私、繁殖、銷售與棄養展開調查，探究法規出現什麼漏洞，使牠們淪為無聲受害者。
          </p>
        </div>
      </article>

      <PictorialGuide />
      <Map />
      <Flowchart />
    </>
  );
}

export default HomePage;
