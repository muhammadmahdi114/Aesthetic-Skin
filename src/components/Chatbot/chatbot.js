import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://www.chatbase.co/embed.min.js";
    script1.defer = true;
    script1.setAttribute('chatbotId', 'KzgTdIdXyyQ_5GC052mZU');
    script1.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "KzgTdIdXyyQ_5GC052mZU",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(script2);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 w-72 h-80">
    </div>
  );
};

export default ChatBot;
