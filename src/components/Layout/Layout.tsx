import { ReactElement } from 'react';
import './styles.scss';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
