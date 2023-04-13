import styled, { css } from "styled-components";

import TutorialCard from "./TutorialCard";
import { TUTORIALS } from "../../../../../../tutorials";
import { GITHUB_URL } from "../../../../../../constants";
import { StyledDefaultLink } from "../../../../../../components/Link";
import { PgThemeManager } from "../../../../../../utils/pg/theme";

const Tutorials = () => (
  <Wrapper>
    <TutorialsOuterWrapper>
      <TopSection>
        <Title>Learn</Title>
      </TopSection>

      <TutorialsInsideWrapper>
        {TUTORIALS.map((t, i) => (
          <TutorialCard key={i} {...t} />
        ))}
      </TutorialsInsideWrapper>

      <BottomSection>
        <StyledDefaultLink
          href={`${GITHUB_URL}/tree/master/client/src/tutorials`}
        >
          Contribute
        </StyledDefaultLink>
      </BottomSection>
    </TutorialsOuterWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex: 1;
    overflow: auto;

    ${PgThemeManager.convertToCSS(theme.components.tutorials.default)};

    /* Scrollbar */
    /* Chromium */
    &::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border: 0.25rem solid transparent;
      border-radius: ${theme.default.borderRadius};
      background-color: ${theme.default.scrollbar.thumb.color};
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.default.scrollbar.thumb.hoverColor};
    }

    /* Firefox */
    & * {
      scrollbar-color: ${theme.default.scrollbar.thumb.color};
    }
  `}
`;

const TutorialsOuterWrapper = styled.div`
  padding: 2rem 3rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1``;

const TutorialsInsideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
  max-width: 64rem;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Tutorials;
