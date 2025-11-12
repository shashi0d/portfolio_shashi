import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("work", "routes/work.tsx"),
  route("work/genai-ux", "routes/work/genai-ux.tsx"),
  route("work/vr-emotion", "routes/work/vr-emotion.tsx"),
  route("work/wanderindy", "routes/work/wanderindy.tsx"),
    route("work/growthops", "routes/work/growthops.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
