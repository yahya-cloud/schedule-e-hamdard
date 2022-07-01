import React, { useEffect, useState } from "react";
import { resolve } from "../lib/utils";

const useSearchFilter = (
  data: any[],
  params: string[]
): [string, React.Dispatch<React.SetStateAction<string>>, any[]] => {
  const [value, setValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([...data]);

  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);


  useEffect(() => {
    let updatedData = data.filter((el) =>
      [...params].some((el2) =>
        resolve(el2, el).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(updatedData);
  }, [value]);

  return [value, setValue, filteredData];
};

export default useSearchFilter;
