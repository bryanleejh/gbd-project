import * as React from 'react';
const styles = require('./style.scss');

interface HeaderBarProps {
  ouId: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  ouId,
}: HeaderBarProps) => {

  return (
    <div className={styles.container}>
      HEADER {ouId}
    </div>
  );
};
export default HeaderBar;
