import { getReq } from "@/helper/get";
import { writable } from "svelte/store";

const pageURL = import.meta.env.VITE_PAGE_URL as string;

type Link = {
  link: string;
  name: string;
  title: string;
};

type Page = {
  projects: Link[];
  posts: Link[];
}

const storePage = writable({ projects: [], posts: [] } as Page);

(async () => {
  const data = await getReq(pageURL);
  storePage.set(data);
})();

export { storePage };
