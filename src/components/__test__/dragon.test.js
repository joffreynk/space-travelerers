// Dragon.test.js

import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import DragonsContainer from '../DragonsContainer';
import store from '../../redux/store';

describe('Dragon Component Rendering ', () => {
  it('Matches snapshot', () => {
    const Tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <DragonsContainer />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(Tree).toMatchSnapshot();
  });
});
