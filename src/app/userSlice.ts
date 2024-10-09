import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  userName: string;
  userEmail: string;
  password: string;
}

interface userState {
  users: User[];
}

const initialState: userState = {
  users: [
    // {
    //   id: 324432,
    //   userName: "john",
    //   userEmail: "john@gmail.com",
    //   password: "john123",
    // },
    // {
    //   id: 32345,
    //   userName: "tom",
    //   userEmail: "tom@gmail.com",
    //   password: "tom123",
    // },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { addUsers, setUsers } = userSlice.actions;
export default userSlice.reducer;
