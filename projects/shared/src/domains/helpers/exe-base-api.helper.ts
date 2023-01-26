import axios from 'axios';
import { TAPIError, TSampleImput } from '../common.type';

type TUseBaseAPIRequest = {
  apiUrl: string;
  data: File | TSampleImput;
};

export async function exeBaseAPIRequest<T>({
  apiUrl,
  data,
}: TUseBaseAPIRequest) {
  try {
    // Проверка типа через наличие свойства
    if ('objects' in data) {
      const response = await axios.post<T>(`${apiUrl}/process/sample`, data);

      return response.data;
    }

    const formData = new FormData();
    formData.append('image', data);

    const response = await axios.post<T>(`${apiUrl}/process/image`, formData);

    return response.data;
  } catch (err: unknown) {
    const requestError = err as TAPIError;
    throw new Error(requestError.detail[0].msg);
  }
}
