import { Option } from '../../models/options';

import './styles.scss';

interface CardUserProps {
  image: string;
  name: string;
  options: Option[];
  selected: string;
  onSelectOption: (selected: string) => void;
}

const CardUser = ({
  image,
  name,
  options,
  selected,
  onSelectOption,
}: CardUserProps) => {
  return (
    <div className="component-carduser">
      <div className="user-container">
        <img src={`images/${image}`} alt={image.split('.')[0]} />
        <div>
          <label>Report for</label>
          <h2>{name}</h2>
        </div>
      </div>
      <div className="options-container">
        {options.map((option) => (
          <p
            className={`option ${selected === option.value ? 'selected' : ''}`}
            onClick={() => onSelectOption(option.value)}
          >
            {option.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardUser;
