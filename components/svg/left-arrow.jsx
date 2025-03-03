const LeftArrow = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5.207 9.414"
      className={className} // ✅ Now className is properly passed as a prop
    >
      <path
        id="Path_39328"
        d="M4.5,0,0,4.5,4.5,9"
        transform="translate(0.354 0.354)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  );
};

export default LeftArrow;
