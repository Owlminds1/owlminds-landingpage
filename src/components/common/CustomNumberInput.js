import { Controller } from "react-hook-form";

export default function CustomNumberInput({
  name,
  control,
  label,
  error,
  data,
  placeholder,
  //   classStr,
}) {
  return (
    <div className="flex flex-col pb-6">
      <label className="text-black pb-1 text-xs font-semibold">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          //   <input
          //     placeholder={placeholder}
          //     className="border-[2px] border-gray-200 py-3 px-2 text-xs rounded-lg text-black"
          //     {...field}
          //   />

          <NumberInput data={data} {...field} />
        )}
      />
      <p className="text-red-500 text-xs pt-2">{error}</p>
    </div>
  );
}

function NumberInput({ onChange, value, data }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => onChange(item.id)} // Set the value when clicked
            className={`${
              item.value === value ? "bg-[#7f00ff]" : "bg-white"
            } p-2 text-center border-[2px] border-gray-200 py-2 px-2 sm:px-8 rounded-lg cursor-pointer`}
            style={{
              backgroundColor: item.id === value ? "#7f00ff" : "white",
            }}
          >
            <div>
              <label
                className="text-black text-sm"
                style={{
                  color: item.id === value ? "white" : "black",
                }}
              >
                {item.label}
              </label>
              <div
                className={`${
                  item.id === value ? "text-white" : "text-black"
                } text-md font-sans`}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
