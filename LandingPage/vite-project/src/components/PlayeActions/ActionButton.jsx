import * as React from "react";

function ActionButton({ children }) {
  return <div className="mt-5 first:mt-0 font-bold hover:font-boldest">{children}</div>;
}

function MyComponent() {
  const actions = [
    "Add to friends",
    "Remove from friends", 
    "Block",
    "Report"
  ];

  return (
    <div className="flex flex-col justify-center text-base font-medium text-center text-black bg-neutral-400 max-w-[133px]">
      <div className="flex flex-col items-center px-4 py-2.5 w-full bg-neutral-400">
        {actions.map((action, index) => (
          <ActionButton key={index}>{action}</ActionButton>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;



