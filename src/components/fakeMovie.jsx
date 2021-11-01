
const movies = [
  {
    _id:1,
    Title:'Avenger',
    Genre:'Action',
    Stock:'6',
    Rate:'2.5'
  },
  {
    _id:2,
    Title:'Don',
    Genre:'Action',
    Stock:'5.5',
    Rate:'3'
  },
  {
  _id:3,
    Title:'Kal Ho Na Ho',
    Genre:'Comedy',
    Stock:'6',
    Rate:'3.5'
  },
  {
      _id:4,
      Title:'Sultan',
      Genre:'Thriler',
      Stock:'6',
      Rate:'3.5'
    },
    {
       _id:5,
        Title:'Krish',
        Genre:'Comedy',
        Stock:'6',
        Rate:'3'
      },
      {
          _id:6,
          Title:'Don 2',
          Genre:'Action',
          Stock:'5.5',
          Rate:'3'
        },
        {
            _id:7,
            Title:'Avatar',
            Genre:'Thriler',
            Stock:'6',
            Rate:'3.5'
          },
          {
              _id:8,
              Title:'Inception',
              Genre:'Comedy',
              Stock:'5.5',
              Rate:'4'
            },
            {
                _id:9,
                Title:'Joker',
                Genre:'Comedy',
                Stock:'5',
                Rate:'3'
              }
]

export function getMovies(){
  return movies;
}
