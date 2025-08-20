import type { Authors } from "./Authors";
import type { Category } from "./Category";

export interface Book {
  id: number;
  name: string;
  genres: Category[];
  publishers: Authors[]
  description_raw: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  slug: string;
}
