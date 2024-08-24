"use server";
import { client } from "@/config/directus";
import { env } from "@/env";
import { createItem, readItems } from "@directus/sdk";

export const submitContactForm = async (data: any) => {
  try {
    const response = await client.request(createItem("contact_form", data));
    return response;
  } catch (e) {
    return false;
  }
};

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