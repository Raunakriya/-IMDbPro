import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchTerm) => {
    const response = await movieApi
      .get(`?s=${searchTerm}&apiKey=${ApiKey}`)
      .catch((error) => {
        console.log("ERROR", error);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async (searchTerm) => {
    const response = await movieApi
      .get(`?s=${searchTerm}&type=series&apiKey=${ApiKey}`)
      .catch((error) => {
        console.log("ERROR", error);
      });
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "detail/fetchAsyncMovieOrShowDetail",
  async (imdbID) => {
    const response = await movieApi
      .get(`?i=${imdbID}&Plot=Full&apiKey=${ApiKey}`)
      .catch((error) => {
        console.log("ERROR", error);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  detail: {},
  isLoading: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    removeSelectedetail(state) {
      state.detail = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      return { ...state, movies: action.payload, isLoading: false };
    });
    builder.addCase(fetchAsyncMovies.rejected, () => {
      alert(" Movie Request Rejected from Server");
    });
    builder.addCase(fetchAsyncShows.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      return { ...state, shows: action.payload, isLoading: false };
    });
    builder.addCase(fetchAsyncShows.rejected, () => {
      alert(" Show Request Rejected from Server");
    });
    builder.addCase(fetchAsyncMovieOrShowDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
      return { ...state, detail: action.payload, isLoading: false };
    });
    builder.addCase(fetchAsyncMovieOrShowDetail.rejected, () => {
      alert(" Movie Request Rejected from Server");
    });
  },
});

export const { removeSelectedetail } = movieSlice.actions;
export default movieSlice.reducer;
