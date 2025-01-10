const ResumeIcon = (props) => {
  return (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
    >
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M15 18a3 3 0 1 0-6 0" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  );
};

export default ResumeIcon;
