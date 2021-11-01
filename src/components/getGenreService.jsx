
const genres = [
    {_id:10,name:'Action'},
    {_id:20,name:'Comedy'},
    {_id:30,name:'Thriler'}
]

export function getGenres(){
    return genres.filter(g=>g)
}