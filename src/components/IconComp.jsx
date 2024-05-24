export default function IconComp({ icon = '', className }) {
    return <span className={`material-symbols-outlined mr-2 ${className}`}>{icon}</span>
}