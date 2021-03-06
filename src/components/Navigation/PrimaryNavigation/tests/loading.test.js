// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Loading.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<PrimaryNavigation /> rendered correctly with loading fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();
});
