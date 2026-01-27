interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: IProps) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

export { Button };
