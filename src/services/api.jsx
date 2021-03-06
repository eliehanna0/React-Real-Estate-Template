import http from "./http";
import { api_url } from "../config.json";

export function getAbout() {
  return http.get(api_url + "/about.json");
}

export function getProperties() {
  return http.get(api_url + "/properties.json");
}
