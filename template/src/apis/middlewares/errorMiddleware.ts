import { Action, isRejectedWithValue } from "@reduxjs/toolkit";

type NextFunction = (action: Action) => void;

const rtkQueryErrorLogger = () => (next: NextFunction) => (action: Action) => {
  if (isRejectedWithValue(action)) {
    // @ts-ignore
    console.error(action?.payload?.data);
  }

  return next(action);
};

export default rtkQueryErrorLogger;
