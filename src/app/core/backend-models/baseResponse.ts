export interface BaseResponse {
  success: boolean;
  message: string | null;
}

export interface ValueResponse<T> extends BaseResponse {
  value: T | null;
}
