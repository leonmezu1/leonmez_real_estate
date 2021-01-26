import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { BaseButton } from './styledBases';

const ButtonLink = styled(Link)`
  ${BaseButton}
`;

export default ButtonLink;
