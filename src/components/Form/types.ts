
export type FormOuterProps = {
    findPostalCode: (postalCode: string) => Promise<AddressResult>;
    onSubmitData: (studentData: StudentData) => void;
};

export type StudentData = {
  name: string,
  birthday: string,
  semester: string,
  course: string,
  enrollment: string,
  address: string
};

export type FormInnerProps = {
    name: string;
    onChangeName: (name: string) => void;
    semester: string;
    onChangeSemester: (smstr: string) => void;
    course: string;
    onChangeCourse: (course: string) => void;
    enrollment: string;
    onChangeEnrollment: (enrollment: string) => void;
    postalCode: string;
    onChangePostalCode: (postalCode: string) => void;
    birthday: string;
    onChangeBirthday: (birthday: string) => void;
    addressNumber: string;
    onChangeAddressNumber: (addressNumber: string) => void;
    addressComplement: string;
    onChangeAddressComplement: (
      addressComplement: string
    ) => void;
    isLoadingPostalCode: boolean;
    address: string;
    onSubmitData: () => void;
  };

  export type AddressResult = {
    logradouro: string;
    localidade: string;
    bairro: string;
    uf: string;
  };