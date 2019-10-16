import { User } from "../../domain/User.domain";

export type AuthorizedUsersOuterProps = {
  users: User[];
  onBack: () => void;
}

export type AuthorizedUsersInnerProps = {
  menuAnchorElement: Element | null;
  setMenuAnchorElement: (anchorEl: Element | null) => void;
  filterMode: boolean;
  changeFilterMode: (filterMode: boolean) => void;
  sortOrder: 'asc' | 'desc';
  changeSortOrder: (sortOrder: 'asc' | 'desc') => void;
} & AuthorizedUsersOuterProps;

