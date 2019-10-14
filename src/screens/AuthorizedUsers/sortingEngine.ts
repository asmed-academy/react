import { mapPropsStream } from "recompose";
import { AuthorizedUsersInnerProps } from "./types";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import UserAuth from './dumb';

type TransformerFunction = (
  prop$: Observable<AuthorizedUsersInnerProps>
) => Observable<AuthorizedUsersInnerProps>;

const transformer: TransformerFunction = prop$ => {
  return from(prop$).pipe(
    map(({ users, filterMode, sortOrder, ...props }) => {
      const sortedUsers = users.filter(user => {

        if (filterMode === 'active' && user.active || filterMode === 'inactive' && !user.active) {
          return true;
        } else {
          return false;
        }

      }).sort((userA, userB) => {
        if (sortOrder === 'asc') {
          if (userA.name > userB.name) {
            return -1;
          } else if (userA.name < userB.name) {
            return 1;
          }
          return 0;
        } else {
          if (userA.name > userB.name) {
            return 1;
          } else if (userA.name < userB.name) {
            return -1;
          }
          return 0;
        }
      })

      return {
        users: sortedUsers,
        filterMode,
        sortOrder,
        ...props
      }
    })
  )
};

/*export const SortingEngine = mapPropsStream<
  AuthorizedUsersInnerProps,
  AuthorizedUsersInnerProps
>(transformer)();*/