import { Container, Heading, Section } from 'components';
import Balance from 'components/Balance/Balance';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';

const SearchCountry = () => {
  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <Balance></Balance>
        <LangSwitcher />
      </Container>
    </Section>
  );
};

export default SearchCountry;
