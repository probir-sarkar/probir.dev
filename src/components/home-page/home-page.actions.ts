"use server";
import { env } from "@/env";
export type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
};

export const allProjects = async () => {
  try {
    const res: Project[] = await fetch(env.NEXT_PUBLIC_API_URL +"/projects").then((res) => res.json());
    return res;
  } catch (e) {
    return false;
  }
};