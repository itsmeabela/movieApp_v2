import React from "react";

//helper
import { calcTime, convertMoney } from "../../helpers";
//styles
import { Wrapper, Content } from "./MovieInfoBar.style";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running time:{calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Running time:{convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Running time:{convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

export default MovieInfoBar;
