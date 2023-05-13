import React from "react";
import { RedeSocialProps } from "./RedeSocial.types";
import Link from "next/link";

export function RedeSocial(props: RedeSocialProps) {
  return (
    <Link href={props.url} target="_blank">
      <div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
        {React.cloneElement(props.icone, {
          size: 35,
          strokeWidth: 1,
          className: "text-indigo-400",
        })}
      </div>
    </Link>
  );
}
