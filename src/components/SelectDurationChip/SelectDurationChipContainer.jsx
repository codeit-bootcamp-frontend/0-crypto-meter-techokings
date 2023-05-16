import React from "react";

import styled from "styled-components";

import { colors, SButton, SText } from "@styles";

import { g1, g5 } from "../../styles/text.style";

const SelectDurationChipContainer = ({ duration, onClick, isClicked }) => {
  return (
    <S.Button
      col
      ct
      br={21}
      h={26}
      pd="4px 10px"
      isClicked={isClicked}
      onClick={onClick}
    >
      <S.ButtonText b3 isClicked={isClicked}>
        {duration}
      </S.ButtonText>
    </S.Button>
  );
};

const S = {};

S.ButtonText = styled(SText)`
  ${(props) => (props.isClicked ? g1 : g5)}
`;

S.Button = styled(SButton)`
  background-color: ${(props) => {
    return props.isClicked ? colors.gray9 : colors.gray2;
  }};
`;

export default SelectDurationChipContainer;