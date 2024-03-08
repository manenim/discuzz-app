"use client";
import * as actions from "@/actions";
import { useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  return (
    <form action={actions.search}>
      <input
        placeholder="search..."
        className=" border-1 h-9 rounded-md outline-none px-4"
        name="term"
        defaultValue={searchParams.get("term") || ""}
      />
    </form>
  );
};

export default SearchInput;
