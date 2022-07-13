import type * as i from 'types';

import { SimplePage } from 'common/layout';
import { Heading } from 'common/typography';


const Login: i.NextPageComponent = () => {
  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Heading as="h1">I am signed in yay!</Heading>
      </SimplePage.Wrapper>
    </SimplePage.Container>
  );
};

export default Login;
