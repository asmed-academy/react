import { User } from "../../domain/User.domain";


export type UserOuterProps = {
  user: User;
  onAction: (action: UserActionType) => void;
};

export type UserInnerProps = {
  menuAnchorElement: Element;
  setMenuAnchorElement: (evtTarget: Element) => void;
} & UserOuterProps;
