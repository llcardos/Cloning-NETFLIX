const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const API_BASE = 'https://api.themoviedb.org/3/';

const Tmdb = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                itens: await basicFetch('discover/tv?with_network=213&language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485')
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                itens: await basicFetch('trending/all/week?language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485')
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                itens: await basicFetch('movie/top_rated?language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485')
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await basicFetch('discover/movie?with_genres=28&language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485')
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens: await basicFetch('discover/movie?with_genres=35&language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485')
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: await basicFetch('discover/movie?with_genres=27&language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485')
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: await basicFetch('discover/movie?with_genres=10749&language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485')
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                itens: await basicFetch('discover/movie?with_genres=99&language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485')
            }
        ]
    },   
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`movie/${movieId}?language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485`);
                break;
                case 'tv':
                    info = await basicFetch(`tv/${movieId}?language=pt-BR&api_key=c7c2809baf68001b80b498bbe9d35485`);
                break;
                default:
                    info = null;
                break;
            }

            if (!info.overview) {
                info = null; // Remove as informações se não houver descrição
            }
        }
        return info;
    }

}

export default Tmdb;