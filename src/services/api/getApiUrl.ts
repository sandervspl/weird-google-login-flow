export const getApiUrl = () => {
  switch (process.env.APP_ENV) {
    case 'production':
      return 'https://api.next.nl/api';
    case 'acceptance':
      return 'https://api-acc.next.dev/api';
    case 'test':
      return 'https://next-dashboard-test.label-a.nl/api';
    default:
      return 'http://localhost:3000';
  }
};
