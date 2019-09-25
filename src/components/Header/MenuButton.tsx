import React from "react";

import styled from "styled-components";

const MenuButtonHolder = styled.div`
  background-color: #ed6f6d;
  width: 40px;
  height: 40px;
  align-items: center;
  text-align: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const MenuText = styled.span`
  font-size: 9px;
  color: #fff;
  text-transform: uppercase;
`;

type MenuButtonProps = {
  menuText?: string;
  onButtonClicked: () => void;
};

export const MenuButton = ({
  menuText = "menu",
  onButtonClicked
}: MenuButtonProps) => (
  <MenuButtonHolder onClick={() => onButtonClicked()}>
    <MenuText>{menuText}</MenuText>
  </MenuButtonHolder>
);
