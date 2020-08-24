import React from "react";
import styled from "@emotion/styled";
import Icon from "./Icon";
import Location from "./Location";
import Condition from "./Condition";

const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    background-image: linear-gradient(to bottom, red, pink);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location></Location>
      <Icon />
      <Condition>Clouds</Condition>
    </Card>
  );
};

export default WeatherCard;
