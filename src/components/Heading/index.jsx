export const Heading = ({ size, text, bold, color }) => {
    return <>
        <h1 className={`${size} ${bold ? 'font-bold' : 'font-normal'} ${color || 'text-slate-600'}`} >{text}</h1>;
    </>
};
