import { HashMap } from "@datorama/akita";

export interface EntityState<E = any, IDType = any> {
  entities?: HashMap<E>;
  ids?: IDType[];
  loading?: boolean;
  error?: any;
  [key: string]: any;
}
