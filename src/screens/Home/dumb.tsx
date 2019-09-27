import React from "react";
import { HomeProps } from "./types";
import { Form } from "../../components/Form/dumb";
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
  birthday,
  onChangeBirthday,
  address,
  postalCode,
  onChangePostalCode,
  addressNumber,
  onChangeAddressNumber,
  addressComplement,
  onChangeAddressComplement,
  isLoadingPostalCode,
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
          birthday={birthday}
          onChangeBirthday={onChangeBirthday}
          postalCode={postalCode}
          onChangePostalCode={onChangePostalCode}
          addressNumber={addressNumber}
          onChangeAddressNumber={onChangeAddressNumber}
          addressComplement={addressComplement}
          onChangeAddressComplement={onChangeAddressComplement}
          isLoadingPostalCode={isLoadingPostalCode}
        />
        <Contract
          name={name}
          semester={semester}
          course={course}
          address={address}
          enrollment={enrollment}
          birthday={birthday}
        />
      </div>
    </div>
  );
};
