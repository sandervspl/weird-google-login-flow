import { ValidationRule, Validate } from 'react-hook-form';

type ValidationMap = {
  [name: string]: { validate: Validate<string> } | ValidationRule | Record<string, ValidationRule>;
};

// Use a function here, so the values of the object van be typed, but the keys can be inferred
const createValidationMap = <T extends ValidationMap>(validation: T) => validation;

export const validation = createValidationMap({
  required: {
    required: 'Dit veld is verplicht',
  },
  phone: {
    pattern: {
      value: /^\+?[0-9-() ]*$/,
      message: 'Vul een geldig telefoonnummer in',
    },
    maxLength: {
      value: 14,
      message: 'Telefoonnummer is te lang',
    },
    minLength: {
      value: 10,
      message: 'Telefoonnummer is te kort',
    },
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Vul een geldig email adres in',
    },
  },
  number: {
    pattern: {
      value: /^\d+$/,
      message: 'Dit veld mag alleen nummers bevatten',
    },
  },
  date: {
    pattern: {
      value: /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}$/,
      message: 'Vul een geldige datum in',
    },
  },
  address: {
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+$/,
      message: 'Vul een adres in',
    },
  },
  password: {
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`])\S{8,99}$/,
      message: 'Wachtwoord moet tenminste 8 karakters, 1 hoofdletter, 1 kleine letter, 1 cijfer en 1 speciaal karakter bevatten',
    },
    minLength: {
      value: 8,
      message: 'Wachtwoord moet tenminste 8 karakters, 1 hoofdletter, 1 kleine letter, 1 cijfer en 1 speciaal karakter bevatten',
    },
  },
  textarea: {
    maxLength: {
      value: 255,
      message: 'Het veld is te lang',
    },
  },
  postalCode: {
    pattern: {
      value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
      message: 'Vul een geldige postcode in',
    },
  },
  positiveInteger: {
    validate: (value: string) => {
      const isValid = parseInt(value) >= 0;
      return !value || isValid || 'De waarde moet meer dan 0 zijn';
    },
  },
  kvkNumber: {
    maxLength: {
      value: 8,
      message: 'KvK-nummer moet 8 karakters zijn',
    },
    minLength: {
      value: 8,
      message: 'KvK-nummer moet 8 karakters zijn',
    },
  },
  time: {
    pattern: {
      value: /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      message: 'Vul een geldige tijd in',
    },
  },
});
