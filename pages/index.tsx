import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import MainFeatureSection from '../components/MainFeatureSection';
import CommunitySection from '../components/CommunitySection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MainFeatureSection />
      <FeatureSection />
      <CommunitySection />
    </Layout>
  );
}
