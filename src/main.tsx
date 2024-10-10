import {StrictMode} from 'react'

import {createRoot} from 'react-dom/client'

import {App} from '@/App'
import {Provider} from 'react-redux';
import {store} from './services/store';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
)