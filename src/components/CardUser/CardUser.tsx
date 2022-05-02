import './styles.scss';
import { Option } from '../../models/options';

interface CardUserProps {
  image: string;
  name: string;
  options: Option[];
  onSelectOption: (selected: string) => void;
}

const CardUser = ({ image, name, options, onSelectOption }: CardUserProps) => {
  return (
    <div className="component-carduser">
      <div className="user-container">
        <img src={`images/${image}`} alt={image.split('.')[0]} />
        <label>Report for</label>
        <h2>{name}</h2>
      </div>
      <div className="options-container">
        {options.map((option) => (
          <p className="option" onClick={() => onSelectOption(option.value)}>
            {option.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardUser;
