import { styled } from "styled-components";
import menu from "./menu";
import { useEffect, useState } from "react";

const MainContainer = styled.main`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  border-radius: 5px;
  font-family: "Pretendard-Regular";
  width: 50rem;
  height: 50rem;
  background-color: #fef2f4;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin-top: 5rem;
    line-height: 0.5rem;
    font-size: 3rem;
    @keyframes textBlink {
      0% {
        color: black;
      }
      50% {
        color: #d14d72;
      }
      100% {
        color: black;
      }
    }
    animation: textBlink 3s ease-in infinite;
  }
  > h2 {
    font-size: 1.5rem;
    line-height: 0.5rem;
    margin-bottom: 2rem;
  }
  > h3 {
    font-size: 2rem;
    color: black;
  }
  > button {
    width: 10rem;
    height: 3.7rem;
    cursor: pointer;
    background-color: #fcc8d1;
    color: black;
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-radius: 5px;
    outline: 0;
    &:hover {
      background-color: #d14d72;
      color: white;
      transition: 0.3s;
    }
  }
  @media (max-width: 800px) {
    width: 20rem;
    height: 40rem;
    > h1 {
      margin-top: 3rem;
      font-size: 2rem;
    }
    > h2 {
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }
    > h3 {
      font-size: 1.5rem;
    }
    > button {
      width: 10rem;
      height: 2rem;
    }
  }
`;

function App() {
  const [food, setFood] = useState("");
  const [isFirstClick, setIsFirstClick] = useState(true);
  const onClickRecommendFoodButton = () => {
    const { menuDummyArray } = menu();
    const chooseOneMenuIndex = Math.floor(
      Math.random() * menuDummyArray.length
    );
    setFood(menuDummyArray[chooseOneMenuIndex]);
    setIsFirstClick(false);
  };
  useEffect(() => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style = "display:none;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "300");
    ins.setAttribute("data-ad-height", "250");

    const unitID = process.env.REACT_APP_KAKAO_AD;
    ins.setAttribute("data-ad-unit", unitID);
    document.querySelector(".adfit").appendChild(ins);
    document.querySelector(".adfit").appendChild(scr);
  }, []);
  return (
    <div className="App">
      <MainContainer>
        <h1>GOLLAZO</h1>
        <h2>오늘 뭐 먹지?</h2>
        <h3>🤤 {food} 🤤</h3>
        <button onClick={onClickRecommendFoodButton} type="button">
          {isFirstClick ? "추천받기" : "다시 추천받기"}
        </button>
        <div className="adfit"></div>
      </MainContainer>
    </div>
  );
}

export default App;
