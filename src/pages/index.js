import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Helping you</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Our goal is to provide the best solutions to a range of technical and operating issues as well as a guided explanation that will help you understand and resolve these issues for yourself and your team in the future.
      </>
    ),
  },
  {
    title: <>Automating</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Improving productivity and cutting costs by removing unnecessary products, services, and dependencies with the use of custom built IoT devices and Open Source utilities.
      </>
    ),
  },
  {
    title: <>Privacy and Security</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        All of our solutions are tailored to your needs with special emphasis on the privacy and security of your business and personal data.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
