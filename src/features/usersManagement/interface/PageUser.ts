import { User } from "./User";

export interface PagerUser<T> {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: T[]
}