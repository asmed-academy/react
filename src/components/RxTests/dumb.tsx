import React from "react";
import { RxTestsInnerProps } from "./types";

export const RxTests = ({
  query,
  data,
  onChangeQuery,
  matchingItems
}: RxTestsInnerProps) => (
  <div>
    <input
      value={query}
      onChange={evt => onChangeQuery(evt.target.value)}
      type="text"
    />
    <h5>Encontrados</h5>
    <ul>
      {(matchingItems || []).map(item => (
        <li>{item}</li>
      ))}
    </ul>
    <h5>Possibilidades</h5>
    <ul>
      {(data || []).map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);
