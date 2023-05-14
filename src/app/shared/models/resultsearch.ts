export interface IResultSearch {
  success: boolean;
  totalCount: number;
  pageCount: number;
  currentPage: number;
  data: {
    values: {
      columns: {
        name: string;
        value: string;
      }[];
    }[];
  };
}
