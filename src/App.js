import React from "react";
import Dance from "./dance";
import Noodle from "./noodle";

function App() {
  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      <section style={{ marginBottom: "60px" }}>
        <h1>I love Yogurt</h1>
        <h2>Expecially Greek Yogurts</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhomHm0BIlEn4TfBbRJYgzjy-HN8tHtiVJY_n9onpNKAdj3mtog"
          alt="" />
        <p>
          <strong>Greek yogurt</strong> is a yogurt that has been strained to
          remove most of its whey, resulting in a thicker consistency than
          unstrained yogurt, while preserving yogurt's distinctive sour taste.
          Like many types of yogurt, strained yogurt is often made from milk
          that has been enriched by boiling off some of its water content, or by
          adding extra butterfat and powdered milk. In Europe and North America,
          it is often made with low-fat or fat-free yogurt. In Iceland a similar
          product named <em>skyr</em> is produced.
        </p>
        <small>
          <a
            href="https://en.wikipedia.org/wiki/Strained_yogurt"
            target="_blank"
            rel="noopener noreferrer">
            Read on Wikipedia
          </a>
        </small>
        <button class="btn">Try Greek Yogurt</button>
        <p class="footer">
          {" "} This page was built by
          <a href="https://github.com/934192776"
            target="_blank" rel="noopener noreferrer" >
            {" "} Jing{" "}
          </a>
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{ color: "#34495e", borderBottom: "2px solid #3498db", paddingBottom: "8px", }} >
          <div class="container">
            <h1> Chinese Dance </h1>
            <h2> Thousand Hand Guan Yin </h2>
            <hr />
            <img
              src="https://hualien.lineatlife.com/user_uploaded/2015/11/rmyXjJiGIKE78o6T0FXh1BbKMvJ603ds.jpg"
              alt="Chinese dance"
              width="350"/>
            <hr />
            <p> {" "} The{" "} <strong> Chinese dance<em> Qianshou Guanyin</em>
              </strong>
              , known as the Bodhisattva with a 1,000 Hands, is a dance in which
              dancers stand behind each other so only one person is visible to
              the audience. Hence, it appears to the audience that the person
              has many moving arms. These arms move according to the rhythm. It
              is the most famous and most spectacular visual display of perfect
              dance synchronization.
            </p>
            <small>
              <a href="https://en.wikipedia.org/wiki/Dance_in_China"
                target="_blank" rel="noopener noreferrer" class="read" >
                {" "} Read on Wikipedia{" "}
              </a>
            </small>

          <button class="btn">
            <a
              class="watch-button"
              href="https://www.google.com/search?q=%E5%8D%83%E6%89%8B%E8%A7%82%E9%9F%B3%E8%88%9E%E8%B9%88&sca_esv=708ca891a389fdf3&sca_upv=1&biw=1920&bih=953&tbm=vid&sxsrf=ADLYWIJp_4hIJ8W51hdm-9ou1gA6Xl0Uqg%3A1726117633916&ei=AXfiZoDPN9mi0-kPnpu1wQQ&oq=qian+shou+guanyin&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhFxaWFuIHNob3UgZ3VhbnlpbioCCAAyBxAAGIAEGAwyBxAAGIAEGAwyBxAAGIAEGAwyBxAAGIAEGAwyBxAAGIAEGAwyBxAAGIAEGAwyBxAAGIAEGAwyBxAAGIAEGAwyBxAAGIAEGAwyBxAAGIAEGAxIuihQAFiUGXAAeACQAQCYAYsCoAHBFqoBBjAuMTYuMbgBAcgBAPgBAZgCEaACrBfCAgUQABiABMICCBAAGIAEGKIEwgIIEAAYgAQYywHCAgcQABiABBgKmAMAkgcGMC4xNi4xoAftMQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:400d0d87,vid:of8ZOfAKzIc,st:0"
              target="_blank" rel="noopener noreferrer" >
              👀 Watch More{" "}
            </a>

          </button>
            <p class="footer">
              {" "} This page was built by
              <a href="https://github.com/934192776"
                target="_blank" rel="noopener noreferrer" >
                {" "} Jing{" "}
              </a>
            </p>
          </div>
        </h2>
        <Dance />
      </section>

      <section>
        <h2
          style={{
            color: "#34495e",
            borderBottom: "2px solid #3498db",
            paddingBottom: "8px",}}>
          <div class="container">
            <h1> Chinese Noodles </h1>
            <h2> Lanzhou Beef Noodle </h2>
            <hr />
            <img
              src="https://cdn.broadsheet.com.au/cache/2c/8f/2c8fe0704c3aec728436b10328880102.jpg"
              alt="Chinese noodles"
              width="350" />
            <hr />
            <p>
              {" "}
              The{" "}
              <strong>
                Chinese<em> Lanzhou beef noodles</em>
              </strong>
              , consist of hand-pulled lamian noodles, and clear consommé broth
              made from stewed beef. It often uses qingzhen meat and contains no
              soy sauce, resulting in a lighter taste that may be flavored by
              salt and herbs.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Lanzhou_beef_noodles"
              target="_blank" rel="noopener noreferrer"
              class="read"> {" "} Read on Wikipedia{" "}
            </a>
            <button class="watch-button">
              <a
                href="https://www.youtube.com/watch?v=VNqZ0BAQcX4"
                target="_blank" rel="noopener noreferrer"> {" "}
              </a>{" "} 👀 Watch More
            </button>
            <p class="footer">
              {" "}
              This page was built by
              <a href="https://github.com/934192776" target="_blank" rel="noopener noreferrer">
                {" "}Jing{" "} </a>
            </p>
          </div>
         </h2>
        <Noodle />
      </section>
    </div>
  );
}

export default App;