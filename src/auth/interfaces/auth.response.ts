import type { User } from "@/interfaces/user.interface";

// LOGIN, REGISTER, CHECKSTATUS
export interface AuthResponse {
  user: User;
  token: string;
}
