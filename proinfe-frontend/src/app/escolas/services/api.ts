import Escola from "@/common/interfaces/escola";
import axios from "axios";

const BASE_URL = "http://localhost:3001/";

export async function getEscolas() {
  const response = await axios.get(`${BASE_URL}escola`);

  const data: Promise<Escola[]> = await response.data;
  return data;
}
