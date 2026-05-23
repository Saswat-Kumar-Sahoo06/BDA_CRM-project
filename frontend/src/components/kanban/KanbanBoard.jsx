import { useQuery } from "@tanstack/react-query";

import { getAllLeads } from "../../api/leadApi";

import KanbanColumn from "./KanbanColumn";

const statuses = [
  "New",
  "Contacted",
  "Negotiation",
  "Proposal Sent",
  "Converted",
  "Rejected",
];

const KanbanBoard = () => {
  const {
    data: leads,
    isLoading,
  } = useQuery({
    queryKey: ["leads"],

    queryFn:
      getAllLeads,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='grid grid-cols-6 gap-4'>
      {statuses.map(
        (status) => (
          <KanbanColumn
            key={status}
            title={status}
            leads={leads?.filter(
              (lead) =>
                lead.status ===
                status
            )}
          />
        )
      )}
    </div>
  );
};

export default KanbanBoard;