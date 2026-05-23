const KanbanColumn = ({
  title,
  leads,
}) => {
  return (
    <div className='bg-gray-100 rounded-2xl p-4 min-h-screen'>
      <h2 className='text-xl font-bold mb-5'>
        {title}
      </h2>

      <div className='space-y-4'>
        {leads?.map((lead) => (
          <div
            key={lead._id}
            className='bg-white rounded-2xl p-4 shadow'
          >
            <h3 className='font-bold text-lg'>
              {
                lead.clientName
              }
            </h3>

            <p className='text-gray-500 text-sm'>
              {
                lead.companyName
              }
            </p>

            <div className='mt-3 flex items-center justify-between'>
              <span className='text-sm font-medium'>
                ₹
                {
                  lead.dealValue
                }
              </span>

              <span className='text-xs bg-black text-white px-3 py-1 rounded-full'>
                {
                  lead.priority
                }
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;