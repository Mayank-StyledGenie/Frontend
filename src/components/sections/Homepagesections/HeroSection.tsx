import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';
import Link from 'next/link';
import Heroimage from '@/images/Homepageheroimage.png';
import { colors } from '@/styles/colors';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center border-t border-blue-100 relative py-12 mb-12">
      <Container marginLeft="5vw" marginRight="5vw">
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative">
            <div className='mt-8'>
              <h1 className={`${typography.special.d2} mb-6`} style={{ color: colors.primary.darkpurple }}>
              Every Star Has a Style. Let's Find Yours.
              </h1>
              <p className={`${typography.body.B1} text-gray-600 mb-8 max-w-2xl mx-auto pr-12`}>
              At Styltara Studio, we believe fashion isn't just about what you wear—it's about how it makes you feel. We craft looks that reflect you, at your brightest.
              </p>
              <Link href={"/forms/Photographers-registration-form"}>
              <Button size="md" className='py-3 px-7'>Get Styled Now</Button></Link>
            </div>
            </div>
        </div>
      </Container>
      
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block mt-10 rounded-tl-3xl rounded-bl-3xl overflow-hidden">
        <img
          src={Heroimage.src}
          alt="Hero Image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      {/* Mobile image (shown only on small screens) */}
      <div className="w-full mt-8 md:hidden">
        <img
          src={Heroimage.src}
          alt="Hero Image"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;