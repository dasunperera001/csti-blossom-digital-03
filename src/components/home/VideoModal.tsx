import heroVideo from "@/assets/hero-bg-video.mp4";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-4xl mx-4">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-secondary"
        >
          <span className="sr-only">Close video</span>
          ✕
        </button>
        <video 
          controls 
          autoPlay 
          className="w-full rounded-lg"
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;