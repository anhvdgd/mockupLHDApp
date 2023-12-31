import axios from 'axios';

export async function getData(data: { fSearch: string; fStatus: string; fGender: string; fPage: string }){
    //https://rickandmortyapi.com/documentation
    const config = {
        params : {
            name: data.fSearch,
            status: data.fStatus,
            gender: data.fGender,
            page: data.fPage
        }
    } 
    try{
        const response = await axios.get("https://rickandmortyapi.com/api/character",config);
        return response
    } catch (e) {
        return e
    }
}
