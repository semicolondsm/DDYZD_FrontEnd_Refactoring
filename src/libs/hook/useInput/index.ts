import { useCallback, useState } from "react";

export const useInput = <T = string>(
    initValue?: T,
    inputValidation?: (value: T) => boolean,
  ) => {
    const [value, setValue] = useState<T | undefined>(initValue);
  
    const onChange = useCallback(
      ({ target: { value: willSetValue } }: { target: { value: T } }) => {
        if (!inputValidation) setValue(willSetValue);
        if (inputValidation && inputValidation(willSetValue))
          setValue(willSetValue);
      },
      [inputValidation],
    );
  
    return { defaultValue: initValue, value, onChange, setValue };
};