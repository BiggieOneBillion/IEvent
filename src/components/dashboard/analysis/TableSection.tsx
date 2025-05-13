import React from "react";
import Table from "./Table";
import { columnType } from "./ColumnData";
import { columnType as customerType } from "./CustomerColumnData";
import { useQuery } from "@tanstack/react-query";
import { userProp, userStore } from "../../../store/GlobalStore";
import api from "../../../api/ApiSettings";

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

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [queryId],
    queryFn: async () => {
      const response = api.get(url, {
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
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center max-w-sm w-full">
          <svg
            className="w-12 h-12 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-lg font-medium text-gray-900 mb-2">Unable to Load Events</h2>
          <p className="text-sm text-gray-500 mb-6">
            Please check your connection and try again
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-black/80 transition-colors duration-150 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Retry
          </button>
        </div>
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
