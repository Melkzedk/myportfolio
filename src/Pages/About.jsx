import melkImage from "../Images/melk1.jpg";

export default function About() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <img
            src={melkImage}
            alt="Melkzedek Wafula"
            className="rounded-lg w-full h-80 object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
          <p className="text-lg mt-4">
            I am a passionate software developer with{" "}
            <span className="font-bold">3 years of coding experience</span>.
          </p>
          <h4 className="text-xl font-semibold mt-6">Education</h4>
          <p>
            Bachelor's Degree in <span className="font-semibold">ICT</span> from
            Laikipia University.
          </p>
        </div>
      </div>
    </div>
  );
}
