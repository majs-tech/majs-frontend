import React from "react";
import AppAppBar from "./AppAppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Terms() {
  return (
    <>
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(#CEE5FD)"
              : `linear-gradient(#0D0D0D)`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
          // border: "1px solid white",
        })}
      >
        <AppAppBar />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
            // border: "1px solid yellow",
          }}
        >
          <Typography color="primary" component="h1" variant="h2">
            Terms and Conditions
          </Typography>
          <br></br>

          <Typography color="white" component="h2" variant="h4">
            Welcome to majs.tech!
          </Typography>

          <Typography>
            These terms and conditions outline the rules and regulations for the
            use of majs.tech's Website, located at{" "}
            <a href="https://majs.tech">https://majs.tech</a>.
          </Typography>

          <Typography>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use majs.tech if you do not agree to
            take all of the terms and conditions stated on this page.
          </Typography>

          <Typography>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company's terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client's needs in respect of
            provision of the Company's stated services, in accordance with and
            subject to, prevailing law of in. Any use of the above terminology
            or other words in the singular, plural, capitalization and/or he/she
            or they, are taken as interchangeable and therefore as referring to
            same.
          </Typography>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h5">
            <strong>Cookies</strong>
          </Typography>

          <Typography>
            We employ the use of cookies. By accessing majs.tech, you agreed to
            use cookies in agreement with the majs.tech's Privacy Policy.{" "}
          </Typography>

          <Typography>
            Most interactive websites use cookies to let us retrieve the user's
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </Typography>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h5">
            <strong>License</strong>
          </Typography>

          <Typography>
            Unless otherwise stated, majs.tech and/or its licensors own the
            intellectual property rights for all material on majs.tech. All
            intellectual property rights are reserved. You may access this from
            majs.tech for your own personal use subjected to restrictions set in
            these terms and conditions.
          </Typography>

          <Typography>You must not:</Typography>
          <ul>
            <li>1. Republish material from majs.tech</li>
            <li>2. Sell, rent or sub-license material from majs.tech</li>
            <li>3. Reproduce, duplicate or copy material from majs.tech</li>
            <li>4. Redistribute content from majs.tech</li>
          </ul>

          <Typography>
            This Agreement shall begin on the date hereof. Our Terms and
            Conditions were created with the help of the{" "}
            <a href="https://www.termsandconditionsgenerator.com/">
              Free Terms and Conditions Generator
            </a>
            .
          </Typography>

          <Typography>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            majs.tech does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and
            opinions of majs.tech,its agents and/or affiliates. Comments reflect
            the views and opinions of the person who post their views and
            opinions. To the extent permitted by applicable laws, majs.tech
            shall not be liable for the Comments or for any liability, damages
            or expenses caused and/or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this website.
          </Typography>

          <Typography>
            majs.tech reserves the right to monitor all Comments and to remove
            any Comments which can be considered inappropriate, offensive or
            causes breach of these Terms and Conditions.
          </Typography>

          <Typography>You warrant and represent that:</Typography>

          <ul>
            <li>
              1. You are entitled to post the Comments on our website and have
              all necessary licenses and consents to do so;
            </li>
            <li>
              2. The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li>
              3. The Comments do not contain any defamatory, libelous,
              offensive, indecent or otherwise unlawful material which is an
              invasion of privacy
            </li>
            <li>
              4. The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>

          <Typography>
            You hereby grant majs.tech a non-exclusive license to use,
            reproduce, edit and authorize others to use, reproduce and edit any
            of your Comments in any and all forms, formats or media.
          </Typography>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h5">
            <strong>Hyperlinking to our Content</strong>
          </Typography>

          <Typography>
            The following organizations may link to our Website without prior
            written approval:
          </Typography>

          <ul>
            <li>1. Government agencies;</li>
            <li>2. Search engines;</li>
            <li>3. News organizations;</li>
            <li>
              4. Online directory distributors may link to our Website in the
              same manner as they hyperlink to the Websites of other listed
              businesses;
            </li>
            <li>
              5. System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </li>
          </ul>
          <br></br>
          <Typography>
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: 
            (a) is not in any way
            deceptive; 
            (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party's site.
          </Typography>

          <Typography>
            We may consider and approve other link requests from the following
            types of organizations:
          </Typography>

          <ul>
            <li>
              1. commonly-known consumer and/or business information sources;
            </li>
            <li>2. dot.com community sites;</li>
            <li>3. associations or other groups representing charities;</li>
            <li>4. online directory distributors;</li>
            <li>5. internet portals;</li>
            <li>6. accounting, law and consulting firms; and</li>
            <li>7. educational institutions and trade associations.</li>
          </ul>

          <Typography>
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of majs.tech;
            and (d) the link is in the context of general resource information.
          </Typography>

          <Typography>
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party's site.
          </Typography>

          <Typography>
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to majs.tech. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Website, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
          </Typography>

          <Typography>
            Approved organizations may hyperlink to our Website as follows:
          </Typography>

          <ul>
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>
              By use of any other description of our Website being linked to
              that makes sense within the context and format of content on the
              linking party's site.
            </li>
          </ul>

          <Typography>
            No use of majs.tech's logo or other artwork will be allowed for
            linking absent a trademark license agreement.
          </Typography>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h5">
            <strong>IFrames</strong>
          </Typography>
          <Typography>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </Typography>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h5">
            <strong>Content Liability</strong>
          </Typography>

          <Typography>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </Typography>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h5">
            <strong>Reservations of Rights</strong>
          </Typography>

          <Typography>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it's linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </Typography>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h5">
            <strong>Removal of links from our website</strong>
          </Typography>

          <Typography>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </Typography>

          <Typography>
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </Typography>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h5">
            <strong>Disclaimer</strong>
          </Typography>

          <Typography>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </Typography>

          <ul>
            <li>
              1. limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              2. limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              3. limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              4. exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>

          <Typography>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </Typography>

          <Typography>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Terms;
