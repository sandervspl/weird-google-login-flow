import styled, { css, keyframes, FlattenSimpleInterpolation } from 'styled-components';

const skeletonGradientKeyframes = keyframes`
  0% { background-position: 100%; }
  100% { background-position: 0%; }
`;

const backgroundSizeCss = css`
  background-size: 2000px 2000px;
`;

const loadingCss = css`
  background: #efefef linear-gradient(90deg, transparent, transparent, #dfdfdf, transparent, transparent);
  color: transparent;
  animation: ${skeletonGradientKeyframes} 1s linear infinite;
  cursor: default;
  border-radius: 3px;
  pointer-events: none;
  user-select: none;
`;

const notLoadingCss = css`
  background: transparent;
`;

export const SkeletonGradient: SkeletonGradientFn = ({
  isLoading, loadingStyling, defaultStyling,
}) => css`
  min-width: 100px;
  min-height: 20px;
  &&& {
    ${isLoading ? css`
      ${loadingCss}
      ${loadingStyling}
    ` : css`
      ${notLoadingCss}
      ${defaultStyling}
    `}
    ${backgroundSizeCss}
  }
`;

type SkeletonGradientFn = (args: {
  isLoading?: boolean;
  loadingStyling?: FlattenSimpleInterpolation;
  defaultStyling?: FlattenSimpleInterpolation;
}) => FlattenSimpleInterpolation;

export const Skeleton = styled.div<SkeletonProps>`
  ${({ isLoading }) => SkeletonGradient({
    isLoading: isLoading,
    loadingStyling: css`
      box-shadow: 0 -2px 0 transparent inset;
    `,
  })}
`;

type SkeletonProps = {
  isLoading?: boolean;
};
