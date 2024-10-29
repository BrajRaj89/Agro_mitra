import React from "react";

export default function AboutUs() {

window.onscroll = function () {
  jet();
};

function jet() {
  var ilake = document.getElementById("head");
  ilake.style.top = "0px";
  ilake.style.position = "sticky";
}

window.addEventListener("scroll", () => {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var wnd = window.innerHeight;
    var rtop = reveals[i].getBoundingClientRect().top;
    var rpoint = 100;

    if (rtop < wnd - rpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
return (
  <div classNameName="App">
    <nav>
      <div>
        <a href="mailto: agromitra@gmail.com">
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/email-letter-envelope-message-38065.png"
            alt="G-mail"
          />
          <span
            style={{
              color: "white",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            }}
          >
            www.agromitra.com
          </span>
        </a>
        <a href="tel: +91 9123456784">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-64-thumb/telephone-41-117249.png"
            alt=""
          />
          <span
            style={{
              color: "white",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            }}
          >
            +91 9123456784
          </span>
        </a>
      </div>
      <div>
        <a href={{}}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/instagram-1868978-1583142.png"
            alt=""
          />
        </a>
        <a href={{}}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-3771014-3147631.png"
            alt=""
          />
        </a>
        <a href={{}}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
            alt=""
          />
        </a>
        <a href={{}}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
            alt=""
          />
        </a>
      </div>
    </nav>
    <header id="head">
      <a href={{}}>
        <span>

        

        </span>
        <span id="c_name"></span>
      </a>
      <ul>
        <li>
          <a href={{}}>Home</a>
        </li>
        <li>
          <a href={{}}  >
            Register/Sign In
          </a>
          <div id="brr"></div>
        </li>
        <li>
          <a href= {{}}  >
             Services
          </a>
          <div id="arr"></div>
        </li>
        <li>
          <a href={{}}>Contact Us</a>
        </li>
      </ul>
    </header>
    <main>
      <div id="front">
        <h1 style={{ textAlign: "center" }}>Welcome to,About Us</h1>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
          alt="font"
        />
        <p>
          "Empowering farmers with AI-driven solutions for a better future."
        </p>
      </div>

      <div id="first" className="reveal">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
          alt=""
        />
        <div>
          <h1>Our Services</h1>
          <p>
            Our website offers innovative services to enhance agricultural
            productivity and sustainability. Key features include crop disease
            prediction using image processing, which helps farmers detect and
            address issues early by simply uploading images of affected
            plants. The platform also provides personalized recommendations on
            optimal farming practices based on real-time data such as soil
            health and weather conditions.
          </p>
          <h2>Crop disease prediction through image processing(90%)</h2>
          <div className="comm">
            <div id="comm1"></div>
          </div>
          <h2>Real-time weather updates(85%)</h2>
          <div className="comm">
            <div id="comm2"></div>
          </div>
          <h2>Government schemes and subsidies(70%)</h2>
          <div className="comm">
            <div id="comm3"></div>
          </div>
        </div>
      </div>

      <div id="fourth" className="reveal">
      
        <h1 style={{ color: "white" }}>
          Real Time Monitoring 
        </h1>
        <div id="fourth_cards">
          <div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
              alt=" "
            />
            <p>Services</p>
          </div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
              alt=" "
            />
            <p>Services</p>
          </div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
              alt=" "
            />
            <p>Services</p>
          </div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
              alt=" "
            />
            <p>Services</p>
          </div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
              alt=" "
            />
            <p>Services</p>
          </div>
        </div>
      </div>

      <div id="second" className="reveal">
        <div className="container">
          <div>
            <h1>WE PROVIDE</h1>
            <h2>Crop Monitoring</h2>
            <p>
              advanced AI-powered crop monitoring to detect diseases early and
              improve farm management. Our platform offers real-time,
              data-driven insights on soil health, weather, and irrigation for
              precision farming. Additionally, we connect farmers with expert
              advice tailored to their specific needs and local conditions. We
              also keep farmers informed about relevant government schemes and
              subsidies. With our innovative solutions, farmers can maximize
              yields, reduce costs, and adopt sustainable practices.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
            alt=""
          />
        </div>
        <div className="container">
          <div>
            <h1>WE HAVE</h1>
            <h2>AI Tools</h2>
            <p>
              cutting-edge AI tools for crop disease detection and precision
              farming. Our platform offers real-time insights on soil health,
              weather, and optimal farming practices. We also provide access
              to expert advice tailored to each farmer's unique needs.
              Additionally, we keep farmers updated on government schemes and
              financial support options.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
            style={{ marginTop: "50px" }}
            alt=""
          />
        </div>
        <div className="container">
          <div>
            <h1>OUR MISSION</h1>
            <h2>Improved Quality </h2>
            <p>
              Our mission is to provide farmers with cutting-edge technology
              to make informed decisions. By leveraging AI, we help optimize
              crop yields, reduce costs, and predict diseases before they
              spread.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
            style={{ marginTop: "80px" }}
            alt=""
          />
        </div>
        <div className="container">
          <div>
            <h1>OUR STRENGTHS</h1>
            <h2>Intelligent Use of Technology and Human Resource</h2>
            <p>
              The intelligent use of technology and human resources in a
              farming website combines the precision of AI with human
              expertise to revolutionize agriculture. AI-driven tools analyze
              real-time data, such as soil quality and weather patterns,
              offering actionable insights that optimize crop management.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
            alt=""
          />
        </div>
      </div>

      <div id="third" className="reveal">
        <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
        <h1 style={{ textAlign: "center" }}>
          Driving Client Results Utilizing New Innovation Points of view
        </h1>
        <div id="third_cards">
          <div>
            <h2> AI-Powered Crop Monitoring and Disease Detection</h2>
            <p>
              The AI system detects early signs of disease, pest infestation,
              or nutrient deficiencies.
            </p>
          </div>
          <div>
            <h2>Data-Driven Insights for Precision Farming</h2>
            <p>
              Data-driven insights on soil health, moisture levels, allowing
              farmers to make precise decisions on fertilization, and planting
              schedules.
            </p>
          </div>
          <div>
            <h2>Tailored Advisory Services and Government Support</h2>
            <p>
              The platform highlights relevant government schemes, subsidies,
              and financial aid programs.
            </p>
          </div>
        </div>
      </div>

      <div id="fifth" className="reveal">
        <h1>AgroMitra</h1>
        <div>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
              alt=" "
            />
            <span>
              <h3>Address</h3>
              <p>Ujjain, MP, India</p>
            </span>
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
              alt=" "
            />
            <span>
              <h3>Phone</h3>
              <p>+91 9453485353</p>
            </span>
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
              alt=" "
            />
            <span>
              <h3>E-mail</h3>
              <p>agromitra@email.com</p>
            </span>
          </a>
        </div>
      </div>
    </main>

    <footer
      style={{ display: "flex", "justify-content": "space-around" }}
      id="foote"
    >
      <ul>
        <li>
          <a href={{}}>Home</a>
        </li>
        <li>
          <a href={{}}>About Us</a>
        </li>
        <li>
          <a href={{}}>Services</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href={{}}>Training</a>
        </li>
        <li>
          <a href={{}}>FAQs</a>
        </li>
      </ul>
      <div>
        <h2>Conatact Us</h2>
        <span>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
              alt=" "
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
              alt=" "
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
              alt=" "
            />
          </a>
        </span>
        <span>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
              alt=" "
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
              alt=" "
            />
          </a>
        </span>
        <a
          href="tel: 123456789"
          style={{
            color: "white",
            fontSize: "1.3em",
            letterSpacing: "2px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "bolder",
            marginTop: "20px",
          }}
        >
          Telephone No: +91 232345553
        </a>
      </div>
    </footer>
    <p
      style={{
        color: "white",
        textAlign: "center",
        background: "rgb(27, 27, 27)",
        padding: "10px 0px",
      }}
    >
      &copy;Copyright <b>agromitra</b>. All Rights Reserved
    </p>
  </div>
);
}