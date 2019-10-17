import React from "react";
import { User } from "../../domain/User.domain";
import { Observable } from "rxjs";

export type AuthorizedUsersOuterProps = {
  users: User[];
  onBack: () => void;
};

export type FilterMode = "active" | "archived";

export type SortOrder = "asc" | "desc";

export type AuthorizedUsersInnerProps = {
  menuAnchorElement: Element | null;
  setMenuAnchorElement: (anchorEl: Element | null) => void;
  filterMode: FilterMode;
  changeFilterMode: (filterMode: FilterMode) => void;
  sortOrder: SortOrder;
  changeSortOrder: (sortOrder: SortOrder) => void;
} & AuthorizedUsersOuterProps;

export type AuthorizedUsersScreenComponent = React.ComponentType<
  AuthorizedUsersInnerProps
>;

export type AuthorizedUsersEnhancerFunction = (
  prop$: Observable<AuthorizedUsersOuterProps>
) => Observable<AuthorizedUsersOuterProps>;
