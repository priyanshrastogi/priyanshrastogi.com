import { Description, Title, WorkCompany, WorkDate, WorkDescription, WorkDetails, WorkItem, WorkLogo, WorkPosition, WorkWrapper } from "./About.styled";

const About = () => {
  return (
    <>
      <Title>What I do</Title>
      <Description>I am a Full Stack Engineer. I write code for a living and often write code as a hobby, or to automate little boring stuff. I love exploring new languages, frameworks, and tools. Some languages that I primary use are JavaScript (Node.js), Golang and Python.</Description>
      <Title>Work Credentials</Title>
      <Description>Started my career with Amex, a leading financial services product company. Soon I realized that I want to work at early-stage startups.</Description>
      <WorkWrapper>
        <WorkItem>
          <WorkLogo src="/vested.webp" />
          <WorkDetails>
            <WorkCompany>Vested Finance</WorkCompany>
            <WorkPosition>Tech Lead / Sr. Software Engineer</WorkPosition>
            <WorkDate>Dec 2021 - Present</WorkDate>
            <WorkDescription>Leading Neobanking and Payments engineering team that is working on India's first of its kind remittance solution known as Vested Direct. It is powered by a Neobanking stack.</WorkDescription>
          </WorkDetails>
        </WorkItem>
        <WorkItem>
          <WorkLogo src="/vested.webp"/>
          <WorkDetails>
            <WorkCompany>Vested Finance</WorkCompany>
            <WorkPosition>Software Engineer</WorkPosition>
            <WorkDate>Aug 2020 - Dec 2021</WorkDate>
            <WorkDescription>Built Vested Direct from scratch. Vested Direct is India's fastest, easiest and cheapest remittance solution that allows users to remit money for foreign equity investment.</WorkDescription>
            <WorkDescription>Built a few products for internal operations and partners analytics.</WorkDescription>
            <WorkDescription>Optimized performance of Vested's core web and mobile apps.</WorkDescription>
          </WorkDetails>
        </WorkItem>
        <WorkItem>
          <WorkLogo src="/amex.png" height="48px" width="48px" />
          <WorkDetails>
            <WorkCompany>American Express</WorkCompany>
            <WorkPosition>Engineer 3</WorkPosition>
            <WorkDate>Jul 2019 - Aug 2020</WorkDate>
            <WorkDescription>Worked on automation and efficient working of Regulatory Reporting Applications.</WorkDescription>
            <WorkDescription>Created a WebVR based application prototype that works on VR devices (Oculus Go) for an amazing new-hire on-boarding expereince.</WorkDescription>
            <WorkDescription>Won a technology hackathon (company-wide national level) with a team of 5.</WorkDescription>
          </WorkDetails>
        </WorkItem>
        <WorkItem>
          <WorkLogo src="/amex.png" height="48px" width="48px" />
          <WorkDetails>
            <WorkCompany>American Express</WorkCompany>
            <WorkPosition>Engineering Intern</WorkPosition>
            <WorkDate>Jan 2019 - Jun 2019</WorkDate>
            <WorkDescription>Worked on American Express’s internal tool which is used to manage, manipulate and analyse vendor data. Added 6 new features according to user stories to perform various actions. Technologies being used are Java, Spring Boot, Postgres, Nodejs and Angular.</WorkDescription>
            <WorkDescription>Designed and created a prototype for New Hire On-boarding application for a hassle-free hiring/on-boarding experience using Node.js, Postgres, React and Redux. The project has been acquired by Amex’s Colleague Experience team.</WorkDescription>
          </WorkDetails>
        </WorkItem>
      </WorkWrapper>
      <Title>Education</Title>
      <Description>I graduated with a major in Computer Science and Engineer from Shiv Nadar University in 2019. During my undergrad, I published a research paper in the field of Internet of Things. The paper was presented in an IEEE conference and has been published in IEEE. It can be found here.</Description>
      <Title>Personal Stuff</Title>
      <Description>I am currently living in Gurgaon, India. Though I come from a town known as Ladnun in the state of Rajasthan. When I am not coding, I can be found playing video games, or listening to classical music. I also love exploring new places for food.</Description>
      
    </>
  );
}

export default About;