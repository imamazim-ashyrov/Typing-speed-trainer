import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomText } from "../textData";

interface TypingState {
  text: string;
  userInput: string;
  errors: number;
  startTime: number | null;
  endTime: number | null;
}

const initialState: TypingState = {
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
    setUserInput: (state, action: PayloadAction<string>) => {
      state.userInput = action.payload;
    },
    incrementErrors: (state) => {
      state.errors += 1;
    },
    setStartTime: (state, action: PayloadAction<number>) => {
      console.log("Typing Started");
      state.startTime = action.payload;
    },
    setEndTime: (state, action: PayloadAction<number>) => {
      console.log("Typing End");
      state.endTime = action.payload;
    },
    setNewText: (state) => {
      return {
        ...state,
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
  setUserInput,
  incrementErrors,
  setStartTime,
  setEndTime,
  setNewText,
} = typingSlice.actions;
export default typingSlice.reducer;
