import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, AppThunkDispatch, RootState} from './index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppThunkDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
