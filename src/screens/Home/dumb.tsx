import React from "react";
import { HomeInnerProps } from "./types";
import Form from "../../components/Form/smart";
import { Contract } from "../../components/Contract/dumb";
import { AddressResult } from "../../components/Form/types";

const data = {
  birthday: new Date("1987-05-28")
};

export const Home = ({
  contractData,
  onSubmitData,
  findPostalCode
}: HomeInnerProps) => {
  return (
    <div>
      <div style={{ width: "100%" }}>
        {!contractData && (
          <Form
            findPostalCode={findPostalCode}
            onSubmitData={onSubmitData}
          />
        )}
        {!!contractData && (
          <React.Fragment>
            <button onClick={() => onSubmitData(null)}>
              Voltar
            </button>
            <Contract {...contractData} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
