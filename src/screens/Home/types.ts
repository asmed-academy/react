import { AddressResult } from "../../components/Form/types";
import { ContractData } from "../../components/Contract/types";

export type HomeOuterProps = {
  findPostalCode: (postalCode: string) => Promise<AddressResult>;
}

export type HomeInnerProps = {
  contractData: ContractData | null,
  onSubmitData: (data: ContractData | null) => void;
} & HomeOuterProps;
