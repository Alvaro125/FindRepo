import styled from "styled-components";
import { Input } from "../components/Input";
import { useState } from "react";
import axios from "axios";
import { ItemsList } from "../components/ItemsList";

const Container = styled.div`
  background: #1d2128;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h1 {
    margin: 0;
  }
  img {
    height: 4rem;
  }
`;
function Home() {
  const [value, setValue] = useState<string>("");
  const [repos, setRepos] = useState<Array<any>>([]);

  const handleValue = (e: any) => {
    setValue(e.target.value);
  };

  const handleGetRepo = async () => {
    try{

        const { data } = await axios.get(
          `https://api.github.com/repos/${value}`
        );
    
        if (data.id) {
          const isExist = repos.find((repo:any) => repo.id === data.id);
    
          if (!isExist) {
            setRepos((prev:any) => [...prev, data]);
            setValue("");
            return;
          }
        }
    
    }catch(err){
        alert("Repositório não encontrado");
        setValue("");
    }
  };

  const handleRemove = (id:number)=>{
    const filter = repos.filter((repo:any) => repo.id !== id)
    setRepos(filter)
  }

  return (
    <Container>
      <img src="/logo.png" alt="" />
      <Input onClick={handleGetRepo} onChange={handleValue} value={value} />
      {repos && (<ItemsList list={repos} onRemove={handleRemove}></ItemsList>)}
    </Container>
  );
}

export default Home;
