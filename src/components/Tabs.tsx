 import "@preline/tabs";

export function Tab({id, children}: {id: string, children: React.ReactNode}) {
  return (
    <button
      type="button"
      className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active"
      data-hs-tab={`#${id}`}
      id={id}
    >
      {children}
    </button>
  );
}

export function TabList({children}: {children: React.ReactNode}) {
  return (
    <div className="border-b border-gray-200 px-4">
      <nav className="flex space-x-2">{children}</nav>
    </div>
  );
}

export function TabPanel({id, className, children}: {id: string; className?:string; children: React.ReactNode}) {
  return (
    <div
      id={id}
      className={className != '' ? 'hidden' : ''}
    >
      {children}
    </div>
  );
}
export function TabPanels({children}: {children: React.ReactNode}) {
  return (
    <div className="mt-3 p-4">
        {children}
    </div>
  );
}

export function Tabs({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      {children}
    </div>
  );
}
