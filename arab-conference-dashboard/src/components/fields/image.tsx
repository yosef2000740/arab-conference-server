import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Avatar } from "@nextui-org/avatar";
import { Camera } from "lucide-react";
import type {
  ControllerFieldState,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref"> &
  UseControllerProps<FieldValues> & {
    state: ControllerFieldState;
  };

const ImageField = forwardRef<HTMLInputElement, Props>(
  function ImageField(props, ref) {
    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current!);

    return (
      <div
        className={props.className}
        onClick={() => innerRef!.current?.click()}
      >
        <input
          {...props}
          value={""}
          ref={innerRef}
          className="hidden"
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64String = reader.result?.toString();

              // @ts-ignore
              props.onChange?.(base64String ?? "");
            };

            if (file) reader.readAsDataURL(file);
          }}
        />

        <Avatar
          size="lg"
          className="w-32 h-32 text-large cursor-pointer"
          src={(props.value as string) ?? ""}
          fallback={<Camera size="64" />}
        />
      </div>
    );
  },
);

export default ImageField;
