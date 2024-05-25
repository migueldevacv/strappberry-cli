export default function IconComp({ icon = '', className, onClick }) {
    return <span onClick={onClick} className={`material-symbols-outlined ${className}`}>{icon}</span>
}