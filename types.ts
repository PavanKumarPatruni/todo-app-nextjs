export type TType =
  | "RANDOM"
  | "CODING"
  | "GOALS"
  | "WORKOUT"
  | "SHOPPING"
  | "GROCERIES";

export type TStatus = "ACTIVE" | "DONE";

export type TTodo = {
  id: number;
  todo: string;
  type: TType;
  createdAt: Date;
  updatedAt: Date;
  status: TStatus;
};
