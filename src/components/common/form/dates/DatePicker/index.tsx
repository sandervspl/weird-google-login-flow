import * as i from 'types';
import * as React from 'react';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import {
  defaultDateFormat,
  formatDate,
  stringToDate,
} from 'services';
import { FormField } from '../../FormField';
import { translations } from '../translations';
import { StyledDayPicker } from './styled';

export const DatePicker: React.FC<DatePickerProps> = ({
  disabledDays, description, direction, name, onChange, label, error, position, value,
}) => {
  const onDayChange = (selectedDay: Date) => {
    if (DateUtils.isDate(selectedDay)) {
      onChange(formatDate(selectedDay));
    }
  };

  const parseDate = (value: string): any => {
    const parsed = stringToDate(value);
    return DateUtils.isDate(parsed) && parsed;
  };

  return (
    <FormField {...{ name, label, description, direction, error }}>
      <StyledDayPicker position={position}>
        <DayPickerInput
          value={value}
          onDayChange={onDayChange}
          parseDate={parseDate}
          format={defaultDateFormat}
          component={(props: React.HTMLAttributes<HTMLInputElement>) => (
            <input
              {...props}
              type="text"
              name={name}
              placeholder={defaultDateFormat}
              autoComplete="off"
            />
          )}
          dayPickerProps={{
            locale: 'nl',
            firstDayOfWeek: 1,
            showOutsideDays: true,
            months: translations.months,
            weekdaysShort: translations.weekdaysShort,
            selectedDays: [stringToDate(value)],
            ...{
              ...(disabledDays && {
                disabledDays,
              }),
            },
          }}
        />
      </StyledDayPicker>
    </FormField>
  );
};

export type DatePickerProps =
  Omit<i.DefaultInputProps, 'onChange'>
  & i.FormFieldProps
  & i.DefaultDateProps
  & {
    onChange: (date?: string) => void;
    value: string;
    position?: 'top' | 'bottom';
  };
