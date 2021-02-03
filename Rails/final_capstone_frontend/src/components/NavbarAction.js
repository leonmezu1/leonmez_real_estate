import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const NavbarAction = ({
  name,
  tabIndex,
  onKeyPress,
  children,
  path,
  closeModals,
  onClickAction,
}) => {
  const history = useHistory();

  return (
    <span
      role="button"
      name={name}
      tabIndex={tabIndex}
      onKeyPress={onKeyPress}
      onClick={() => {
        if (onClickAction) onClickAction(name);
        if (closeModals) closeModals?.();
        if (path) history.push(path);
      }}
    >
      {children}
    </span>
  );
};

NavbarAction.propTypes = {
  name: PropTypes.string.isRequired,
  tabIndex: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  closeModals: PropTypes.func,
  onClickAction: PropTypes.func,
  path: PropTypes.string,
  children: PropTypes.string.isRequired,
};

NavbarAction.defaultProps = {
  closeModals: null,
  onClickAction: null,
  path: null,
};

export default NavbarAction;
