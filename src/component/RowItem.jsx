import { FiArrowUpRight } from "react-icons/fi";

const RowItem = ({ number, title, isLast }) => {
  return (
    <div className="group cursor-pointer" data-aos="fade-up">
      <div
        className={`flex flex-wrap md:flex-nowrap
                    items-center gap-x-4 md:gap-x-6
                    mb-8 md:mb-10
                    pb-6 md:pb-15
                    max-w-full min-w-full
                    border-b border-gray-500
                    group-hover:border-yellow-400
                    text-white transition-colors duration-300
                    ${isLast ? "border-b-0" : ""}`}
      >
        {/* NUMBER */}
        <div
          className="p-3 md:p-4
                     w-14 md:w-20
                     ml-2 md:ml-4
                     font-semibold
                     transition-all
                     group-hover:text-yellow-400"
        >
          {number}
        </div>

        {/* TITLE */}
        <div className="flex-1 transition-all group-hover:text-yellow-400">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-2">
            {title}
          </h1>
        </div>

        {/* ARROW */}
        <FiArrowUpRight
          className="text-3xl sm:text-4xl md:text-5xl
                     pr-4 md:pr-6
                     mr-4 md:mr-20
                     transition-all
                     group-hover:text-yellow-400
                     group-hover:scale-150"
        />
      </div>
    </div>
  );
};

export default RowItem;
