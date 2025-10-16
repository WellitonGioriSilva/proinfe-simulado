import { Pessoa } from "@/common/interfaces/pessoa";
import axios from "axios";

const BASE_URL = "http://localhost:3001/";

export async function getEscolas() {
  const response = await axios.get(`${BASE_URL}escola`);

  const data: Promise<Pessoa[]> = await response.data;
  return data;
}
