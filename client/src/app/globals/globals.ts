import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";

export let currentUser : OnlinebankinguserModel;

export function setCurrentUser(value: any) {
  currentUser = value;
}
