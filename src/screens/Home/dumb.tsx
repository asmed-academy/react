import React from "react";
import { HomeProps } from "./types";
import { Form } from "../../components/Contract/Form";
import { Contract } from "../../components/Contract/Contract";

const data = {
  birthday: new Date("1987-05-28")
};

export const Home = ({
  name,
  onChangeName,
  semester,
  onChangeSemester,
  course,
  onChangeCourse,
  enrollment,
  onChangeEnrollment,
  address,
  postalCode,
  onChangePostalCode,
  isLoadingPostalCode
}: HomeProps) => {
  return (
    <div>
      {/* <Header /> */}
      <div style={{ width: "100%" }}>
        <Form
          name={name}
          onChangeName={onChangeName}
          semester={semester}
          onChangeSemester={onChangeSemester}
          course={course}
          onChangeCourse={onChangeCourse}
          enrollment={enrollment}
          onChangeEnrollment={onChangeEnrollment}
          postalCode={postalCode}
          onChangePostalCode={onChangePostalCode}
          isLoadingPostalCode={isLoadingPostalCode}
        />
        <Contract
          name={name}
          semester={semester}
          course={course}
          address={address}
          enrollment={enrollment}
          birthday={new Date()}
        />
      </div>
    </div>
  );
};
