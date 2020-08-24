import React from "react";
import styled from "@emotion/styled";
import Icon from "./Icon";
import Location from "./Location";
import Condition from "./Condition";

const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    // background-image: linear-gradient(-40 deg, red, white);
    background: -webkit-linear-gradient(
      top,
      #ffb76b 0%,
      #ffa73d 80%,
      #ff7c00 81%,
      #ff7f04 100%
    );
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
