// types/user.ts
export interface User {
    _id: string;
    username: string;
    email: string;
    role: 'user' | 'doctor';
    // other user properties...
  }
  