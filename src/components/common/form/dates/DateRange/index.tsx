import * as i from 'types';
import * as React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FormField } from '../../FormField';
import { StyledDayPicker } from '../DatePicker/styled';
import { translations } from '../translations';

export const DateRange: React.FC<DateRangeProps> = ({
  disabledDays, description, direction, name, onChange, label, error, value,
}) => {
  const onDayChange = (day: Date, modifiers: i.DateModifiers) => {
    const stopEventChain = modifiers.outside || modifiers.disabled;

    if (!stopEventChain) {
      const range = DateUtils.addDayToRange(day, {
        from: value?.from,
        to: value?.to,
      }) as i.DateRangeState;

      onChange({
        from: range?.from,
        to: range?.to || range.from,
      });
    }
  };

  return (
    <FormField {...{ name, label, description, direction, error }}>
      <StyledDayPicker isRangeSelector>
        <DayPicker
          numberOfMonths={1}
          months={translations.months}
          weekdaysShort={translations.weekdaysShort}
          locale="nl"
          firstDayOfWeek={1}
          showOutsideDays
          onDayClick={onDayChange}
          modifiers={{
            start: value?.from,
            end: value?.to,
          }}
          {...{
            ...(disabledDays && {
              disabledDays,
            }),
            ...((value?.from || value?.to) && {
              selectedDays: [
                value?.from,
                {
                  from: value?.from as Date,
                  to: value?.to as Date,
                },
              ],
            }),
          }}
        />
      </StyledDayPicker>
    </FormField>
  );
};

export type DateRangeProps =
  i.FormFieldProps
  & i.DefaultDateProps
  & {
    value: i.DateRangeState;
    onChange: (range: i.DateRangeState) => void;
  };
