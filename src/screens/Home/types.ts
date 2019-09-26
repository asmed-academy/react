import { FormProps } from "../../components/Contract/Form";

export type HomeProps = FormProps & {
  address: string;
};

export type AddressResult = {
  logradouro: string;
  localidade: string;
  uf: string;
};
