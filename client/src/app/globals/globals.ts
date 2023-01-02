import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {SafeModel} from "../models/safe.model";

export let currentUser : OnlinebankinguserModel;
export let safeToOpen: SafeModel;

export function setCurrentUser(value: any) {
  currentUser = value;
}

export function setSafeToOpen(value: any) {
  safeToOpen = value;
}
