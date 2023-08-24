import { Dispatch, SetStateAction } from "react";

export type Plan = "arcade" | "advanced" | "pro";
export type PayPer = "monthly" | "yearly";
export type addons = {
  services: boolean;
  storage: boolean;
  profile: boolean;
};
export type ContextType = {
  plan: Plan;
  payPer: "monthly" | "yearly";
  setPayPer: Dispatch<SetStateAction<PayPer>>;

  setAddons: Dispatch<SetStateAction<addons>>;
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
  addons: addons;

  setPlan: Dispatch<SetStateAction<Plan>>;
};
