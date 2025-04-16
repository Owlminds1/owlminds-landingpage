import { Controller } from "react-hook-form";

export default function CustomNumberInput({
  name,
  control,
  label,
  error,
  data,
  placeholder,
}) {
  return (
    <div className="flex flex-col pb-6">
      <label className="text-black pb-1 text-xs font-semibold">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <NumberInput data={data} {...field} />}
      />
      <p className="text-red-500 text-xs pt-2">{error}</p>
    </div>
  );
}

function NumberInput({ onChange, value, data }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((item) => {
          // Destructure based on actual data structure
          const { value: itemValue, display } = item; // Adjust based on your data
          const id = itemValue || item.id; // Fallback to id if value is not present
          const label = display || item.label || itemValue; // Fallback to label or value

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
                  {itemValue || value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
