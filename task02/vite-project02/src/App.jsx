import { useState } from "react";
import styled from "styled-components";
import "./index.css";

const Wrap = styled.div`
  margin: 24px;
`;

const ButtonWrap = styled.div`
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: gray/0.1;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: gray/0.9;
  }
`;

const Text = styled.span`
  color: rebeccapurple;
  font-size: 20px;
  font-weight: bold;
`;

function App() {
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(null);

  const handleStartTime = () => {
    setStartTime(new Date());
  };

  const handleEndTime = () => {
    const endTime = new Date();
    const timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;
    setDuration(timeDiff);
  };

  const resetTimer = () => {
    setStartTime(null);
    setDuration(null);
  };

  return (
    <Wrap>
      <ButtonWrap>
        <Button onClick={handleStartTime} disabled={startTime}>
          start
        </Button>
        <Button onClick={handleEndTime} disabled={!startTime || duration}>
          end
        </Button>
        <Button onClick={resetTimer}>reset</Button>
      </ButtonWrap>

      <div>
        {duration ? (
          <Text>Duration: {duration} seconds</Text>
        ) : (
          <Text>Click "start" to begin the timer.</Text>
        )}
      </div>
    </Wrap>
  );
}

export default App;
