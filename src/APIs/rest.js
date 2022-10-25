import axios from "axios";
import { apiEndpoints } from "./endpoints";

export async function getAllTickets() {
  try {
    const data = await axios.get(apiEndpoints.getAllActiveTickets);
    console.log(data)
    return data.data.availableTickets
  } catch (err) {
    console.log("Error Occured in Getting all tickets", err);
  }
}
