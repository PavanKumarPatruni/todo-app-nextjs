import { useCallback, useState } from "react";

const Dropdown = ({
  list,
  title,
  onChange,
  selected,
}: {
  list: string[];
  title: string;
  onChange: (value: string) => void;
  selected?: string;
}) => {
  const [show, setShow] = useState(false);

  const onItemClick = useCallback(
    (value: string) => {
      onChange(value);
      setShow(false);
    },
    [onChange]
  );

  const onClick = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <div className="dropdown inline-block relative">
      <button
        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={onClick}
      >
        <span className="mr-1">{selected || title}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul
        className={`dropdown-menu absolute text-gray-700 pt-1 rounded-lg ${
          show ? "block" : "hidden"
        }`}
      >
        {list.map((item: string) => (
          <li key={item}>
            <button
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-[200px] text-left"
              onClick={() => onItemClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
