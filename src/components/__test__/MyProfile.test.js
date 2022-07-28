// MyProfile.test.js

import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../MyProfile';
import store from '../../redux/store';

describe(' Rockets Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
