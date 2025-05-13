import React from "react";
import Table from "./Table";
import { columnType } from "./ColumnData";
import { columnType as customerType } from "./CustomerColumnData";
import { useQuery } from "@tanstack/react-query";
import { userProp, userStore } from "../../../store/GlobalStore";
import axios from "axios";

type PropsType = {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  url: string;
  columnData: columnType | customerType;
  queryId: string;
};

const TableSection: React.FC<PropsType> = ({
  filtering,
  setFiltering,
  url,
  columnData,
  queryId,
}) => {
  const token = userStore((state) => (state as userProp).token);

  const { data, isLoading, isError } = useQuery({
    queryKey: [queryId],
    queryFn: async () => {
      const response = axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  //(data?.data.data);

  return (
    <main>
      {data?.data?.data.length > 0 ? (
        <Table
          filterState={{ filtering, setFiltering }}
          size={20}
          columnData={columnData}
          mData={data?.data?.data}
        />
      ) : (
        <p className="text-3xl font-extrabold text-black/10">
          No data available
        </p>
      )}
    </main>
  );
};

export default TableSection;
