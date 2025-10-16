import Escola from "@/common/interfaces/escola";
import { escolaSchema } from "@/common/validations/escolaSchema";
import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}escola`;

export async function getEscolas() {
  const response = await axios.get(`${BASE_URL}`);
  const data: Promise<Escola[]> = await response.data;

  return data;
}

export async function getOneEscola(id: number){
  return "getOneEscola";
}

export async function postEscola(escola: Escola){
  try{
    await escolaSchema.validate(escola, { abortEarly: false });
    return "postEscola";
  }catch(error){
    return "error";
  }
}
