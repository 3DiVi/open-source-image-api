import _ from 'lodash';
import { useState, useEffect } from 'react';
import { TSampleImput } from './common.type';

type TUseBaseAPI<T> = {
  apiRequest: (file: File | TSampleImput) => Promise<T>;
};

export function useBaseAPI<T>({ apiRequest }: TUseBaseAPI<T>) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<File | TSampleImput>();

  useEffect(() => {
    setData(undefined);
    setError(undefined);
  }, [input]);

  const getData = (requestInput: TSampleImput | File) => {
    setError(undefined);
    setLoading(true);

    let isNewFile = true;

    if ('objects' in requestInput) {
      isNewFile = !_.isEqual(requestInput, input);
    } else if (input && 'type' in input) {
      isNewFile =
        requestInput.type !== input.type ||
        requestInput.name !== input.name ||
        input.size !== requestInput.size;
    }

    if (isNewFile) {
      setInput(requestInput);
    }

    return (
      !isNewFile && data ? Promise.resolve(data) : apiRequest(requestInput)
    )
      .then((response) => {
        setData(response);
        return response;
      })
      .catch((err) => {
        const reqErr = err as Error;
        setError(reqErr.message);
        throw Error(reqErr.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getData, error, loading };
}
