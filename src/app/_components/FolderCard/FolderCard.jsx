import styles from "./folderCard.module.css";
export default function FolderCard({ title, description, icon }) {
  return (
    <div
      className={`${styles.folder} folder  bg-blue-500 text-white hover:scale-110 p-6 shadow-lg`}
    >
      {/* Icon */}
      {icon && <div className="text-4xl mb-7">{icon}</div>}

      {/* Content */}
      <h3 className="text-3xl font-semibold mb-5">{title}</h3>
      <p className="text-sm opacity-90 leading-relaxed">{description}</p>
    </div>
  );
}
