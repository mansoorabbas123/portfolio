export const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full bg-turquoise-blue bg-opacity-10 py-1 px-3">
      <span className="text-turquoise-blue font-medium text-xs line-clamp-none">
        {text}
      </span>
    </div>
  );
};
