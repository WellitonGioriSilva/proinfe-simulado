import Escola from "@/common/interfaces/escola";
import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}escola`;

export async function getEscolas() {
  const response = await axios.get(`${BASE_URL}`);
  const data: Promise<Escola[]> = await response.data;

  return data;
}
