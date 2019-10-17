import React from "react";

import { AuthorizedUsers as UserAuthDumb } from "./dumb";


export default {
  title: "User Authorized"
};

export const UserAuthDumbs = () => (
  <UserAuthDumb
    users={[]}
  />
);
export const UserAuthenhanced = () => (
  <UserAuthDumb
    users={[]}
    menuAnchorElement={null}
    setMenuAnchorElement={null}
  />
);