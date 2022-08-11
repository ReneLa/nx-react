import styled from '@emotion/styled';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react'
import { formatRating } from '@nx-react/store/util-formatters';

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps {}

const StyledStoreFeatureGameDetail = styled.div`
  color: pink;
`;

export function StoreFeatureGameDetail(props: StoreFeatureGameDetailProps) {
  const {id} = useParams();
  const [state, setState]=useState<{
    data:any,
    loadingState:'success'|'error'|'loading'
  }>({
    data:{},
    loadingState:'success'
  })

  useEffect(()=>{
    setState({...state, loadingState:'loading'});
    fetch(`/api/games/${id}`)
    .then(res=> res.json())
    .then(res=>{
      setState({...state,data:res, loadingState:'success'})
    })
    .catch(err=>{
      setState({...state,loadingState:'error'})
    })
  },[id])


  return (
    <StyledStoreFeatureGameDetail>
    {state.loadingState==='loading'?
       <p>loading this game....</p>
      :state.loadingState==='error'
      ?<p>requested unknown game</p>:
      <div>
        <h1>{state.data.name}</h1>
        <h4>{formatRating(state.data.rating)}</h4>
      </div>
    }
    </StyledStoreFeatureGameDetail>
  );
}

export default StoreFeatureGameDetail;
