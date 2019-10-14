import { User } from "../../domain/User.domain";

export type AuthorizedUsersOuterProps = {
  users: User[];
  onBack: () => void;
}

export type SortingOrder = "asc" | "desc";

export type ChangeFilter = "active" | "inactive";

export type AuthorizedUsersInnerProps = {
  menuAnchorElement: Element | null;
  setMenuAnchorElement: (anchorEl: Element | null) => void;
  filterMode: 'active' | 'inactive';
  changeFilterMode: (filterMode: ChangeFilter) => void;
  sortOrder: 'asc' | 'desc';
  changeSortOrder: (sortOrder: SortingOrder) => void;
} & AuthorizedUsersOuterProps;