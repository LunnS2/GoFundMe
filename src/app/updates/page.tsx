import React from 'react';
import Image from 'next/image';
import updatesData from '../../data/updates.json';

interface Update {
  title: string;
  text: string;
  image: string | null;
}

const Updates: React.FC = () => {
  const updates: Update[] = updatesData;

  return (
    <section className="bg-background grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col justify-center items-center row-start-2 gap-8 text-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            Weekly updates
          </h1>
          <p className="text-md sm:text-lg text-tertiary max-w-3xl mx-auto">
            Every week, I'll be updating you about my journey. Stay tuned for
            exciting news, new challenges, and key milestones along the way!
          </p>
        </div>

        {/* Mapping over updates */}
        <div className="w-full space-y-8">
          {updates.map((update, index) => (
            <div key={index} className="update-card">
              <h2 className="text-2xl font-semibold text-secondary mb-2">{update.title}</h2>
              <p className="text-lg text-tertiary">{update.text}</p>
              
              {/* Conditionally render image if available */}
              {update.image && (
                <div className="flex mt-4 justify-center">
                  <Image
                    src={update.image}
                    alt={update.title}
                    width={300}
                    height={200}
                    layout="intrinsic"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
