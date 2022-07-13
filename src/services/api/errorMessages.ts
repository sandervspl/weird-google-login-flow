/**
 * If the api uses the reference standard in the response,
 * you could specify the references here with custom messages.
 */
export const errorMessages = {
  default: 'Something went wrong. Please try again later.',
};

export const getErrorMessage = (reason: keyof typeof errorMessages) => {
  return errorMessages[reason] || errorMessages.default;
};
