const Timeline = ({
  communication,
}) => {
  return (
    <div className='bg-white shadow rounded-2xl p-6'>
      <h2 className='text-2xl font-bold mb-6'>
        Communication Timeline
      </h2>

      <div className='space-y-5'>
        {communication?.length >
        0 ? (
          communication.map(
            (item) => (
              <div
                key={item._id}
                className='border-l-4 border-black pl-4 py-2'
              >
                <div className='flex items-center justify-between'>
                  <h3 className='font-semibold'>
                    {item.type}
                  </h3>

                  <span className='text-sm text-gray-500'>
                    {new Date(
                      item.createdAt
                    ).toLocaleString()}
                  </span>
                </div>

                <p className='text-gray-700 mt-2'>
                  {item.message}
                </p>

                <p className='text-sm text-gray-500 mt-2'>
                  By:
                  {" "}
                  {
                    item.employee
                      ?.name
                  }
                </p>
              </div>
            )
          )
        ) : (
          <p>
            No communication found
          </p>
        )}
      </div>
    </div>
  );
};

export default Timeline;