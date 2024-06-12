"use client";
import { ScrollParallax } from "react-just-parallax";
import { FcBiotech } from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { IoPlanetOutline } from "react-icons/io5";

export default function FloatIcons() {
    return (
        <div>
            <ScrollParallax isAbsolutelyPositioned>
                        <FcBiotech
                            size={50}
                            className="hidden absolute -right-[4.9rem] bottom-[6rem] w-[10rem] xl:flex"
                         />
             </ScrollParallax>
             <ScrollParallax isAbsolutelyPositioned>
                        <IoPlanetOutline
                            size={50}
                            className="hidden absolute -right-[4.9rem] bottom-[25rem] w-[10rem] xl:flex"
                         />
             </ScrollParallax>
             <ScrollParallax isAbsolutelyPositioned>
                        <MdBiotech
                            size={50}
                            className="hidden absolute -left-[4.9rem]  -bottom-[2.5rem] w-[10rem] xl:flex"
                         />
             </ScrollParallax>
             <ScrollParallax isAbsolutelyPositioned>
                        <GiMaterialsScience
                            size={50}
                            className="hidden absolute -left-[4.9rem] top-[2rem] w-[10rem] xl:flex"
                         />
             </ScrollParallax>
        </div>
    );
}