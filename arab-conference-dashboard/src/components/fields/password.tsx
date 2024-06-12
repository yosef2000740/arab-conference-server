import { useState, forwardRef } from "react";
import { Input, InputProps } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import type {
    ControllerFieldState,
    FieldValues,
    UseControllerProps,
} from "react-hook-form";

type Props = Omit<InputProps, "ref" | "type" | "placeholder"> &
    UseControllerProps<FieldValues> & {
        state: ControllerFieldState;
    };

const PasswordField = forwardRef<HTMLInputElement, Props>(
    function PasswordField(props, ref) {
        const [isVisible, setIsVisible] = useState(false);

        const toggleVisibility = () => setIsVisible(!isVisible);

        return (
            <Input
                label="Password"
                variant="bordered"
                placeholder="********"
                labelPlacement="inside"
                endContent={
                    <button
                        className="focus:outline-none h-full"
                        type="button"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? (
                            <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <Eye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
                isInvalid={props.state.invalid}
                errorMessage={props.state.error?.message}
                {...props}
                ref={ref}
            />
        );
    },
);

export default PasswordField;
