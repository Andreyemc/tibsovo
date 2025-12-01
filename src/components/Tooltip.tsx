import { useEffect, useRef } from 'react';

interface TooltipProps {
  text: string;
  onClose: () => void;
}

const Tooltip = ({ text, onClose }: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Форматируем текст, заменяя переносы строк на <br>
  const formattedText = text.split('\n').map((line, index, array) => {
    if (index === array.length - 1 && !line.trim()) {
      return null;
    }
    if (index === array.length - 1) {
      return <span key={index}>{line}</span>;
    }
    return (
      <span key={index}>
        {line}
        <br />
      </span>
    );
  }).filter(Boolean);

  return (
    <div
      ref={tooltipRef}
      className="absolute z-[200] w-[448px] min-w-[300px] max-w-[95%] md:max-w-[90%] md:w-[448px] bg-white rounded-xl p-3 md:p-4 shadow-[0_0_54px_0_rgba(21,21,24,0.06)]"
      style={{
        top: 'calc(100% + 8px)',
        left: '50%',
        transform: 'translateX(-50%)',
        maxHeight: '344px',
        overflowY: 'auto',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-[#151518] text-xs md:text-sm font-normal leading-[140%] font-['Geist',-apple-system,Roboto,Helvetica,sans-serif]">
        {formattedText}
      </div>
    </div>
  );
};

export default Tooltip;

