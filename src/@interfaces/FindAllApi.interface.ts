// interface innerData {
//   success: boolean;
//   message: string;
//   take: number;
//   skip: number;
//   page: number;
//   total: number;
//   data: any[];
// }

export interface IFindAllApiSuccessResponse {
  success?: boolean;
  message?: string;
  take?: number;
  skip?: number;
  page?: number;
  total?: number;
  data?: any[];
  payload?: any[];
}
