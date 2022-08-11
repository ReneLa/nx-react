import { Game } from "@nx-react/api/util-interfaces";

const games:Game[] = [
    {
        id:'billiard',
        name:'Pool Table',
        description:'Pool table with snooker is highly interectual',
        image:'',
        price:45,
        rating:35.564
    },
    {
        id:'chess-board',
        name:'Chess Board',
        description:'It does not only take brains to be a world champion but more than 1000hr of practical work too.',
        image:'',
        price:10,
        rating:15.765453
    },
    {
        id:'basketball',
        name:'Basketball',
        description:'Huge fan base and so expensive to get facilities',
        image:'',
        price:89,
        rating:45.42
    },
]


export const getAllGames=()=>games;
export const getGame=(id:string)=>games.find(game=>game.id===id);