const API = "https://api.themoviedb.org/3"

export const get = (path) =>{
    return fetch (API+path,{
        headers:{
            Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzliNTRlZTQ5YjcxNmYzOTliNWY5NDhhMTEzZmEwYiIsInN1YiI6IjY1MTlmZWE4ZDg2MWFmMDBjN2UyOTQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6VsKulEdGHnZJIEcohZ0go3-utcGkQOSK3Frk6t2kZ8",
            "Content-Type": "application/json;charset=utf-8"
        }
    })
    .then((results) => results.json());

}