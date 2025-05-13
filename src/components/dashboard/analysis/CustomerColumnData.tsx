import { Link } from "react-router-dom";

export type mainType = {
  _id: string;
  eventId: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  barcodeId?: string;
  pincode?: string;
};

export type RowType = {
  row: {
    original: mainType;
  };
};
// export type columnType = (
//   | {
//       id: keyof mainType;
//       header: string;
//       accessorKey: keyof mainType;
//       cell: (prop: RowType) => JSX.Element;
//     }
//   | { id: keyof mainType; header: string; accessorKey: keyof mainType }
// )[];

export type columnIdType = "_id" | "eventId" | "name" | "email" | "phoneNumber" | "location";

export type columnType = {
  id: columnIdType;
  header: string;
  accessorKey: columnIdType;
  cell?: (prop: { row: { original: mainType } }) => JSX.Element;
}[];

// details/66d94de95ffc670ac0fed390

export const columnData: columnType = [
  {
    id: "name",
    header: "Event Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <Link
        to={`/dashboard/analysis/event/details/${row.original._id}`}
        state={row.original}
      >
        <p>{row.original.name}</p>
      </Link>
    ),
  },
  {
    id: "email",
    header: "Customer Email",
    accessorKey: "email",
  },
  {
    id: "phoneNumber",
    header: "Phone Number",
    accessorKey: "phoneNumber",
  },
  {
    id: "location",
    header: "Event Location",
    accessorKey: "location",
  },
//   {
//     id: "name",
//     header: "Authorisation",
//     accessorKey: "name",
//     cell: ({ row }) => (
//       <span className="inline-block px-2 py-1 rounded-md bg-blue-700 text-white font-medium text-sm">
//         {row.original.barcodeId ? "Barcode" : "Pincode"}
//       </span>
//     ),
//   },
];
