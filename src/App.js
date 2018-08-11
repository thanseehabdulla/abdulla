import React from 'react';

import {history, store} from './redux/store';
import {Provider} from 'react-redux';
import PublicRoutes from './router';

const App = () =>
    <Provider store={store}>
        <PublicRoutes history={history}/>
    </Provider>;

export default App;
