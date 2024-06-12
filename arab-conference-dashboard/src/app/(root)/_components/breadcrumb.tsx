"use client";
import {
  Breadcrumb as _Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbEllipsis,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";

export function Breadcrumb() {
  const pathname = usePathname();
  const breadcrumbs = useMemo(() => {
    const result = new Array(pathname.length - 1);
    let url = "";
    for (const path of pathname.slice(1).split("/")) {
      url += `/${path}`;
      result.push({
        path: url,
        name: path,
      });
    }
    return result;
  }, [pathname]);

  console.log(breadcrumbs);
  return (
    <_Breadcrumb className="w-full max-w-max">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map(
          (item,k) =>
            item.name && (
              <Fragment key={k}>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.path}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
              </Fragment>
            ),
        )}
      </BreadcrumbList>
    </_Breadcrumb>
  );
}