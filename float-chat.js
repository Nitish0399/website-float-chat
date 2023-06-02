/*
    ---------------- Constants ------------------
 */

const CHAT_TITLE = "Jane";
const CHAT_SUB_TITLE = "Online";

/*
    ---------------- Styles ------------------
 */

const colors = {
  PRIMARY: "#ff0505",
};

const styles = `

  #chat-container {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  /* ............ Chat Bubble .......... */

  #chat-bubble {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${colors.PRIMARY};
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: #1d1414;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  #chat-bubble:hover {
    background-color: ${colors.PRIMARY};
    border: 1px solid #ffffff;
  }

  #chat-icon {
    width: 30px;
    height: 30px;
    position: relative;
    top: 10px;
    left: 10px;
  }


  /* ............ Chat Surface .......... */

  #chat-surface {
    visibility: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .chat-surface-open {
    -webkit-animation: openbox 100ms ease-in;
    animation: openbox 100ms ease-in;
    height: 450px;
    width: 320px;
  }

  .chat-surface-close {
    -webkit-animation: closebox 100ms ease-out;
    animation: closebox 100ms ease-out;
    height: 0px;
    width: 0px;
  }


  /* ............ Chat Surface Header .......... */

  #chat-surface-header {
    height: 50px;
    padding: 10px 15px;
    background: ${colors.PRIMARY};
    border-radius: 10px 10px 0 0;
  }

  #chat-surface-header h3 {
    color: white;
    margin: 0;
  }

  #chat-surface-header p {
    color: white;
    font-size: 12px;
    margin: 2px 0 0 0;
  }


  #cross-icon {
    height: 32px;
    width: 32px;
    position: absolute;
    right: 5px;
    top: 5px;
  }

  #cross-icon:hover {
    transform: scale(1.05);
  }


  /* ............ Chat Surface Body .......... */

  #chat-surface-body {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 10px;
    background-color: #ffffff;
    flex-grow: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 32px 18px -34px inset;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
  }

  #chat-surface-body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  #chat-msg {
    padding: 7px 15px;
    font-size: 14px;
    max-width: 300px;
    display: inline-block;
    white-space: pre-wrap;
  }

  .sender-msg {
    align-self: right;
    background: ${colors.PRIMARY};
    color: #ffffff;
    border-radius: 20px 5px 20px 20px;
    margin: 5px 0px 5px auto;
  }

  .receiver-msg {
    align-self: left;
    background: #efefef;
    color: #111111;
    border-radius: 5px 20px 20px 20px;
    margin: 5px auto 5px 0px;
  }


  /* ............ Chat Surface Footer .......... */

  #chat-surface-footer {
    height: 60px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: end;
    padding: 2px 5px 7px 5px;
    background-color: #ffffff;
    border-radius: 0 0 10px 10px;
  }

  #chat-input-container{
    border-radius: 50px;
    padding: 3px 10px 3px 15px;
    background: #f7f7f7;
    outline: none;
  }

  #chat-input-text {
    font-size: 14px;
    line-height: 18px;
    border: none;
    color: #333333;
    width: calc(100% - 32px);
    padding: 7px;
    background: #f7f7f7;
    outline: none;
    resize: none;
    vertical-align: middle;
    max-height: 17px;
    overflow: hidden;
  }

  #chat-surface-footer img {
    width: 18px;
    height: 18px;
    position: relative;
    top: 5px;
  }

  #brand-text {
    font-size: 10px;
    text-align: center;
    margin: 5px 0 0 0;
    line-height: 10px;
  }


  /* ............ Animation .......... */

  @-webkit-keyframes openbox {
    0% {
      height: 0px;
      width: 0px;
    }
    100% {
      height: 450px;
      width: 320px;
    }
  }

  @keyframes openbox {
    0% {
      height: 0px;
      width: 0px;
    }
    100% {
      height: 450px;
      width: 320px;
    }
  }

  @-webkit-keyframes closebox {
    0% {
      height: 450px;
      width: 320px;
    }
    100% {
      height: 0px;
      width: 0px;
    }
  }

  @keyframes closebox {
    0% {
      height: 450px;
      width: 320px;
    }
    100% {
      height: 0px;
      width: 0px;
    }
  }



  /* ............ Media Queries .......... */

  @media only screen and (max-width: 425px) {

    #chat-bubble {
      width: 45px;
      height: 45px;
      right: 15px;
      bottom: 15px;
    }

    #chat-icon {
      width: 28px;
      height: 28px;
      top: 8px;
      left: 8px;
    }

    #chat-surface {
      bottom: 15px;
      right: 15px;
    }

    .chat-surface-open {
      height: 420px;
      width: 290px;
    }

  }

`;

/*
    ---------------- Variables ------------------
 */

var isStartMsgSent = false;

/*
    ---------------- Elements ------------------
 */

var bubbleElem = () => {
  // element creation
  var bubble = document.createElement("div");
  bubble.setAttribute("id", "chat-bubble");

  // Append chat icon
  var chatIcon = document.createElement("img");
  chatIcon.src = "./assets/chat-icon.svg";
  chatIcon.setAttribute("id", "chat-icon");

  bubble.appendChild(chatIcon);

  // bubble onclick listener
  bubble.addEventListener("click", () => {
    toggleChatBubble("open");
  });

  return bubble;
};

