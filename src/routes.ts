import loadable from "@loadable/component";

const Home = loadable(() => import("./pages/home/Home.component"));


export interface IRoute<T extends string = string> {
  path: string;
  pathName: T;
  component: any;
  exact: boolean;
  getInitialData?: () => Promise<any>;
}

export enum routepaths {
  ROOT = "/",
}

export const routes: IRoute[] = [
  {
    path: routepaths.ROOT,
    pathName: "home",
    component: Home,
    exact: true,
  },
];
