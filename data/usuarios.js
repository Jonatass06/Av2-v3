import GetAllData from "@/pages/api/hello";

const usuario = get();

async function get(){
    return await GetAllData("usuario")
}

export default usuario;