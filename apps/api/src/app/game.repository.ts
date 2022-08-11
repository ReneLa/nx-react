const games=[
    {
        id:'billiard',
        name:'Pool Table',
        description:'Pool table with snooker is highly interectual',
        image:'',
        rating:35.564
    },
    {
        id:'chess-board',
        name:'Chess Board',
        description:'It does not only take brains to be a world champion but more than 1000hr of practical work too.',
        image:'',
        rating:15.765453
    },
    {
        id:'basketball',
        name:'Basketball',
        description:'Huge fan base and so expensive to get facilities',
        image:'',
        rating:45.42
    },
]


export const getAllGames=()=>games;
export const getGame=(id:string)=>games.find(game=>game.id===id);