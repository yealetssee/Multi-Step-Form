import { Dispatch, SetStateAction } from "react";

export type Plan = "arcade" | "advanced" | "pro";
export type PayPer = "monthly" | "yearly";
export type addons = {
  services: boolean;
  storage: boolean;
  profile: boolean;
  [key: string]: boolean;
};
export type addonNames = {
  services: "Online services";
  storage: "Larger storage";
  profile: "Customizable profile";
  [key: string]: string;
};
export type Price = {
  arcade: number;
  advanced: number;
  pro: number;
  services: number;
  storage: number;
  profile: number;
  [key: string]: number;
};
export type ContextType = {
  plan: Plan;
  payPer: "monthly" | "yearly";
  setPayPer: Dispatch<SetStateAction<PayPer>>;
  price: Price;
  addonNames: addonNames;

  setAddons: Dispatch<SetStateAction<addons>>;
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
  addons: addons;

  setPlan: Dispatch<SetStateAction<Plan>>;
};
