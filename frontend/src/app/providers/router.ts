import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "@/shared/pages";

const router = createRouter({
  history: createMemoryHistory(),
  routes
});
