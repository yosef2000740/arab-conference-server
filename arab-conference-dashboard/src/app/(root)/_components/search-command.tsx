"use client";
import { Search } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Input } from "@nextui-org/input";
import { useState, useRef, useEffect } from "react";
import { Kbd } from "@nextui-org/kbd";

export function SearchCommand() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.key === "k" && (e.metaKey || e.ctrlKey)) ||
        (e.key === "/" && (e.metaKey || e.ctrlKey))
      ) {
        e.preventDefault();
        ref.current?.focus();
      }
      if (open && e.key === "Escape") {
        e.preventDefault();
        ref.current?.blur();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  return (
    <div className="relative w-full h-full">
      <Command>
        <Input
          ref={ref}
          placeholder="Type a command or search"
          // className=""
          startContent={<Search />}
          endContent={<Kbd keys={["ctrl"]}>K</Kbd>}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <CommandInput asChild value={search} className="hidden"></CommandInput>
        <CommandList className="z-10 absolute h-max bg-default-100 top-12 w-full rounded-medium">
          {open && (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              {/* TODO: Add search results */}
              <CommandGroup heading="Suggestions">
                <CommandItem className="hover:cursor-pointer">
                  Calendar
                </CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </Command>
    </div>
  );
}