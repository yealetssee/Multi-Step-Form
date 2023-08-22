import { Dispatch, SetStateAction } from "react";

export type Plan = "arcade" | "advanced" | "pro";
export type PayPer = "monthly" | "yearly";
export type addons =
  | "online services"
  | "larger storage"
  | "customizable profile"
  | null;

export type ContextType = {
  plan: Plan;
  payPer: "monthly" | "yearly";
  setPayPer: Dispatch<SetStateAction<PayPer>>;
  addons: addons[];
  setAddons: Dispatch<SetStateAction<addons[]>>;

  setPlan: Dispatch<SetStateAction<Plan>>;
};
