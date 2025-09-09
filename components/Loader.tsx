
import { assets } from '@/constants';
import Image from 'next/image';

const Loader = () => {
    return (
        <div className="w-full h-screen flex-center">
            <Image
                src={assets.loader}
                alt="Loading..."
                width={50}
                height={50}
            />
        </div>
    );
};

export default Loader;
