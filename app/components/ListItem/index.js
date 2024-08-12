const { cn } = require("@/lib/utils");

const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li {...props}>
      <div className="font-medium leading-none"> Text{title}</div>
      <p className="line-clamp-2 leading-snug text-foreground">{children}</p>
    </li>
  );
};
ListItem.displayName = "ListItem";

export default ListItem;
