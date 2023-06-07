import "../../style.css"
export const TextField = ({ name, id, type, placeholder, onChange, className, ...rest }) => {    
    return (
        <div className="relative block mb-4">
          <input
              name = {name}
              id={id}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              className={`
                placeholder:italic 
                placeholder:text-slate-400 
                block bg-white w-full 
                border border-slate-300
                border-
                rounded-md py-2 pl-9 pr-3 
                shadow-sm focus:outline-none 
                focus:border-green-500 
                focus:ring-green-500 
                focus:ring-1 sm:text-sm 
                md:text-lg
                required:border-red-500`
              }
              {...rest}
          />
        </div>
    );
  }