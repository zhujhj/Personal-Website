import React from "react";

function Contact() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5"><div>
            <h1 class="font-weight-light">Links</h1>
                <button onClick={() => openInNewTab("https://www.linkedin.com/in/jason-zhu-30bb7822b/")}>
                    Linkedin
                </button>
                <button onClick={() => openInNewTab("https://github.com/zhujhj")}>
                    Github
                </button>
                <button onClick={() => openInNewTab("https://www.linkedin.com/in/jason-zhu-30bb7822b/")}>
                    Resume
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;