export const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full dark:bg-teal-400/10 bg-teal-300 py-1 px-3">
      <span className="dark:text-teal-300 text-slate-900  font-bold text-xs line-clamp-none">
        {text}
      </span>
    </div>
  );
};
