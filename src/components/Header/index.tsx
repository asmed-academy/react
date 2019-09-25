import React from "react";

import { HeaderContainer } from "./HeaderContainer";
import { HeaderTitle } from "./HeaderTitle";
import { MenuButton } from "./MenuButton";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Título da Página de Teste</HeaderTitle>
      <MenuButton
        menuText="oi?"
        onButtonClicked={() => alert("clicado!!!")}
      />
    </HeaderContainer>
  );
};
