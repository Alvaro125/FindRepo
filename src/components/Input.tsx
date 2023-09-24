import styled from "styled-components"

const Container = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    gap: .5rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const InputText = styled.input`
    background: transparent;
    border: 1px solid #ffffff;
    padding: .25rem 0 .25rem 1rem;
    color: #ffffff;
    border-radius: 1rem;
    font-size: 1.5rem;
`
const Button = styled.button`
    color: #000000;
    font-size: 1.5rem;
    padding: .25rem;
    text-align: center;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
        width: 90%;
        justify-content: center;
    }
`

const Input = function({onClick, onChange, value}:{
    onClick: any,
    onChange: any,
    value: string,
}){
    return(
        <Container>
            <InputText type="text" placeholder="Nome Repositório" onChange={onChange} value={value}/>
            <Button onClick={onClick}>Buscar</Button>
        </Container>
    )
}
export {Input}