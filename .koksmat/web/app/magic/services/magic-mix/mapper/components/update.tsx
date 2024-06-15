/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
"use client";
// piratos
import { useService } from "@/app/koksmat/useservice";
import { useState } from "react";
import {MapperForm} from "./form";

import {MapperItem} from "../applogic/model";
export default function UpdateMapper(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<MapperItem>(
      "magic-mix.mapper",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const mapper = readResult.data;
    return (
      <div>{mapper && 
      <MapperForm mapper={mapper} editmode="update"/>}
     
      </div>
    );
}
