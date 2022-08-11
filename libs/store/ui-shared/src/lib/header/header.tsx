import styled from '@emotion/styled';
import { AppBar,Toolbar, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  color: pink;
`;

export function Header(props: HeaderProps) {
  // const classes = useStyles()
  return (
   <AppBar position='static'>
    <Toolbar>
      <Typography variant='h6' className=''>
        Board Game Hoard
      </Typography>
    </Toolbar>
   </AppBar>
  );
}

export default Header;
