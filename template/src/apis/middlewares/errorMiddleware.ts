import { Action, isRejectedWithValue } from "@reduxjs/toolkit";

type NextFunction = (action: Action) => void;

interface RejectedAction extends Action {
  payload: {
    data: unknown;
  };
}

const rtkQueryErrorLogger = () => (next: NextFunction) => (action: RejectedAction) => {
  if (isRejectedWithValue(action)) {
    console.error(action.payload.data);
  }

  return next(action);
};

export default rtkQueryErrorLogger;
