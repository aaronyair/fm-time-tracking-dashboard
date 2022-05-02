import CardUser from '../components/CardUser/CardUser';
import { user } from '../samples/user';
import { Option } from '../models/options';
import { useCallback } from 'react';

import './styles.scss';

const options: Option[] = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
];

const DashboardContainer = () => {
  const handleSelectOption = useCallback((selected: string) => {
    console.log('Selected', selected);
  }, []);

  return (
    <div className="container-dashboard">
      <CardUser
        image={user.image}
        name={`${user.firstName} ${user.lastName}`}
        options={options}
        onSelectOption={handleSelectOption}
      />
    </div>
  );
};

export default DashboardContainer;