var chatSurfaceElem = () => {
  // element creation
  var chatSurface = document.createElement("div");
  chatSurface.setAttribute("id", "chat-surface");

  chatSurface.appendChild(chatSurfaceHeader());
  chatSurface.appendChild(chatSurfaceBody());
  chatSurface.appendChild(chatSurfaceFooter());

  return chatSurface;
};

const chatSurfaceHeader = () => {
  var chatHeader = document.createElement("div");
  chatHeader.setAttribute("id", "chat-surface-header");

  var title = document.createElement("h3");
  title.innerText = CHAT_TITLE;

  var subtitle = document.createElement("p");
  subtitle.innerText = CHAT_SUB_TITLE;

  var crossIcon = document.createElement("img");
  crossIcon.src = "./assets/cross-icon-white.svg";
  crossIcon.setAttribute("id", "cross-icon");

  // crossIcon onclick listener
  crossIcon.addEventListener("click", () => {
    toggleChatBubble("close");
  });

  chatHeader.appendChild(title);
  chatHeader.appendChild(subtitle);

  chatHeader.appendChild(crossIcon);

  return chatHeader;
};

const chatSurfaceBody = () => {
  var chatBody = document.createElement("div");
  chatBody.setAttribute("id", "chat-surface-body");

  return chatBody;
};

const chatSurfaceFooter = () => {
  var chatFooter = document.createElement("div");
  chatFooter.setAttribute("id", "chat-surface-footer");

  var chatInputContainer = document.createElement("div");
  chatInputContainer.setAttribute("id", "chat-input-container");

  // Create textarea element for chat message input
  var textareaInput = document.createElement("textarea");
  textareaInput.setAttribute("id", "chat-input-text");
  textareaInput.placeholder = "Type your message here";

  // Add 'Enter' keyboard event listener to send message
  textareaInput.addEventListener("keyup", (event) => {
    if (
      (event.code === "Enter" || event.code === "NumpadEnter") &&
      !event.shiftKey
    ) {
      event.preventDefault();
      sendMessage();
    }
  });

  var sendIcon = document.createElement("img");
  sendIcon.src = "./assets/send-icon-light.svg";

  // Add 'click' event listener to send message
  sendIcon.addEventListener("click", sendMessage);

  // Add hover effects on send icon
  sendIcon.addEventListener("mouseenter", () => {
    sendIcon.src = "./assets/send-icon-dark.svg";
  });

  sendIcon.addEventListener("mouseleave", () => {
    sendIcon.src = "./assets/send-icon-light.svg";
  });

  chatInputContainer.appendChild(textareaInput);
  chatInputContainer.appendChild(sendIcon);

  chatFooter.appendChild(chatInputContainer);

  return chatFooter;
};

const chatMessageElem = (message, messageType) => {
  var chatMessage = document.createElement("div");
  chatMessage.setAttribute("id", "chat-msg");
  chatMessage.innerText = message;

  if (messageType === "sender") {
    chatMessage.classList.add("sender-msg");
  } else {
    chatMessage.classList.add("receiver-msg");
  }

  return chatMessage;
};

/*
    ---------------- Event Listener Callbacks ------------------
 */

const toggleChatBubble = (action) => {
  const bubbleElement = document.getElementById("chat-bubble");
  const chatSurfaceElement = document.getElementById("chat-surface");

  if (action === "open") {
    bubbleElement.style.visibility = "hidden";
    chatSurfaceElement.style.visibility = "visible";

    chatSurfaceElement.classList.remove("chat-surface-close");
    chatSurfaceElement.classList.add("chat-surface-open");

    if(!isStartMsgSent) {
      setTimeout(() => readMessage("Hi, I am a chat"), 500);
      isStartMsgSent = true;
    }

  } else {
    chatSurfaceElement.classList.remove("chat-surface-open");
    chatSurfaceElement.classList.add("chat-surface-close");

    chatSurfaceElement.style.visibility = "hidden";
    bubbleElement.style.visibility = "visible";
  }
};

const sendMessage = () => {
  const chatInputTextElement = document.getElementById("chat-input-text");
  const message = chatInputTextElement.value.trim();
  if (message === "") {
    return;
  }

  // Clear chat input
  chatInputTextElement.value = "";

  const chatSurfaceBodyElement = document.getElementById("chat-surface-body");
  chatSurfaceBodyElement.appendChild(chatMessageElem(message, "sender"));
  scrollChatToBottom();
  setTimeout(() => readMessage(message), 1000);
};

const readMessage = (message) => {
  const chatSurfaceBodyElement = document.getElementById("chat-surface-body");
  chatSurfaceBodyElement.appendChild(chatMessageElem(message, "receiver"));
  scrollChatToBottom();
};

/*
    ---------------- Utils ------------------
 */

const scrollChatToBottom = (id) => {
  const element = document.getElementById("chat-surface-body");
  element.scrollTop = element.scrollHeight;
};

/*
    ---------------- Construction ------------------
 */

window.onload = () => {
  // Append styles to document
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const chatContainer = document.createElement("div");
  chatContainer.setAttribute("id", "chat-container");

  chatContainer.appendChild(bubbleElem());

  const chatSurfaceElement = chatSurfaceElem();
  chatContainer.appendChild(chatSurfaceElement);

  document.body.appendChild(chatContainer);
};
