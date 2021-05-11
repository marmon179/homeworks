import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {loadingReducer} from '../p2-homeworks/h10/bll/loadingReducer';
import {themeReducer} from '../p2-homeworks/h12/bll/themeReducer';
import {AppStoreType} from '../p2-homeworks/h10/bll/store';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer

})

const initialGlobalState = {
    theme: {
        themes: 'dark'
    }
};


export const storyBookStore = createStore(reducers, initialGlobalState as AppStoreType);

export const HW12Decorator = (storyFn: any) => (
    <Provider store={storyBookStore}>{storyFn} </Provider>
)