import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/store';

describe(' Missions Component Rendering ', () => {
  it('renders correctly', () => {
    const tested = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      );
    expect(tested).toMatchSnapshot();
  });
});
