import { Controller } from "react-hook-form";

export default function CustomNumberInput({
  name,
  control,
  label,
  error,
  data,
  placeholder,
  type, // Default to date, can be "date" or "time"
}) {
  return (
    <div className="flex flex-col pb-6">
      <label className="text-black pb-1 text-xs font-semibold">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <NumberInput data={data} type={type} {...field} />
        )}
      />
      <p className="text-red-500 text-xs pt-2">{error}</p>
    </div>
  );
}

function NumberInput({ onChange, value, data, type }) {
  // Debug data
  console.log(`NumberInput (${type}) data:`, data, "value:", value);

  if (!data || data.length === 0) {
    return (
      <div className="text-gray-500 text-sm">
        {type === "date" ? "No dates available" : "No time slots available"}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => {
          debugger;
          const { id, value: itemValue, label } = item; // Use id, value, label

          return (
            <div
              key={id}
              onClick={() => onChange(id)} // Set the value when clicked
              className={`${
                id === value ? "bg-[#7f00ff]" : "bg-white"
              } p-2 text-center border-[2px] border-gray-200 py-2 px-2 sm:px-8 rounded-lg cursor-pointer`}
              style={{
                backgroundColor: id === value ? "#7f00ff" : "white",
              }}
            >
              <div>
                <label
                  className="text-black text-sm"
                  style={{
                    color: id === value ? "white" : "black",
                  }}
                >
                  {label}
                </label>

                <div
                  className={`${
                    id === value ? "text-white" : "text-black"
                  } text-md font-sans`}
                >
                  {item.type === "time" ? "" : itemValue}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
