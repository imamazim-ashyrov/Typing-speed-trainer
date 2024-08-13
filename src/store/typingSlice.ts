import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomText } from "../textData";

interface TypingState {
  focusInput: boolean;
  text: string;
  userInput: string;
  errors: number;
  startTime: number | null;
  endTime: number | null;
}

const initialState: TypingState = {
  focusInput: false,
  text: getRandomText(),
  userInput: "",
  errors: 0,
  startTime: null,
  endTime: null,
};

const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    setOnFocus: (state, action: PayloadAction<boolean>) => {
      state.focusInput = action.payload;
    },
    setUserInput: (state, action: PayloadAction<string>) => {
      state.userInput = action.payload;
    },
    incrementErrors: (state) => {
      state.errors += 1;
    },
    setStartTime: (state, action: PayloadAction<number>) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action: PayloadAction<number>) => {
      state.endTime = action.payload;
    },
    setNewText: (state) => {
      return {
        ...state,
        focusInput: true,
        text: getRandomText(),
        startTime: null,
        endTime: null,
        errors: 0,
        userInput: "",
      };
    },
  },
});

export const {
  setOnFocus,
  setUserInput,
  incrementErrors,
  setStartTime,
  setEndTime,
  setNewText,
} = typingSlice.actions;
export default typingSlice.reducer;
