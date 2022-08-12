import styled from '@emotion/styled';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography
} from '@mui/material';
import { Header } from '@nx-react/store/ui-shared';
import { formatRating } from '@nx-react/store/util-formatters';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Game } from '@nx-react/api/util-interfaces';
import { StoreFeatureGameDetail } from '@nx-react/store/feature-game-detail';


const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const navigate=useNavigate()
  const [state, setState]=useState<{
    data:Game [],
    loadingState:'success'|'error'|'loading'
  }>({
    data:[],
    loadingState:'success'
  })

  useEffect(()=>{
    setState({...state, loadingState:'loading'});
    fetch('/api/games')
    .then(res=> res.json())
    .then(res=>{
      setState({...state,data:res, loadingState:'success'})
    })
    .catch(err=>{
      setState({...state,loadingState:'error'})
    })
  },[])

  return (
    <>
      <Header title='Welcome to Header!' />
      <StyledApp>
        <div className="app" data-testId='app-container'>
          {state.loadingState==='loading'?'loading...'
          :state.loadingState==='error'? <div>Has errored</div> 
          : state.data.map((game) => (
            <Card key={game.id} onClick={() => navigate(`/game/${game.id}`)}>
              <CardActionArea >
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="h2">
                    {game.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    component="p"
                  >
                    {game.description}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    component="p"
                  >
                    {formatRating(game.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </StyledApp>
      <Routes>
       <Route
          path="/game/:id"
          element={<StoreFeatureGameDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
