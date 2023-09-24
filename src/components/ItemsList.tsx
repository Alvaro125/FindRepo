import styled from "styled-components"

const Container = styled.ul`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    list-style: none;
    margin-top: 2rem;
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
`

const Card = styled.li`
    padding: 0 1rem;
    background: transparent;
    color: #ffffff;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;

    .info{
        display: flex;
        flex-direction: column;
        align-items: start;
        h3{
            margin: 0;
            font-size: 1.5rem;
        }
        p{
            margin: 0;
            font-size: 1.5rem;
        }
    }
    .links{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin-top: 1rem;
        a{
            font-size: 1rem;
            text-decoration: none;
            color: #539BF5;
            margin: 0;
        }
        a.remover{
            color: #ee2323;
        }
    }
    hr{
        width: 100%;
    }
`

const ItemsList = function({list,onRemove}:{
    list: any,
    onRemove: any
}){
    return(
        <Container>
            {list.map((repo:any)=>(
                <Card key={repo.id}>
                    <div className="info">
                        <h3>{repo.name}</h3>
                        <p>{repo.full_name}</p>
                    </div>
                    <div className="links">
                        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
                        <a href="#"  rel="noreferrer" className="remover" onClick={()=>onRemove(repo.id)}>Remover</a>
                    </div>
                    <hr />
                </Card>
            ))}
        </Container>
    )
}
export {ItemsList}