import { useRouter } from 'next/router';

export const useQueryParams = () => {
  const router = useRouter();

  const SetQueries = (query: Query) => {
    for (const key in query) {
      if (query[key] === '') {
        delete query[key];
      }
    }

    router.replace({ search: new URLSearchParams(query).toString() });
  };

  return {
    queryParams: router.query as Record<string, string>,
    setQueryParams: SetQueries,
  };
};

type Query = Record<string, string> | URLSearchParams;
