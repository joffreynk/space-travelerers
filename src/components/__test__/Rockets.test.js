// Rockets.test.js

import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../Rockets';
import store from '../../redux/store';

describe(' Rockets Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
