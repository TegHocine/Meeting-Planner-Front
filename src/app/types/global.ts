export type PaginationResponse<T> = {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  totalItems: number;
  page: T[];
};
