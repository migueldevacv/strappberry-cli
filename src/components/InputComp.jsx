export default function InputComp({ type = 'text', name = '', onChange = () => { }, value = '', className = '', disabled = false, label = '' }) {
    return (
        <input
            className={`bg-whiteBone rounded-md px-5 py-3 w-[100%] text-[15px] ` + className}
            placeholder={label}
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            disabled={disabled}
        />
    )
}