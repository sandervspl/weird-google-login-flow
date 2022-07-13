import styled, { css } from 'styled-components';

import { InputFieldCss } from '../../Input/styled';

export const StyledDayPicker = styled.div<StyledDayPickerProps>`
  position: relative;
  width: 100%;
  min-width: 200px;
  font-family: Helvetica, sans-serif;

  input {
    ${InputFieldCss};
  }

  .DayPickerInput-Overlay {
    overflow: hidden;
    box-shadow: 0px 8px 16px rgba(26, 32, 44, 0.05);

    ${({ position }) => position === 'top' && css`
      bottom: calc(100% + 44px);
    `}
  }

  .DayPickerInput-OverlayWrapper {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    padding: 0;
  }

  .DayPicker-wrapper {
    padding: 0;
  }

  .DayPickerInput {
    width: 100%;
  }

  .DayPicker-Months {
    padding: 8px;
  }

  .DayPicker-Month {
    width: 100%;
    margin: 0;
    border-spacing: 3px;
    border-collapse: separate;
  }

  .DayPicker-Caption div {
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color: #DDDDDD;
  }

  .DayPicker-Day,
  .DayPicker-Weekday,
  .DayPicker-WeekNumber {
    height: 28px;
    min-height: 28px;
    max-height: 28px;
    width: 28px;
    max-width: 28px;
    max-width: 28px;
    margin: 6px;
    font-size: 12px;
  }

  .DayPicker-WeekNumber,
  .DayPicker-Weekday {
    color: #CCCCCC;
    vertical-align: middle;
  }

  .DayPicker-Day {
    border-radius: 50%;
  }

  .DayPicker-Day--selected {
    background-color: #80BC00 !important;
  }

  .DayPicker-Day:hover,
  .DayPicker-Day--selected:hover {
    color: #FFFFFF !important;
    background-color: #80BC00 !important;
  }

  .DayPicker-Day--today {
    color: #80BC00;
  }

  .DayPicker-Day--outside {
    cursor: pointer;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    font-weight: 500;
  }

  ${({ isRangeSelector }) => isRangeSelector && css`
    .DayPicker-Day--selected {
      border-radius: 0;
      color: #80BC00 !important;
      background-color: rgba(128, 188, 0, .2) !important;
    }

    .DayPicker-Day--start {
      color: #FFFFFF !important;
      background-color: #80BC00 !important;
      border-radius: 0;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    }
    .DayPicker-Day--end {
      color: #FFFFFF !important;
      background-color: #80BC00 !important;
      border-radius: 0;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }

    .DayPicker-Day--start.DayPicker-Day--end {
      border-radius: 50%;
    }
  `}
`;

type StyledDayPickerProps = {
  position?: 'top' | 'bottom';
  isRangeSelector?: boolean;
};
