import { Form, FormContainer, StyledLabel, Input, SendButton} from "./styled"

function TelaCadastroEndereco(props) {

    return (
        <FormContainer>
            <h1>Cadastro de Endereço</h1>
            <Form>
                <StyledLabel>Endereço:
                    <Input id="endereco" />
                </StyledLabel>
                <StyledLabel>Número:
                    <Input id="numero" />
                </StyledLabel>
                <StyledLabel>Telefone:
                    <Input id="telefone" />
                </StyledLabel>
                <StyledLabel>Complemento:
                    <Input id="complemento" />
                </StyledLabel>
                <SendButton onClick={()=>props.mudarTela(4)} >Finalizar Cadastro</SendButton>
            </Form>

        </FormContainer>
    )
}

export default TelaCadastroEndereco;