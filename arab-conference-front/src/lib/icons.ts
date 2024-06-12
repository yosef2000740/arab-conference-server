import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";
import { RiNumber6 } from "react-icons/ri";
import { RiNumber7 } from "react-icons/ri";
import { RiNumber8 } from "react-icons/ri";
import { RiNumber9 } from "react-icons/ri";


  
  type IconName =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "10";
  
  const iconsMap: Record<IconName, React.ComponentType<{ size: number, className: string }>> = {
    1: RiNumber1,
    2: RiNumber2,
    3: RiNumber3,
    4: RiNumber4,
    5: RiNumber5,
    6: RiNumber6,
    7: RiNumber7,
    8: RiNumber8,
    10: RiNumber9,
  };
  
  export const getServicesIcon = (
    name: string,
  ): React.ComponentType<{ size: number, className: string }> => {
    const iconName = name?.toLowerCase() as IconName;
    const IconComponent = iconsMap[iconName];
  
    if (!IconComponent) {
      throw new Error(`${name} Icon Not Found`);
    }
  
    return IconComponent;
  };
  