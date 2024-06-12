import { Input, InputProps } from "@nextui-org/input";
import { forwardRef } from "react";
import type {
  ControllerFieldState,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type Props = Omit<InputProps, "ref"> &
  UseControllerProps<FieldValues> & {
    state: ControllerFieldState;
  };

const Field = forwardRef<HTMLInputElement, Props>(function Field(props, ref) {
  return (
    <Input
      variant="bordered"
      labelPlacement="inside"
      className="max-w-xs"
      isInvalid={props.state.invalid}
      errorMessage={props.state.error?.message}
      {...props}
      ref={ref}
    />
  );
});

export default Field;
