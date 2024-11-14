import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchShow, Show } from '../../types';
import axios from 'axios';


interface SearchToolState {
  input: string;
  result: Show[],
}

const initialState: SearchToolState = {
  input: '',
  result: [],
}

export const getShows = createAsyncThunk<Show[], string> (
  'search/getShows',
  async(input) => {
    const response = await axios.get<SearchShow[]>(`http://api.tvmaze.com/search/shows?q=${input}`)
    return response.data.map((shows) => shows.show)
}
)

const searchToolSlice = createSlice({
  name: "searchTool",
  initialState,
  reducers: {
    setInput: (state, action:PayloadAction<string>) => {
      state.input = action.payload;
    },
    deleteResult: (state) => {
      state.result = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getShows.fulfilled, (state, action) => {
      state.result = action.payload;
    })
  }
})

export const {setInput, deleteResult} = searchToolSlice.actions;
export default searchToolSlice.reducer;