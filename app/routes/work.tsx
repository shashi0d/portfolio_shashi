import type { Route } from "./+types/work";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work - Garri Tonakanyan" },
    { name: "description", content: "Portfolio of design work and case studies" },
  ];
}

export default function Work() {
  // Redirect to home page since all work content is there
  redirect("/");
}
