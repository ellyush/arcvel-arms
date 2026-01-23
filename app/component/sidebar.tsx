"use client";
type SidebarProps = {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
};

export default function Sidebar({
  activeCategory,
  onSelectCategory,
}: SidebarProps) {
  const categories = [
    "All Products",
    "Assault Rifles",
    "Marksman Rifles",
    "Handguns",
    "Accessories",
  ];

  return (
    <aside className="w-82 shrink-0 border-r-2 border-myblack px-6 h-full bg-mywhite text-myclack">
      <section className="mt-24 sticky top-24">
        <h2 className="text-xl font-semibold text-myyellow mb-6">Categories</h2>

        <ul className="space-y-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <li
                key={category}
                onClick={() => onSelectCategory?.(category)}
                className={`cursor-pointer text-lg transition
                ${
                  isActive
                    ? "text-myyellow font-semibold"
                    : "text-myblack hover:text-myyellow"
                }
              `}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </section>
    </aside>
  );
}
