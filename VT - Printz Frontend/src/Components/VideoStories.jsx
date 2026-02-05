import React, { useRef } from 'react';

const stories = [
    { name: 'Logo TShirts', video: '/videos/logo-tshirt.mp4' },
    { name: 'Visiting Cards', video: '/videos/visiting-card.mp4' },
    { name: 'Printed Mugs', video: '/videos/printed-mug.mp4' },
    { name: 'T Shirts', video: '/videos/tshirts.mp4' },
    { name: 'Badges', video: '/videos/badges.mp4' },
    { name: 'Mobile Stand', video: '/videos/mobile-stand.mp4' },
    { name: 'Metal Pens', video: '/videos/pens.mp4' },
    { name: 'Keychains', video: '/videos/keychains.mp4' },
    { name: 'Frames', video: '/videos/colors.mp4' },
    { name: 'Fabric', video: '/videos/fabric.mp4' },
    { name: 'Quality', video: '/videos/quality.mp4' },
];

const VideoStories = () => {
    return (
        <div className="w-full flex justify-center py-6 overflow-hidden">
            <div className="flex gap-4 md:gap-8 overflow-x-auto px-4 pb-4 scrollbar-hide w-full max-w 8xl justify-start md:justify-center">
                {stories.map((story, index) => (
                    <StoryItem key={index} name={story.name} video={story.video} />
                ))}
            </div>
        </div>
    );
};

const StoryItem = ({ name, video }) => {
    const videoRef = useRef(null);

    return (
        <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#FF007A] to-[#E80059] relative">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                    <video
                        ref={videoRef}
                        src={video}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
            <span className="text-xs md:text-sm font-bold text-[#02192F] text-center whitespace-nowrap group-hover:text-[#E80059] transition-colors">
                {name}
            </span>
        </div>
    );
};

export default VideoStories;
