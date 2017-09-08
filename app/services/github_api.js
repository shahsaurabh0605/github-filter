import axios from "axios";

let i = 1;

const Data = (obj) => {
    let params = get_params(obj)
    return axios.get('https://api.github.com/search/repositories',params)
}

const get_params = (str) => {
    if(str===""){
        return {
            params: {
                q: 'stars:>=0',
                per_page : 20,
                page : 1
            }
        }
    }

    i++;
    return {
        params : {
            q: str,
            per_page : 20,
            page : i
        }
    }
}


module.exports = Data;

/*
    language : javascript
    stars : >= 0
    forks : >= 0
    user : defunkt
    repo : jekyll

*/