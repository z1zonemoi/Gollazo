import { styled } from "styled-components";
import menu from "./menu";
import { useState } from "react";

const MainContainer = styled.main`
  width: 50rem;
  height: 50rem;
  background-color: aliceblue;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin-top: 5rem;
    line-height: 0.5rem;
    font-size: 3rem;
  }
  > h2 {
    font-size: 1.5rem;
    line-height: 0.5rem;
    margin-bottom: 2rem;
  }
  > h3 {
    font-size: 2rem;
  }
  > button {
    width: 10rem;
    height: 3.7rem;
    cursor: pointer;
    background-color: white;
    color: black;
    font-size: 1rem;
    &:hover {
      background-color: black;
      color: white;
      transition: 0.3s;
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
  return (
    <div className="App">
      <MainContainer>
        <h1>GOLLAZO</h1>
        <h2>오늘 뭐 먹지?</h2>
        <h3>🤤 {food} 🤤</h3>
        <button onClick={onClickRecommendFoodButton} type="button">
          {isFirstClick ? "추천받기" : "다시추천받기"}
        </button>
      </MainContainer>
    </div>
  );
}

export default App;
