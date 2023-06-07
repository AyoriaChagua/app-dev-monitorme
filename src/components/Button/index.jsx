export const Button = ({ text, type = "primary" }) => {
   
    const types = {
        dark: "bg-black",
        primary: "bg-red-500",
        green: "bg-green-500",
    };

    return (
        <>
        <button className={`${types[type]} text-white px-4 py-2 rounded-md`}>
            {text}
        </button>
        </>
    ) 
}