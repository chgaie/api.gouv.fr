import React from 'react';

import { GetServerSideProps } from 'next';
import Page from '../layouts';

const About: React.FC = ({ response, slug }) => (
  <Page small={true}>
    <div>
      {response.total_results} résultats pour {slug}
    </div>
    <div>
      {response.etablissement.map(etablissement => (
        <>
          <div>{etablissement.l1_normalisee}</div>
          <div>🗺{etablissement.l6_normalisee}</div>
        </>
      ))}
    </div>
  </Page>
);

export const getServerSideProps: GetServerSideProps = async context => {
  //@ts-ignore
  const slug = context.params.slug;

  const request = await fetch(
    `https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${slug}?per_page=5&page=1`
  );
  const response = await request.json();
  // const response = {};
  return {
    props: {
      response,
      slug,
    },
  };
};

export default About;
