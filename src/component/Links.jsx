const Links = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

      {/* Column 1 – 5 items */}
      <div className="flex flex-col gap-4">
        <Item title="LINKS"/>
        <Item desc="About" />
        <Item desc="Projects" />
        <Item desc="Blog" />
        <Item desc="Contact Us"  />
      </div>

      {/* Column 2 – 6 items */}
      <div className="flex flex-col gap-4">
        <Item title="LEGAL" />
        <Item desc="Project Single" />
        <Item desc="Blog single"  />
        <Item desc="Privacy Policy"  />
        <Item desc="Terms of Condition" />
        <Item desc="License"  />
      </div>

      {/* Column 3 – 4 items */}
      <div className="flex flex-col gap-4">
        <Item title="SOCIAL"  />
        <Item desc="Facebook" />
        <Item desc="Instagram" />
        <Item desc="LinkedIn"  />
      </div>
h
    </div>
  );
};

/* Reusable Item Card */
const Item = ({ title,desc }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-5 hover:border-black transition duration-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
};

export default Links;
