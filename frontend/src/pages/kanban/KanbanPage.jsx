import DashboardLayout from "../../layouts/DashboardLayout";

import KanbanBoard from "../../components/kanban/KanbanBoard";

const KanbanPage = () => {
  return (
    <DashboardLayout>
      <KanbanBoard />
    </DashboardLayout>
  );
};

export default KanbanPage;