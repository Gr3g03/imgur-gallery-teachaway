import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IImage } from '../../interfaces/IImgurImage';
interface InitialState {
  galery: IImage[] | null;
  image: IImage | null;
  currentPage: number;
  totalPages: number | null;
}

const initialState: InitialState = {
  galery: null,
  image: null,
  currentPage: 1,
  totalPages: null,
};

export const galerySlice = createSlice({
  name: 'galery',
  initialState: initialState,
  reducers: {
    setGalery: (state, action: PayloadAction<IImage[]>) => {
      state.galery = action.payload;
    },
    setSelectedImage: (state, action: PayloadAction<IImage>) => {
      state.image = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setGalery, setSelectedImage, setPage, setTotalPages } = galerySlice.actions;
export default galerySlice.reducer;
