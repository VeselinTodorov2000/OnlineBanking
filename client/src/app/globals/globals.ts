import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {SafeModel} from "../models/safe.model";

export let currentUser: OnlinebankinguserModel;
export let safeToOpen: SafeModel;

export function setCurrentUser(value: any) {
  currentUser = value;
}

export function setSafeToOpen(value: any) {
  safeToOpen = value;
}

export function validate(bin: string) {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "XdJNw36pyfB98rYucYyRFdkY6HF8N7wp");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  // @ts-ignore
  fetch("https://api.apilayer.com/bincheck/" + bin, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => alert(error));
}
