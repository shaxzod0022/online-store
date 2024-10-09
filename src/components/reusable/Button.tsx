import { FC } from "react";

interface Props {
  title: string;
  calssName?: string;
  onClik?: () => void;
}
const Button: FC<Props> = ({ title, onClik, calssName }): JSX.Element => {
  return (
    <button
      onClick={onClik}
      className={`text-[14px] font-montserrat rounded-[5px]  ${calssName}`}
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
