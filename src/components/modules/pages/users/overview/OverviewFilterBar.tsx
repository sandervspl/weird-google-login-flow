import * as React from 'react';
import { SubmitHandler } from 'react-hook-form';

import { Button } from 'common/interaction';
import { FormContainer, Input } from 'common/form';
import { useQueryParams } from 'hooks';
import { SearchIcon } from 'common/icon';
import { FilterBar } from 'common/layout';

export const OverviewFilterBar: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams();

  const onSubmit: SubmitHandler<OverviewFilterBarValues> = (formValues) => {
    delete queryParams.page;

    setQueryParams({ ...queryParams, ...formValues });
  };

  return (
    <FormContainer
      onSubmit={onSubmit}
      id="OverviewFilterBar"
    >
      {({ register }) => (
        <FilterBar>
          <Input
            label="Search"
            placeholder="Name"
            defaultValue={!Array.isArray(queryParams.search) ? queryParams.search : ''}
            {...register('search')}
          />
          <Button
            variant="primary"
            type="submit"
            icon={<SearchIcon />}
            iconPosition="right"
          >
            Search
          </Button>
        </FilterBar>
      )}
    </FormContainer>
  );
};

type OverviewFilterBarValues = {
  search: string;
};
