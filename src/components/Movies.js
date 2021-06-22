import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg" alt="bao" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg" alt="aunt edna" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg" alt="moana" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg" alt="tale of two kitties" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="simpsons" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg" alt="mickey mouse" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="legends" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg" alt="raya" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="soul" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg" alt="my music story" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="assembled" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="burrow" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="the falcon" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg" alt="inside out" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg" alt="tangled" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg" alt="incredibles 2" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    padding: 0 0 26px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`