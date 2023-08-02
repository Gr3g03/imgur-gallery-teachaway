import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IImgurImage } from '../../interfaces/IImgurImage';
interface InitialState {
  galery: IImgurImage[] | null;
  image: IImgurImage | null;
}

const initialState: InitialState = {
  galery: null,
  image: null,
};

export const galerySlice = createSlice({
  name: 'galery',
  initialState: initialState,
  reducers: {
    setGalery: (state, action: PayloadAction<IImgurImage[]>) => {
      state.galery = action.payload;
    },
    setSelectedImage: (state, action: PayloadAction<IImgurImage>) => {
      state.image = action.payload;
    },
  },
});

export const { setGalery, setSelectedImage } = galerySlice.actions;
export default galerySlice.reducer;
