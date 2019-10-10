import HomeEnhanced from "./enhanced";

import { withProps } from "recompose";
import { HomeOuterProps } from "./types";
import { AddressResult } from "../../components/Form/types";

const smartifier = withProps<HomeOuterProps, {}>(() => {
  return {
    findPostalCode: (postalCode: string) => {
      return fetch(
        `http://viacep.com.br/ws/${postalCode}/json`
      )
        .then(res => {
          return res.json();
        })
        .then(data => {
          return data as AddressResult;
        });
    }
  };
});

export default smartifier(HomeEnhanced);