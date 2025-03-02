import { useState } from "react";

export default function DescriptionWithToggle({text}: {text: string}) {
    
    const [isExpanded, setIsExpanded] = useState(false);

    const maxLength = 150;
    const shortText = text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  
    return (
      <div className="text-lg">
        <p>{isExpanded ? text : shortText}</p>
        {text.length > maxLength && (
          <button
            className="text-orange-600 font-bold mt-2 hover:underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Ver menos" : "Ver más"}
          </button>
        )}
      </div>
    );
}
