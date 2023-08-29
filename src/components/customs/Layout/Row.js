import React from "react";
// styled system
import styled from "styled-components";

// ----------------------------------------------------------

// ********** flex-box 24 items ********** //

const RowWrapper = styled.div`
  display: ${({ display }) => display};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding || "0"};
  width: 100%;
  grid-template-columns: ${({ templateCol }) => templateCol || "0"};
  grid-template-rows: ${({ templateRow }) => templateRow || "0"};
  max-width: ${({ mWidth }) => (mWidth ? `${mWidth}px` : "none")};
  ${({ zIndex }) => (zIndex ? `z-index: ${zIndex}` : "")};
  position: relative;
  ${({ flexDirection, gap, display }) => {
    return getGap(flexDirection, gap, display);
  }}
  ${({ responsive, flexDirection, display, gap }) =>
    responsive && getResponsive(responsive, flexDirection, display, gap)}
`;

// func getter for responsive
const getResponsive = (responsive, flexDirection, display, gap) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  let lastDirection = flexDirection;
  let lastDisplay = display;
  let lastGap = gap;
  resData.forEach((itemSize) => {
    const item = responsive[itemSize];
    if (Boolean(item.flexDirection)) {
      lastDirection = item.flexDirection;
    }
    if (Boolean(item.display)) {
      lastDirection = item.display;
    }
    if (Boolean(item.gap)) {
      lastGap = item.gap;
    }
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${item.display ? `display: ${item.display};` : `display:${lastDisplay};`}
      ${item.flexWrap ? `flex-wrap: ${item.flexWrap};` : ""}
      ${
        item.flexDirection
          ? `flex-direction: ${item.flexDirection};`
          : `flex-direction:${lastDirection};`
      }
      ${item.justifyContent ? `justify-content: ${item.justifyContent};` : ""}
      ${item.alignItems ? `align-items: ${item.alignItems};` : ""}
      ${item.padding ? `padding: ${item.padding};` : ""}
      ${item.templateCol ? `grid-template-columns: ${item.templateCol};` : ""}
      ${item.templateRow ? `grid-template-rows: ${item.templateRow};` : ""}
      ${item.zIndex ? `z-index: ${item.zIndex};` : ""}
      ${item.mWidth ? `max-width: ${item.mWidth}px;` : ""}
      ${
        item.gap
          ? `
          & > *:not(:last-child) {
            margin-right: 0px;
            margin-bottom: 0px;
          }
          & > *:not(:first-child) {
            margin-right: 0px;
            margin-bottom: 0px;
          }
          `
          : ""
      }
      ${
        item.gap === 0
          ? "gap:0px;"
          : getGap(lastDirection, lastGap, lastDisplay)
      }
    }`;
  });
  return resStyle;
};

// func getter for gap
const getGap = (flexDirection, gap, display) => {
  if (display === "grid") {
    return `
     gap: ${gap}px;
    `;
  } else if (flexDirection === "column") {
    return `
      height: 100%;
      & > *:not(:last-child) {
         margin-right: 0px;
         margin-bottom: ${gap}px;
      }
    `;
  } else if (flexDirection === "column-reverse") {
    return `
      height: 100%;
      & > *:not(:first-child) {
         margin-right: 0px;
         margin-bottom: ${gap}px;
      }
    `;
  } else if (flexDirection === "row") {
    return `
      & > *:not(:last-child) {
         margin-bottom: 0px;
         margin-right: ${gap}px;
      }
    `;
  } else if (flexDirection === "row-reverse") {
    return `
      & > *:not(:first-child) {
         margin-bottom: 0px;
         margin-right: ${gap}px;
      }
    `;
  }
};

const Row = ({
  children,
  padding,
  flexDirection = "row",
  alignItems = "initial",
  justifyContent = "initial",
  gap = 0,
  flexWrap = "nowrap",
  display = "flex",
  templateCol = "auto",
  templateRow = "auto",
  zIndex,
  responsive,
  className,
  mWidth,
}) => {
  return (
    <RowWrapper
      display={display}
      padding={padding}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      flexWrap={flexWrap}
      templateCol={templateCol}
      templateRow={templateRow}
      zIndex={zIndex}
      responsive={responsive}
      mWidth={mWidth}
      className={className}
    >
      {children}
    </RowWrapper>
  );
};
export default Row;
