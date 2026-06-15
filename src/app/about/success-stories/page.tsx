import PageHero from "@/components/ui/PageHero";
import * as motion from "framer-motion/client";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Success Stories | MIITJEE Classes",
  description: "Read the success stories and testimonials of our top-ranking students at MIITJEE Classes.",
};

const STORIES = [
  {
    name: "ADARSH",
    achievement: "AIR-53, IIT JEE 2019",
    content: "I was sure that I will be selected but not did not expect this good rank. MIITJEE faculty members and staff have greatly supported me in my preparation. My parents have also supported me very much. I prepared normally. I always completed my homework and also revised the tests taken. I would suggest struggle till the exam is not cleared. Thank you.",
  },
  {
    name: "Anjali Kumari",
    achievement: "99.88 percentile, AIIMS (Medical) 2018",
    content: "I think the most important factors that shape the path for your success are the inspiration, motivation and guidance that you get from others. MIITJEE Classes is one such institute that will make sure you get all these at one place. The faculty here is undoubtedly highly experienced, skilled and helpful. They make sure that the classes provide you the knowledge and understanding and also increase your appetite to learn more and more every day.",
  },
  {
    name: "Madhav Kauntia",
    achievement: "Rank 1, State Topper in Jharkhand 2017",
    content: "Since the first moment I came to MIITJEE Classes, I was met with nothing but energy and enthusiasm. Personally, the structured hours allowed me to plan out what I wanted to study that specific day while the continuous assessments kept me on my toes. Being surrounded by motivated, like-minded people was beneficial as it drove me to work harder and achieve what I wanted to achieve. My experience here was definitely one that I will never forget.",
  },
  {
    name: "RUPAK KUMAR",
    achievement: "AIR 231, JEE (Advanced) 2016",
    content: "I was happily surprised by my result, no doubt I was sure that I would be selected but i never expected my rank in top 100. I anticipated my AIR around 200-300. My teachers and parents were my major support system and the very reason behind my success. I never missed my classes. I paid 100% attention in class and had healthy discussions with friends and teachers which were my main daily goals.",
  },
  {
    name: "AVINASH KUMAR",
    achievement: "AIR-46, JEE (Advanced) 2015",
    content: "It was like a dream come true moment. The faculty here at MIITJEE, the study material and the academic environment is simply perfect to ensure a student's success. Moreover my family also provided me support and encouraged me to perform better. JEE preparation is like a long activity, it's not a single day work. I basically prepared by doing all the modules, paying attention in classes and studying smart. Doubt clearance sessions by HOD's was extremely beneficial.",
  },
  {
    name: "LALA PRAKASH",
    achievement: "AIR-26, AIPMT (Medical) 2014",
    content: "The study material provided by MIITJEE is simply incomparable and more than sufficient. All the faculties here are really good. After my 2 years long journey with MIITJEE, I now feel that I know more than 100% of the JEE(Advanced) syllabus and questions. This is all because the faculties teach you in such an effective manner. MIITJEE is the best as it provides the perfect environment, healthy competition between students and eminent teachers.",
  },
  {
    name: "RADHIKA CHOUDHARY",
    achievement: "AIR-184, IIT JEE 2013",
    content: "I dedicate my success to all my parents and all the faculty members. They have done a lot of hard work on us. For clearing JEE, just make sure that you are very attentive during each class, after reaching your room you should revise the whole class notes thoroughly, complete all of your homework with full dedication, clear away all your doubts even if they are minute. After each test ponder over your mistakes and take guidance from the faculties.",
  },
  {
    name: "SANNY KUMAR",
    achievement: "AIR-15, IIT JEE 2012",
    content: "It is not only the rank but also the journey which matters to me. My two years at MIITJEE were really adventurous and completely transformed me. It was the enormous efforts put in by my teachers here that brought the result I got. This two year preparation of JEE was tough, challenging and filled with lots of obstacles but the support that I received from my parents and my teachers at MIITJEE actually made it possible.",
  },
  {
    name: "AMITABH SARASWATI",
    achievement: "AIR-19, IIT JEE 2011",
    content: "My journey with MIITJEE started two years ago. It has been the most amazing experience studying at MIITJEE. I gained a lot of experience like how to cope up with different situations in life. My biggest supports have been my parents and teachers at MIITJEE. Their guidance and motivation have been the true back bone to my success in exam. I was highly satisfied with the study material provided here and the faculty.",
  },
  {
    name: "NIRAJ KACHHAP",
    achievement: "AIR-55, IIT JEE 2010",
    content: "I am extremely happy about my success. I have really worked hard in these 3 years and finally got the fruit of my hard work. My parents supported me throughout and MIITJEE also guided me through its study material and tests. The faculty members over here are highly experienced. My advice to all the students is work hard consistently.",
  },
  {
    name: "GOPINATH",
    achievement: "AIR-96, IIT JEE 2009",
    content: "I am very proud and happy about my rank. I feel the contribution of everyone has really paid off. I want to thank MIITJEE for all the support they gave me. I was a very average student till class 10th. But the teaching methodology at MIITJEE helped me in gaining confidence. My mantra of success was to be attentive in the class and grasp whatever was taught.",
  },
  {
    name: "SHISHIR",
    achievement: "AIR-88, IIT JEE 2008",
    content: "My preparation at MIITJEE infused confidence in me from the very first day. Today, after achieving success in JEE - Advanced exam, I give full credit of my success to my family and my teachers. The dedicated faculty team here well organised study material and accurate test taking pattern gave me a sound preparation before taking the exam. Daily doubt clearance sessions were vital for revision of previously taught chapters.",
  },
  {
    name: "SAMINTINJAY KRISHNA",
    achievement: "AIR-27, IIT JEE 2007",
    content: "My preparation at MIITJEE infused me with confidence right from the very first day, the confidence of studying in one of the best institute for JEE preparation. I have been a regular classroom student of MIITJEE. Academics, faculty, study material and even the emotional bonding between faculty and student keeps you motivated and helps you build a belief in yourself. I would suggest all my friends preparing for JEE that you should enjoy your studies.",
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <PageHero
        title="Success"
        highlight="Stories"
        description="Inspiring journeys of our students who achieved their dreams with MIITJEE."
      />

      <div className="container mx-auto px-4 max-w-7xl py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORIES.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="w-10 h-10 text-brand-yellow-bright/40 absolute top-6 right-6 group-hover:text-brand-yellow-bright transition-colors" />
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-blue-dark font-poppins">{story.name}</h3>
                <p className="text-brand-yellow-bright font-bold mt-1 text-sm">{story.achievement}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed italic relative z-10 flex-grow">
                "{story.content}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
