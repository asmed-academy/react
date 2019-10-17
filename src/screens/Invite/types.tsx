import React from "react";
import { Observable } from "rxjs";

export type InviteUserComponent = React.ComponentType<
  InviteUserDumbProps
>;

type InvitedUser = {
  fullName: string;
  email: string;
};

export type InviteUserDumbProps = {
  fullName: string;
  changeFullName: (value: string) => void;

  email: string;
  changeEmail: (value: string) => void;
} & InviteUserEnhancedProps;

export type InviteUserEnhancedProps = {
  submitInvite: (invitedUser: InvitedUser) => void;
  saving: boolean;
  onBack: () => void;
};

export type EnhancerFunction = (
  prop$: Observable<InviteUserEnhancedProps>
) => Observable<InviteUserDumbProps>;
