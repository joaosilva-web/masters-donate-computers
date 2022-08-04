import { institutionsMock } from "../mocks/institutions";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'
import Link from "next/link";
import Container from "../components/Container";
import { CardWrapper, Divider, InstitutionCard, InstitutionsContainer, LinksContainer, LocationContainer, TooltipContainer } from "../styles/PagesStyle/instituicoesStyles";




const institutions = () => {
    return(
        <Container bg="primary" h="100vh" >
            <InstitutionsContainer>
                <h1>Instituições</h1>
                <p>Encontre instituições pertinho de você para fazer a sua doação!</p>
            <CardWrapper>
            {institutionsMock().map(institutions => (
                <InstitutionCard key={institutions.institutionName}>
                    <h2>{institutions.institutionName}</h2>
                    <p>{institutions.presentation}</p>
                    <Divider/>
                    <LocationContainer>
                    <b><FaMapMarkerAlt/> Localização</b>
                    <div>
                    <p><b>Cidade:</b> {institutions.address.city}</p>
                    <p><b>Bairro:</b> {institutions.address.district}</p>
                    </div>
                    </LocationContainer>
                <LinksContainer>
                    <TooltipContainer>
                        <a href={institutions.links.site} target="_blank" rel="noopener noreferrer"><BsGlobe/></a>
                        <span className="tooltiptext">Visitar o site</span>
                    </TooltipContainer>
                    <TooltipContainer>
                        <a href={institutions.links.instagram} target="_blank" rel="noreferrer"><FaInstagram/></a>
                        <span className="tooltiptext">Visitar Instagram</span>
                    </TooltipContainer>
                    <TooltipContainer>
                        <a href={institutions.links.facebook} target="_blank" rel="noreferrer"><FaFacebook/></a>
                        <span className="tooltiptext">Visitar Facebook</span>
                    </TooltipContainer>
                    <TooltipContainer>
                        <a href={institutions.links.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp/></a>
                        <span className="tooltiptext">Visitar Whatsapp</span>
                    </TooltipContainer>
                </LinksContainer>
                </InstitutionCard>
            ))}
            </CardWrapper>
        </InstitutionsContainer>
        </Container>
    )
}

export default institutions;