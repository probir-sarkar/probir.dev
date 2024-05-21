"use server";
import { client } from "@/config/directus";
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
    return await client.request<Project[]>(readItems("projects"));
  } catch (e) {
    return false;
  }
};
