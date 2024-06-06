const Card = ({
  title,
  description,
  iconBgColor,
  iconComponent,
  labelText,
  labelColor,
  sampleLink,
  apiLink,
}) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
      <div
        className={`h-52 flex flex-col justify-center items-center ${iconBgColor} rounded-t-xl`}
      >
        {iconComponent}
      </div>
      <div className="p-4 md:p-6">
        <span
          className={`block mb-1 text-xs font-semibold uppercase ${labelColor}`}
        >
          {labelText}
        </span>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-3 text-gray-500">{description}</p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
        <a
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href={sampleLink}
        >
          View sample
        </a>
        <a
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href={apiLink}
        >
          View API
        </a>
      </div>
    </div>
  );
};

export default Card;